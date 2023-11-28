import { Request, Response, NextFunction } from 'express';
import db from '../schemas/connection';
import bcrypt from 'bcryptjs';

interface AuthenticationMiddleware {
    signup: (
      req: Request,
      res: Response,
      next: NextFunction
    ) => Promise<void>;
    login: (
        
      req: Request,
      res: Response,
      next: NextFunction
    ) => Promise<void>;
}

const authentication : AuthenticationMiddleware = {

    async signup (req: Request, res: Response, next: NextFunction) {
    
        try {
            const { username, email, password } = req.body;
            const hashedPassword = bcrypt.hashSync(password, 10);
            const query = 'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING user_id';
            const values = [username, email, hashedPassword];
            const result = await db.query(query, values, null);
            const user_id = result.rows[0].user_id;
            res.locals.user_id = user_id;
            res.locals.username = username;
            return next();
        }
        catch (error) {
            return next({
                log: error,
                status: 400,
                message: {error: 'error creating user'}
            })
        }
    },

    async login (req: Request, res: Response, next: NextFunction) {
    
        try {
            const { username, password } = req.body;
            const query = 'SELECT password FROM users WHERE username = $1';
            const value = [username];
            const result = await db.query(query, value, null);
    
            if (result.rows.length === 0) {
                return next({
                    status: 401, 
                    message: 'user does not exist'
                })
            };
    
            const hashedPassword = result.rows[0].password; 
            const passwordsMatch = await bcrypt.compare(password, hashedPassword);
    
            if (passwordsMatch){
                const queryId = 'SELECT user_id FROM users WHERE username = $1';
                const resultId = await db.query(queryId, value, null);
                const user_id = resultId.rows[0].user_id; 
                res.locals.user_id = user_id;
                res.locals.username = username;
                return next();
            }
        }
        catch (error) {
            return next({
                log: error,
                status: 400,
                message: {error: 'error verifying user'}
            })
        }
    },
};

export default authentication;