// Components
import AppLayout from '../app/components/AppLayout'
// Styles
import '../styles/globals.css'

const App = ({ Component, pageProps }) => {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  )
}

export default App
