import { NextRequest, NextResponse } from 'next/server';
import { getStorage } from '@/lib/storage';

export async function GET() {
  try {
    const storage = getStorage();
    const svgFiles = await storage.list();
    return NextResponse.json({ icons: svgFiles });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to list icons' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    if (file.type !== 'image/svg+xml') {
      return NextResponse.json({ error: 'File must be an SVG' }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    let content = buffer.toString('utf-8');

    // Basic processing: Replace fill/stroke colors with currentColor
    // This is a simple regex approach. For more complex SVGs, a parser might be better,
    // but for this task, regex is usually sufficient for standard icons.
    // We replace hex codes, rgb, and common color names if possible, or just specific attributes.
    // A safer bet for "converting to currentColor" is to replace fill="..." and stroke="..." 
    // where the value is NOT "none".

    content = content.replace(/fill="(?!(none|currentColor))[^"]*"/g, 'fill="currentColor"');
    content = content.replace(/stroke="(?!(none|currentColor))[^"]*"/g, 'stroke="currentColor"');

    // Also ensure width/height are set to 1em or removed to let CSS control it, 
    // but the user specifically asked for <i> tag usage which implies we might use CSS masks 
    // OR inline SVG. The user prompt says: "upload -> convert color -> save".
    // If we use CSS masks, the internal color DOES NOT MATTER.
    // However, if they want to use it as a raw SVG image tag too, currentColor is good.
    // Let's stick to the requested "convert color to currentColor".

    const filename = file.name.replace(/[^a-zA-Z0-9.-]/g, '_'); // Sanitize filename

    const storage = getStorage();
    await storage.upload(filename, content);

    return NextResponse.json({ success: true, filename });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}
