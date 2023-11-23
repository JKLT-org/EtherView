import express from 'express';
import path from 'path';
import cors from 'cors';

// controller imports
import authentication from '../controllers/authentication';

const router : express.Router = express.Router();

// *** authentication routes ***

// signup 
router.post('/signup', authentication.signup, (req, res) => {
    console.log('successfully created account: ', req.body.username)
    res.status(200).json({ message: 'successfully created account' })
});

// login
router.post('/login', authentication.login, (req, res) => {
    console.log('successfully logged in user: ', req.body.username);
    res.status(200).json({ message: 'successfully logged in' })
});

// logout 

// *** dashboard routes ***

// add address

// get addresses

export default router;