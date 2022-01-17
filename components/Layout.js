import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, title }) {
  return (
    <div>
      <Header />
      <h1 className="text-2xl mb-4 mt-4 uppercase text-gray-700 text-center">
        {title}
      </h1>
      <main className="pb-16">{children}</main>
      <Footer />
    </div>
  );
}
