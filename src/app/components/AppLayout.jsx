// Components
import ContactForm from '../../components/forms/ContactForm'
import Footer from '../../components/sections/Footer'
import Head from 'next/head'
import Navbar from '../../components/navigation/Navbar'

const organization = 'Rehsok Consultores'
const purpose = 'Creamos posibilidades para empresas orientadas al progreso, con el objetivo de construir un legado de verdad.'
const keywordList = [
  'rehsok',
  'rehsok consultores',
  'consultoria fiscal',
  'asesoria fiscal',
  'planeacion fiscal',
  'atencion personalizada a rquerimientos del sat',
  'litigio fiscal',
]
const baseUrl = process.env.NEXT_PUBLIC_HOST
const rehsokImageUrl = `${baseUrl}images/rehsok.jpg`

const addProductJsonLd = () => {
  return {
    __html: `{
      '@context': 'https://schema.org/',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': '${baseUrl}#organization',
          'name': '${organization}'
        },
        {
          '@type': 'WebSite',
          '@id': '${baseUrl}#website',
          'url': '${baseUrl}',
          'name': '${organization}',
          'publisher': {
            '@id': '${baseUrl}#organization'
          },
          'inLanguage': 'es-MX'
        },
        {
          '@type': 'CollectionPage',
          '@id': '${baseUrl}#webpage',
          'url': '${baseUrl}',
          'name': '${organization}',
          'about': {
            '@id': '${baseUrl}#organization'
          },
          'isPartOf': {
            '@id': '${baseUrl}#website'
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
        <title>{organization}</title>
        <link rel='canonical' href={baseUrl} />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        <meta name='theme-color' content='#163A62' />
        <meta name='description' content={purpose} />
        <meta name='keywords' content={String(keywordList)} />
        <meta property='og:locale' content='es_MX' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={organization} />
        <meta property='og:description' content={purpose} />
        <meta property='og:url' content={baseUrl} />
        <meta property='og:site_name' content={organization} />
        <meta property='og:image' content={rehsokImageUrl} />
        <meta property='og:image:secure_url' content={rehsokImageUrl} />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='640' />
        <meta property='og:image:type' content='image/jpeg' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={organization} />
        <meta
          name='twitter:description'
          content={purpose}
        />
        <meta name='twitter:site' content='@rehsok' />
        <meta name='twitter:image' content={rehsokImageUrl} />
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
