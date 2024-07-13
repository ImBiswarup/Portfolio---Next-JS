import { NextRequest, NextResponse } from 'next/server';
import connectToDB from '@/DB/connection';
import User from '@/models/user';
import bcrypt from "bcryptjs"
export async function POST(req: NextRequest) {
    try {
        await connectToDB(process.env.MONGO_URI!);

        const reqBody = await req.json();
        const { name, email, password } = reqBody;

        console.log("Received data:", { name, email, password });

        if (!name || !email || !password) {
            return NextResponse.json({ error: 'Name, email, and password are required' }, { status: 400 });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ error: 'User already exists' }, { status: 409 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

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