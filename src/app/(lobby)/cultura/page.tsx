import { type Metadata } from 'next'
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  title: 'Conócenos – Más que un proveedor, somos tu aliado estratégico.',
  description: 'Nos dedicamos incansablemente a ofrecerte la agilidad y éxito que requieres para destacarte en un entorno empresarial cada vez más desafiante.'
}

export default function CulturePage () {
  return (
    <>
      Oli
    </>
  )
}
