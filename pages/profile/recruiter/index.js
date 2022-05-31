import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import styles from '../../../styles/Profile.module.css'
import { CardTitle, CardText, Button } from 'reactstrap'

const recruiterProfile = () => {
  return (
    <div className={styles.profileBackground}>
      <div className='text-center' style={{
        margin: '140px 140px'
      }}>
        <Image src="/images/Rectangle683.jpg" className={styles.imageProfile} width={300} height={400} alt="..." />
        <CardTitle tag="h1">PT. Martabat Jaya Abadi</CardTitle>
        <p>Financial</p>
        <div className='text-muted'>
          <CardText>
              <FontAwesomeIcon icon={faLocationDot} className='px-2' style={{ fontSize: 20, color: "#9EA0A5" }}/>
              Purwokerto, Jawa Tengah
          </CardText>
          <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. 
          Curabitur eu lacus fringilla, vestibulum risus at.</CardText>
        </div>
        <a href="/edit-profile/recruiter">
          <Button color="primary" className='mt-2 col-2' style={{ backgroundColor: '#5E50A1' }}>Edit Profile</Button>
        </a>
        
        <div className='text-muted py-4'>
          <CardText>
            <Image src='/images/mail4.svg'width={23} height={23} />&nbsp;martabatjaya@gmail.com
          </CardText>
          <CardText>
            <Image src='/images/instagram.svg'width={23} height={23} />&nbsp;martabat_jaya
          </CardText>
          <CardText>
            <Image src='/images/phone.svg'width={23} height={23} />&nbsp;0821-8190-1821
          </CardText>
          <CardText>
            <Image src='/images/linkedin1.svg'width={23} height={23} />&nbsp;Martabat Jaya Abadi
          </CardText>
        </div>
      </div>
    </div>
  )
}

recruiterProfile.layout = 'L3'
export default recruiterProfile