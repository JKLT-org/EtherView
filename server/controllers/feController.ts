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

        
        //DUMMY DATA TO TEST FRONTEND - PLEASE DELETE
        // console.log('im in get wallets');
        // res.locals.wallets = ["test1", "aaa2", "testing3", "oooo4"];
        return next();
    },

    getWalletData: async (req, res, next) =>{
        //add logic to get wallet data based on username cookie and wallet_address


        //DUMMY DATA TO TEST FRONTEND - PLEASE DELETE 
        // console.log('im in getWalletData and this is the selected wallet', req.body);
        // res.locals.walletData = [{timestamp: '01-21-23', eth_balance: '3.84', usd_balance: '6492.43'}];
        return next();
    },

    addWallet: async (req, res, next) =>{
        //add logic to add wallet based on username cookie and req.body
        //this needs to return an updated array of wallet_address


        //DUMMY DATA TO TEST FRONTEND - PLEASE DELETE
        // console.log('im in addWallet and this is the address', req.body);
        // let oldAddress = ["test1", "aaa2", "testing3", "oooo4"];
        // oldAddress.push(req.body.wallet_address);
        // res.locals.newAddress = oldAddress
        return next();
    },

    deleteWallet: async (req, res, next) =>{
        //add logic to delete wallet based on username cookie and req.body
        //this needs to return an updated array of wallet_address


        //DUMMY DATA TO TEST FRONTEND - PLEASE DELETE
        // console.log('im in deleteWallet and will delete this', req.body)
        // let oldAddress = ["test1", "aaa2", "testing3", "oooo4"];
        // for(let i=0; i<oldAddress.length; i++){
        //     if(req.body.wallet_address===oldAddress[i]){
        //         oldAddress.splice(i, 1);
        //         res.locals.newAddress = oldAddress
        //         return next();
        //     }
        // }
        return next();
    }
};


export default feController;