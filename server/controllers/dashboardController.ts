import { Request, Response, NextFunction } from 'express';
import db from '../schemas/connection';

interface DashboardMiddleware {
  addAddress: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<void>;
}

const dashboardController: DashboardMiddleware = {
  async addAddress(req, res, next) {
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
};

export default dashboardController;
