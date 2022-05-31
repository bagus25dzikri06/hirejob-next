import React from 'react'
import Footer from '../component/Footer'
import Navbar2 from '../component/Navbar2'

export default function Layout2(props) {
  const { children } = props
  return (
    <>
      <Navbar2 />
      <main>{ children }</main>
      <Footer />
    </>
  )
}
