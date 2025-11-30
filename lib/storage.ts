import fs from 'fs';
import path from 'path';
import { promisify } from 'util';

const writeFile = promisify(fs.writeFile);
const readdir = promisify(fs.readdir);
const unlink = promisify(fs.unlink);
const readFile = promisify(fs.readFile);

const ICONS_DIR = path.join(process.cwd(), 'public/icons');

export interface Storage {
    list(): Promise<string[]>;
    upload(filename: string, content: string): Promise<void>;
    delete(filename: string): Promise<void>;
}

class LocalStorage implements Storage {
    constructor() {
        if (!fs.existsSync(ICONS_DIR)) {
            fs.mkdirSync(ICONS_DIR, { recursive: true });
        }
    }

    async list(): Promise<string[]> {
        if (!fs.existsSync(ICONS_DIR)) return [];
        const files = await readdir(ICONS_DIR);
        return files.filter((file) => file.endsWith('.svg'));
    }

    async upload(filename: string, content: string): Promise<void> {
        await writeFile(path.join(ICONS_DIR, filename), content);
    }

    async delete(filename: string): Promise<void> {
        const filepath = path.join(ICONS_DIR, filename);
        if (fs.existsSync(filepath)) {
            await unlink(filepath);
        }
    }
}

class GitHubStorage implements Storage {
    private token: string;
    private owner: string;
    private repo: string;
    private branch: string;

    constructor(token: string, owner: string, repo: string, branch: string = 'main') {
        this.token = token;
        this.owner = owner;
        this.repo = repo;
        this.branch = branch;
    }

    private async request(method: string, path: string, body?: any) {
        const headers = {
            Authorization: `Bearer ${this.token}`,
            'Content-Type': 'application/json',
            'User-Agent': 'SVG-Icon-Manager',
        };

        const res = await fetch(`https://api.github.com/repos/${this.owner}/${this.repo}/contents/${path}`, {
            method,
            headers,
            body: body ? JSON.stringify(body) : undefined,
            cache: 'no-store',
        });

        if (!res.ok && res.status !== 404) {
            const error = await res.json().catch(() => ({}));
            throw new Error(`GitHub API Error: ${res.status} ${JSON.stringify(error)}`);
        }
        return res;
    }

    async list(): Promise<string[]> {
        const res = await this.request('GET', 'public/icons?ref=' + this.branch);
        if (res.status === 404) return [];

        const data = await res.json();
        if (!Array.isArray(data)) return [];

        return data
            .filter((item: any) => item.name.endsWith('.svg'))
            .map((item: any) => item.name);
    }

    async upload(filename: string, content: string): Promise<void> {
        const path = `public/icons/${filename}`;

        // Check if file exists to get SHA (needed for update)
        const checkRes = await this.request('GET', path + '?ref=' + this.branch);
        let sha: string | undefined;

        if (checkRes.ok) {
            const data = await checkRes.json();
            sha = data.sha;
        }

        const body = {
            message: `Upload icon: ${filename}`,
            content: Buffer.from(content).toString('base64'),
            branch: this.branch,
            sha,
        };

        const res = await this.request('PUT', path, body);
        if (!res.ok) {
            throw new Error('Failed to upload to GitHub');
        }
    }

    async delete(filename: string): Promise<void> {
        const path = `public/icons/${filename}`;

        // Get SHA first
        const checkRes = await this.request('GET', path + '?ref=' + this.branch);
        if (!checkRes.ok) return; // Already gone

        const data = await checkRes.json();

        const body = {
            message: `Delete icon: ${filename}`,
            sha: data.sha,
            branch: this.branch,
        };

        await this.request('DELETE', path, body);
    }
}

export function getStorage(): Storage {
    const token = process.env.GITHUB_TOKEN;
    const repo = process.env.GITHUB_REPO; // format: owner/repo

    if (token && repo) {
        const [owner, repoName] = repo.split('/');
        return new GitHubStorage(token, owner, repoName, process.env.GITHUB_BRANCH || 'main');
    }

    return new LocalStorage();
}
