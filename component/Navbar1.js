import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar1() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" href="/">
              <Image src="/images/Group980_1.svg" width={178} height={86} layout='fixed' />
            </Link>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item px-3">
                  <Link href="/login">
                    <button type="button" className="btn btn-outline-primary">Masuk</button>
                  </Link>
                </li>
                <li className="nav-item px-3">
                  <Link href="/register/user">
                    <button type="button" className="btn btn-primary" style={{
                      backgroundColor: '#5E50A1'
                    }}>Daftar sebagai Worker</button>
                  </Link>
                </li>
                <li className="nav-item px-3">
                  <Link href="/register/recruiter">
                    <button type="button" className="btn btn-primary" style={{
                      backgroundColor: '#5E50A1'
                    }}>Daftar sebagai Recruiter</button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
      </nav>
    </div>
  )
}
