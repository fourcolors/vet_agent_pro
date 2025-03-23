# Vet Agent Landing Page

A minimal landing page for the Vet Agent service, designed for deployment on Cloudflare Pages.

## Project Structure

```
cloudflare-site/
├── css/
│   └── styles.css         # Main stylesheet
├── index.html             # Landing page
├── pages.config.json      # Cloudflare Pages configuration
└── wrangler.toml          # Wrangler configuration
```

## Deployment

This site is configured for deployment on Cloudflare Pages. For detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md).

### Quick Start Deployment

1. **Dashboard Upload (Recommended):**
   - Visit the [Cloudflare Pages dashboard](https://dash.cloudflare.com/?to=/:account/pages)
   - Click **Create application** → **Pages** → **Upload assets**
   - Enter "vet-agent" as the project name
   - Upload the site files
   - Click **Deploy**

2. **Using Wrangler CLI:**
   ```bash
   # Install Wrangler
   npm install -g wrangler
   
   # Login (requires browser access)
   wrangler login
   
   # Deploy
   wrangler pages deploy .
   ```

## Development

To run this site locally:

```bash
# Start a local development server
python -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

## Customization

- Update the app link in `index.html` to point to your actual application URL
- Modify colors in `css/styles.css` by changing the CSS variables at the top of the file
- Add your own logo or imagery to enhance the landing page
