import express from 'express';
import path from 'path';
import cors from 'cors';

// controller imports
import authentication from '../controllers/authentication';
import wallets from '../controllers/wallets';

const router : express.Router = express.Router();

// *** authentication routes ***

// signup 
router.post('/signup', authentication.signup, authentication.setCookie, (req, res) => {
    console.log('successfully created account: ', req.body.username)
    res.status(200).json({ message: 'successfully created account' })
});

// login
router.post('/login', authentication.login, authentication.setCookie, (req, res) => {
    console.log('successfully logged in user: ', req.body.username);
    res.status(200).json({ message: 'successfully logged in' })
});

// logout 

// *** dashboard routes ***

// add wallet
router.post('/postwallets', wallets.addWallet, (req, res) => {
    res.status(200).json({ message: 'wallet added' })
})

// get addresses

export default router;