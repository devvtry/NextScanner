import React, {useState} from 'react'
import {Button, Col, Row} from 'react-bootstrap'

import styles from './card.module.css'

const Card = (props) => {
  const [quantity, setQuantity] = useState(1)

  const addItemFromMenu = (val) => {
    setQuantity(val)
  }


  return(
    <>
      {/*<div className={styles.header}>*/}
      {/*  <div className={`${styles.ui} ${styles.segment}`}>*/}
      {/*    <div className="header_section">*/}
      {/*      <div className="header_hamburgerBtn">*/}
      {/*        <button className="ui button">*/}
      {/*          <i className={'fa fa-arrow-left '}/>*/}
      {/*        </button>*/}
      {/*      </div>*/}
      {/*      <div className="header_restaurant">*/}
      {/*        <div className="header_title">Cart</div>*/}
      {/*        <div className="header_location">Delivery</div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/*title*/}
      <Row className='mt-2'>
        <Col md={12} className={styles.cartTitleSection}>
          <div className={styles.cart_title}>Your Order</div>
        </Col>
      </Row>

      {/*item-list*/}
      <Row>
        <Col
          xs={6}
          sm={6}
          md={6}
          lg={6}
          xl={6}
          styles={{ display: 'flex' }}
        >
          <Row>
            <Col xs={1} sm={1} md={1} lg={1} xl={1}>
              <img
                src={
                 true
                    ? '/images/veg.jpeg'
                    : '/images/non-veg.jpeg'
                }
                alt=""
                width='14px'
                height='18px'
              />
            </Col>
            <Col xs={10} sm={10} md={10} lg={10} xl={10} style={{fontWeight:'bold'}}>
              test
              <div style={{ marginLeft: '2px', fontWeight:'normal' }}>
                <i className='fa fa-rupee'/> 100
              </div>
            </Col>
          </Row>
        </Col>
        <Col
          xs={6}
          sm={6}
          md={6}
          lg={6}
          xl={6}
          style={{ textAlign: 'right' }}
        >
          {quantity < 1 ? (
            <Button onClick={() => addItemFromMenu(1)}>
              Add
            </Button>
          ) : (
            <>
              <Button
                onClick={() => addItemFromMenu(quantity - 1)}
              >
                <i className='fa fa-minus' />
              </Button>
              <Button>{quantity}</Button>
              <Button
                onClick={() => addItemFromMenu(quantity + 1)}
              >
                <i className='fa fa-plus' />
              </Button>
            </>
          )}
        </Col>
      </Row>
      <div className={styles.description}>
        test about roti
      </div>

      {/*delivery card   */}
      <div className={styles.deliveryCard}>
        <span className={styles.deliveryCardText}>
          We deliver in selected areas in Jaipur <br/>
          <a className={styles.deliveryCardLink}>
            Provide your address
          </a>
          &nbsp;to check deliverability
        </span>
      </div>

      {/*instruction_section*/}
      <div className={styles.cart_specialInstructions}>
        <div className={styles.textField}>
          <div className={`${styles.ui} ${styles.input}`}>
            <input name="specialInstructions" placeholder="Special Instructions" type="text" value=""/></div>
        </div>
      </div>

      {/*line break section*/}
      <span className={styles.cart_line_break_2}/>

      {/*total_section*/}
      <div className={styles.cart_total_section}>
        <div>
          <span>
            Total
            <span className={styles.taxes_text}>
              &nbsp;(Including taxes &amp; charges)
            </span>
            <i className={`${styles.info_icon} fa fa-info-circle`} />
          </span>
         </div>
        <div className={styles.total}>
          <span className={styles.amount}> ₹ 273</span>
        </div>
      </div>

      {/*card info*/}
      <div>
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
                ₹  750
              </div>
              <div className={styles.cardFooterViewCartBtn}>
                <button
                  className={`${styles.ui} ${styles.button}`}>
                  PROCEED
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}
export default Card