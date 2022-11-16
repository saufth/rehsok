// Components
import AppLayout from '../app/components/AppLayout'
import AppProvider from '../app/context/AppProvider'
import { Analytics } from '@vercel/analytics/react'
// Styles
import '../styles/globals.css'

const App = ({ Component, pageProps }) => {
  return (
    <AppProvider>
      <AppLayout>
        <Component {...pageProps} />
        <Analytics />
      </AppLayout>
    </AppProvider>
  )
}

export default App
