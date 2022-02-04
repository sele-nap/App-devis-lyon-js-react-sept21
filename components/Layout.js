import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, title }) {
  return (
    <div>
      <Header />

      <h1 className="text-center text-2xl m-10">{title}</h1>

      <main className="pb-16">{children}</main>
      <Footer />
    </div>
  );
}
