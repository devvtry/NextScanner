import React,{ useState } from "react";
import Head from 'next/head'
import { Container, Row, Col, Tabs, Tab, Button } from "react-bootstrap"

import styles from '../styles/Home.module.css'

export default function Home() {
  const [key, setKey] = useState('veg')
  const [quantity, setQuantity] = useState(0)

  const addItemFromMenu = (val) => {
    setQuantity(val)
  }

  const ControlledTabs = () =>  {
      return (
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="veg" title="Veg">
            <Row>
              <Col xs={6} sm={6} md={6} lg={6} xl={6} styles={{display:'flex'}}>
                  <Row>
                    <Col xs={1} sm={1} md={1} lg={1} xl={1}>
                        <i className='fa fa-user'/>
                    </Col>
                   <Col xs={10} sm={10} md={10} lg={10} xl={10}>
                      Veg Momos
                      <div style={{marginLeft:'2px'}}><i className="fa fa-rupee"></i>100</div>
                   </Col>
                  </Row>
              </Col>
              <Col xs={6} sm={6} md={6} lg={6} xl={6} style={{textAlign:'right'}}>

                 {quantity < 1 ?
                   <Button onClick={() => addItemFromMenu(1)}>Add</Button>
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
              Arabic spices pita pockets, falafel, lavash, fattoush. Arabic pickle served with lebnah & hummus
            </div>
          </Tab>
          <Tab eventKey="nonVeg" title="NonVeg">
            <Row>
              <Col xs={6} sm={6} md={6} lg={6} xl={6} styles={{display:'flex'}}>
                  <Row>
                    <Col xs={1} sm={1} md={1} lg={1} xl={1}>
                      <i className='fa fa-user'/>
                    </Col>
                    <Col xs={10} sm={10} md={10} lg={10} xl={10}>
                        Non Veg Momos
                        <div style={{marginLeft:'2px'}}><i className="fa fa-rupee"></i>100</div>
                    </Col>
                  </Row>
              </Col>
              <Col xs={6} sm={6} md={6} lg={6} xl={6} style={{textAlign:'right'}}>
                { quantity < 1 ?
                  <Button onClick={() => addItemFromMenu(1)}>Add</Button>
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
               Arabic spices pita pockets, falafel, lavash, fattoush. Arabic pickle served with lebnah & hummus
            </div>
          </Tab>
          <Tab eventKey="drinks" title="Drinks">
            <h6>Black Mamba Shake</h6>
            <h6>Pita Pockets</h6>
            <h6>Lebanese Platter</h6>
            <h6>Water bottle</h6>
          </Tab>
        </Tabs>
    );
  }

  return (
    <>
    <Head>
      <title>My Web | Home</title>
      <meta name='keywords' content='mywebsite'/>
    </Head>
    <Container>
      <Row className='mt-3'>
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <h1>Menus</h1>
          {ControlledTabs()}
        </Col>
      </Row> 
    </Container>
    </>
  )
}