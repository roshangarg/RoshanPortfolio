import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Container } from "@material-ui/core";
const Layout = ({ children }) => {
  return (
    <main
      style={{
        minHeight: "100vh",
        // background:
        //   'linear-gradient(145deg, rgba(2, 5, 14,1) 80%,rgba(15,10,79,1))',
        // padding: '2rem 0rem',
        background: "rgba(2, 5, 14,1)",

        color: "white",
      }}
    >
      <Navbar />
      <Container>{children}</Container>

      <Footer />
    </main>
  );
};

export default Layout;
