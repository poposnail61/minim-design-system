import { NextRequest, NextResponse } from 'next/server';
import { getStorage } from '@/lib/storage';

export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ filename: string }> }
) {
    const filename = (await params).filename;

    try {
        const storage = getStorage();
        await storage.delete(filename);
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete file' }, { status: 500 });
    }
}

export async function PUT(
    request: NextRequest,
    { params }: { params: Promise<{ filename: string }> }
) {
    const filename = (await params).filename;

    try {
        const storage = getStorage();
        const formData = await request.formData();
        const file = formData.get('file') as File;

        // If a file is provided, overwrite the existing one
        if (file) {
            if (file.type !== 'image/svg+xml') {
                return NextResponse.json({ error: 'File must be an SVG' }, { status: 400 });
            }
            const buffer = Buffer.from(await file.arrayBuffer());
            let content = buffer.toString('utf-8');

            // Apply same processing
            content = content.replace(/fill="(?!(none|currentColor))[^"]*"/g, 'fill="currentColor"');
            content = content.replace(/stroke="(?!(none|currentColor))[^"]*"/g, 'stroke="currentColor"');

            await storage.upload(filename, content);
            return NextResponse.json({ success: true });
        }

        // If raw content is provided (e.g. from a code editor in the UI)
        const body = await request.json().catch(() => null);
        if (body && body.content) {
            await storage.upload(filename, body.content);
            return NextResponse.json({ success: true });
        }

        return NextResponse.json({ error: 'No content provided' }, { status: 400 });

    } catch (error) {
        return NextResponse.json({ error: 'Update failed' }, { status: 500 });
    }
}
