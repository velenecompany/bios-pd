'use client'
import Image from 'next/image'

const products = [
  {
    id: 1,
    name: 'Vinagre de Sidra de Manzana 1L',
    desc: 'Elaborado artesanalmente con manzanas seleccionadas y con la madre de vinagre. Sin químicos ni conservadores.',
    prices: [
      { label: 'Botella 1L', menudeo: '$200', mayoreo: '$135 c/u (min. 12 pz)' },
    ],
    tag: 'Producto estrella',
    image: '/images/vinagre-hero.jpg',
    fit: 'contain' as const,
    position: 'center',
  },
  {
    id: 2,
    name: 'Vinagre de Sidra de Manzana ½L',
    desc: 'Elaborado artesanalmente con manzanas seleccionadas y con la madre de vinagre. Sin químicos ni conservadores.',
    prices: [
      { label: 'Botella ½L', menudeo: '$150', mayoreo: '$80 c/u (min. 12 pz)' },
    ],
    tag: null,
    image: '/images/vinagre-500ml.jpg',
    fit: 'contain' as const,
    position: 'center',
  },
  {
    id: 3,
    name: 'Aceite de Coco con Orégano',
    desc: 'Elaborado artesanalmente en pequeños lotes. Sin aditivos, sin conservadores, sin químicos.',
    prices: [
      { label: 'Frasco 250ml', menudeo: '$200', mayoreo: '$120 c/u (min. 12 pz)' },
    ],
    tag: null,
    image: '/images/aceite-coco.jpg',
    fit: 'contain' as const,
    position: 'center',
  },
  {
    id: 4,
    name: 'Esenciales BIOS',
    desc: 'Vinagre de Sidra de Manzana + Aceite de Coco con Orégano. La combinación natural perfecta.',
    prices: [
      { label: 'Set completo', menudeo: 'Desde $350', mayoreo: 'Precio especial' },
    ],
    tag: 'Ahorra 15%',
    image: '/images/esenciales.jpg',
    fit: 'cover' as const,
    position: 'center 30%',
  },
]

export default function Products() {
  return (
    <>
      <style>{`
        .products-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }
        .product-img { height: 300px; }
        .price-row { display: flex; justify-content: space-between; align-items: center; padding: 0.4rem 0; border-bottom: 1px solid var(--cream-dark); }
        @media (max-width: 1024px) {
          .products-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .products-grid { grid-template-columns: 1fr; }
          .product-img { height: 300px; }
        }
      `}</style>
      <section id="productos" style={{ background: 'var(--white)', padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 5rem)' }}>
        <div style={{ marginBottom: '3rem' }}>
          <p style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--moss)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
            <span style={{ display: 'block', width: '22px', height: '1px', background: 'var(--moss)' }}></span>
            Nuestros productos
          </p>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3.8rem)', fontWeight: 300, lineHeight: 1.15, color: 'var(--bark)' }}>
            Del campo<br />a tu <em style={{ fontStyle: 'italic', color: 'var(--moss)' }}>hogar.</em>
          </h2>
        </div>

        <div className="products-grid">
          {products.map(p => (
            <div key={p.id}
              style={{ background: 'var(--cream)', borderRadius: '4px', overflow: 'hidden', cursor: 'pointer', transition: 'transform 0.25s' }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-4px)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}>
              <div className="product-img"
                style={{ background: p.fit === 'cover' ? 'var(--cream-dark)' : '#fff', position: 'relative' }}>
                {p.tag && (
                  <span style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'var(--moss)', color: 'var(--white)', fontSize: '0.62rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '0.3rem 0.75rem', borderRadius: '2px', zIndex: 1 }}>
                    {p.tag}
                  </span>
                )}
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  style={{ objectFit: p.fit, objectPosition: p.position, padding: p.fit === 'contain' ? '1rem' : '0' }}
                />
              </div>
              <div style={{ padding: '1.2rem 1.3rem 1.5rem' }}>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', fontWeight: 400, color: 'var(--bark)', marginBottom: '0.4rem' }}>{p.name}</p>
                <p style={{ fontSize: '0.8rem', color: 'var(--stone)', lineHeight: 1.6, marginBottom: '1rem' }}>{p.desc}</p>
                <div style={{ marginBottom: '1rem' }}>
                  <p style={{ fontSize: '0.62rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--moss)', marginBottom: '0.5rem' }}>Menudeo</p>
                  {p.prices.map(pr => (
                    <div key={pr.label} className="price-row">
                      <span style={{ fontSize: '0.78rem', color: 'var(--bark-mid)' }}>{pr.label}</span>
                      <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.05rem', fontWeight: 300, color: 'var(--bark)' }}>{pr.menudeo}</span>
                    </div>
                  ))}
                </div>
                <div style={{ background: 'rgba(74,94,58,0.06)', borderRadius: '3px', padding: '0.6rem 0.8rem', marginBottom: '1rem' }}>
                  <p style={{ fontSize: '0.62rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--moss)', marginBottom: '0.3rem' }}>Mayoreo (mín. 12 pz)</p>
                  {p.prices.map(pr => (
                    <p key={pr.label} style={{ fontSize: '0.78rem', color: 'var(--bark-mid)' }}>{pr.label}: <strong>{pr.mayoreo}</strong></p>
                  ))}
                </div>
                <button style={{ width: '100%', background: 'var(--bark)', color: 'var(--cream)', border: 'none', padding: '0.7rem', borderRadius: '2px', fontFamily: 'var(--font-sans)', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer' }}>
                  Pedir ahora
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
