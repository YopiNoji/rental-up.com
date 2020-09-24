import * as React from 'react'

// import { useAuthReducer } from '@/hooks/useAuth'
// import { useRequestReducer } from '@/hooks/useRequest'

const ReducerContext = React.createContext({})

export const Provider: React.FC = ({ children }) => {
  const value = {
    // auth: useAuthReducer(),
    // request: useRequestReducer(),
  }

  return (
    <ReducerContext.Provider value={value}>
      {children}
    </ReducerContext.Provider>
  )
}

export const useProvider:unknown = () => {
  const context = React.useContext(ReducerContext)

  if (context === undefined) {
    throw new Error('useProvider must be used within a BOAppProvider')
  }
  return context
}
