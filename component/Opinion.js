import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/Opinion.module.css'

export default function Opinion() {
  return (
    <div>
      <div className="container mx-auto mt-4 py-5">
        <div className="row">
          <div className="col-md-6">
            <h3 className="mb-3">
              <div className={styles.fontOpinion}>Their opinions about Peworld</div>
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
              <img src="https://i.imgur.com/ZTkt4I5.jpg" class="card-img-top" alt="..." />
              <div className="card-body text-center">
                <div className={styles.fontOpinion}>
                  <h5 className="card-title">Card title</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
          </div>    
          <div className="col-md-4">
            <div className="card w-100">
              <img src="https://i.imgur.com/ZTkt4I5.jpg" class="card-img-top" alt="..." />
              <div className="card-body text-center">
                <div className={styles.fontOpinion}>
                  <h5 className="card-title">Card title</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
          </div>    
          <div className="col-md-4">
            <div className="card w-100">
              <img src="https://i.imgur.com/ZTkt4I5.jpg" class="card-img-top" alt="..." />
              <div className="card-body text-center">
                <div className={styles.fontOpinion}>
                  <h5 className="card-title">Card title</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
