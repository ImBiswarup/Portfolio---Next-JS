import { NextRequest, NextResponse } from 'next/server';
import connectToDB from '@/DB/connection';
import User from '@/models/user';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function POST(req: NextRequest) {
    try {
        await connectToDB(process.env.MONGO_URI!);

        const reqBody = await req.json();
        const { email, password } = reqBody;

        console.log("Received login request:", { email, password });

        if (!email || !password) {
            return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
        }

        const token = jwt.sign({
            userId: user._id,
            userName: user.name,
            userEmail: user.email,
        }, process.env.JWT_SECRET!, {
            expiresIn: '1h'
        });

        console.log("token : ", token);

        user.token = token;
        await user.save();

        const userResponse = {
            _id: user._id,
            name: user.name,
            email: user.email,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
        };

        const cookieOptions = {
            httpOnly: true,
            maxAge: 3600,
            sameSite: 'strict'
        };

        const response = NextResponse.json({ msg: 'Login successful', user: userResponse });

        if (response) {
            response.headers.append('Set-Cookie', `token=${token}; HttpOnly; Max-Age=${cookieOptions.maxAge}; SameSite=${cookieOptions.sameSite}`);
        }

        return response;
    } catch (error: any) {
        console.error("Error in API:", error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
