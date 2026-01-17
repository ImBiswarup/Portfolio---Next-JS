// create a post route to add a project
import { NextResponse } from 'next/server';
import connectToDB from '@/DB/connection';
import Project from '@/models/projects';

export async function POST(req: Request) {
    try {
        await connectToDB(process.env.MONGO_URI!);

        const reqBody = await req.json();
        const { id, heading, desc, techStack, gitRepo, hostedUrl, url } = reqBody;

        const project = new Project({ id, heading, desc, techStack, gitRepo, hostedUrl, url });
        await project.save();

        return NextResponse.json({ message: 'Project added successfully' }, { status: 201 });
    } catch (error) {
        console.error('Error adding project:', error);
        return NextResponse.json({ error: 'Failed to add project' }, { status: 500 });
    }
}
export const config = {
    api: {
        bodyParser: {
            sizeLimit: '4mb', 
        },
    },
};