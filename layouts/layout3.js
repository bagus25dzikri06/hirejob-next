import React from 'react'
import Footer from '../component/Footer'
import Navbar3 from '../component/Navbar3'

export default function Layout3(props) {
  const { children } = props
  return (
    <>
      <Navbar3 />
      <main>{ children }</main>
      <Footer />
    </>
  )
}
