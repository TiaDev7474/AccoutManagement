import {createContext, PropsWithChildren, useEffect, useState}  from 'react'
import axios from 'axios'

interface IthemeContext {
  connected: boolean,
  getConnection: () => void

}
const AuthContext = createContext<IthemeContext>({
  connected: false,
  getConnection: () => {},
});

function GlobalContext({children}:PropsWithChildren) {
  const [connected,setConnected] = useState(false)
  const getConnection = () =>{

  }
  return (
    <AuthContext.Provider value={{connected,getConnection}}>
        {children}
    </AuthContext.Provider>
  )
}

export  {GlobalContext}
export default AuthContext