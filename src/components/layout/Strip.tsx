export default function Strip() {
  const items = ['Vinagre de Manzana', 'Aceite de Coco', '100% Natural', 'Sin Conservadores', 'Hecho en México', 'Origen Artesanal']
  const doubled = [...items, ...items]

  return (
    <div style={{ background: 'var(--bark)', padding: '1rem 0', overflow: 'hidden' }}>
      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .strip-inner { animation: marquee 18s linear infinite; }
      `}</style>
      <div className="strip-inner" style={{ display: 'flex', gap: '3rem', whiteSpace: 'nowrap' }}>
        {doubled.map((item, i) => (
          <span key={i} style={{
            fontFamily: 'var(--font-serif)', fontSize: '0.9rem',
            fontWeight: 300, fontStyle: 'italic',
            color: 'var(--cream-dark)', letterSpacing: '0.06em', flexShrink: 0,
          }}>
            {item} <span style={{ color: 'var(--gold)' }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
