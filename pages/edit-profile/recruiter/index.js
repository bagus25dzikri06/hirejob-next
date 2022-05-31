import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPen } from '@fortawesome/free-solid-svg-icons'
import styles from '../../../styles/Profile.module.css'
import { Row, Col, Card, CardTitle, CardText, Button, Form, FormGroup, Label, Input } from 'reactstrap'

const recruiterEditProfile = () => {
  return (
    <div className={styles.profileBackground}>
      <Row className={styles.contentMargin}>
        <Col sm="3" className={styles.profileMargin}>
          <Card body>
            <Image src="/images/Rectangle683.jpg" className={styles.imageProfile} width={200} height={400} alt="..." />
            <Button color="primary" outline className='mt-4 col-12' style={{ color: '#5E50A1 !important' }}>
              <FontAwesomeIcon icon={faPen} style={{ fontSize: 20 }}/>
              Edit
            </Button>
            <CardTitle tag="h1" className='mt-4'>Louis Tomlinson</CardTitle>
            <p>Web Developer</p>
            <div className='text-muted'>
              <CardText>
                <FontAwesomeIcon icon={faLocationDot} className='px-2' style={{ fontSize: 20, color: "#9EA0A5" }}/>
                Purwokerto, Jawa Tengah
              </CardText>
              <CardText>Freelancer</CardText>
            </div>
          </Card>
          <Button color="primary" className='mt-2 col-12' style={{ backgroundColor: '#5E50A1' }}>Simpan</Button>
          <a href="/profile/recruiter">
            <Button color="primary" outline className='mt-2 col-12' style={{ color: '#5E50A1' }}>Batal</Button>
          </a>
        </Col>
        <Col sm="8" className={styles.profileMargin}>
          <Row>
            <Col>
              <Card body>
                <CardTitle tag="h5">
                  Data Diri
                </CardTitle>
                <hr />
                <Form>
                  <FormGroup className='py-2'>
                    <Label for='company_name' className='text-muted'>Nama Perusahaan</Label>
                    <Input id="company_name" name="company_name" placeholder="Masukkan nama perusahaan" />
                  </FormGroup>
                  <FormGroup>
                    <Label for='company_field' className='text-muted'>Bidang</Label>
                    <Input id="company_field" name="company_field" placeholder="Masukkan bidang perusahaan, ex.: Financial" />
                  </FormGroup>
                  <FormGroup>
                    <Label for='city' className='text-muted'>Kota</Label>
                    <Input id="city" name="city" placeholder="Masukkan kota" />
                  </FormGroup>
                  <FormGroup className='py-2'>
                    <Label for='short_description' className='text-muted'>Deskripsi Singkat</Label>
                    <Input id="short_description" name="short_description" placeholder="Tuliskan deskripsi singkat" type='textarea' rows='5' />
                  </FormGroup>
                  <FormGroup className='py-2'>
                    <Label for='email' className='text-muted'>E-mail</Label>
                    <Input id="email" name="email" placeholder="Masukkan e-mail" type='email' />
                  </FormGroup>
                  <FormGroup className='py-2'>
                    <Label for='instagram_link' className='text-muted'>Instagram</Label>
                    <Input id="instagram_link" name="instagram_link" placeholder="Masukkan nama Instagram" />
                  </FormGroup>
                  <FormGroup className='py-2'>
                    <Label for='phone_number' className='text-muted'>Nomor telepon</Label>
                    <Input id="phone_number" name="phone_number" placeholder="Masukkan nomor telepon" />
                  </FormGroup>
                  <FormGroup className='py-2'>
                    <Label for='linkedin_link' className='text-muted'>LinkedIn</Label>
                    <Input id="linkedin_link" name="linkedin_link" placeholder="Masukkan nama LinkedIn" type='email' />
                  </FormGroup>
                </Form>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

recruiterEditProfile.layout = 'L3'
export default recruiterEditProfile