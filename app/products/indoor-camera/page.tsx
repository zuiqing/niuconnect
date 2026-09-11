import { ProductDetail } from '../product-detail';

const product = {
  type: 'Indoor Series',
  name: '4MP Smart Pan & Tilt Camera',
  model: 'IOT71485HP13-TMS',
  image: '/nc/assets/indoor-camera.png',
  intro:
    'Clear, connected indoor protection with smooth pan-and-tilt coverage and intelligent event detection.',
  features: [
    '4MP (2560 × 1440)',
    'Wi-Fi 2.4GHz / 5GHz',
    'Human & pet detection',
    'Two-way audio',
    'Up to 512GB microSD',
    'H.265 / H.264',
  ],
  specs: [
    ['Image sensor', '1/3" Progressive Scan CMOS'],
    ['Lens', '3.6mm @ F2.0'],
    ['Pan / Tilt', '340° pan, -10° to 90° tilt'],
    ['Night visibility', 'Up to 10m / 32.8ft'],
    ['Mobile client', 'iOS and Android'],
    ['Power', '5V / 1.5A'],
  ],
} as const;
export default function Page() {
  return <ProductDetail product={product} />;
}
