import { createCanvas } from 'canvas';
import { createWriteStream } from 'fs';
import { exec } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { mkdir } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Ensure public/videos directory exists
await mkdir(new URL('../public/videos', import.meta.url), { recursive: true });

// Create a canvas
const canvas = createCanvas(640, 360);
const ctx = canvas.getContext('2d');

// Create frames
const frames = [];
for (let i = 0; i < 60; i++) {
  ctx.fillStyle = '#f0f9ff';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Draw a moving circle
  ctx.beginPath();
  ctx.arc(
    canvas.width/2 + Math.cos(i/10) * 100,
    canvas.height/2 + Math.sin(i/10) * 100,
    30,
    0,
    Math.PI * 2
  );
  ctx.fillStyle = '#3b82f6';
  ctx.fill();
  
  // Add text
  ctx.font = 'bold 32px Arial';
  ctx.fillStyle = '#1e3a8a';
  ctx.textAlign = 'center';
  ctx.fillText('Medicine AI Demo', canvas.width/2, 80);
  
  frames.push(canvas.toBuffer());
}

// Save frames as images
for (let i = 0; i < frames.length; i++) {
  const stream = createWriteStream(`frame${i.toString().padStart(3, '0')}.png`);
  stream.write(frames[i]);
  stream.end();
}

// Use ffmpeg to combine frames into video
exec('ffmpeg -framerate 30 -i frame%03d.png -c:v libx264 -pix_fmt yuv420p public/videos/output_video.mp4', (error) => {
  if (error) {
    console.error('Error creating video:', error);
    return;
  }
  
  // Clean up frame files
  frames.forEach((_, i) => {
    exec(`rm frame${i.toString().padStart(3, '0')}.png`);
  });
  
  console.log('Video created successfully!');
});