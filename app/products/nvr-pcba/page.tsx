import { ProductDetail } from '../product-detail';

const product = {
  type: 'NVR PCBA Module',
  name: '16-Channel NVR PCBA',
  model: 'NVR7DA16P',
  image: '/nc/assets/nvr-pcba.png',
  intro:
    'A compact 16-channel recording core with 4K output, smart IPC events and flexible storage integration.',
  features: [
    '16-channel IP video',
    '4K HDMI output',
    'H.265+ / H.264+',
    'Up to 14TB storage',
    'Smart detection by IPC',
    '80Mbps bandwidth',
  ],
  specs: [
    ['IP video input', '16 channels'],
    ['Decoding', '1-ch 4K / 4-ch 1080P'],
    ['Video output', 'HDMI and VGA'],
    ['Storage', '2 × SATA 2.0'],
    ['USB', '2 × USB 2.0'],
    ['Dimensions', '122.4 × 46mm'],
  ],
} as const;
export default function Page() {
  return <ProductDetail product={product} />;
}
