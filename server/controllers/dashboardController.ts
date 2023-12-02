import { Request, Response, NextFunction } from 'express';
import db from '../schemas/connection';

interface DashboardMiddleware {
  addWallet: (req: Request, res: Response, next: NextFunction) => Promise<void>;

  deleteWallet: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<void>;

  getWallet: (req: Request, res: Response, next: NextFunction) => Promise<void>;
  getWalletData: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}

const dashboardController: DashboardMiddleware = {
  async addWallet(req, res, next) {
    const wallet_address = req.body.wallet_address;
    const userId = req.cookies.token; // user_id will need to be stored in res.locals for this to work

    try {
      // --- need to cover an edge case if the address was already set by the user ---
      // sql query to check if the current user and the inputted wallet address is already in the addresses table
      // if that address exists
      // return a status and message that the address already exists

      const addressValues = [userId, wallet_address];
      const insertAddressQuery =
        'INSERT INTO addresses (user_id, wallet_address) VALUES ($1, $2) RETURNING address_id';

      const insertAddressResult = await db.query(
        insertAddressQuery,
        addressValues,
        null
      );

      // double check if the address_id and eth address have been set correctly
      const newAddressId = insertAddressResult.rows[0].address_id;

      res.locals.address_id = newAddressId;
      res.locals.eth_address = wallet_address;
      res.locals.message = 'Address added successfully.'

      return next();

      // res.status(201).json({
      //   address_id: newAddressId,
      //   eth_address: wallet_address,
      //   message: 'Address added successfully.',
      // });

      // console.log(
      //   `Successfully added the following ETH address: ${wallet_address} to the following user ${userId}.`
      // );
    } catch (error) {
      next({
        log: 'Error in dashboardController.addAddress: ' + error,
        message: {
          err: 'An error occurred while attempting to add the Ethereum address.',
        },
      });
    }
  },

  async deleteWallet(req: Request, res: Response, next: NextFunction) {
    const userId = req.cookies.token;
    const addressId = req.body.wallet_address;

    try {


      // this checks if the address being deleted belongs to the current user
      const checkAddressQuery =
        'SELECT 1 FROM addresses WHERE user_id = $1 AND wallet_address = $2'; // checks if a record in the db exists that matches the user_id and address_id w/o retrieving specific data

      const checkResult = await db.query(
        checkAddressQuery,
        [userId, addressId],
        null
      );

      // if the address does not exist for this user, return a msg
      if (checkResult.rows.length === 0) {
        res.status(404).json({ message: 'Address not found for this user.' });
      }

      // if the address exists for this user, delete it
      const deleteQuery = 'DELETE FROM addresses WHERE wallet_address = $1';
      await db.query(deleteQuery, [addressId], null);
      return next();
      // res.status(200).json({ message: 'Address successfully deleted.' });
    } catch (error) {
      next({
        log: `Error in dashboardController.deleteAddress: ${error}`,
        message: {
          err: 'An error occurred while attempting to delete the address.',
        },
      });
    }
  },

  async getWallet(req, res, next) {
    const userId = req.cookies.token;

    try {
      // select all wallet addresses for the current user
      const walletQuery =
        'SELECT wallet_address FROM addresses WHERE user_id = $1';

      const walletResult = await db.query(walletQuery, [userId], null);

      // extract the wallet addresses from the query result
      const walletAddresses = walletResult.rows.map(
        (row: any) => row.wallet_address
      );

      res.status(200).json({ walletAddresses });
    } catch (error) {
      next({
        log: `Error in dashboardController.getWallet: ${error}`,
        message: {
          err: 'An error occurred while attempting to retrieve wallet addresses.',
        },
      });
    }
  },

  async getWalletData (req, res, next) {

    try {
      const user_id = req.cookies.token;
      const { wallet_address } = req.body;
  
      const walletQuery = 'SELECT address_id FROM addresses WHERE user_id = $1 AND wallet_address = $2';
      const walletResult = await db.query(walletQuery, [user_id, wallet_address], null);
      const address_id = walletResult.rows[0].address_id;

      const dataQuery = 'SELECT * FROM balances WHERE address_id = $1';
      const dataResult = await db.query(dataQuery, [address_id], null);
      // console.log(dataResult.rows);
      res.locals.walletData = dataResult.rows;
      return next();
    }
    catch (error) {
      next({
        log: `Error in dashboardController.getWalletData: ${error}`,
        message: {
          err: 'An error occurred while attempting to retrieve wallet balances.',
        },
      });
    }
  }
};

export default dashboardController;
