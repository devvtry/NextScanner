import React, {useEffect, useState} from 'react'
import { Row, Col } from 'react-bootstrap'

import  Styles from './Header.module.css'

const Header = () => {
  const [fixedHeaderClass, setFixedHeaderClass] = useState('')

  useEffect(() => {
    window.addEventListener('scroll', checkStickyHeader, {passive: true})
    checkStickyHeader()

    return () => window.removeEventListener('scroll', checkStickyHeader, {passive: true})
  }, []);

  const checkStickyHeader = () => {
      if (window.scrollY > 50) {
        setFixedHeaderClass(Styles.sticky_header)
      } else {
        setFixedHeaderClass('')
      }
  }

  return (
      <div className={`${Styles.header} ${fixedHeaderClass}`}>
        <Row className='pt-3'>
          <Col xs={1} sm={1} md={1} lg={1} xl={1}>
            <i className="fa fa-user-circle" style={{marginLeft: '2px'}}/>
          </Col>
          <Col xs={7} sm={8} md={8} lg={8} xl={8}>
            nearbuy
          </Col>
          <Col xs={4} sm={3} md={3} lg={3} xl={3} style={{ textAlign: 'right'}}>
            <label>Jaipur</label>
            <i className='fa fa-sort-down ml-2' style={{marginLeft: '5px'}}/>
          </Col>
        </Row>
        <Row className='mt-3'>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <input
              type='search'
              className='form-control'
              placeholder='     search...' />
            <i className={`fa fa-search ${Styles.headerSearchIcon}`}/>
          </Col>
        </Row>
      </div>
  )
}

export default Header
