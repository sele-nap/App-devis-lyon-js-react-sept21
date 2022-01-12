import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import next from "next";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main className="pb-16 bg-slate-50">{children}</main>
      <Footer />
    </div>
  );
}
