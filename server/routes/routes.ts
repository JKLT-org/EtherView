import express from 'express';
import path from 'path';
import cors from 'cors';
import axios from 'axios'

// controller imports
import authentication from '../controllers/authentication';
import dashboard from '../controllers/dashboardController';
// import wallets from '../controllers/wallets';

const router: express.Router = express.Router();

// *** authentication routes ***

// signup
router.post(
  '/signup',
  authentication.signup,
  authentication.setCookie,
  (req, res) => {
    console.log('successfully created account: ', req.body.username);
    res.status(200).json({ message: 'successfully created account' });
  }
);

// login
router.post(
  '/login',
  authentication.login,
  authentication.setCookie,
  (req, res) => {
    console.log('successfully logged in user: ', req.body.username);
    res.status(200).json({ message: 'successfully logged in' });
  }
);

router.post('/proxy', async (req, res) => {
  try {
    console.log(req.body.url)
      const response = await axios.get(`https://api.etherscan.io${req.body.url}`);
      res.json(response.data);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message); // No TypeScript error
    }
  }
});

// logout

// *** dashboard routes ***

// add wallet
// router.post('/postwallets', wallets.addWallet, (req, res) => {
//   res.status(200).json({ message: 'wallet added' });
// });


// get addresses
router.post('/getAddress', dashboard.getWallet);

export default router;
