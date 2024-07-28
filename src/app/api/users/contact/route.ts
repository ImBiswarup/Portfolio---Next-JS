import { NextRequest, NextResponse } from 'next/server';
import connectToDB from '@/DB/connection';
import Message from '@/models/message';

export async function POST(req: NextRequest) {
    try {
        await connectToDB(process.env.MONGO_URI!);

        const reqBody = await req.json();
        const { name, email, message } = reqBody;

        if (!name || !email || !message) {
            return NextResponse.json({ msg: "Invalid input" }, { status: 400 });
        }

        const receivedMessage = await Message.create({ name, email, message });

        console.log("Message received and stored:", receivedMessage);

        return NextResponse.json({ msg: "Message sent", message: receivedMessage }, { status: 200 });
    } catch (error) {
        console.error("Error in API:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
