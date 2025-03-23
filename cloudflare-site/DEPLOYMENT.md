# Deploying Vet Agent to Cloudflare Pages

This guide provides two methods to deploy your Vet Agent site to Cloudflare Pages.

## Option 1: Direct Upload via Cloudflare Dashboard

This method is the most straightforward and requires no additional configuration:

1. Visit the [Cloudflare Pages dashboard](https://dash.cloudflare.com/?to=/:account/pages)
2. Click on **Create application**
3. Select **Pages** → **Upload assets**
4. Enter your project name (e.g., "vet-agent")
5. Drag and drop the entire contents of the `/cloudflare-site` directory or upload the `vet-agent-site.zip` file
6. Click **Deploy**

Your site will be deployed to `vet-agent.pages.dev` (or similar if the name is taken).

## Option 2: Deployment via Wrangler CLI (Recommended for CI/CD)

For automated deployments, use the Wrangler CLI:

### Prerequisites
- Node.js installed (v16.13.0 or later)
- npm or yarn package manager

### Steps

1. Install Wrangler CLI globally:
   ```bash
   npm install -g wrangler
   ```

2. Authenticate with Cloudflare:
   ```bash
   wrangler login
   ```

3. Create a new Pages project:
   ```bash
   wrangler pages project create vet-agent
   ```
   - When prompted, set "vet-agent" as the project name
   - Set "main" as the production branch

4. Deploy your site:
   ```bash
   cd /Users/fourcolors/Projects/1_active/vet-public-site/cloudflare-site
   wrangler pages deploy .
   ```

### Environment Variables (Optional)

If you need to set environment variables for your Pages deployment:

```bash
wrangler pages deployment create --project-name=vet-agent --commit-hash=$(git rev-parse HEAD) --environment-variables API_URL=https://api.example.com
```

## Setting up a Custom Domain

After deployment:

1. Go to the Cloudflare Pages dashboard and select your project
2. Navigate to the **Custom domains** tab
3. Click **Set up a custom domain**
4. Enter your domain (e.g., vetagent.ai)
5. Follow the verification steps to complete the process

## Continuous Deployment with GitHub

For automated deployments from GitHub:

1. Push your project to a GitHub repository
2. In the Cloudflare Pages dashboard, select **Create application**
3. Choose **Connect to Git**
4. Select your repository and follow the configuration steps
5. Set build settings:
   - Build command: (leave empty)
   - Build output directory: ./
6. Click **Save and Deploy**

Each commit to your main branch will trigger an automatic deployment.
