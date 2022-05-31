import React from 'react'
import Navbar1 from '../component/Navbar1'
import Footer from '../component/Footer'

export default function Layout1(props) {
  const { children } = props
  return (
    <>
      <Navbar1 />
      <main>{ children }</main>
      <Footer />
    </>
  )
}
