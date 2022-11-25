// Components
import ContactForm from '../../components/forms/ContactForm'
import Footer from '../../components/sections/Footer'
import Head from 'next/head'
import Navbar from '../../components/navigation/Navbar'
import Script from 'next/script'
// Data
import googleSearchSchema from '../google-search-schema'

const organization = 'Rehsok Consultores'
const description = 'Creamos posibilidades para empresas orientadas al progreso, con el objetivo de construir un legado de verdad.'
const keywords = String([
  'rehsok',
  'rehsok consultores',
  'consultoria fiscal',
  'asesoria fiscal',
  'planeacion fiscal',
  'atencion personalizada a rquerimientos del sat',
  'litigio fiscal',
])
const baseUrl = process.env.NEXT_PUBLIC_HOST
const socialImageUrl = `${baseUrl}images/rehsok.jpg`

const AppLayout = ({ children }) => {
  return (
    <div>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width' />
        <title>{organization}</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='canonical' href={baseUrl} />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        <meta name='theme-color' content='#163A62' />
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <meta property='og:locale' content='es_MX' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={organization} />
        <meta property='og:description' content={description} />
        <meta property='og:url' content={baseUrl} />
        <meta property='og:site_name' content={organization} />
        <meta property='og:image' content={socialImageUrl} />
        <meta property='og:image:secure_url' content={socialImageUrl} />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='640' />
        <meta property='og:image:type' content='image/jpeg' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={organization} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:site' content='@rehsok' />
        <meta name='twitter:image' content={socialImageUrl} />
      </Head>

      <Script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(googleSearchSchema)
        }}
        id='WebSite'
      />

      <main>
        <Navbar />
        {children}
      </main>

      <Footer />

      <ContactForm />
    </div>
  )
}

export default AppLayout
