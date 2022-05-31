import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar2() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" href="#">
              <Image src="/images/Group980_1.svg" width={178} height={86} layout='fixed' />
            </Link>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto ms-4">
                <li className="nav-item px-4">
                  <Link className="nav-link active" aria-current="page" href="/home">
                    Home
                  </Link>
                </li>
              </ul>
              <div className="d-flex">
                <Link href="/profile/user">
                  <button type="button" className="btn btn-primary" style={{
                    backgroundColor: '#5E50A1'
                  }}>Profile</button>
                </Link>
              </div>
            </div>
          </div>
      </nav>
    </div>
  )
}
