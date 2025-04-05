import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../db/db';

const JWT_SECRET = process.env.JWT_SECRET || "secret";

export const registerUser = async ({ firstName, lastName, email, password }: { firstName: string, lastName: string, email: string, password: string }) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await db.oneOrNone("SELECT * FROM users WHERE email = $1", [email]);

    if (user) throw new Error("User already exists");

    await db.none("INSERT INTO users (firstName, lastName, email, password) VALUES ($1, $2, $3, $4)",
        [firstName, lastName, email, hashedPassword]
    );

    return { success: true }
}

export const loginUser = async ({ email, password }: any) => {
    const user = await db.oneOrNone("SELECT * FROM users WHERE email = $1", [email]);

    if (!user) throw new Error("User not found");

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) throw new Error("Invalid password");

    const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });

    return { token };
}