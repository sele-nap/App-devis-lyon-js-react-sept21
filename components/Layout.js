import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import next from "next";
import AdminNavBar from "./AdminNavBar";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <AdminNavBar />
      <main className="pb-16">{children}</main>
      <Footer />
    </div>
  );
}
