# 📦 Deployment Guide for GitHub Pages

## Overview

This repository uses the `/docs` folder for GitHub Pages deployment. All necessary files (HTML, CSS, JS, and assets) are tracked in git.

## 🏗️ Project Structure

```
CODE-main/
├── my-app/                    # Angular application source
│   ├── src/                   # Source files
│   ├── dist/                  # Build output (generated)
│   └── package.json
├── docs/                      # GitHub Pages deployment folder
│   ├── index.html            # Entry point
│   ├── assets/               # All required assets (tracked in git)
│   ├── *.js, *.css           # Build output files
│   └── .nojekyll             # Disable Jekyll processing
├── scripts/
│   └── copy-docs.js          # Build output copy script
└── DEPLOYMENT.md             # This file
```

## 🚀 Building and Deploying

### Option 1: Using the build script (Recommended)

```bash
cd my-app
npm run build:pages
```

This command:
1. Builds the Angular application: `ng build`
2. Copies output to `/docs` folder: `npm run copy:docs`
3. Automatically updates assets and HTML/CSS/JS files

### Option 2: Manual steps

```bash
cd my-app
npm run build
npm run copy:docs
```

### Option 3: Just build (doesn't update docs)

```bash
cd my-app
npm run build
```

## 📝 After building

1. **Stage changes** (if you modified source code):
   ```bash
   git add my-app/src/
   git commit -m "Update app source code"
   ```

2. **Stage docs changes**:
   ```bash
   git add docs/
   git commit -m "Update docs for GitHub Pages"
   ```

3. **Push to GitHub**:
   ```bash
   git push origin main
   ```

## 🔄 Asset Management

### Adding new assets

1. Add images/files to `my-app/src/assets/`
2. Reference them in your Angular components
3. Run `npm run build:pages` (automatically copies to `/docs/assets`)
4. Commit: `git add docs/assets/`

### Optimizing existing assets

Assets in `/docs/assets` are optimized with pngquant:

```bash
npm install -g imagemin-cli imagemin-pngquant
cd docs/assets
imagemin *.png --out-dir=. --plugin=pngquant
git add .
git commit -m "Optimize asset images"
```

## 🌐 GitHub Pages Configuration

The site is configured to deploy from:
- **Branch**: `main`
- **Folder**: `/docs`
- **URL**: https://huongthu495.github.io/CODE-main/

See the [GitHub Pages Settings](https://github.com/huongthu495/CODE-main/settings/pages)

## ✅ Checklist

Before pushing to GitHub:

- [ ] Run `npm run build:pages` in `my-app/`
- [ ] Verify `/docs` folder has updated files
- [ ] Test locally: `python -m http.server` in `/docs`
- [ ] Commit changes to git
- [ ] Push to `main` branch
- [ ] Check GitHub Actions for any deployment issues

## 🐛 Troubleshooting

### 404 errors for assets

If images/assets don't load:
1. Check `/docs/assets/` folder exists and contains files
2. Verify `index.html` has correct `<base href="/CODE-main/">`
3. Run `npm run build:pages` to regenerate

### Files not updating

```bash
# Force rebuild
rm -rf my-app/dist/
npm run build:pages
git add docs/
git commit -m "Rebuild docs"
```

### Check what's tracked in git

```bash
git ls-files docs/ | head -20
```

## 📚 Resources

- [Angular Build Guide](https://angular.io/guide/build)
- [GitHub Pages Help](https://docs.github.com/en/pages)
- [imagemin Documentation](https://github.com/imagemin/imagemin)
