import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

import  Styles from './Layout.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Layout({ children }) {
  return (
    <div className={`${Styles.layout_container}`}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
  