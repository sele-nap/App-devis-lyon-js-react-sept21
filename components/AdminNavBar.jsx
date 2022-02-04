import React from "react";
import Link from "next/link";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import { useSession } from "next-auth/react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import { useContext } from "react";

const AdminNavBar = () => {
  const { currentUserIsAdmin } = useContext(CurrentUserContext);

  const { data, user, role } = useSession();
  return (
    <div className="flex justify-center bg-third">
      <div className="border-b-2">
        <div className="w-full text-gray-700">
          <div
            x-data="{ open: true }"
            className="flex flex-col px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8"
          >
            <nav className="flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
              <Link href="/estimates" passHref>
                <a className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-yellow-400 focus:bg-yellow-600 focus:outline-none focus:shadow-outline">
                  <BackupTableIcon />
                  <span className="mx-2"> Mes devis</span>
                </a>
              </Link>
              {currentUserIsAdmin ? (
                <Link href="/users" passHref>
                  <a className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-yellow-400 focus:bg-yellow-600 focus:outline-none focus:shadow-outline">
                    <PermContactCalendarIcon />
                    <span className="mx-2">Mes contacts </span>
                  </a>
                </Link>
              ) : (
                <Link href={`/users/edit/${data?.user.id}`} passHref>
                  <a className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-yellow-400 focus:bg-yellow-600 focus:outline-none focus:shadow-outline">
                    <PermContactCalendarIcon />

                    <span className="mx-2">Mon Profil </span>
                  </a>
                </Link>
              )}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNavBar;
