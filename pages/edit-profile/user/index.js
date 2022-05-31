import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPen } from '@fortawesome/free-solid-svg-icons'
import styles from '../../../styles/Profile.module.css'
import { Row, Col, Card, CardTitle, CardText, Button, Form, FormGroup, Label, Input } from 'reactstrap'

const userEditProfile = () => {
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
          <a href="/profile/user">
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
                    <Label for='job_position' className='text-muted'>Posisi</Label>
                    <Input id="job_position" name="job_position" placeholder="Masukkan posisi" />
                  </FormGroup>
                  <FormGroup>
                    <Label for='job_desk' className='text-muted'>Job Desk</Label>
                    <Input id="job_desk" name="job_desk" placeholder="Masukkan job desk" />
                  </FormGroup>
                  <FormGroup>
                    <Label for='domicile' className='text-muted'>Domisili</Label>
                    <Input id="domicile" name="domicile" placeholder="Masukkan domisili" />
                  </FormGroup>
                  <FormGroup className='py-2'>
                    <Label for='workplace' className='text-muted'>Tempat Kerja</Label>
                    <Input id="workplace" name="workplace" placeholder="Masukkan tempat kerja" />
                  </FormGroup>
                  <FormGroup className='py-2'>
                    <Label for='short_description' className='text-muted'>Deskripsi Singkat</Label>
                    <Input id="short_description" name="short_description" placeholder="Tuliskan deskripsi singkat" type='textarea' rows='5' />
                  </FormGroup>
                </Form>
              </Card>
            </Col>
          </Row>
          <Row className='mt-4'>
            <Col>
              <Card body>
                <CardTitle tag="h5">
                  Skill
                </CardTitle>
                <hr />
                <Form>
                  <Row className='py-2'>
                    <Col md={10}>
                      <FormGroup>
                        <Input id="skill" name="skill" placeholder="Skill" />
                      </FormGroup>
                    </Col>
                    <Col className='text-center'>
                      <Button color="primary" style={{
                        backgroundColor: '#FBB017'
                      }}>Simpan</Button>
                    </Col>
                  </Row>
                </Form>
              </Card>
            </Col>
          </Row>
          <Row className='mt-4'>
            <Col>
              <Card body>
                <CardTitle tag="h5">
                  Pengalaman Kerja
                </CardTitle>
                <hr />
                <Form>
                  <FormGroup className='py-2'>
                    <Label for='job_position' className='text-muted'>Posisi</Label>
                    <Input id="job_position" name="job_position" placeholder="Masukkan nama lengkap" />
                  </FormGroup>
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label for='company_name' className='text-muted'>Nama Perusahaan</Label>
                        <Input id="company_name" name="company_name" placeholder="Masukkan nama perusahaan" />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for='first_month_of_work' className='text-muted'>Bulan/Tahun</Label>
                        <Input id="first_month_of_work" name="first_month_of_work" type='month' />
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup className='py-2'>
                    <Label for='short_description' className='text-muted'>Deskripsi Singkat</Label>
                    <Input id="short_description" name="short_description" placeholder="Tuliskan deskripsi singkat" type='textarea' rows='5' />
                  </FormGroup>
                  <Button color='warning' outline className='col-12'><b>Tambah pengalaman kerja</b></Button>
                </Form>
              </Card>
            </Col>
          </Row>
          <Row className='mt-4'>
            <Col>
              <Card body>
                <CardTitle tag="h5">
                  Portofolio
                </CardTitle>
                <hr />
                <Form>
                  <FormGroup className='py-2'>
                    <Label for='app_name' className='text-muted'>Nama Aplikasi</Label>
                    <Input id="app_name" name="app_name" placeholder="Masukkan nama aplikasi" />
                  </FormGroup>
                  <FormGroup className='py-2'>
                    <Label for='app_repository_link' className='text-muted'>Link Repository</Label>
                    <Input id="app_repository_link" name="app_repository_link" placeholder="Masukkan link repository" />
                  </FormGroup>
                  <FormGroup className='py-2'>
                    <Label className='text-muted'>Jenis Portofolio</Label>
                    <Row>
                      <Col md={6}>
                        <FormGroup check>
                          <Input name="Mobile App" type="radio" />
                          <Label check>Aplikasi Mobile</Label>
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup check>
                          <Input name="Web App" type="radio" />
                          <Label check>Aplikasi Web</Label>
                        </FormGroup>
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup className='py-2'>
                    <Label for='app_pict_link' className='text-muted'>Link Screenshot Aplikasi</Label>
                    <Input id="app_pict_link" name="app_pict_link" placeholder="Masukkan link screenshot aplikasi" />
                  </FormGroup>
                  <Button color='warning' outline className='col-12'><b>Tambah portofolio</b></Button>
                </Form>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

userEditProfile.layout = 'L3'
export default userEditProfile