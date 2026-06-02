import { NextRequest, NextResponse } from 'next/server'
import Groq from 'groq-sdk'

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY })

const SYSTEM_PROMPT = `Eres el asistente virtual de BIOS Productos Naturales, una empresa mexicana de Guadalajara que vende productos 100% naturales.

Productos:
- Vinagre de Manzana: $89 MXN / 500ml. Fermentado naturalmente, con la madre viva, sin conservadores.
- Aceite de Coco Virgen Extra: $129 MXN / 250ml. Prensado en frío, sin refinar.
- Kit Bienestar (vinagre + aceite): $189 MXN. Envío incluido.

Distribuidores: descuentos hasta 40%, material de venta gratuito, soporte continuo. Contacto vía WhatsApp.

Responde siempre en español, de forma amable, natural y concisa. Máximo 2-3 oraciones por respuesta. Si preguntan por distribución, sugiere escribir por WhatsApp. No inventes información que no esté aquí.`

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json()

    const completion = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: message },
      ],
      max_tokens: 200,
      temperature: 0.7,
    })

    const reply = completion.choices[0]?.message?.content || 'Lo siento, no pude procesar tu mensaje.'
    return NextResponse.json({ reply })
  } catch (error) {
    console.error('Chat error:', error)
    return NextResponse.json({ reply: 'Lo siento, hubo un error. Escríbenos por WhatsApp 🌿' }, { status: 500 })
  }
}
