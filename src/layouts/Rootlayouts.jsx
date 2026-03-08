import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, NavBar } from '../components'

export const Rootlayouts = () => {
  return (
    <>
        <main>
          <NavBar/>
            <Outlet/>
          <Footer/>
        </main>
    </>
  )
}
