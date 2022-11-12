// Hooks
import { createContext, useState } from 'react'

const initialState = {
  contact: true
}

export const AppContext = createContext()

const AppProvider = ({children}) => {
  const appState = useState(initialState)
  const ContextProvider = AppContext.Provider

  return (
    <ContextProvider value={appState}>
      {children}
    </ContextProvider>
  )
}

export default AppProvider
