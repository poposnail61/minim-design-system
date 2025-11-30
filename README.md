# SVG Icon Manager

A Next.js application that allows you to upload SVG icons and use them as `<i>` tags with full control over `font-size` and `color`.

## Features

- **Upload & Manage**: Drag & drop interface to upload SVGs.
- **Dynamic Styling**: Icons behave like fonts. Change size with `font-size` and color with `color`.
- **GitHub Storage**: (Optional) Store icons directly in your GitHub repository, making it perfect for serverless deployments (Vercel, Netlify).
- **Zero Runtime Dependencies**: Icons are served as CSS masks.

## Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/yourusername/svg-icon-manager.git
cd svg-icon-manager
npm install
```

### 2. Run Locally

```bash
npm run dev
```

Visit `http://localhost:3000`.

## Configuration (GitHub Storage)

By default, icons are stored locally in `public/icons`. This works fine for local development but **will not work** on serverless platforms like Vercel because the filesystem is ephemeral.

To solve this, you can configure the app to store icons in your GitHub repository.

1. Create a Personal Access Token on GitHub with `repo` scope.
2. Copy `env.example` to `.env.local`:
   ```bash
   cp env.example .env.local
   ```
3. Fill in the details:

```env
GITHUB_TOKEN=ghp_your_token_here
GITHUB_REPO=yourusername/your-repo-name
GITHUB_BRANCH=main
```

Now, when you upload an icon, it will be committed to your repository!

## Usage

### In HTML/React

```html
<i class="icon icon-arrow-right"></i>
```

### Styling

```css
.icon-arrow-right {
  font-size: 24px;
  color: #3b82f6; /* Blue */
}
```

## How it Works

The system uses **CSS Masks**.
1. The API generates a dynamic CSS file that defines `.icon-[name]` classes.
2. Each class sets the `mask-image` to the URL of the SVG.
3. The base `.icon` class sets `background-color: currentColor`.
4. This allows the icon to take the color of the text, just like a font icon.
