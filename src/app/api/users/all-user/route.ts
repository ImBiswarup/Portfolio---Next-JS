import connectToDB from '@/DB/connection';
import User from '@/models/user';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        await connectToDB(process.env.MONGO_URI!);

        const users = await User.find({});

        return NextResponse.json({ users: users },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error fetching users:", error);

        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
