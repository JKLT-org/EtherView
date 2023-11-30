import express from 'express';
import feController from '../controllers/feController';

const router = express.Router();


//getWallets (GET)
router.get('/getWallets',feController.getWallets, (req, res) =>{
    console.log('im in get wallets');
});

//getWalletData (this is a POST because we need wallet_address in body)
router.post('/getWalletData',feController.getWalletData, (req, res) => {
    console.log('im in getWalletData and this is the selected wallet', req.body)
});

//addWallet (POST)
router.post('/addWallet',feController.addWallet, (req, res)=>{
    console.log('im in addWallet and this is the address', req.body)
})

//deleteWallet (DELETE)
router.post('/deleteWallet', feController.deleteWallet, (req, res)=>{
    console.log('im in deleteWallet and will delete this', req.body)
})

export default router