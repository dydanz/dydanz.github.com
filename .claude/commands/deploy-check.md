# Command: /deploy-check

Verify the site is ready for deployment.

## Execution Flow

1. **Build test**: `bundle exec jekyll build --verbose`
   - Check for warnings and errors
   - Note build time
2. **File verification**:
   - `_site/` is in `.gitignore`
   - `CNAME` file present if custom domain is configured
   - No sensitive files (`.env`, secrets) in repo
3. **Config validation**:
   - `url` matches the actual deployment URL
   - `baseurl` is correct for site type (user vs. project)
   - `JEKYLL_ENV=production` is set in the build step
4. **Deployment method check**:
   - If GitHub Actions: verify `.github/workflows/*.yml` is valid
   - If branch-based: verify publishing branch is correct in settings
   - Check that no non-whitelisted plugins are used (branch-based only)
5. **Post-deploy verification steps**:
   - Suggest URLs to check after deployment
   - Remind about 10-minute propagation delay
