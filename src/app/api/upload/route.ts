import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from 'next/server';

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

// Helper: Promisify the upload_stream function
function streamUpload(buffer: Buffer): Promise<{ secure_url: string }> {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: 'portfolio' },
      (error, result) => {
        if (error || !result) return reject(error);
        resolve(result);
      }
    );
    stream.end(buffer);
  });
}

// POST handler for image upload
export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('image') as File;

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const result = await streamUpload(buffer);

    return NextResponse.json({ url: result.secure_url });
  } catch (err) {
    console.error('Upload error:', err);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
