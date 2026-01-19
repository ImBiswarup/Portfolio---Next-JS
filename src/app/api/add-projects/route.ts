import { NextResponse } from "next/server";
import connectToDB from "@/DB/connection";
import Project from "@/models/projects";

export const runtime = "nodejs";

export async function POST(req: Request) {
    try {
        await connectToDB(process.env.MONGO_URI!);

        const body = await req.json();
        const { id, heading, desc, techStack, gitRepo, hostedUrl, url } = body;

        if (!id || !heading || !desc || !techStack || !url) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const project = await Project.create({
            id,
            heading,
            desc,
            techStack,
            gitRepo,
            hostedUrl,
            url,
        });

        return NextResponse.json(
            { message: "Project added successfully", project },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error adding project:", error);
        return NextResponse.json(
            { error: "Failed to add project" },
            { status: 500 }
        );
    }
}
