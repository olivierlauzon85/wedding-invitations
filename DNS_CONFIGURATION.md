# GitHub Pages Custom Domain DNS Configuration

## Required DNS Records for mariagejanieolivier.ca

### For the Apex Domain (mariagejanieolivier.ca):
**A Records** (IPv4):
- Type: A
- Name: @ (or mariagejanieolivier.ca)
- Value: 185.199.108.153
- TTL: 600

- Type: A
- Name: @ (or mariagejanieolivier.ca)
- Value: 185.199.109.153
- TTL: 600

- Type: A
- Name: @ (or mariagejanieolivier.ca)
- Value: 185.199.110.153
- TTL: 600

- Type: A
- Name: @ (or mariagejanieolivier.ca)
- Value: 185.199.111.153
- TTL: 600

**AAAA Records** (IPv6):
- Type: AAAA
- Name: @ (or mariagejanieolivier.ca)
- Value: 2606:50c0:8000::153
- TTL: 600

- Type: AAAA
- Name: @ (or mariagejanieolivier.ca)
- Value: 2606:50c0:8001::153
- TTL: 600

- Type: AAAA
- Name: @ (or mariagejanieolivier.ca)
- Value: 2606:50c0:8002::153
- TTL: 600

- Type: AAAA
- Name: @ (or mariagejanieolivier.ca)
- Value: 2606:50c0:8003::153
- TTL: 600

### For the www Subdomain:
**CNAME Record**:
- Type: CNAME
- Name: www
- Value: olivierlauzon85.github.io
- TTL: 600

## Important Notes:

1. **Remove the wildcard CNAME** (`*.mariagejanieolivier.ca`) - This can interfere with GitHub's DNS verification
2. **Wait for DNS propagation** - DNS changes can take up to 48 hours, but usually propagate within a few hours
3. **Verify DNS records** - Use tools like `dig` or online DNS checkers to verify your records are correct:
   ```
   dig mariagejanieolivier.ca
   dig www.mariagejanieolivier.ca
   ```

## After Updating DNS:

1. Deploy your site with the CNAME file:
   ```bash
   cd frontend
   npm run deploy
   ```

2. Go to your GitHub repository settings:
   - Settings → Pages
   - Under "Custom domain", enter: `mariagejanieolivier.ca`
   - Check "Enforce HTTPS" (this will be available after DNS is verified)

3. Wait for GitHub to verify the DNS configuration (this can take a few minutes to several hours)

## Troubleshooting:

If you still get DNS errors:
- Double-check that all A records are exactly as listed above
- Ensure there are no conflicting CNAME records for the apex domain
- Remove any wildcard CNAME records that might interfere
- Wait for DNS propagation (use `dig` or online tools to check)
- Make sure the CNAME file is deployed to your gh-pages branch
