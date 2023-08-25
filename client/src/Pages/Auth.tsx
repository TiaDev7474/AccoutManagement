import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Interfaces/Login'
import Signup from '../Interfaces/Signup'
import Confirmation from '../Interfaces/Confirmation'
import Reset from '../Interfaces/Reset'

type Props = {}

const Auth = (props: Props) => {
  return (
    <Routes >
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/confirmation' element={<Confirmation/>}/>
      <Route path='/reset' element={<Reset/>}/>
  </Routes>
  )
}

export default Auth