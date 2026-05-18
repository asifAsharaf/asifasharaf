# asifasharaf.com

Asif Asharaf's personal portfolio site. Built with [Astro](https://astro.build), styled with Tailwind CSS, managed via [Keystatic CMS](https://keystatic.com), deployed on Cloudflare Pages.

---

## Local development

```bash
npm install
npm run dev
```

The site runs at `http://localhost:4321`.  
The Keystatic CMS runs at `http://localhost:4321/keystatic` (local storage mode by default — no auth needed in dev).

---

## Content management

All content lives in `src/content/`:

| Collection | Path | Purpose |
|---|---|---|
| Work | `src/content/work/` | Portfolio case studies |
| Writing | `src/content/writing/` | Blog posts |
| People | `src/content/people/` | Design friends directory |

Add and edit content through the Keystatic admin at `/keystatic`, or edit the `.mdx` files directly.

---

## Deploying to Cloudflare Pages

### 1. Push this repo to GitHub

```bash
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### 2. Create a GitHub OAuth App

Go to **GitHub → Settings → Developer settings → OAuth Apps → New OAuth App**:

| Field | Value |
|---|---|
| Application name | Antigravity CMS |
| Homepage URL | `https://yourdomain.com` |
| Authorization callback URL | `https://yourdomain.com/api/keystatic/github/oauth/callback` |

Save the **Client ID** and generate a **Client Secret**.

### 3. Connect to Cloudflare Pages

1. Go to [Cloudflare Pages](https://pages.cloudflare.com/) → Create project → Connect to Git
2. Select this repo
3. Set build settings:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
   - **Node version:** `18` (add `NODE_VERSION = 18` to env vars if needed)

### 4. Set environment variables in Cloudflare Pages

In **Settings → Environment variables**, add:

```
KEYSTATIC_GITHUB_CLIENT_ID     = your_github_oauth_client_id
KEYSTATIC_GITHUB_CLIENT_SECRET = your_github_oauth_client_secret
KEYSTATIC_SECRET               = a_random_32_char_secret_string
```

Generate `KEYSTATIC_SECRET` with: `openssl rand -base64 32`

### 5. Switch Keystatic to GitHub storage mode

In `keystatic.config.ts`, change the storage config:

```ts
storage: {
  kind: 'github',
  repo: {
    owner: 'YOUR_GITHUB_USERNAME',
    name: 'YOUR_REPO_NAME',
  },
},
```

### 6. Custom domain DNS

In Cloudflare DNS, add a CNAME record:

| Type | Name | Target |
|---|---|---|
| CNAME | `@` (or `www`) | `your-project.pages.dev` |

---

## Personalising the site

Search for these placeholder values and replace them:

```
hello@asifasharaf.com     → your actual email
GITHUB_USERNAME           → your GitHub username
REPO_NAME                 → your repo name
```

Update the About page content in `src/pages/about.astro`, or configure it through the Keystatic CMS once the `about` singleton is wired up.

---

## Tech stack

- **Framework:** Astro 5 (hybrid SSR/SSG)
- **Styling:** Tailwind CSS 3
- **CMS:** Keystatic (local in dev, GitHub in production)
- **Adapter:** @astrojs/cloudflare
- **Fonts:** DM Serif Display + Inter via Google Fonts
