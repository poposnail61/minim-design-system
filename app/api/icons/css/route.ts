import { NextResponse } from 'next/server';
import { getStorage } from '@/lib/storage';

export async function GET() {
    try {
        const storage = getStorage();
        const svgFiles = await storage.list();

        let css = `
      .icon {
        display: inline-block;
        width: 1em;
        height: 1em;
        background-color: currentColor;
        -webkit-mask-size: contain;
        mask-size: contain;
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
        -webkit-mask-position: center;
        mask-position: center;
      }
    `;

        // Determine base URL for icons
        let baseUrl = '/icons';
        if (process.env.GITHUB_TOKEN && process.env.GITHUB_REPO) {
            const branch = process.env.GITHUB_BRANCH || 'main';
            baseUrl = `https://raw.githubusercontent.com/${process.env.GITHUB_REPO}/${branch}/public/icons`;
        }

        svgFiles.forEach((file) => {
            const name = file.replace('.svg', '');
            const url = `${baseUrl}/${file}`;
            css += `
        .icon-${name} {
          -webkit-mask-image: url('${url}');
          mask-image: url('${url}');
        }
      `;
        });

        return new NextResponse(css, {
            headers: {
                'Content-Type': 'text/css',
                'Cache-Control': 'no-store, max-age=0',
            },
        });
    } catch (error) {
        console.error('CSS Generation Error:', error);
        return new NextResponse('/* Error generating CSS */', {
            status: 500,
            headers: { 'Content-Type': 'text/css' }
        });
    }
}
