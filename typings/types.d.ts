import { SessionData } from 'express-session';

declare module 'express-session' {
    interface SessionData {
        user_id?: string; // Ensure it matches how it's being used in your code
        // Add other custom session properties if needed
    }
}


