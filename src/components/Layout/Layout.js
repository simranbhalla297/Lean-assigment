import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
// Pass the child props
export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
