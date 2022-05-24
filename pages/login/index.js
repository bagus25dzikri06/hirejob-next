import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Col, Form, Input, Row, Button } from 'reactstrap'
import styles from '../../styles/Login.module.css'

export default function login() {
  return (
    <>
      <Head>
        <title>HireJob</title>
      </Head>
      <div>
        <Row>
          <Col md={6} className='text-center'>
            <Image src='/images/true-agency-o4UhdLv5jbQ-unsplash1.jpg' width='750' height='922'/>
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
                  <label className="form-label text-muted" for="form3Example3cg">E-mail</label>
                  <Input type="email" id="email" className="form-control form-control-lg" placeholder="Masukkan Alamat E-mail"/>
                </div>

                <div className="form-outline mb-4" style={{
                  width: '45rem'
                }}>
                  <label className="form-label text-muted" for="form3Example4cdg">Kata Sandi</label>
                  <Input type="password" id="password" className="form-control form-control-lg" placeholder="Masukkan Kata Sandi"/>
                </div>

                <div class="d-flex justify-content-center">
                  <Button color='warning' size="lg" className="col-11" style={{
                    color: '#FFFFFF'
                  }}>Masuk</Button>
                </div>
                <p class="text-center text-muted mt-3 mb-0">
                  Anda belum punya akun? <a href="#" className="fw-bold text-body"><u style={{
                    color: '#FBB017'
                  }}>Daftar di sini</u></a>
                </p>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}
