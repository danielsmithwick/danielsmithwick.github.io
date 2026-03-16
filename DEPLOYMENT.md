# GitHub Pages Deployment Guide

This guide will help you deploy your portfolio to GitHub Pages.

## Prerequisites

- A GitHub account (create one at https://github.com if you don't have one)
- Git installed on your computer (https://git-scm.com)

## Step-by-Step Deployment

### Step 1: Initialize Git Repository

Open terminal/command prompt in your website folder and run:

```bash
git init
git add .
git commit -m "Initial portfolio setup"
```

### Step 2: Choose Deployment Method

#### Method A: `username.github.io` (Recommended for Personal Portfolio)

1. Go to https://github.com/new
2. Create a repository with the name **`username.github.io`** (replace `username` with your actual GitHub username, exactly as it appears)
3. In your terminal, add the remote and push:

```bash
git remote add origin https://github.com/username/username.github.io.git
git branch -M main
git push -u origin main
```

4. Wait 1-2 minutes for GitHub to build and deploy
5. Visit `https://username.github.io` in your browser

#### Method B: Any Repository Name

1. Go to https://github.com/new
2. Create a repository with any name (e.g., `portfolio`, `website`, `my-site`)
3. In your terminal:

```bash
git remote add origin https://github.com/username/repository-name.git
git branch -M main
git push -u origin main
```

4. Go to your repository on GitHub
5. Click **Settings** → **Pages** (left sidebar)
6. Under "Source", select **main** branch
7. Click **Save**
8. Wait 1-2 minutes for deployment
9. Your site will be at `https://username.github.io/repository-name`

### Step 3: Verify Deployment

1. Check your GitHub repository's "Deployments" section
2. Look for a green checkmark next to the latest deployment
3. Click the deployment link to visit your live site

## Making Updates

After deployment, to update your site:

1. Make changes to your files locally
2. Commit and push:

```bash
git add .
git commit -m "Update portfolio content"
git push
```

3. Changes typically appear within 1-2 minutes

## Troubleshooting

### Site Not Showing Up

- Check that your repository name is exact (for Method A)
- Verify GitHub Pages is enabled in Settings → Pages
- Check the Actions tab for any deployment errors
- Clear your browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)

### 404 Error

- Ensure you're visiting the correct URL
- Check that index.html is in the root of the repository
- For Method B, make sure the source branch is set correctly

### Domain Help

You can also add a custom domain in Settings → Pages if you own one.

## Tips for Success

✅ Customize all placeholder text in `index.html`
✅ Update project links with real URLs
✅ Test locally (open index.html in browser before pushing)
✅ Use descriptive commit messages
✅ Keep your GitHub profile link updated

## Next Steps

After deployment:
1. Share your portfolio URL with recruiters/contacts
2. Regularly update your projects section
3. Add your GitHub Pages URL to your resume
4. Consider adding analytics (optional)

## Support

If you encounter issues:
- Check GitHub's Pages documentation: https://docs.github.com/en/pages
- Review Actions tab for deployment logs
- Ensure all files are properly named (case-sensitive on server)
