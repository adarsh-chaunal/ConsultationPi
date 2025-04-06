import pgPromise from 'pg-promise';
import dotenv from 'dotenv';

dotenv.config();

const postgressPromise = pgPromise();

const db = postgressPromise(process.env.DATABASE_URL as string);

export default db;