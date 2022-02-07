import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children, title }) {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        {title != null ? (
          <h1 className="mt-7 border-2 bg-yellow-400 w-1/5  font-bold border-third text-black rounded cursor-auto p-1 text-xl mb-4 uppercase text-center">
            {title}
          </h1>
        ) : null}
      </div>

      <main className="pb-16">{children}</main>
      <Footer />
    </div>
  );
}
