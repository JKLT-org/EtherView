import express from 'express';
import feController from '../controllers/feController';
import dashboardController from '../controllers/dashboardController';

const router = express.Router();


//getWallets (GET)
//RETURNS AN ARRAY OF STRINGS
router.get('/getWallets',dashboardController.getWallet, (req, res) =>{

        //DUMMY DATA TO TEST FRONTEND - PLEASE DELETE
    res.status(200).send(res.locals.wallets);
});

//getWalletData (this is a POST because we need wallet_address in body)
//RETURNS ARRAY OF OBJECTS
router.post('/getWalletData',dashboardController.getWalletData, (req, res) => {

        //DUMMY DATA TO TEST FRONTEND - PLEASE DELETE
    res.status(200).send(res.locals.walletData);
});

//addWallet (POST)
//RETURNS ARRAY OF STRINGS
router.post('/addWallet',dashboardController.addWallet, dashboardController.getWallet, (req, res)=>{

        //DUMMY DATA TO TEST FRONTEND - PLEASE DELETE
    // console.log('this will be sent to frontend', res.locals.newAddress)
    res.status(200).json()
})

//deleteWallet (DELETE)
//RETURNS ARRAY OF STRINGS
router.post('/deleteWallet', dashboardController.deleteWallet, dashboardController.getWallet, (req, res)=>{

        //DUMMY DATA TO TEST FRONTEND - PLEASE DELETE
    // console.log('this will be sent to frontend', res.locals.newAddress)
    // res.status(200).send(res.locals.newAddress)
})

export default router