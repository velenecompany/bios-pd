'use client'
import { useState } from 'react'
import Image from 'next/image'
import { CartItem } from './Products'

interface CartProps {
  items: CartItem[]
  onClose: () => void
  onUpdateQty: (id: number, qty: number) => void
  onRemove: (id: number) => void
}

export default function Cart({ items, onClose, onUpdateQty, onRemove }: CartProps) {
  const [step, setStep] = useState<'cart' | 'form' | 'success'>('cart')
  const [form, setForm] = useState({ nombre: '', telefono: '', email: '', calle: '', ciudad: '', cp: '', estado: '', notas: '' })
  const [loading, setLoading] = useState(false)

  const total = items.reduce((a, i) => a + i.price * i.qty, 0)

  const handleSubmit = async () => {
    if (!form.nombre || !form.telefono || !form.cp) return
    setLoading(true)

    const orderText = items.map(i => `• ${i.name} x${i.qty} = $${i.price * i.qty}`).join('\n')
    const msg = encodeURIComponent(
      `🌿 *Nuevo pedido BIOS*\n\n` +
      `👤 ${form.nombre}\n📞 ${form.telefono}\n📧 ${form.email}\n\n` +
      `📦 *Productos:*\n${orderText}\n\n` +
      `💰 Subtotal: $${total} MXN (+ envío)\n\n` +
      `📍 *Dirección de envío:*\n${form.calle}\n${form.ciudad}, ${form.estado} CP: ${form.cp}\n\n` +
      `📝 Notas: ${form.notas || 'Sin notas'}`
    )

    window.open(`https://wa.me/523316901065?text=${msg}`, '_blank')
    setLoading(false)
    setStep('success')
  }

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 400, display: 'flex' }}>
      <div onClick={onClose} style={{ flex: 1, background: 'rgba(61,43,26,0.4)' }} />
      <div style={{ width: 'min(440px, 100vw)', background: 'var(--white)', display: 'flex', flexDirection: 'column', height: '100vh', overflowY: 'auto' }}>

        {/* Header */}
        <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--cream-dark)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, background: 'var(--white)', zIndex: 1 }}>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', fontWeight: 400, color: 'var(--bark)' }}>
            {step === 'cart' ? 'Tu carrito' : step === 'form' ? 'Datos de envío' : '¡Pedido enviado!'}
          </p>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.4rem', color: 'var(--stone)' }}>✕</button>
        </div>

        {/* STEP: CARRITO */}
        {step === 'cart' && (
          <>
            {items.length === 0 ? (
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', padding: '2rem' }}>
                <p style={{ fontSize: '2rem' }}>🛒</p>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', color: 'var(--stone)' }}>Tu carrito está vacío</p>
                <button onClick={onClose} style={{ background: 'var(--bark)', color: 'var(--cream)', border: 'none', padding: '0.8rem 2rem', borderRadius: '2px', fontFamily: 'var(--font-sans)', fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer' }}>
                  Ver productos
                </button>
              </div>
            ) : (
              <>
                <div style={{ flex: 1, padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                  {items.map(item => (
                    <div key={item.id} style={{ display: 'flex', gap: '1rem', alignItems: 'center', paddingBottom: '1.2rem', borderBottom: '1px solid var(--cream-dark)' }}>
                      <div style={{ width: '70px', height: '70px', background: '#fff', borderRadius: '4px', position: 'relative', flexShrink: 0 }}>
                        <Image src={item.image} alt={item.name} fill style={{ objectFit: 'contain', padding: '4px' }} />
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '0.95rem', color: 'var(--bark)', marginBottom: '0.3rem' }}>{item.name}</p>
                        <p style={{ fontSize: '0.75rem', color: 'var(--stone)', marginBottom: '0.5rem' }}>+ envío según CP</p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <button onClick={() => onUpdateQty(item.id, item.qty - 1)} style={{ width: '26px', height: '26px', border: '1px solid var(--stone-light)', background: 'none', borderRadius: '2px', cursor: 'pointer', fontSize: '1rem', color: 'var(--bark)' }}>−</button>
                          <span style={{ fontSize: '0.9rem', color: 'var(--bark)', minWidth: '20px', textAlign: 'center' }}>{item.qty}</span>
                          <button onClick={() => onUpdateQty(item.id, item.qty + 1)} style={{ width: '26px', height: '26px', border: '1px solid var(--stone-light)', background: 'none', borderRadius: '2px', cursor: 'pointer', fontSize: '1rem', color: 'var(--bark)' }}>+</button>
                        </div>
                      </div>
                      <div style={{ textAlign: 'right', flexShrink: 0 }}>
                        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem', fontWeight: 300, color: 'var(--bark)', marginBottom: '0.3rem' }}>${item.price * item.qty}</p>
                        <button onClick={() => onRemove(item.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.7rem', color: 'var(--stone)', textDecoration: 'underline' }}>Quitar</button>
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ padding: '1.5rem', borderTop: '1px solid var(--cream-dark)', background: 'var(--white)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--stone)' }}>Subtotal</span>
                    <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 300, color: 'var(--bark)' }}>${total} MXN</span>
                  </div>
                  <p style={{ fontSize: '0.72rem', color: 'var(--stone)', marginBottom: '1.2rem' }}>+ envío · El costo se calcula según tu código postal</p>
                  <button onClick={() => setStep('form')} style={{ width: '100%', background: 'var(--moss)', color: 'var(--white)', border: 'none', padding: '1rem', borderRadius: '2px', fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer' }}>
                    Continuar con el pedido →
                  </button>
                </div>
              </>
            )}
          </>
        )}

        {/* STEP: FORMULARIO */}
        {step === 'form' && (
          <>
            <div style={{ flex: 1, padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p style={{ fontSize: '0.72rem', color: 'var(--stone)', marginBottom: '0.5rem' }}>Tu pedido se enviará por WhatsApp para confirmar disponibilidad y costo de envío.</p>

              {[
                { key: 'nombre', label: 'Nombre completo', type: 'text', placeholder: 'María García' },
                { key: 'telefono', label: 'Teléfono / WhatsApp', type: 'tel', placeholder: '33 1234 5678' },
                { key: 'email', label: 'Correo electrónico', type: 'email', placeholder: 'tu@correo.com' },
                { key: 'calle', label: 'Calle y número', type: 'text', placeholder: 'Av. Independencia 123' },
                { key: 'ciudad', label: 'Ciudad / Municipio', type: 'text', placeholder: 'Guadalajara' },
                { key: 'estado', label: 'Estado', type: 'text', placeholder: 'Jalisco' },
                { key: 'cp', label: 'Código postal', type: 'text', placeholder: '44100' },
                { key: 'notas', label: 'Notas adicionales (opcional)', type: 'text', placeholder: 'Entre calles, referencias...' },
              ].map(f => (
                <div key={f.key} style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  <label style={{ fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--bark-mid)' }}>{f.label}</label>
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    value={form[f.key as keyof typeof form]}
                    onChange={e => setForm(prev => ({ ...prev, [f.key]: e.target.value }))}
                    style={{ padding: '0.7rem 1rem', border: '1px solid var(--stone-light)', borderRadius: '3px', background: 'var(--white)', fontFamily: 'var(--font-sans)', fontSize: '0.88rem', color: 'var(--bark)', outline: 'none' }}
                  />
                </div>
              ))}
            </div>
            <div style={{ padding: '1.5rem', borderTop: '1px solid var(--cream-dark)', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <button onClick={handleSubmit} disabled={loading} style={{ width: '100%', background: '#25D366', color: 'white', border: 'none', padding: '1rem', borderRadius: '2px', fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem' }}>
                <svg viewBox="0 0 24 24" fill="currentColor" width="18"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Enviar pedido por WhatsApp
              </button>
              <button onClick={() => setStep('cart')} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.78rem', color: 'var(--stone)', textDecoration: 'underline' }}>
                ← Volver al carrito
              </button>
            </div>
          </>
        )}

        {/* STEP: ÉXITO */}
        {step === 'success' && (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', padding: '2rem', textAlign: 'center' }}>
            <p style={{ fontSize: '3rem' }}>🌿</p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', fontWeight: 300, color: 'var(--bark)' }}>¡Pedido enviado!</h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--stone)', lineHeight: 1.7, maxWidth: '300px' }}>
              Tu pedido fue enviado por WhatsApp. Te contactaremos en breve para confirmar disponibilidad y el costo de envío a tu código postal.
            </p>
            <button onClick={onClose} style={{ background: 'var(--bark)', color: 'var(--cream)', border: 'none', padding: '0.9rem 2rem', borderRadius: '2px', fontFamily: 'var(--font-sans)', fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer' }}>
              Cerrar
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
