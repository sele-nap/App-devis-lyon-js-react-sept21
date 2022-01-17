import React from "react";
import Link from "next/link";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import StoreIcon from "@mui/icons-material/Store";

const AdminNavBar = () => {
  return (
    <div className="flex justify-center mt-4">
      <div className="border-b-2 mb-4">
        <div className="antialiased bg-gray-100 dark-mode:bg-gray-900">
          <div className="w-full mb-2 text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
            <div
              x-data="{ open: true }"
              className="flex flex-col px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8"
            >
              <nav className="flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
                <a
                  className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-yellow-400 focus:bg-yellow-600 focus:outline-none focus:shadow-outline"
                  href="/estimates"
                >
                  <BackupTableIcon />
                  <span className="mx-2"> Mes devis</span>
                </a>
                <a
                  className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-yellow-400 focus:bg-yellow-600 focus:outline-none focus:shadow-outline"
                  href="/users"
                >
                  <PermContactCalendarIcon />
                  <span className="mx-2"> Mes contacts</span>
                </a>
                {/* <a
                  className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-yellow-400 focus:bg-yellow-600 focus:outline-none focus:shadow-outline"
                  href="/products"
                >
                  <StoreIcon />
                  <span className="mx-2"> Mes produits</span>
                </a> */}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNavBar;
