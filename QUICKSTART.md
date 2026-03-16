# Quick Start Guide

Get your portfolio online in 5 minutes!

## 1. Edit Your Information

Open `index.html` in a text editor and update:
- Your name (appears in navigation and footer)
- Your bio/description in the About section
- Project titles and descriptions
- Contact links (email, GitHub, LinkedIn, Twitter)

## 2. Preview Locally

- Open `index.html` directly in your web browser
- Make sure everything looks good
- Test on mobile devices if possible

## 3. Create GitHub Repository

Visit https://github.com/new and create a new repository:

**Option A (Recommended):** Name it `username.github.io`
- Replace `username` with your actual GitHub username
- Your site will be at `https://username.github.io`

**Option B:** Use any name (e.g., `portfolio`)
- Your site will be at `https://username.github.io/portfolio`

## 4. Push to GitHub

Open terminal in this folder and run:

```bash
# Initialize and add files
git init
git add .
git commit -m "Initial portfolio setup"

# Add your repository (replace username and repo-name)
git remote add origin https://github.com/username/repo-name.git
git branch -M main
git push -u origin main
```

## 5. Wait & Visit

- Wait 1-2 minutes for GitHub to publish
- Visit your site at the URL provided in step 3
- Share with recruiters and contacts!

## Quick Commands Reference

```bash
# After making changes locally:
git add .
git commit -m "Describe your changes"
git push

# Or a quicker version:
git add . && git commit -m "Update" && git push
```

## Common Updates

**Update a project link:**
```html
<a href="https://your-project-url.com" class="project-link">View Project</a>
```

**Add a new skill:**
```html
<li>Your New Skill</li>
```

**Change colors:**
Edit `styles.css` and look for `#667eea` and `#764ba2`

## Need Help?

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.
