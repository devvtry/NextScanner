import React from "react";
import Footer from "./Footer";
import Header from "./Common/Header/Header";

import { Container } from "react-bootstrap"

import  Styles from './Layout.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Layout({ children }) {
  return (
    <Container className={Styles.layout_container}>
      <Header />
      {children}
      <Footer />
    </Container>
  );
}
  