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
}

const dashboardController: DashboardMiddleware = {
  async addWallet(req, res, next) {
    const ethAddress = req.body.eth_address;
    const userId = res.locals.user_id; // user_id will need to be stored in res.locals for this to work

    try {
      // --- need to cover an edge case if the address was already set by the user ---
      // sql query to check if the current user and the inputted wallet address is already in the addresses table
      // if that address exists
      // return a status and message that the address already exists

      const addressValues = [userId, ethAddress];
      const insertAddressQuery =
        'INSERT INTO addresses (user_id, wallet_address) VALUES ($1, $2) RETURNING address_id';

      const insertAddressResult = await db.query(
        insertAddressQuery,
        addressValues,
        null
      );

      // double check if the address_id and eth address have been set correctly
      const newAddressId = insertAddressResult.rows[0].address_id;

      res.status(201).json({
        address_id: newAddressId,
        eth_address: ethAddress,
        message: 'Address added successfully.',
      });

      console.log(
        `Successfully added the following ETH address: ${ethAddress} to the following user ${userId}.`
      );
    } catch (error) {
      next({
        log: 'Error in dashboardController.addAddress: ' + error,
        message: {
          err: 'An error occurred while attempting to add the Ethereum address.',
        },
      });
    }
  },

  async deleteWallet(req, res, next) {
    const userId = res.locals.user_id;
    const addressId = req.params.addressId;

    try {
      // this checks if the address being deleted belongs to the current user
      const checkAddressQuery =
        'SELECT 1 FROM addresses WHERE user_id = $1 AND address_id = $2'; // checks if a record in the db exists that matches the user_id and address_id w/o retrieving specific data

      const checkResult = await db.query(
        checkAddressQuery,
        [userId, addressId],
        null
      );

      // if the address does not exist for this user, return a msg
      if (checkResult.rows.length === 0) {
        return res
          .status(404)
          .json({ message: 'Address not found for this user.' });
      }

      // if the address exists for this user, delete it
      const deleteQuery = 'DELETE FROM addresses WHERE address_id = $1';
      await db.query(deleteQuery, [addressId], null);

      res.status(200).json({ message: 'Address successfully deleted.' });
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
    const userId = res.locals.user_id;

    try {
      // select all wallet addresses for the current user
      const walletQuery =
        'SELECT wallet_address FROM addresses WHERE user_id = $1';

      const walletResult = await db.query(walletQuery, [userId], null);

      // Extract the wallet addresses from the query result
      const walletAddresses = walletResult.rows.map(
        (row: any) => row.wallet_address
      );

      res.status(200).json({ wallet_addresses: walletAddresses });
    } catch (error) {
      // Pass any errors to the error handling middleware
      next({
        log: `Error in dashboardController.getWallet: ${error}`,
        message: {
          err: 'An error occurred while attempting to retrieve wallet addresses.',
        },
      });
    }
  },
};

export default dashboardController;
