import React from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

const AuthContext = ({children}) => {
  // useEffect(()=>{
  //   setLocalStorage()
  //   getLocalStorage()
  // },)
  return (
    <div>
      {children}
    </div>
  )
}

export default AuthContext