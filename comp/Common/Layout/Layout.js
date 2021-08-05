import React from 'react'
import { Container} from 'react-bootstrap'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'

import  Styles from './Layout.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Layout({ children }) {
  return (
    <div className={`${Styles.layout_container}`}>
      <Header />
         <Container className={Styles.layout_main_container}>
           {children}
         </Container>
      <Footer />
    </div>
  );
}
  