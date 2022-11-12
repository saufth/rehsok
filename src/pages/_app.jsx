// Components
import AppLayout from '../app/components/AppLayout'
import AppProvider from '../app/context/AppProvider'
// Styles
import '../styles/globals.css'

const App = ({ Component, pageProps }) => {
  return (
    <AppProvider>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </AppProvider>
  )
}

export default App
