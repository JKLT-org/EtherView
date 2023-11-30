import { Request, Response, NextFunction } from 'express';
import db from '../schemas/connection';

interface WalletsMiddleware {
    addWallet: (
      req: Request,
      res: Response,
      next: NextFunction
    ) => Promise<void>;
    deleteWallet: (
      req: Request,
      res: Response,
      next: NextFunction
    ) => Promise<void>;
}

const wallets : WalletsMiddleware = {

    async addWallet (req: Request, res: Response, next: NextFunction){

        try {
            const { address } = req.body;
            const user = req.cookies.token;
            console.log(user);
            console.log(req.cookies);
            const query = 'INSERT INTO addresses (user_id, wallet_address) VALUES ($1, $2) RETURNING wallet_address';
            const values = [user, address];
            const result = await db.query(query, values, null);
            const wallet_address = result.rows[0].wallet_address;
            res.locals.wallet_address = wallet_address;
            return next();
        }
        catch (error) {
            return next({
                log: error,
                status: 400,
                message: {error: 'error adding wallet'}
            })
        }

    },

    async deleteWallet (req: Request, res: Response, next: NextFunction){

    }
}

export default wallets;