import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BatteryCharging,
  BrainCircuit,
  Cloud,
  Cpu,
  Menu,
  Radio,
  ShieldCheck,
  Wifi,
} from 'lucide-react';

const categories = [
  ['Indoor Camera', 'Everyday security with Wi-Fi 6 and intelligent tracking.'],
  ['Outdoor Camera', 'Weather-ready protection with clear night vision.'],
  ['Battery & 4G', 'Wire-free coverage for remote and off-grid locations.'],
  ['Video Doorbell', 'See visitors, deliveries and the whole doorstep.'],
];
const technologies = [
  {
    icon: Wifi,
    name: 'Wi-Fi 6',
    copy: 'Fast, stable connectivity built for multi-device HD monitoring.',
  },
  {
    icon: BatteryCharging,
    name: 'Long-life battery',
    copy: 'Energy-first engineering delivers dependable protection for longer.',
  },
  {
    icon: BrainCircuit,
    name: 'Smart detection',
    copy: 'Accurate human, vehicle, pet and package detection reduces false alerts.',
  },
  {
    icon: Cloud,
    name: 'Cloud & App',
    copy: 'Live view, rich alerts, cloud storage and AI search across devices.',
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="shell nav-wrap">
          <Link href="#top" aria-label="NIU Connect home">
            <Image
              src="/nc/assets/logo.svg"
              alt="NIU Connect"
              width={144}
              height={72}
              priority
            />
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            <Link href="#products">IOT Products</Link>
            <Link href="#pcba">PCBA Products</Link>
            <Link href="#technology">AI Tech</Link>
            <Link href="#support">Support</Link>
            <Link href="#about">About Us</Link>
          </nav>
          <Link className="nav-cta" href="#contact">
            Talk to us <ArrowRight size={16} />
          </Link>
          <button className="menu-button" aria-label="Open navigation">
            <Menu />
          </button>
        </div>
      </header>

      <section id="top" className="hero">
        <div className="hero-glow" />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">CONNECTED SECURITY · BUILT FOR BUSINESS</p>
            <h1>
              Security hardware,
              <br />
              <span>connected by intelligence.</span>
            </h1>
            <p className="lead">
              From smart cameras and PCBA modules to cloud services and branded
              apps, NIU Connect helps security businesses move from idea to
              market.
            </p>
            <div className="hero-actions">
              <Link className="button primary" href="#products">
                Explore products <ArrowRight size={18} />
              </Link>
              <Link className="button secondary" href="#contact">
                OEM / ODM inquiry
              </Link>
            </div>
            <div className="hero-proof">
              <span>
                <ShieldCheck size={18} /> End-to-end solutions
              </span>
              <span>
                <Radio size={18} /> Global cloud nodes
              </span>
              <span>
                <Cpu size={18} /> In-house R&amp;D
              </span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="product-halo" />
            <Image
              src="/nc/assets/indoor-camera.png"
              alt="NIU Connect smart indoor camera"
              width={880}
              height={860}
              priority
            />
            <div className="float-card card-top">
              <span className="signal-dot" /> Always connected
            </div>
            <div className="float-card card-bottom">
              <b>4MP</b>
              <span>Smart tracking</span>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="section shell">
        <div className="section-head">
          <div>
            <p className="eyebrow blue">IOT PRODUCTS</p>
            <h2>Designed for every point of view.</h2>
          </div>
          <Link href="/products/indoor-camera">
            View featured product <ArrowRight size={18} />
          </Link>
        </div>
        <div className="category-grid">
          {categories.map(([name, copy], i) => (
            <article className={`category-card cat-${i}`} key={name}>
              <span>0{i + 1}</span>
              <div>
                <h3>{name}</h3>
                <p>{copy}</p>
              </div>
              <ArrowRight />
            </article>
          ))}
        </div>
        <article className="featured-product">
          <div className="featured-image">
            <Image
              src="/nc/assets/indoor-camera.png"
              alt="Indoor pan and tilt camera"
              width={650}
              height={620}
            />
          </div>
          <div className="featured-copy">
            <p className="eyebrow blue">FEATURED · INDOOR SERIES</p>
            <h2>Intelligence that keeps up.</h2>
            <p>
              A compact 4MP pan-and-tilt camera with Wi-Fi 6, smart tracking,
              two-way audio and clear night vision.
            </p>
            <ul>
              <li>4MP Super HD</li>
              <li>Human &amp; pet detection</li>
              <li>355° pan coverage</li>
              <li>Up to 512GB local storage</li>
            </ul>
            <Link className="text-link" href="/products/indoor-camera">
              Explore this camera <ArrowRight size={18} />
            </Link>
          </div>
        </article>
      </section>

      <section id="technology" className="tech-section">
        <div className="shell">
          <div className="section-head light">
            <div>
              <p className="eyebrow">NIU CONNECT TECHNOLOGIES</p>
              <h2>One ecosystem. More possibilities.</h2>
            </div>
            <p className="section-intro">
              Hardware, edge intelligence, cloud infrastructure and
              apps—engineered together.
            </p>
          </div>
          <div className="tech-grid">
            {technologies.map(({ icon: Icon, name, copy }) => (
              <article key={name}>
                <Icon />
                <h3>{name}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pcba" className="section shell pcba-grid">
        <div className="pcba-copy">
          <p className="eyebrow blue">PCBA MODULES</p>
          <h2>
            Your product.
            <br />
            Our proven core.
          </h2>
          <p>
            Flexible IPC, NVR, UVC and UVR modules give brands a faster path to
            differentiated security products.
          </p>
          <div className="module-tags">
            <span>IPC PCBA</span>
            <span>NVR PCBA</span>
            <span>Analog PCBA</span>
            <span>UVR PCBA</span>
          </div>
          <Link className="button primary" href="/products/nvr-pcba">
            Explore featured module <ArrowRight size={18} />
          </Link>
        </div>
        <div className="board-stage">
          <div className="board-grid" />
          <Image
            src="/nc/assets/nvr-pcba.png"
            alt="NIU Connect NVR PCBA module"
            width={700}
            height={700}
          />
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="shell about-grid">
          <div className="about-image">
            <Image
              src="/nc/assets/about-nc.jpg"
              alt="NIU Connect research and manufacturing"
              fill
              sizes="(max-width:800px) 100vw, 50vw"
            />
          </div>
          <div className="about-copy">
            <p className="eyebrow blue">ABOUT NIU CONNECT</p>
            <h2>From board to cloud, built as one.</h2>
            <p>
              NIU Connect integrates R&amp;D, SMT production, device
              manufacturing, global marketing and SaaS cloud services to support
              security brands worldwide.
            </p>
            <div className="stats">
              <div>
                <b>OEM / ODM</b>
                <span>Hardware customization</span>
              </div>
              <div>
                <b>iOS + Android</b>
                <span>Exclusive branded apps</span>
              </div>
              <div>
                <b>Global</b>
                <span>Cloud platform support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="shell contact-box">
          <div>
            <p className="eyebrow">START A PROJECT</p>
            <h2>Let’s build what’s next in security.</h2>
          </div>
          <div className="contact-actions">
            <a className="button white" href="mailto:sales@niuconnect.com">
              sales@niuconnect.com <ArrowRight size={18} />
            </a>
            <span>Product, OEM / ODM and partnership inquiries</span>
          </div>
        </div>
      </section>
      <footer id="support">
        <div className="shell footer-grid">
          <div>
            <Image
              src="/nc/assets/logo-white.png"
              alt="NIU Connect"
              width={150}
              height={75}
            />
            <p>Innovative security for a safer world.</p>
          </div>
          <div>
            <b>Products</b>
            <a href="#products">IOT Products</a>
            <a href="#pcba">PCBA Products</a>
            <a href="#technology">AI Technology</a>
          </div>
          <div>
            <b>Support</b>
            <a href="mailto:support@niuconnect.com">Support Center</a>
            <a href="mailto:support@niuconnect.com">Downloads</a>
            <a href="mailto:support@niuconnect.com">Contact Us</a>
          </div>
          <div>
            <b>Company</b>
            <a href="#about">About Us</a>
            <a href="#contact">OEM / ODM</a>
            <a href="#contact">Partnership</a>
          </div>
        </div>
        <div className="shell copyright">
          © 2026 NIU Connect Inc. All rights reserved.
          <span>www.niuconnect.com</span>
        </div>
      </footer>
    </main>
  );
}
