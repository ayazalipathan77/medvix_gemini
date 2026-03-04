import fs from 'fs';
import https from 'https';
import path from 'path';

const dirs = [
  'public/assets/images',
  'public/assets/illustrations',
  'public/assets/marketing',
  'public/assets/icons'
];

dirs.forEach(d => fs.mkdirSync(d, { recursive: true }));

const download = (url: string, dest: string) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
         return download(response.headers.location!, dest).then(resolve).catch(reject);
      }
      response.pipe(file);
      file.on('finish', () => { file.close(); resolve(true); });
    }).on('error', (err) => { fs.unlink(dest, () => {}); reject(err); });
  });
};

async function run() {
  console.log('Downloading AI images...');
  try {
    await Promise.all([
      download('https://image.pollinations.ai/prompt/Modern%20medical%20billing%20office%20with%20professionals%20looking%20at%20financial%20charts,%20blue%20and%20green%20theme,%20photorealistic?width=800&height=600&nologo=true', 'public/assets/images/medical-billing-ai.jpg'),
      download('https://image.pollinations.ai/prompt/Modern%20dental%20clinic%20reception%20with%20friendly%20staff,%20blue%20and%20green%20theme,%20photorealistic?width=800&height=600&nologo=true', 'public/assets/images/dental-billing-ai.jpg'),
      download('https://image.pollinations.ai/prompt/Abstract%203d%20render%20of%20healthcare%20revenue%20cycle%20management,%20financial%20growth,%20blue%20and%20green?width=800&height=600&nologo=true', 'public/assets/images/rcm-ai.jpg'),
      download('https://image.pollinations.ai/prompt/A%20professional%20medical%20certificate%20or%20credentialing%20document%20with%20a%20stethoscope,%20blue%20and%20green%20accents,%20photorealistic?width=800&height=600&nologo=true', 'public/assets/images/credentialing-ai.jpg')
    ]);
    console.log('Images downloaded successfully');
  } catch (e) {
    console.error('Failed to download images', e);
  }
}
run();
