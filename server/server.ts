import express from 'express';
import path from 'path';
import cors from 'cors';
import session from 'express-session';
import cookieParser from 'cookie-parser';

import router from './routes/routes';
import feRoutes from './routes/feRoutes';

const PORT = 3000;
require('dotenv').config();

const app = express();

app.use(cors());
// app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const sessionConfig = {
//   store: new (require('connect-pg-simple')(session))({
//     conString: 'postgres://bwkdjkqj:Mc0GUvXKF9M5wNiMDUYKyHvQoDojVdYZ@lallah.db.elephantsql.com/bwkdjkqj'
//   }),
//   secret: 'secret',
//   saveUnitialized: false,
//   resave: false,  
//   cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 },
//   user_id: "",
//   authentication: false
// }

// app.use(session(sessionConfig))

// use all routes in routes folder
app.use('/api', router);
app.use('/fe', feRoutes);


app.use(express.static(path.join(__dirname, 'dist')));

// app.get("/", (req, res) => {
//   return res.status(200).sendFile(path.resolve(__dirname, "./src/index.html"));
// });

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