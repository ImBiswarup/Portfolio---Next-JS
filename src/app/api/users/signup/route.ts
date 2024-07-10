import { NextRequest, NextResponse } from 'next/server';
import connectToDB  from '@/DB/connection';
import User from '@/models/user';


export async function POST(req: NextRequest) {
    await connectToDB(process.env.MONGO_URI!);
    try {
        const reqBody = await req.json();
        const { name, email, password } = reqBody;

        console.log("Received data:", { name, email, password });

        const newUser = await User.create({ name, email, password });

        return NextResponse.json({ msg: 'User registered successfully', user: newUser });
    } catch (error: any) {
        console.error("Error in API:", error);
        return NextResponse.json({ error: 'Error in API' }, { status: 500 });
    }
}
