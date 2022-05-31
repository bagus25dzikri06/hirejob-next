import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/Opinion.module.css'

export default function Opinion() {
  return (
    <div className={styles.backgroundOpinion}>
      <div className="container mx-auto mt-4 py-5">
        <div className="row">
          <div className="col-md-6">
            <h3 className="mb-3">
              <div className={styles.fontOpinion}><h1>Their opinions about Peworld</h1></div>
            </h3>
          </div>
          <div className="col-md-6 text-end">
            <a className="btn btn-primary mr-3" href="#carouselExampleIndicators2" role="button" data-slide="prev">
              <FontAwesomeIcon
                icon={faArrowLeft}
                style={{ fontSize: 20, color: "white" }}
              />
            </a>
            &nbsp;
            <a className="btn btn-primary" href="#carouselExampleIndicators2" role="button" data-slide="next">
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ fontSize: 20, color: "white" }}
              />
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card w-100">
              <Image src="/images/Harry_Styles_November_2014.jpg" className={styles.imageOpinion} width={200} height={600} alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title" style={{
                    fontSize: "30px"
                }}><b>Niall Horan</b></h5>
                <h6 className="card-subtitle mb-2 text-muted">Web Developer</h6>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>    
          <div className="col-md-4">
            <div className="card w-100">
              <Image src="/images/41A8cyFbSzL.jpg" className={styles.imageOpinion} width={200} height={600} alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title" style={{
                    fontSize: "30px"
                }}><b>Niall Horan</b></h5>
                <h6 className="card-subtitle mb-2 text-muted">Web Developer</h6>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>    
          <div className="col-md-4">
            <div className="card w-100">
              <Image src="/images/Rectangle683.jpg" className={styles.imageOpinion} width={200} height={600} alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title" style={{
                    fontSize: "30px"
                }}><b>Niall Horan</b></h5>
                <h6 className="card-subtitle mb-2 text-muted">Web Developer</h6>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
