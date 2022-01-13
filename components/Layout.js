import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import next from "next";
import AdminNavBar from "./AdminNavBar";

export default function Layout({ children, title }) {
  return (
    <div>
      <Header />
      <AdminNavBar />
      <h1 className="text-2xl mt-4 mb-4 uppercase text-gray-700 text-center">
        {" "}
        {title}
      </h1>
      <main className="pb-16">{children}</main>
      <Footer />
    </div>
  );
}
