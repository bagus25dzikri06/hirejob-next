import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, 
  Form, Navbar, NavbarBrand, Row, Input } from 'reactstrap'
import styles from '../../styles/TopJobs.module.css'

const home = () => {
  return (
    <div className={styles.topJobsBackground}>
      <Navbar color='faded' light className={styles.navbarTitles}>
        <NavbarBrand color='faded' className='text-white'><b>Top Jobs</b></NavbarBrand>
      </Navbar>
      <div style={{
        margin: '40px 80px'
      }}>
        <Row>
          <Col md={9}>
            <Form>
              <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
                <div className="input-group">
                  <Input type="search" placeholder="What're you searching for?" aria-describedby="button-addon1" className="form-control border-0 bg-light" />
                  <div className="input-group-append justify-content-center">
                    <FontAwesomeIcon icon={faSearch} style={{ fontSize: 40, color: "#9EA0A5" }} />
                  </div>
                </div>
              </div>
            </Form>
          </Col>
          <Col md={2}>
            <div className="dropdown px-3">
              <button className="dropbtn">Sort</button>
              <div className="dropdown-content">
                <a href="#">Sort based on Name</a>
                <a href="#">Sort based on Skill</a>
                <a href="#">Sort based on Location</a>
                <a href="#">Sort based on Freelance</a>
                <a href="#">Sort based on Fulltime</a>
              </div>
            </div>
            <Button color="primary" className='col-5'style={{ backgroundColor: '#5E50A1' }}>Search</Button>
          </Col>
        </Row>
        <Row className='py-3'>
          <Col md={3}>
            <Card>
              <CardBody>
                <img src='/images/Rectangle683.jpg' style={{ width: '150px !important', height: '150px !important' }} />
                <CardTitle className='py-2' tag='h5'>Louis Tomlinson</CardTitle>
                <div className='text-muted' tag='h6'>
                  <CardSubtitle className='mb-2'>Web Developer</CardSubtitle>
                  <CardText>
                    <FontAwesomeIcon icon={faLocationDot} className='px-1' style={{ fontSize: 20, color: "#9EA0A5" }}/>
                    Lorem Ipsum
                  </CardText>
                  <Row>
                    <Col md={3}><Button style={{ backgroundColor: '#FBB017' }}>PHP</Button></Col>
                    <Col md={4}><Button style={{ backgroundColor: '#FBB017' }}>JavaScript</Button></Col>
                    <Col md={5}>8+</Col>
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md={3}>
            <a href="/profile/user" className="custom-card">
              <Card>
                <CardBody>
                  <img src='/images/Rectangle683.jpg' style={{ width: '150px !important', height: '150px !important' }} />
                  <CardTitle className='py-2' tag='h5'>Louis Tomlinson</CardTitle>
                  <div className='text-muted' tag='h6'>
                    <CardSubtitle className='mb-2'>Web Developer</CardSubtitle>
                    <CardText>
                      <FontAwesomeIcon icon={faLocationDot} className='px-1' style={{ fontSize: 20, color: "#9EA0A5" }}/>
                      Lorem Ipsum
                    </CardText>
                    <Row>
                      <Col md={3}><Button style={{ backgroundColor: '#FBB017' }}>PHP</Button></Col>
                      <Col md={4}><Button style={{ backgroundColor: '#FBB017' }}>JavaScript</Button></Col>
                      <Col md={5}>8+</Col>
                    </Row>
                  </div>
                </CardBody>
              </Card>
            </a>
          </Col>
          <Col md={3}>
            <Card>
              <CardBody>
                <img src='/images/Rectangle683.jpg' style={{ width: '150px !important', height: '150px !important' }} />
                <CardTitle className='py-2' tag='h5'>Louis Tomlinson</CardTitle>
                <div className='text-muted' tag='h6'>
                  <CardSubtitle className='mb-2'>Web Developer</CardSubtitle>
                  <CardText>
                    <FontAwesomeIcon icon={faLocationDot} className='px-1' style={{ fontSize: 20, color: "#9EA0A5" }}/>
                    Lorem Ipsum
                  </CardText>
                  <Row>
                    <Col md={3}><Button style={{ backgroundColor: '#FBB017' }}>PHP</Button></Col>
                    <Col md={4}><Button style={{ backgroundColor: '#FBB017' }}>JavaScript</Button></Col>
                    <Col md={5}>8+</Col>
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <CardBody>
                <img src='/images/Rectangle683.jpg' style={{ width: '150px !important', height: '150px !important' }} />
                <CardTitle className='py-2' tag='h5'>Louis Tomlinson</CardTitle>
                <div className='text-muted' tag='h6'>
                  <CardSubtitle className='mb-2'>Web Developer</CardSubtitle>
                  <CardText>
                    <FontAwesomeIcon icon={faLocationDot} className='px-1' style={{ fontSize: 20, color: "#9EA0A5" }}/>
                    Lorem Ipsum
                  </CardText>
                  <Row>
                    <Col md={3}><Button style={{ backgroundColor: '#FBB017' }}>PHP</Button></Col>
                    <Col md={4}><Button style={{ backgroundColor: '#FBB017' }}>JavaScript</Button></Col>
                    <Col md={5}>8+</Col>
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className='py-3'>
          <Col md={3}>
            <Card>
              <CardBody>
                <img src='/images/Rectangle683.jpg' style={{ width: '150px !important', height: '150px !important' }} />
                <CardTitle className='py-2' tag='h5'>Louis Tomlinson</CardTitle>
                <div className='text-muted' tag='h6'>
                  <CardSubtitle className='mb-2'>Web Developer</CardSubtitle>
                  <CardText>
                    <FontAwesomeIcon icon={faLocationDot} className='px-1' style={{ fontSize: 20, color: "#9EA0A5" }}/>
                    Lorem Ipsum
                  </CardText>
                  <Row>
                    <Col md={3}><Button style={{ backgroundColor: '#FBB017' }}>PHP</Button></Col>
                    <Col md={4}><Button style={{ backgroundColor: '#FBB017' }}>JavaScript</Button></Col>
                    <Col md={5}>8+</Col>
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <CardBody>
                <img src='/images/Rectangle683.jpg' style={{ width: '150px !important', height: '150px !important' }} />
                <CardTitle className='py-2' tag='h5'>Louis Tomlinson</CardTitle>
                <div className='text-muted' tag='h6'>
                  <CardSubtitle className='mb-2'>Web Developer</CardSubtitle>
                  <CardText>
                    <FontAwesomeIcon icon={faLocationDot} className='px-1' style={{ fontSize: 20, color: "#9EA0A5" }}/>
                    Lorem Ipsum
                  </CardText>
                  <Row>
                    <Col md={3}><Button style={{ backgroundColor: '#FBB017' }}>PHP</Button></Col>
                    <Col md={4}><Button style={{ backgroundColor: '#FBB017' }}>JavaScript</Button></Col>
                    <Col md={5}>8+</Col>
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <CardBody>
                <img src='/images/Rectangle683.jpg' style={{ width: '150px !important', height: '150px !important' }} />
                <CardTitle className='py-2' tag='h5'>Louis Tomlinson</CardTitle>
                <div className='text-muted' tag='h6'>
                  <CardSubtitle className='mb-2'>Web Developer</CardSubtitle>
                  <CardText>
                    <FontAwesomeIcon icon={faLocationDot} className='px-1' style={{ fontSize: 20, color: "#9EA0A5" }}/>
                    Lorem Ipsum
                  </CardText>
                  <Row>
                    <Col md={3}><Button style={{ backgroundColor: '#FBB017' }}>PHP</Button></Col>
                    <Col md={4}><Button style={{ backgroundColor: '#FBB017' }}>JavaScript</Button></Col>
                    <Col md={5}>8+</Col>
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <CardBody>
                <img src='/images/Rectangle683.jpg' style={{ width: '150px !important', height: '150px !important' }} />
                <CardTitle className='py-2' tag='h5'>Louis Tomlinson</CardTitle>
                <div className='text-muted' tag='h6'>
                  <CardSubtitle className='mb-2'>Web Developer</CardSubtitle>
                  <CardText>
                    <FontAwesomeIcon icon={faLocationDot} className='px-1' style={{ fontSize: 20, color: "#9EA0A5" }}/>
                    Lorem Ipsum
                  </CardText>
                  <Row>
                    <Col md={3}><Button style={{ backgroundColor: '#FBB017' }}>PHP</Button></Col>
                    <Col md={4}><Button style={{ backgroundColor: '#FBB017' }}>JavaScript</Button></Col>
                    <Col md={5}>8+</Col>
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className='py-3'>
          <Col md={3}>
            <Card>
              <CardBody>
                <img src='/images/Rectangle683.jpg' style={{ width: '150px !important', height: '150px !important' }} />
                <CardTitle className='py-2' tag='h5'>Louis Tomlinson</CardTitle>
                <div className='text-muted' tag='h6'>
                  <CardSubtitle className='mb-2'>Web Developer</CardSubtitle>
                  <CardText>
                    <FontAwesomeIcon icon={faLocationDot} className='px-1' style={{ fontSize: 20, color: "#9EA0A5" }}/>
                    Lorem Ipsum
                  </CardText>
                  <Row>
                    <Col md={3}><Button style={{ backgroundColor: '#FBB017' }}>PHP</Button></Col>
                    <Col md={4}><Button style={{ backgroundColor: '#FBB017' }}>JavaScript</Button></Col>
                    <Col md={5}>8+</Col>
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <CardBody>
                <img src='/images/Rectangle683.jpg' style={{ width: '150px !important', height: '150px !important' }} />
                <CardTitle className='py-2' tag='h5'>Louis Tomlinson</CardTitle>
                <div className='text-muted' tag='h6'>
                  <CardSubtitle className='mb-2'>Web Developer</CardSubtitle>
                  <CardText>
                    <FontAwesomeIcon icon={faLocationDot} className='px-1' style={{ fontSize: 20, color: "#9EA0A5" }}/>
                    Lorem Ipsum
                  </CardText>
                  <Row>
                    <Col md={3}><Button style={{ backgroundColor: '#FBB017' }}>PHP</Button></Col>
                    <Col md={4}><Button style={{ backgroundColor: '#FBB017' }}>JavaScript</Button></Col>
                    <Col md={5}>8+</Col>
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <CardBody>
                <img src='/images/Rectangle683.jpg' style={{ width: '150px !important', height: '150px !important' }} />
                <CardTitle className='py-2' tag='h5'>Louis Tomlinson</CardTitle>
                <div className='text-muted' tag='h6'>
                  <CardSubtitle className='mb-2'>Web Developer</CardSubtitle>
                  <CardText>
                    <FontAwesomeIcon icon={faLocationDot} className='px-1' style={{ fontSize: 20, color: "#9EA0A5" }}/>
                    Lorem Ipsum
                  </CardText>
                  <Row>
                    <Col md={3}><Button style={{ backgroundColor: '#FBB017' }}>PHP</Button></Col>
                    <Col md={4}><Button style={{ backgroundColor: '#FBB017' }}>JavaScript</Button></Col>
                    <Col md={5}>8+</Col>
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <CardBody>
                <img src='/images/Rectangle683.jpg' style={{ width: '150px !important', height: '150px !important' }} />
                <CardTitle className='py-2' tag='h5'>Louis Tomlinson</CardTitle>
                <div className='text-muted' tag='h6'>
                  <CardSubtitle className='mb-2'>Web Developer</CardSubtitle>
                  <CardText>
                    <FontAwesomeIcon icon={faLocationDot} className='px-1' style={{ fontSize: 20, color: "#9EA0A5" }}/>
                    Lorem Ipsum
                  </CardText>
                  <Row>
                    <Col md={3}><Button style={{ backgroundColor: '#FBB017' }}>PHP</Button></Col>
                    <Col md={4}><Button style={{ backgroundColor: '#FBB017' }}>JavaScript</Button></Col>
                    <Col md={5}>8+</Col>
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className='py-3'>
          <Col md={3}>
            <Card>
              <CardBody>
                <img src='/images/Rectangle683.jpg' style={{ width: '150px !important', height: '150px !important' }} />
                <CardTitle className='py-2' tag='h5'>Louis Tomlinson</CardTitle>
                <div className='text-muted' tag='h6'>
                  <CardSubtitle className='mb-2'>Web Developer</CardSubtitle>
                  <CardText>
                    <FontAwesomeIcon icon={faLocationDot} className='px-1' style={{ fontSize: 20, color: "#9EA0A5" }}/>
                    Lorem Ipsum
                  </CardText>
                  <Row>
                    <Col md={3}><Button style={{ backgroundColor: '#FBB017' }}>PHP</Button></Col>
                    <Col md={4}><Button style={{ backgroundColor: '#FBB017' }}>JavaScript</Button></Col>
                    <Col md={5}>8+</Col>
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <CardBody>
                <img src='/images/Rectangle683.jpg' style={{ width: '150px !important', height: '150px !important' }} />
                <CardTitle className='py-2' tag='h5'>Louis Tomlinson</CardTitle>
                <div className='text-muted' tag='h6'>
                  <CardSubtitle className='mb-2'>Web Developer</CardSubtitle>
                  <CardText>
                    <FontAwesomeIcon icon={faLocationDot} className='px-1' style={{ fontSize: 20, color: "#9EA0A5" }}/>
                    Lorem Ipsum
                  </CardText>
                  <Row>
                    <Col md={3}><Button style={{ backgroundColor: '#FBB017' }}>PHP</Button></Col>
                    <Col md={4}><Button style={{ backgroundColor: '#FBB017' }}>JavaScript</Button></Col>
                    <Col md={5}>8+</Col>
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <CardBody>
                <img src='/images/Rectangle683.jpg' style={{ width: '150px !important', height: '150px !important' }} />
                <CardTitle className='py-2' tag='h5'>Louis Tomlinson</CardTitle>
                <div className='text-muted' tag='h6'>
                  <CardSubtitle className='mb-2'>Web Developer</CardSubtitle>
                  <CardText>
                    <FontAwesomeIcon icon={faLocationDot} className='px-1' style={{ fontSize: 20, color: "#9EA0A5" }}/>
                    Lorem Ipsum
                  </CardText>
                  <Row>
                    <Col md={3}><Button style={{ backgroundColor: '#FBB017' }}>PHP</Button></Col>
                    <Col md={4}><Button style={{ backgroundColor: '#FBB017' }}>JavaScript</Button></Col>
                    <Col md={5}>8+</Col>
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <CardBody>
                <img src='/images/Rectangle683.jpg' style={{ width: '150px !important', height: '150px !important' }} />
                <CardTitle className='py-2' tag='h5'>Louis Tomlinson</CardTitle>
                <div className='text-muted' tag='h6'>
                  <CardSubtitle className='mb-2'>Web Developer</CardSubtitle>
                  <CardText>
                    <FontAwesomeIcon icon={faLocationDot} className='px-1' style={{ fontSize: 20, color: "#9EA0A5" }}/>
                    Lorem Ipsum
                  </CardText>
                  <Row>
                    <Col md={3}><Button style={{ backgroundColor: '#FBB017' }}>PHP</Button></Col>
                    <Col md={4}><Button style={{ backgroundColor: '#FBB017' }}>JavaScript</Button></Col>
                    <Col md={5}>8+</Col>
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}

home.layout = 'L3'
export default home