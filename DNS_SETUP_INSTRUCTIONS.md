# DNS Configuration Instructions for mageegroundworksltd.com

## Setting Up Your Custom Domain with GitHub Pages

### Step 1: Configure Your DNS Records

Log into your domain registrar (where you purchased mageegroundworksltd.com) and add the following DNS records:

#### For the root domain (mageegroundworksltd.com):
Add **A records** pointing to GitHub Pages servers:
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

#### For www subdomain (www.mageegroundworksltd.com):
Add a **CNAME record**:
- Name: `www`
- Value: `rowbot1.github.io`

### Step 2: GitHub Repository Settings

1. Go to your repository: https://github.com/rowbot1/mageegroundworks
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Custom domain", enter: `mageegroundworksltd.com`
5. Check "Enforce HTTPS" (may take up to 24 hours to be available)

### Step 3: Verify DNS Propagation

DNS changes can take 24-48 hours to propagate fully. You can check the status using:
- https://dnschecker.org/
- Enter your domain name to verify the records are active

### Step 4: SSL Certificate

GitHub Pages automatically provides a free SSL certificate. Once DNS is verified:
1. The "Enforce HTTPS" option will become available
2. Enable it for secure browsing

### Troubleshooting

**If the site doesn't load:**
- Verify DNS records are correct
- Wait for DNS propagation (up to 48 hours)
- Check GitHub Pages settings
- Ensure CNAME file exists in repository

**If you see a certificate error:**
- Wait for GitHub to generate the SSL certificate (up to 24 hours)
- Clear browser cache
- Try accessing in incognito/private mode

### Important Notes

- Keep the CNAME file in your repository root
- Both `mageegroundworksltd.com` and `www.mageegroundworksltd.com` will work
- Always use HTTPS links in your marketing materials
- The site will remain accessible via the GitHub Pages URL as a backup

### Support

For GitHub Pages issues: https://docs.github.com/en/pages
For DNS issues: Contact your domain registrar's support