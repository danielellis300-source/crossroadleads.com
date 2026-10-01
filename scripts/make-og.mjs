// Generates public/og-image.png, public/logo.png and public/apple-touch-icon.png.
// Run with: npm run og
import sharp from 'sharp';

const mark = (x, y, s) => `
  <g transform="translate(${x} ${y}) scale(${s})">
    <path d="M10 2h28l8 8v28l-8 8H10l-8-8V10z" fill="#0a0a0c" stroke="#f7e600" stroke-width="2.5"/>
    <path d="M24 9v30M9 24h30" stroke="#f7e600" stroke-width="5"/>
    <rect x="19" y="19" width="10" height="10" fill="#00e1ff" transform="rotate(45 24 24)"/>
  </g>`;

const grid = Array.from({ length: 20 }, (_, i) => `<path d="M${i * 64} 0V630M0 ${i * 64}H1200" stroke="#2a2a33" stroke-width="1" opacity=".35"/>`).join('');

const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#0a0a0c"/>
  ${grid}
  <rect width="1200" height="14" fill="#f7e600"/>
  <rect y="616" width="1200" height="14" fill="#f7e600"/>
  ${mark(80, 90, 2.6)}
  <text x="230" y="150" font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="58" fill="#ffffff" letter-spacing="3">CROSSROAD</text>
  <text x="232" y="196" font-family="Arial, sans-serif" font-weight="700" font-size="32" fill="#f7e600" letter-spacing="16">LEADS</text>
  <text x="80" y="340" font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="68" fill="#ffffff">WEBSITES &amp; LOCAL SEO</text>
  <text x="80" y="420" font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="68" fill="#f7e600">FOR INDIANAPOLIS</text>
  <text x="80" y="520" font-family="Consolas, monospace" font-size="30" fill="#00e1ff">crossroadleads.com  //  (317) 537-0940</text>
</svg>`;

const icon = (size) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 48 48">
  <rect width="48" height="48" fill="#0a0a0c"/>${mark(4, 4, 40 / 48)}</svg>`;

await sharp(Buffer.from(og)).png().toFile('public/og-image.png');
await sharp(Buffer.from(icon(512))).png().toFile('public/logo.png');
await sharp(Buffer.from(icon(180))).png().toFile('public/apple-touch-icon.png');
console.log('Images generated.');
