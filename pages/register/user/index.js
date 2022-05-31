import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Col, Container, Form, Input, Row, Button } from 'reactstrap'
import styles from '../../../styles/UserRegister.module.css'

export default function userRegister() {
  return (
    <>
      <Head>
        <title>HireJob</title>
      </Head>
      <div className={styles.hiddenOverflow}>
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
            margin: '20px 0'
          }} className={styles.fontUserRegister}>
            <h1 className='text-start'><b>Halo, Pewpeople</b></h1>
            <p className='text-start'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.
            </p>
            <div className='text-start'>
              <Form>
                <div className="form-outline mb-4" style={{
                  width: '45rem'
                }}>
                  <label className="form-label text-muted">Nama</label>
                  <Input type="text" id="name" className="form-control form-control-lg" placeholder="Masukkan Nama Panjang"/>
                </div>

                <div className="form-outline mb-4" style={{
                  width: '45rem'
                }}>
                  <label className="form-label text-muted">E-mail</label>
                  <Input type="email" id="email" className="form-control form-control-lg" placeholder="Masukkan Alamat E-mail"/>
                </div>

                <div className="form-outline mb-4" style={{
                  width: '45rem'
                }}>
                  <label className="form-label text-muted">No. Handphone</label>
                  <Input type="text" id="phone_number" className="form-control form-control-lg" placeholder="Masukkan No. Handphone"/>
                </div>

                <div className="form-outline mb-4" style={{
                  width: '45rem'
                }}>
                  <label className="form-label text-muted">Kata Sandi</label>
                  <Input type="password" id="password" className="form-control form-control-lg" placeholder="Masukkan Kata Sandi"/>
                </div>

                <div className="form-outline mb-4" style={{
                  width: '45rem'
                }}>
                  <label className="form-label text-muted">Konfirmasi Kata Sandi</label>
                  <Input type="password" id="password" className="form-control form-control-lg" placeholder="Masukkan Konfirmasi Kata Sandi"/>
                </div>

                <div className="d-flex justify-content-center">
                  <Button color='warning' size="lg" className="col-11" style={{
                    color: '#FFFFFF'
                  }}>Daftar</Button>
                </div>
                <p className="text-center text-muted mt-3 mb-0">
                  Anda sudah punya akun? <a href="/login" className="fw-bold text-body"><u style={{
                    color: '#FBB017'
                  }}>Masuk di sini</u></a>
                </p>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}
