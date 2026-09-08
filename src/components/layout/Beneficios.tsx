'use client'
import { useState } from 'react'

const beneficios = [
  { title: 'Sin aditivos', desc: 'Nuestros productos no contienen químicos ni conservadores.' },
  { title: 'Calidad garantizada', desc: 'Cada lote es revisado para asegurar los estándares más altos de pureza e inocuidad.' },
  { title: 'Origen artesanal', desc: 'Producción en lotes que requieren de un proceso detallado asegurando el cuidado necesario.' },
  { title: 'Hecho en México', desc: 'Somos pioneros en nuestro país. Apoyamos a productores locales y llevamos lo mejor de nuestra tierra a tu mesa.' },
]

const beneficiosVinagre = [
  { title: 'Puede ayudar a controlar la glucosa en sangre', desc: 'Consumido junto con una comida, el ácido acético puede disminuir modestamente el aumento de glucosa después de comer.' },
  { title: 'Puede mejorar la sensibilidad a la insulina', desc: 'Algunos estudios han encontrado efectos favorables sobre la respuesta del organismo a la insulina.' },
  { title: 'Puede apoyar el control del peso', desc: 'Puede aumentar ligeramente la sensación de saciedad y, como parte de una alimentación adecuada, contribuir al control del consumo de alimentos.' },
  { title: 'Puede favorecer la digestión', desc: 'Su acidez puede estimular ciertos procesos digestivos. Sin embargo, no todas las personas lo toleran bien.' },
  { title: 'Tiene propiedades antimicrobianas', desc: 'El ácido acético puede inhibir el crecimiento de determinados microorganismos.' },
  { title: 'Puede contribuir a mejorar marcadores cardiovasculares', desc: 'Existen investigaciones que han observado posibles reducciones pequeñas en colesterol y triglicéridos.' },
  { title: 'Contiene compuestos antioxidantes', desc: 'Puede contener polifenoles y otros compuestos provenientes de la manzana y del proceso de fermentación.' },
  { title: 'Puede ayudar a prolongar la saciedad', desc: 'Útil para personas que buscan controlar porciones y consumo calórico.' },
  { title: 'Puede formar parte de una alimentación saludable', desc: 'Utilizado en ensaladas, aderezos y alimentos, aporta sabor sin añadir muchas calorías.' },
]

const beneficiosCoco = [
  { title: 'Aporta energía', desc: 'Gracias a sus grasas, principalmente triglicéridos de cadena media.' },
  { title: 'Tiene propiedades antimicrobianas', desc: 'Asociadas especialmente al ácido láurico.' },
  { title: 'Puede ayudar a hidratar y proteger la piel', desc: 'Cuando se utiliza de manera tópica.' },
  { title: 'Puede funcionar como emoliente', desc: 'Ayudando a suavizar piel reseca.' },
  { title: 'Combinación de ingredientes naturales', desc: 'El aceite de coco con orégano es rica en compuestos bioactivos con propiedades antioxidantes y antimicrobianas estudiadas.' },
]

export default function Beneficios() {
  const [showVinagre, setShowVinagre] = useState(false)
  const [showCoco, setShowCoco] = useState(false)

  return (
    <>
      <style>{`
        .beneficios-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          margin-top: 4rem;
        }
        .beneficios-detalle-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-top: 1.5rem;
        }
        @media (max-width: 768px) {
          .beneficios-grid { grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-top: 2rem; }
          .beneficios-detalle-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) {
          .beneficios-grid { grid-template-columns: 1fr; }
        }
        .accordion-btn {
          display: flex; align-items: center; justify-content: space-between;
          width: 100%; padding: 1.2rem 1.5rem;
          background: rgba(247,243,236,0.08); border: 1px solid rgba(247,243,236,0.15);
          border-radius: 4px; cursor: pointer; margin-top: 1rem;
          font-family: var(--font-serif); font-size: 1.1rem; font-weight: 400;
          color: var(--cream); text-align: left;
          transition: background 0.2s;
        }
        .accordion-btn:hover { background: rgba(247,243,236,0.12); }
        .accordion-arrow { transition: transform 0.3s; font-size: 0.8rem; }
        .accordion-arrow.open { transform: rotate(180deg); }
      `}</style>
      <section id="beneficios" style={{ background: 'var(--bark)', padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 5rem)' }}>
        <p style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold-light)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
          <span style={{ display: 'block', width: '22px', height: '1px', background: 'var(--gold-light)', flexShrink: 0 }}></span>
          ¿Por qué BIOS?
        </p>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3.8rem)', fontWeight: 300, lineHeight: 1.15, color: 'var(--cream)', maxWidth: '520px' }}>
          Todo lo que tu cuerpo <em style={{ color: 'var(--gold-light)' }}>merece.</em>
        </h2>

        <div className="beneficios-grid">
          {beneficios.map(b => (
            <div key={b.title} style={{ padding: '2rem 1.5rem', border: '1px solid rgba(247,243,236,0.12)', borderRadius: '4px' }}>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.15rem', fontWeight: 400, color: 'var(--cream)', marginBottom: '0.6rem' }}>{b.title}</p>
              <p style={{ fontSize: '0.82rem', fontWeight: 300, color: 'var(--stone-light)', lineHeight: 1.7 }}>{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Acordeón Vinagre */}
        <div style={{ marginTop: '4rem', maxWidth: '900px' }}>
          <p style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold-light)', marginBottom: '1rem' }}>Beneficios detallados</p>

          <button className="accordion-btn" onClick={() => setShowVinagre(!showVinagre)}>
            🍎 Beneficios del Vinagre de Sidra de Manzana
            <span className={`accordion-arrow ${showVinagre ? 'open' : ''}`}>▼</span>
          </button>
          {showVinagre && (
            <div className="beneficios-detalle-grid">
              {beneficiosVinagre.map((b, i) => (
                <div key={i} style={{ padding: '1.5rem', background: 'rgba(247,243,236,0.06)', borderRadius: '4px', border: '1px solid rgba(247,243,236,0.1)' }}>
                  <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', fontWeight: 400, color: 'var(--cream)', marginBottom: '0.5rem' }}>{b.title}</p>
                  <p style={{ fontSize: '0.8rem', fontWeight: 300, color: 'var(--stone-light)', lineHeight: 1.7 }}>{b.desc}</p>
                </div>
              ))}
            </div>
          )}

          <button className="accordion-btn" onClick={() => setShowCoco(!showCoco)}>
            🥥🌿 Beneficios del Aceite de Coco con Orégano
            <span className={`accordion-arrow ${showCoco ? 'open' : ''}`}>▼</span>
          </button>
          {showCoco && (
            <div className="beneficios-detalle-grid">
              {beneficiosCoco.map((b, i) => (
                <div key={i} style={{ padding: '1.5rem', background: 'rgba(247,243,236,0.06)', borderRadius: '4px', border: '1px solid rgba(247,243,236,0.1)' }}>
                  <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', fontWeight: 400, color: 'var(--cream)', marginBottom: '0.5rem' }}>{b.title}</p>
                  <p style={{ fontSize: '0.8rem', fontWeight: 300, color: 'var(--stone-light)', lineHeight: 1.7 }}>{b.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
