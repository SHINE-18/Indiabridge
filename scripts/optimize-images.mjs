import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const IMAGES_DIR = path.resolve('public/images');
const BACKUP_DIR = path.resolve('public/images-backup');

async function optimizeImages() {
  console.log('🚀 Starting image optimization with sharp...\n');

  if (!fs.existsSync(IMAGES_DIR)) {
    console.error('Images directory does not exist:', IMAGES_DIR);
    return;
  }

  if (!fs.existsSync(BACKUP_DIR)) {
    fs.mkdirSync(BACKUP_DIR, { recursive: true });
  }

  const files = fs.readdirSync(IMAGES_DIR);
  let totalOriginal = 0;
  let totalOptimized = 0;
  let count = 0;

  console.log('-----------------------------------------------------------------------------------------');
  console.log(
    'File Name'.padEnd(38) +
    'Original'.padStart(12) +
    'Optimized'.padStart(14) +
    'Saved'.padStart(12) +
    'Ratio'.padStart(10)
  );
  console.log('-----------------------------------------------------------------------------------------');

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!['.webp', '.png', '.jpg', '.jpeg'].includes(ext)) {
      continue;
    }

    const filePath = path.join(IMAGES_DIR, file);
    const stat = fs.statSync(filePath);
    const origSize = stat.size;

    // Skip small logo/favicon assets (< 10KB)
    if (origSize < 10 * 1024) {
      continue;
    }

    // Backup original if not already backed up
    const backupPath = path.join(BACKUP_DIR, file);
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(filePath, backupPath);
    }

    try {
      const sourcePath = backupPath;
      const metadata = await sharp(sourcePath).metadata();
      let pipeline = sharp(sourcePath);

      // Max width capping: 1920px for high-res desktop, preserves sharp details
      const maxDimension = 1920;
      if (metadata.width && metadata.width > maxDimension) {
        pipeline = pipeline.resize({ width: maxDimension, withoutEnlargement: true });
      }

      let optimizedBuffer;
      if (ext === '.webp') {
        optimizedBuffer = await pipeline
          .webp({ quality: 80, effort: 5 })
          .toBuffer();
      } else if (ext === '.jpg' || ext === '.jpeg') {
        optimizedBuffer = await pipeline
          .jpeg({ quality: 82, mozjpeg: true })
          .toBuffer();
      } else if (ext === '.png') {
        optimizedBuffer = await pipeline
          .png({ compressionLevel: 9, adaptiveFiltering: true, quality: 85 })
          .toBuffer();
      }

      if (optimizedBuffer && optimizedBuffer.length < origSize) {
        fs.writeFileSync(filePath, optimizedBuffer);
        const newSize = optimizedBuffer.length;
        const savedBytes = origSize - newSize;
        const percent = ((savedBytes / origSize) * 100).toFixed(1);

        totalOriginal += origSize;
        totalOptimized += newSize;
        count++;

        console.log(
          file.padEnd(38) +
          (origSize / 1024).toFixed(1).padStart(9) + ' KB' +
          (newSize / 1024).toFixed(1).padStart(11) + ' KB' +
          (savedBytes / 1024).toFixed(1).padStart(9) + ' KB' +
          ` -${percent}%`.padStart(10)
        );
      } else {
        totalOriginal += origSize;
        totalOptimized += origSize;
        console.log(
          file.padEnd(38) +
          (origSize / 1024).toFixed(1).padStart(9) + ' KB' +
          (origSize / 1024).toFixed(1).padStart(11) + ' KB' +
          '0 KB'.padStart(12) +
          'optimal'.padStart(10)
        );
      }
    } catch (err) {
      console.error(`Error optimizing ${file}:`, err.message);
    }
  }

  console.log('-----------------------------------------------------------------------------------------');
  const totalSaved = totalOriginal - totalOptimized;
  const totalPercent = totalOriginal > 0 ? ((totalSaved / totalOriginal) * 100).toFixed(1) : 0;
  console.log(`\n✨ Successfully optimized ${count} images!`);
  console.log(`📦 Before: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`⚡ After:  ${(totalOptimized / 1024 / 1024).toFixed(2)} MB`);
  console.log(`🎉 Saved:  ${(totalSaved / 1024 / 1024).toFixed(2)} MB (-${totalPercent}%)!\n`);
}

optimizeImages();
