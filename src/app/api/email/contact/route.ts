import nodemailer from 'nodemailer'
import { z } from 'zod'
import { contactEmailSchema } from '@/lib/validations/email'
import { contactEmail, domain, siteConfig } from '@/config/site'

export async function POST (req: Request) {
  const input = contactEmailSchema.parse(await req.json())

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: `noreply@${domain}`,
        pass: String(process.env.GMAIL_APP_PASS)
      }
    })

    await transporter.sendMail({
      from: siteConfig.name,
      to: input.email,
      subject: `${input.name}, hemos recibido tu mensaje en ${siteConfig.name}`,
      html: `
        <h1><b>¡Gracias por contactarnos!</b></h1>
        <p>Un miembro de nuestro equipo se comunicará con usted en breve.</p>
      `
    })

    await transporter.sendMail({
      from: siteConfig.name,
      to: contactEmail,
      subject: 'Nuevo mensaje desde formulario web',
      html: `
        <p><b>Empresa:</b> ${input.company}</p>
        <p><b>Página web:</b> ${input.website}</p>
        <p><b>Nombre de contacto:</b> ${input.name}</p>
        <p><b>Puesto que desempeña:</b> ${input.positionHeld}</p>
        <p><b>Teléfono de contacto:</b> ${input.phone}</p>
        <p><b>Correo de contacto:</b> ${input.email}</p>
        <p><b>Categoría:</b> ${input.category}</p>
        <p><b>Descripción de la problemática o solución que necesita:</b> ${input.subject}</p>
      `
    })

    return new Response(null, { status: 200 })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return new Response('Something went wrong', { status: 422 })
    }

    if (err instanceof Error) {
      return new Response('Something went wrong', { status: 500 })
    }

    return new Response('Something went wrong', { status: 500 })
  }
}
