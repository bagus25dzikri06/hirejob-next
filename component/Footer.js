import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <div>
      <footer className="text-center text-lg-start" style={{
        backgroundColor: '#5E50A1',
      }}>
        <div className="container p-4">
          <div className="row text-white">
            <div className="col-lg-5 col-md-12 mb-4 mb-md-0">
              <Image src='/images/Group978_1.svg' className="text-uppercase" width={178} height={50} />
              <p className="mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.
              </p>
            </div>
          </div>
          <hr className="text-white" style={{
            width: '1260px',
            margin: 'auto'
          }}/>
          <div className="text-white mt-4">
            <div className="row">
              <div className="col-md-8">2020 Pewworld. All right reserved</div>
              <div className="col-md-2 text-end">Telepon</div>
              <div className="col-md-2 text-end">E-mail</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
