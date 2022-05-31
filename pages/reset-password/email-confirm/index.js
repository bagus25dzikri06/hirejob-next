import Image from 'next/image'
import React from 'react'
import { Col, Form, Input, Row, Button, Container } from 'reactstrap'
import styles from '../../../styles/Login.module.css'

export default function login() {
  return (
    <>
      <div className={styles.xLoginOverflow}>
        <Row>
          <Col md={6} className='text-center'>
            <Container style={{
              position: 'relative',
              textAlign: 'center',
              color: 'white'
            }}>
              <Image src='/images/true-agency-o4UhdLv5jbQ-unsplash1.jpg' width='750' height='922' style={{
                filter: 'opacity(0.7) drop-shadow(0 0 0 #5E50A1)'
              }}/>
              <div className={styles.topLeft}>
                <Image src='/images/Group978_1.svg' width={178} height={50} />
              </div>
              <div className={styles.centered}>
                <h1 className='text-start' style={{ fontSize: '50px' }}><b>Temukan developer berbakat & terbaik di berbagai bidang keahlian</b></h1>
              </div>
            </Container>
          </Col>
          <Col style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100vh'
          }} className={styles.fontUserLogin}>
            <h1 className='text-start'><b>Reset password</b></h1>
            <p className='text-start'>
              Enter your user account's verified email address and we will send you a password reset link.
            </p>
            <div className='text-start'>
              <Form>
                <div className="form-outline mb-4" style={{
                  width: '45rem'
                }}>
                  <label className="form-label text-muted">E-mail</label>
                  <Input type="email" id="email" className="form-control form-control-lg" placeholder="Masukkan Alamat E-mail"/>
                </div>

                <div className="d-flex justify-content-center">
                  <Button color='warning' className="col-11" style={{
                    color: '#FFFFFF'
                  }}>Send password reset email</Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}
