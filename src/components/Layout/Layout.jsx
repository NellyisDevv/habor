import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Nav from '../Nav/Nav'
import Footer from '../Footer'

function Layout() {
  return (
    <>
      {/* Work on this Nav to make sure the burger menu closes when opening a new page on mobile, I believe this has to do with how state is working on the navigation menu and the fact that our website is keeping its state */}
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
