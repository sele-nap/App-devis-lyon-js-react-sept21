import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import next from "next";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
