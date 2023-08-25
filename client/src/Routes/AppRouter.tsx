import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Auth from '../Pages/Auth'
import Home from '../Pages/Home'

type Props = {}

export default function AppRouter({}: Props) {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="auth/*" element={<Auth/>}/>
        </Routes>
    </div>
  )
}