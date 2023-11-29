import express from 'express';
import path from 'path';
import cors from 'cors';
import session from 'express-session';
import connectPgSimple from 'connect-pg-simple';
import pg from 'pg';
import cookieParser from 'cookie-parser';
import * as Cookies from 'js-cookie';

import router from './routes/routes';

const PORT = 3000;

require('dotenv').config();

const app = express();

const allowedOrigins = 'http://localhost:8080';

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type'], 
}));

const secret = 'mysecret'; // Replace 'mysecret' with your actual secret

// Use cookie-parser middleware with the provided secret
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// interface MySession extends SessionData {
//     user: { id: number, username: string }; // Define the structure of your 'user' property
// }

// const pgSession = connectPgSimple(session);

// const sessionConfig: session.SessionOptions = {
//     store: new pgSession({
//         conObject: {
//             connectionString: 'postgres://xfaoxtit:NGVrQ0YptifNP1izte1y4-qJVfUbU65z@berry.db.elephantsql.com/xfaoxtit',
//             pg: pg,
//         },
//     }),
//     secret: 'secret',
//     saveUninitialized: false,
//     resave: false,
//     cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 },
// };

// app.use(session(sessionConfig));


// use all routes in routes folder
app.use('/api', router);

app.use(express.static(path.join(__dirname, 'dist')));

app.get("/", (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, "dist", "index.html"));
});


// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('404 page not found'));



// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
      });

module.exports = app;