#!/usr/bin/env node
/**
 * Copy build output from my-app/dist to docs folder for GitHub Pages
 */
const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../my-app/dist/my-app/browser');
const destDir = path.join(__dirname, '../docs');

function copyFileSync(src, dest) {
  const destDirPath = path.dirname(dest);
  if (!fs.existsSync(destDirPath)) {
    fs.mkdirSync(destDirPath, { recursive: true });
  }
  fs.copyFileSync(src, dest);
}

function copyDirSync(src, dest, exclude = []) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const files = fs.readdirSync(src);
  files.forEach(file => {
    if (exclude.includes(file)) return;

    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);
    const stat = fs.statSync(srcPath);

    if (stat.isDirectory()) {
      copyDirSync(srcPath, destPath, exclude);
    } else {
      copyFileSync(srcPath, destPath);
    }
  });
}

try {
  console.log('📋 Copying build output to docs folder...');
  console.log(`   From: ${srcDir}`);
  console.log(`   To:   ${destDir}`);

  if (!fs.existsSync(srcDir)) {
    console.error(`❌ Source directory not found: ${srcDir}`);
    process.exit(1);
  }

  // Copy all files except assets (we maintain assets separately)
  copyDirSync(srcDir, destDir, ['assets', 'index.csr.html']);

  // Copy and rename index.csr.html to index.html for GitHub Pages
  const srcIndexCsr = path.join(srcDir, 'index.csr.html');
  const destIndex = path.join(destDir, 'index.html');
  if (fs.existsSync(srcIndexCsr)) {
    console.log('📄 Copying index.csr.html → index.html...');
    copyFileSync(srcIndexCsr, destIndex);
  }

  // Copy updated assets if they exist
  const srcAssets = path.join(srcDir, 'assets');
  const destAssets = path.join(destDir, 'assets');
  if (fs.existsSync(srcAssets)) {
    console.log('📁 Copying assets...');
    copyDirSync(srcAssets, destAssets);
  }

  console.log('✅ Build output copied successfully!');
  console.log(`   docs/ folder is ready for GitHub Pages deployment`);
} catch (err) {
  console.error('❌ Error copying files:', err.message);
  process.exit(1);
}
