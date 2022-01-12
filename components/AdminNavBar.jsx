import React from "react";
import Link from "next/link";

const AdminNavBar = () => {
  return (
    // <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer/>
    // <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer />
    <div className="min-h-screen">
      <div className="antialiased bg-gray-100">
        <div className="w-full text-gray-700 bg-white">
          <div
            x-data="{ open: true }"
            className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8"
          >
            <nav className="flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
              <a
                className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg "
                href="#"
              >
                Blog
              </a>
              <a
                className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg "
                href="#"
              >
                Portfolio
              </a>
              <a
                className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg "
                href="#"
              >
                About
              </a>
              <a
                className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                href="#"
              >
                Contact
              </a>
              <div className="relative" x-data="{ open: true }"></div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNavBar;
