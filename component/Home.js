import React from 'react'
import Image from 'next/image'
import { Container, Row, Col } from 'reactstrap'
import styles from '../styles/Welcome.module.css'

export default function Home() {
  return (
    <div>
      <section className="section position-relative">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="pr-lg-5">
                <h1 className="mb-4 font-weight-normal line-height-1_4">
                  <div className={styles.title}>
                    Talenta terbaik negeri untuk perubahan revolusi 4.0
                  </div>
                </h1>
                <p className="text-muted mb-4 pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                <a href="#" className="btn btn-warning button-info text-white">
                  Find Out How <span className="ml-2 right-icon">&#8594;</span>
                </a>
              </div>
            </Col>
            <Col md={6}>
              <div className="mt-5 mt-lg-0">
                <Image src="/images/Group1195.svg" width={617} height={617} alt="" className="img-fluid mx-auto d-block"/>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
  </div>
  )
}