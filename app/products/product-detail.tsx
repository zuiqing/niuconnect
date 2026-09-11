import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';

export type Product = {
  type: string;
  name: string;
  model: string;
  image: string;
  intro: string;
  features: readonly string[];
  specs: readonly (readonly [string, string])[];
};

export function ProductDetail({ product }: { product: Product }) {
  return (
    <main className="product-page">
      <header className="product-nav shell">
        <Link href="/">
          <Image
            src="/nc/assets/logo.svg"
            alt="NIU Connect"
            width={130}
            height={65}
          />
        </Link>
        <Link href="/">
          <ArrowLeft size={17} /> Back to overview
        </Link>
      </header>
      <section className="product-hero">
        <div className="shell product-hero-grid">
          <div>
            <p className="eyebrow blue">{product.type}</p>
            <h1>{product.name}</h1>
            <p className="product-model">Model {product.model}</p>
            <p className="lead">{product.intro}</p>
            <a href="mailto:sales@niuconnect.com" className="button primary">
              Request product information <ArrowRight size={18} />
            </a>
          </div>
          <div className="detail-image">
            <Image
              src={product.image}
              alt={product.name}
              width={720}
              height={650}
              priority
            />
          </div>
        </div>
      </section>
      <section className="shell detail-section">
        <div>
          <p className="eyebrow blue">FEATURE HIGHLIGHTS</p>
          <h2>Built for reliable performance.</h2>
        </div>
        <div className="feature-list">
          {product.features.map((item) => (
            <div key={item}>
              <Check size={18} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="spec-section">
        <div className="shell">
          <p className="eyebrow blue">SPECIFICATIONS</p>
          <h2>Technical details</h2>
          <div className="spec-table">
            {product.specs.map(([key, value]) => (
              <div key={key}>
                <b>{key}</b>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="detail-contact">
        <div className="shell">
          <h2>Interested in this product?</h2>
          <a className="button white" href="mailto:sales@niuconnect.com">
            Contact sales <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}
