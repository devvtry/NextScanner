import React from "react";
import Footer from "./Footer";
import Header from "./Common/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
  