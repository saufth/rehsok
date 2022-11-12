// Components
import ContactForm from '../../components/forms/ContactForm'
import Footer from '../../components/sections/Footer'
import Head from 'next/head'
import Hero from '../../components/sections/Hero'

const keywordList = [
  'rehsok',
  'consultoria financiera',
  'soluciones financieras',
  'consultoria',
  'finansas'
]
const keywords = String(keywordList)

const AppLayout = ({ children }) => {
  return (
    <div>

      <Head>
        <meta name='description' content='Rehsok consultores' />
        <meta name='keywords' content={keywords} />
        <title>Rehsok Consultores</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Hero />
        {children}
        <ContactForm />
      </main>

      <Footer />


    </div>
  )
}

export default AppLayout
