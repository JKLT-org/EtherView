import express, { Request, Response, NextFunction } from 'express';

interface FeController {
    getWallets: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getWalletData: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    addWallet: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteWallet: (req: Request, res: Response, next: NextFunction) => Promise<void>;
  }

const feController: FeController = {
    getWallets: async (req, res, next) =>{
        //add logic to get wallets based on username cookie
        return next();
    },

    getWalletData: async (req, res, next) =>{
        //add logic to get wallet data based on username cookie and wallet_address
        return next();
    },

    addWallet: async (req, res, next) =>{
        //add logic to add wallet based on username cookie and req.body
        //this needs to return an updated array of wallet_address
        return next();
    },

    deleteWallet: async (req, res, next) =>{
        //add logic to delete wallet based on username cookie and req.body
        //this needs to return an updated array of wallet_address
        return next();
    }

};


export default feController;