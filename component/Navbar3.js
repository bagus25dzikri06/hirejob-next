import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'

export default function Navbar3() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" href="/">
              <Image src="/images/Group980_1.svg" width={178} height={86} layout='fixed' />
            </Link>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item px-4">
                  <Link href="#">
                    <FontAwesomeIcon icon={faBell} style={{ fontSize: 30 }}/>
                  </Link>
                </li>
                <li className="nav-item px-4">
                  <Link href="#">
                    <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: 30 }}/>
                  </Link>
                </li>
                <li className="nav-item px-4">
                  <Link href="#">
                    <FontAwesomeIcon icon={faUser} style={{ fontSize: 30 }}/>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
      </nav>
    </div>
  )
}
