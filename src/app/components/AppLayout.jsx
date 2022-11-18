// Components
import ContactForm from '../../components/forms/ContactForm'
import Footer from '../../components/sections/Footer'
import Head from 'next/head'
import Navbar from '../../components/navigation/Navbar'

const keywordList = [
  'rehsok',
  'rehsok consultores',
  'consultoria fiscal',
  'asesoria fiscal',
  'planeacion fiscal',
  'atencion personalizada a rquerimientos del sat',
  'litigio fiscal'
]
const keywords = String(keywordList)

function addProductJsonLd() {
  return {
    __html: `{
      '@context': 'https://schema.org/',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': 'https://rehsok.com/#organization',
          'name': 'Rehsok Consultores'
        },
        {
          '@type': 'WebSite',
          '@id': 'https://rehsok.com/#website',
          'url': 'https://rehsok.com',
          'name': 'Rehsok Consultores',
          'publisher': {
            '@id': 'https://rehsok.com/#organization'
          },
          'inLanguage': 'es-MX'
        },
        {
          '@type': 'CollectionPage',
          '@id': 'https://rehsok.com/#webpage',
          'url': 'https://rehsok.com/',
          'name': 'Rehsok Consultores',
          'about': {
            '@id': 'https://rehsok.com/#organization'
          },
          'isPartOf': {
            '@id': 'https://rehsok.com/#website'
          },
          'inLanguage': 'es-MX'
        }
      ]
    }`
  }
}

const AppLayout = ({ children }) => {
  return (
    <div>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width' />
        <title>Rehsok Consultores</title>
        <link rel='canonical' href='https://rehsok.com/' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        <meta name='theme-color' content='#163A62' />
        <meta name='description' content='Creamos posibilidades para empresas orientadas al progreso, con el objetivo de construir un legado de verdad.' />
        <meta name='keywords' content={keywords} />
        <meta property='og:locale' content='es_MX' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Rehsok Consultores' />
        <meta property='og:description' content='Creamos posibilidades para empresas orientadas al progreso, con el objetivo de construir un legado de verdad.' />
        <meta property='og:type' content='video.other' />
        <meta property='og:url' content='https://rehsok.com/' />
        <meta property='og:site_name' content='Rehsok Consultores' />
        <meta property='og:image' content='https://rehsok.com/images/rehsok.jpg' />
        <meta property='og:image:secure_url' content='https://rehsok.com/images/rehsok.jpg' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='640' />
        <meta property='og:image:type' content='image/jpeg' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Rehsok Consultores' />
        <meta name='twitter:description' content='Creamos posibilidades para empresas orientadas al progreso, con el objetivo de construir un legado de verdad.' />
        <meta name='twitter:site' content='@rehsok' />
        <meta name='twitter:image' content='https://rehsok.com/images/rehsok.jpg' />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={addProductJsonLd()}
          key='product-jsonld'
          class='rank-math-schema-pro'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

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
