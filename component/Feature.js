import React from 'react'
import Image from 'next/image'
import { Col, Container, Row } from 'reactstrap'
import styles from '../styles/Feature.module.css'

const FeatureBox = (props) => {
  return (
    <>
      {
        props.features.map((feature, key) => 
          (feature.id % 2 !== 0) ?
          <Row key={key} className={feature.id === 1 ? "align-items-center" : "align-items-center mt-5"}>
            <Col md={6} className='text-center'>
              <div>
                <Image src={feature.img} width={697} height={530} alt="" className="img-fluid d-block mx-auto"/>
              </div>
            </Col>
            <Col md={6} className='text-start'>
              <div className="pr-lg-5">
                <h1 className="mb-4 font-weight-normal line-height-1_4">
                  <div className={styles.title}>
                    Kenapa harus mencari talent di Peworld?
                  </div>
                </h1>
                <ul type='none' className="text-muted mb-4 pb-2">
                  <li className="py-3">
                    <Row>
                      <Col md={1}>
                        <Image src="/images/tick1.svg" width={24} height={24} alt="" className="img-fluid d-block mx-auto mr-3"/>
                      </Col>
                      <Col>
                        Lorem ipsum dolor sit amet.
                      </Col>
                    </Row>
                  </li>
                  <li className="py-3">
                    <Row>
                      <Col md={1}>
                        <Image src="/images/tick1.svg" width={24} height={24} alt="" className="img-fluid d-block mx-auto mr-3"/>
                      </Col>
                      <Col>
                        Lorem ipsum dolor sit amet.
                      </Col>
                    </Row>
                  </li>
                  <li className="py-3">
                    <Row>
                      <Col md={1}>
                        <Image src="/images/tick1.svg" width={24} height={24} alt="" className="img-fluid d-block mx-auto mr-3"/>
                      </Col>
                      <Col>
                        Lorem ipsum dolor sit amet.
                      </Col>
                    </Row>
                  </li>
                  <li className="py-3">
                    <Row>
                      <Col md={1}>
                        <Image src="/images/tick1.svg" width={24} height={24} alt="" className="img-fluid d-block mx-auto mr-3"/>
                      </Col>
                      <Col>
                        Lorem ipsum dolor sit amet.
                      </Col>
                    </Row>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          :
          <Row key={key} className="align-items-center mt-5">
            <Col md={6} className='text-start'>
              <div className="pr-lg-5">
                <h1 className="mb-4 font-weight-normal line-height-1_4">
                  <div className={styles.title}>
                    Talent's Skills
                  </div>
                </h1>
                <p className="text-muted mb-4 pb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.
                </p>
                <ul type='none' className="text-muted mb-4 pb-2">
                  <li className="py-3">
                    <Row>
                      <Col md={6}>
                        <Row>
                          <Col md={3}>
                            <Image src="/images/tick13.svg" width={24} height={24} alt="" className="img-fluid d-block mx-auto mr-3"/>
                          </Col>
                          <Col>
                            Java
                          </Col>
                        </Row>
                      </Col>
                      <Col md={6}>
                        <Row>
                          <Col md={3}>
                            <Image src="/images/tick13.svg" width={24} height={24} alt="" className="img-fluid d-block mx-auto mr-3"/>
                          </Col>
                          <Col>
                            Golang
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </li>
                  <li className="py-3">
                    <Row>
                      <Col md={6}>
                        <Row>
                          <Col md={3}>
                            <Image src="/images/tick13.svg" width={24} height={24} alt="" className="img-fluid d-block mx-auto mr-3"/>
                          </Col>
                          <Col>
                            Kotlin
                          </Col>
                        </Row>
                      </Col>
                      <Col md={6}>
                        <Row>
                          <Col md={3}>
                            <Image src="/images/tick13.svg" width={24} height={24} alt="" className="img-fluid d-block mx-auto mr-3"/>
                          </Col>
                          <Col>
                            C++
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </li>
                  <li className="py-3">
                    <Row>
                      <Col md={6}>
                        <Row>
                          <Col md={3}>
                            <Image src="/images/tick13.svg" width={24} height={24} alt="" className="img-fluid d-block mx-auto mr-3"/>
                          </Col>
                          <Col>
                            PHP
                          </Col>
                        </Row>
                      </Col>
                      <Col md={6}>
                        <Row>
                          <Col md={3}>
                            <Image src="/images/tick13.svg" width={24} height={24} alt="" className="img-fluid d-block mx-auto mr-3"/>
                          </Col>
                          <Col>
                            Ruby
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </li>
                  <li className="py-3">
                    <Row>
                      <Col md={6}>
                        <Row>
                          <Col md={3}>
                            <Image src="/images/tick13.svg" width={24} height={24} alt="" className="img-fluid d-block mx-auto mr-3"/>
                          </Col>
                          <Col>
                            JavaScript
                          </Col>
                        </Row>
                      </Col>
                      <Col md={6}>
                        <Row>
                          <Col md={3}>
                            <Image src="/images/tick13.svg" width={24} height={24} alt="" className="img-fluid d-block mx-auto mr-3"/>
                          </Col>
                          <Col>
                            10+ Bahasa lainnya
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={6} className="mt-5 mt-sm-0 text-center">
              <div>
                <Image src={feature.img} width={697} height={530} alt="" className="img-fluid d-block mx-auto"/>
              </div>
            </Col>
          </Row>
        )
      }
    </>
  )
}

export default function Feature() {
  const features = [
    {
      id : 1, 
      img : "/images/Group1194.svg"
    },
    {
      id : 2, 
      img : "/images/Group1196.svg"
    },
  ];
  return (
    <section className="section" id="feature">
      <Container>
        <FeatureBox features={features} />
      </Container>
    </section>
  )
}