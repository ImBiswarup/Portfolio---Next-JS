// create a get route to fetch all projects
import { NextResponse } from 'next/server'; 
import connectToDB from '@/DB/connection';
import Project from '@/models/projects';

export async function GET(req: Request) {
    try {
        await connectToDB(process.env.MONGO_URI!);
        const projects = await Project.find();
        return NextResponse.json({ projects }, { status: 200 }); 
    } catch (error) {
        console.error('Error fetching projects:', error);
        return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 }); 
    }
}