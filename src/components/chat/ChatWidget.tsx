'use client'
import { useState } from 'react'

interface Message { role: 'user' | 'assistant'; content: string }

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: '¡Hola! Soy el asistente de BIOS. ¿En qué puedo ayudarte hoy? 🌿' },
    { role: 'assistant', content: 'Puedo orientarte sobre productos, precios, envíos o distribuidores.' },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  async function send() {
    if (!input.trim() || loading) return
    const userMsg = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMsg }])
    setLoading(true)
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg }),
      })
      const data = await res.json()
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }])
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Lo siento, hubo un error. Llámanos al 33-1690-1065 🌿' }])
    }
    setLoading(false)
  }

  return (
    <div style={{ position: 'fixed', bottom: '1.5rem', right: '1.5rem', zIndex: 200 }}>
      {open && (
        <div style={{
          position: 'absolute',
          bottom: '70px',
          right: 0,
          width: 'min(320px, calc(100vw - 3rem))',
          background: 'var(--white)',
          borderRadius: '10px',
          boxShadow: '0 8px 40px rgba(61,43,26,0.18)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}>
          <div style={{ background: 'var(--moss)', padding: '1rem 1.2rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-serif)', fontSize: '1rem', color: 'white', flexShrink: 0 }}>B</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontSize: '0.85rem', fontWeight: 500, color: 'white' }}>Asistente BIOS</p>
              <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.75)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ width: '6px', height: '6px', background: '#7ECC5A', borderRadius: '50%', display: 'inline-block', flexShrink: 0 }}></span>
                En línea
              </p>
            </div>
            <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem', lineHeight: 1, flexShrink: 0 }}>✕</button>
          </div>

          <div style={{ padding: '1.2rem', overflowY: 'auto', maxHeight: '260px', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            {messages.map((m, i) => (
              <div key={i} style={{ maxWidth: '85%', alignSelf: m.role === 'user' ? 'flex-end' : 'flex-start' }}>
                <div style={{ padding: '0.65rem 0.9rem', fontSize: '0.82rem', lineHeight: 1.5, background: m.role === 'user' ? 'var(--moss)' : 'var(--cream)', color: m.role === 'user' ? 'white' : 'var(--bark)', borderRadius: m.role === 'user' ? '12px 4px 4px 12px' : '4px 12px 12px 4px', wordBreak: 'break-word' }}>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ maxWidth: '85%' }}>
                <div style={{ padding: '0.65rem 0.9rem', fontSize: '0.82rem', background: 'var(--cream)', color: 'var(--stone)', borderRadius: '4px 12px 12px 4px' }}>···</div>
              </div>
            )}
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', padding: '0.8rem 1rem', borderTop: '1px solid var(--cream-dark)' }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
              placeholder="Escribe tu pregunta…"
              style={{ flex: 1, border: '1px solid var(--stone-light)', borderRadius: '20px', padding: '0.55rem 1rem', fontFamily: 'var(--font-sans)', fontSize: '0.82rem', outline: 'none', background: 'var(--white)', color: 'var(--bark)', minWidth: 0 }}
            />
            <button onClick={send} style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--moss)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" width="16">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
              </svg>
            </button>
          </div>
        </div>
      )}

      <button onClick={() => setOpen(!open)} style={{ width: '54px', height: '54px', borderRadius: '50%', background: 'var(--moss)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 20px rgba(74,94,58,0.35)' }}>
        <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="24">
          <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
        </svg>
      </button>
    </div>
  )
}
