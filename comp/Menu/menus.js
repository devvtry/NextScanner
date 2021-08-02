import { useEffect, useState } from 'react'
import { Button, Col, Row, Tab, Tabs } from 'react-bootstrap'

import ApiData from '../../API/menu'
import styles from './menus.module.css'

export default function Menus (props) {
  const {
    quantity,
    addItemFromMenu
  } = props

  const [key, setKey] = useState('veg')
  const [menuList, setMenuList] = useState([])

  useEffect(() => {
    setMenuList(ApiData)
  },[])

  return (
          <Row className='mt-3'>
                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                      <h1>Menus</h1>
                      <Tabs
                          activeKey={key}
                          onSelect={(k) => setKey(k)}
                          className='mb-3'
                      >
                           { menuList.map((item,i) => {
                              return(
                                    <Tab eventKey={item.catName.toLowerCase()} title={item.catName} key={i}>
                                      { item.subCat.map((sCat,idx) => {
                                         return(
                                           <>
                                               <Row key={idx}>
                                                  <Col xs={6} sm={6} md={6} lg={6} xl={6} styles={{display:'flex'}}>
                                                      <Row>
                                                          <Col xs={1} sm={1} md={1} lg={1} xl={1}>
                                                             <i className='fa fa-user'/>
                                                          </Col>
                                                          <Col xs={10} sm={10} md={10} lg={10} xl={10}>
                                                              {sCat.sName}
                                                              <div style={{marginLeft:'2px'}}>
                                                                 <i className='fa fa-rupee'></i> { sCat.price }
                                                              </div>
                                                          </Col>
                                                      </Row>
                                                  </Col>
                                                  <Col xs={6} sm={6} md={6} lg={6} xl={6} style={{textAlign:'right'}}>
                                                      { quantity < 1 ?
                                                          <Button onClick={() => addItemFromMenu(1)}>
                                                             Add
                                                          </Button>
                                                          :
                                                          <>
                                                              <Button onClick={() => addItemFromMenu(quantity-1)}><i className='fa fa-minus'/></Button>
                                                              <Button>{quantity}</Button>
                                                              <Button onClick={() => addItemFromMenu(quantity+1)} ><i className='fa fa-plus'/></Button>
                                                          </>
                                                      }
                                                  </Col>
                                              </Row>
                                              <div className={styles.description}>
                                                { sCat.description }
                                              </div>
                                          </>
                                         )
                                        })
                                      }
                                    </Tab>
                                 )
                               })
                           }
                      </Tabs>
                </Col>
          </Row>
     )
}