import express from 'express';
import path from 'path';
import cors from 'cors';

// controller imports
import authentication from '../controllers/authentication';
import dashboard from '../controllers/dashboardController';

const router: express.Router = express.Router();

// *** authentication routes ***

// signup
router.post('/signup', authentication.signup, (req, res) => {
  console.log('successfully created account: ', req.body.username);
  res.status(200).json({ message: 'successfully created account' });
});

// login
router.post('/login', authentication.login, (req, res) => {
  console.log('successfully logged in user: ', req.body.username);
  res.status(200).json({ message: 'successfully logged in' });
});

// logout

// *** dashboard routes ***

// add wallet
router.post('/addAddress', dashboard.addWallet);

// delete wallet
router.post('/deleteAddress', dashboard.deleteWallet);

// get addresses
router.post('/getAddress', dashboard.getWallet);

export default router;
