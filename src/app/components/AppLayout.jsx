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
        <Navbar />
        {children}
      </main>

      <Footer />

      <ContactForm />

    </div>
  )
}

export default AppLayout
