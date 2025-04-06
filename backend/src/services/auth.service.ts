import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../config/db';
import { RegisterDto } from '../models/dtos/register.dto';
import UserRepository from '../repositories/user.repository';
import { User } from '../models/entities/user.entity';
import { LoginDto } from '../models/dtos/login.dto';

const JWT_SECRET: string = process.env.JWT_SECRET || '';
const JWT_EXPIRATION: string = process.env.JWT_EXPIRATION || '1h';

export const registerUser = async (user: RegisterDto) => {
    if (!JWT_SECRET) throw new Error("JWT secret is not defined");
    
    const { firstName, lastName, email, password } = user;
    
    validateFields(firstName, lastName, email, password);
    
    const existingUser = await UserRepository.getByEmail(email);
    
    if (existingUser) throw new Error("User already exists.");
    
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser : User = {
        uniqueId: crypto.randomUUID(),
        firstName,
        lastName,
        email,
        password: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
        createdBy: "system",
        updatedBy: "system",
        isArchived: false,
        isActive: true,
    };

    UserRepository.create(newUser);

    return { success: true }
}

export const loginUser = async ({ email, password }: LoginDto) => {
    if (!JWT_SECRET) throw new Error("JWT secret is not defined");

    const user = await UserRepository.getByEmail(email);

    if (!user) throw new Error("User not found");

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) throw new Error("Invalid password");

    const token = jwt.sign({ userId: user.uniqueId, email: user.email }, JWT_SECRET, { expiresIn: '1h' });

    return { token };
}

function validateFields(firstName: string, lastName: string, email: string, password: string) {
    const errors: string[] = [];
    if (!firstName) errors.push("First name is required");
    if (!lastName) errors.push("Last name is required");
    if (!email) errors.push("Email is required");
    if (!password) errors.push("Password is required");
    if (errors.length > 0) throw new Error(errors.join(", "));
}
