import type { VercelRequest, VercelResponse } from '@vercel/node';
import fetch from 'node-fetch';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_OWNER = process.env.GITHUB_OWNER || 'poposnail61';
const GITHUB_REPO = process.env.GITHUB_REPO || 'minim-icon';
const BRANCH = 'main';

async function githubRequest(path: string) {
    if (!GITHUB_TOKEN) throw new Error('GITHUB_TOKEN is not set');

    const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${path}`;
    const headers = {
        'Authorization': `Bearer ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Minim-Design-System'
    };

    const res = await fetch(url, { headers });
    if (!res.ok) {
        throw new Error(`GitHub API Error: ${res.statusText}`);
    }
    return res.json();
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    try {
        if (!GITHUB_TOKEN) {
            // Fallback for demo/local if no token (return empty or mock?)
            // For now, return error to prompt configuration
            return res.status(500).json({ error: 'GITHUB_TOKEN not configured' });
        }

        // 1. Fetch Icons
        let iconsData: any[] = [];
        try {
            iconsData = await githubRequest('public/icons');
        } catch (error: any) {
            console.error('Failed to fetch icons:', error);
            // Verify if error is 404
        }

        // 2. Fetch Tags
        let tagsMap: Record<string, string[]> = {};
        try {
            const tagsRes: any = await githubRequest('data/tags.json');
            if (tagsRes.content) {
                const content = Buffer.from(tagsRes.content, 'base64').toString('utf-8');
                tagsMap = JSON.parse(content);
            }
        } catch (error) {
            console.warn('Failed to fetch tags.json');
        }

        // 3. Merge
        const icons = Array.isArray(iconsData)
            ? iconsData
                .filter((file: any) => file.name.endsWith('.svg'))
                .map((file: any) => {
                    const name = file.name.replace('.svg', '');
                    return {
                        name: name,
                        // Use jsDelivr for faster CDN delivery instead of raw.githubusercontent?
                        // Or use raw.githubusercontent as before.
                        // Let's stick to raw for consistency with reference, or modify if needed.
                        url: `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/${BRANCH}/public/icons/${file.name}`,
                        tags: tagsMap[name] || []
                    };
                })
            : [];

        // Cache control for performance (e.g., 60 seconds)
        res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
        return res.status(200).json({ icons });
    } catch (error: any) {
        console.error('API Error:', error);
        return res.status(500).json({ error: error.message });
    }
}
