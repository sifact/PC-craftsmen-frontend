import React from "react";
import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";

const RootLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="custom-min-height">{children}</div>
      <Footer />
    </>
  );
};

export default RootLayout;
