import React from 'react'
import styles from '../styles/MoreInformation.module.css'

export default function MoreInformation() {
  return (
    <div>
      <div className="container">
        <div className="card" style={{
          width: '81rem',
          backgroundColor: '#5E50A1',
          borderBottomRightRadius: '2em',
          borderTopLeftRadius: '2em',
          margin: '120px 0'
        }}>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6 py-5">
                <h1 className={styles.whiteFont}>Lorem ipsum dolor sit amet</h1>
              </div>
              <div className="col-md-6 text-end" style={{
                margin: '100px 0'
              }}>
                <button className="btn btn-primary button-more-info">
                  <span style={{
                    color: '#796EAF !important'
                  }}>Mulai Dari Sekarang</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
