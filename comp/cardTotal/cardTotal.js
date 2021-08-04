import { Col, Row } from 'react-bootstrap'

import styles from './cardTotal.module.css'

export default function CardTotal(props) {
  const { quantity, price } = props

    return (
      <div>
          { quantity > 0 ?
              <Row>
                  <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                      <div
                          className={styles.cartFooter}
                          style={{
                              position: 'fixed',
                              bottom: '0px',
                              zIndex: 1,
                              transform: 'translate3d(0px, 0px, 0px)',
                              transition: 'all 0.2s ease-in 0s',
                              height: '4rem'
                          }}>
                              <div className={styles.cartFooterItemSection} >
                                   { quantity } item(s) | ₹ { quantity * price }
                              </div>
                              <div className={styles.cartFooterTaxSection}>
                                       + taxes
                              </div>
                              <div className={styles.cardFooterViewCartBtn}>
                                  <button className={`${styles.ui} ${styles.button}`}>
                                      VIEW CART
                                  </button>
                              </div>
                      </div>
                  </Col>
              </Row>
          : null}
      </div>
  )

}
