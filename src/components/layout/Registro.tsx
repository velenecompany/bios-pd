'use client'
import { useState } from 'react'

export default function Registro() {
  const [tab, setTab] = useState<'registro' | 'login'>('registro')

  return (
    <section id="registro" style={{ background: 'var(--white)', padding: '7rem 5rem' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
        <div>
          <p style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--moss)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
            <span style={{ display: 'block', width: '22px', height: '1px', background: 'var(--moss)' }}></span>
            Mi cuenta
          </p>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.2rem, 3.5vw, 3.8rem)', fontWeight: 300, lineHeight: 1.15, color: 'var(--bark)' }}>
            Crea tu<br /><em style={{ color: 'var(--moss)' }}>cuenta.</em>
          </h2>
          <div style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
            {['Historial completo de pedidos', 'Descuentos para clientes frecuentes', 'Seguimiento de envíos en tiempo real', 'Acceso anticipado a nuevos productos'].map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '0.85rem', color: 'var(--bark-mid)' }}>
                <span style={{ color: 'var(--moss)', fontWeight: 500 }}>✓</span> {item}
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: 'var(--cream)', borderRadius: '6px', padding: '2.5rem' }}>
          <div style={{ display: 'flex', marginBottom: '1.8rem', borderBottom: '1px solid var(--stone-light)' }}>
            {(['registro', 'login'] as const).map(t => (
              <button key={t} onClick={() => setTab(t)} style={{ flex: 1, padding: '0.6rem', background: 'none', border: 'none', borderBottom: `2px solid ${tab === t ? 'var(--bark)' : 'transparent'}`, fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: tab === t ? 500 : 400, letterSpacing: '0.08em', textTransform: 'uppercase', color: tab === t ? 'var(--bark)' : 'var(--stone)', cursor: 'pointer', marginBottom: '-1px' }}>
                {t === 'registro' ? 'Crear cuenta' : 'Iniciar sesión'}
              </button>
            ))}
          </div>

          {tab === 'registro' ? (
            <div>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', fontWeight: 400, color: 'var(--bark)', marginBottom: '0.4rem' }}>Crear cuenta</p>
              <p style={{ fontSize: '0.83rem', color: 'var(--stone)', marginBottom: '2rem', lineHeight: 1.6 }}>Únete a la familia BIOS y empieza a pedir.</p>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                {['Nombre', 'Apellido'].map(label => (
                  <div key={label} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <label style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--bark-mid)' }}>{label}</label>
                    <input type="text" style={{ padding: '0.75rem 1rem', border: '1px solid var(--stone-light)', borderRadius: '3px', background: 'var(--white)', fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--bark)', outline: 'none' }} />
                  </div>
                ))}
              </div>
              <div style={{ marginBottom: '1rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--bark-mid)' }}>Correo electrónico</label>
                <input type="email" style={{ padding: '0.75rem 1rem', border: '1px solid var(--stone-light)', borderRadius: '3px', background: 'var(--white)', fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--bark)', outline: 'none' }} />
              </div>
              <div style={{ marginBottom: '1rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--bark-mid)' }}>Contraseña</label>
                <input type="password" style={{ padding: '0.75rem 1rem', border: '1px solid var(--stone-light)', borderRadius: '3px', background: 'var(--white)', fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--bark)', outline: 'none' }} />
              </div>
              <button style={{ width: '100%', background: 'var(--bark)', color: 'var(--cream)', padding: '1rem', border: 'none', borderRadius: '3px', fontFamily: 'var(--font-sans)', fontSize: '0.82rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', cursor: 'pointer', marginTop: '0.5rem' }}>
                Crear mi cuenta
              </button>
            </div>
          ) : (
            <div>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', fontWeight: 400, color: 'var(--bark)', marginBottom: '0.4rem' }}>Bienvenido de vuelta</p>
              <p style={{ fontSize: '0.83rem', color: 'var(--stone)', marginBottom: '2rem', lineHeight: 1.6 }}>Ingresa a tu cuenta BIOS.</p>
              <div style={{ marginBottom: '1rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--bark-mid)' }}>Correo electrónico</label>
                <input type="email" style={{ padding: '0.75rem 1rem', border: '1px solid var(--stone-light)', borderRadius: '3px', background: 'var(--white)', fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--bark)', outline: 'none' }} />
              </div>
              <div style={{ marginBottom: '1rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <label style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--bark-mid)' }}>Contraseña</label>
                <input type="password" style={{ padding: '0.75rem 1rem', border: '1px solid var(--stone-light)', borderRadius: '3px', background: 'var(--white)', fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--bark)', outline: 'none' }} />
              </div>
              <button style={{ width: '100%', background: 'var(--bark)', color: 'var(--cream)', padding: '1rem', border: 'none', borderRadius: '3px', fontFamily: 'var(--font-sans)', fontSize: '0.82rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', cursor: 'pointer', marginTop: '0.5rem' }}>
                Iniciar sesión
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
