import Image from 'next/image'
import React from 'react'
import { Col, Form, Input, Row, Button, Container } from 'reactstrap'
import styles from '../../styles/Login.module.css'

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
            <h1 className='text-start'><b>Halo, Pewpeople</b></h1>
            <p className='text-start'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.
            </p>
            <div className='text-start'>
              <Form>
                <div className="form-outline mb-4" style={{
                  width: '45rem'
                }}>
                  <label className="form-label text-muted">E-mail</label>
                  <Input type="email" id="email" className="form-control form-control-lg" placeholder="Masukkan Alamat E-mail"/>
                </div>

                <div className="form-outline mb-4" style={{
                  width: '45rem'
                }}>
                  <label className="form-label text-muted">Kata Sandi</label>
                  <Input type="password" id="password" className="form-control form-control-lg" placeholder="Masukkan Kata Sandi"/>
                </div>

                <div className="d-flex justify-content-end mb-2">
                  <a href="/reset-password/email-confirm" className="text-body">Lupa kata sandi?</a>
                </div>

                <div className="d-flex justify-content-center">
                  <Button color='warning' className="col-11" style={{
                    color: '#FFFFFF'
                  }}>Masuk</Button>
                </div>

                <p className="text-center text-muted mt-3 mb-0">
                  Anda belum punya akun?
                </p>

                <p className="text-center text-muted mt-3 mb-0">
                  <a href="/register/user" className="fw-bold text-body"><u style={{
                    color: '#FBB017'
                  }}>Daftar di sini sebagai Worker</u></a>
                </p>

                <p className="text-center text-muted mt-3 mb-0">
                  <a href="/register/recruiter" className="fw-bold text-body"><u style={{
                    color: '#FBB017'
                  }}>Daftar di sini sebagai Recruiter</u></a>
                </p>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}
