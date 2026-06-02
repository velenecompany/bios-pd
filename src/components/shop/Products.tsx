'use client'

const products = [
  {
    id: 1,
    name: 'Vinagre de Manzana',
    desc: 'Fermentado naturalmente con manzanas seleccionadas. Con la madre viva. Sin conservadores.',
    price: '$89',
    unit: 'MXN / 500ml',
    tag: 'Producto estrella',
  },
  {
    id: 2,
    name: 'Aceite de Coco Virgen',
    desc: 'Prensado en frío. Sin refinar. Conserva todos sus nutrientes naturales y aroma original.',
    price: '$129',
    unit: 'MXN / 250ml',
    tag: null,
  },
  {
    id: 3,
    name: 'Kit Bienestar',
    desc: 'Los dos productos esenciales de BIOS. Rutina natural completa. Envío incluido.',
    price: '$189',
    unit: 'MXN / kit',
    tag: 'Ahorra 15%',
  },
]

export default function Products() {
  return (
    <>
      <style>{`
        .products-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          gap: 1.5rem;
        }
        .product-img-featured { height: 340px; }
        .product-img-normal { height: 280px; }
        @media (max-width: 768px) {
          .products-grid {
            grid-template-columns: 1fr;
          }
          .product-img-featured { height: 260px; }
          .product-img-normal { height: 220px; }
        }
      `}</style>
      <section id="productos" style={{ background: 'var(--white)', padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 5rem)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <p style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--moss)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
              <span style={{ display: 'block', width: '22px', height: '1px', background: 'var(--moss)' }}></span>
              Nuestros productos
            </p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3.8rem)', fontWeight: 300, lineHeight: 1.15, color: 'var(--bark)' }}>
              Del campo<br />a tu <em style={{ fontStyle: 'italic', color: 'var(--moss)' }}>hogar.</em>
            </h2>
          </div>
        </div>

        <div className="products-grid">
          {products.map(p => (
            <div key={p.id}
              style={{ background: 'var(--cream)', borderRadius: '4px', overflow: 'hidden', cursor: 'pointer', transition: 'transform 0.25s' }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-4px)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}>
              <div className={p.id === 1 ? 'product-img-featured' : 'product-img-normal'}
                style={{ background: 'var(--cream-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                {p.tag && (
                  <span style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'var(--moss)', color: 'var(--white)', fontSize: '0.62rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '0.3rem 0.75rem', borderRadius: '2px' }}>
                    {p.tag}
                  </span>
                )}
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 300, color: 'var(--bark-mid)', fontStyle: 'italic', opacity: 0.5 }}>{p.name}</p>
              </div>
              <div style={{ padding: '1.4rem 1.5rem 1.6rem' }}>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 400, color: 'var(--bark)', marginBottom: '0.3rem' }}>{p.name}</p>
                <p style={{ fontSize: '0.82rem', color: 'var(--stone)', lineHeight: 1.6, marginBottom: '1.1rem' }}>{p.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 300, color: 'var(--bark)' }}>
                    {p.price} <small style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'var(--stone)', fontWeight: 400 }}>{p.unit}</small>
                  </span>
                  <button style={{ background: 'none', border: '1px solid var(--bark)', color: 'var(--bark)', padding: '0.5rem 1.1rem', borderRadius: '2px', fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer' }}>
                    + Añadir
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
