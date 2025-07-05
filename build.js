// build.js

const fs = require('fs');
const path = require('path');

// Output folder
const distPath = path.join(__dirname, 'dist');

// 1. Remove old dist if it exists
if (fs.existsSync(distPath)) {
  fs.rmSync(distPath, { recursive: true });
}

// 2. Create fresh dist directory
fs.mkdirSync(distPath);

// 3. Copy `public/` and `views/` to `dist/`
['public', 'views'].forEach(dir => {
  const src = path.join(__dirname, dir);
  const dest = path.join(distPath, dir);

  fs.mkdirSync(dest, { recursive: true });

  fs.readdirSync(src).forEach(file => {
    fs.copyFileSync(path.join(src, file), path.join(dest, file));
  });
});

console.log('✅ Build complete! All files copied to /dist');
