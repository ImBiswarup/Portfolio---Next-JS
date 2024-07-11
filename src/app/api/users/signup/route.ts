import { NextRequest, NextResponse } from 'next/server';
import connectToDB from '@/DB/connection';
import User from '@/models/user';
import bcrypt from "bcryptjs"
export async function POST(req: NextRequest) {
    try {
        // Connect to the database
        await connectToDB(process.env.MONGO_URI!);

        // Parse the request body
        const reqBody = await req.json();
        const { name, email, password } = reqBody;

        console.log("Received data:", { name, email, password });

        // Validate input
        if (!name || !email || !password) {
            return NextResponse.json({ error: 'Name, email, and password are required' }, { status: 400 });
        }

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ error: 'User already exists' }, { status: 409 });
        }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        // Remove password from response
        const userResponse = {
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            createdAt: newUser.createdAt,
            updatedAt: newUser.updatedAt
        };

        return NextResponse.json({ msg: 'User registered successfully', user: userResponse });
    } catch (error: any) {
        console.error("Error in API:", error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}