import React from "react";
import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import Swal from "sweetalert2";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import Link from "next/link";
import Image from "next/image";
import LogoSansBlabla from "../public/Img/LogoSansBlabla.png";
import { signIn, signOut, useSession } from "next-auth/react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import { useContext } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { VscSearch } from "react-icons/vsc";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";

const Navbar = () => {
  const { data, user, role, status } = useSession();
  const { currentUserIsAdmin } = useContext(CurrentUserContext);
  const { currentUserProfile } = useContext(CurrentUserContext);

  const [isActiveBtn, setActiveBtn] = useState("true");
  const handleToggle = () => {
    setActiveBtn(!isActiveBtn);
  };

  const handleEstimateClick = () => {
    if (status === "unauthenticated") {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Vous devez ếtre identifié pour pouvoir demander un devis",
        showConfirmButton: false,
        timer: 2500,
      });
    }
  };
  return (
    <div className="bg-third">
      <div classNameName="w-full text-gray-700 bg-third ">
        <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div className=" flex justify-around items-center">
            <div className="p-4 mx-12 flex flex-row items-center justify-between">
              <Link href="/">
                <a className="flex justify-center md:justify-end ">
                  <Image
                    src={LogoSansBlabla}
                    alt="Logo"
                    width="50px"
                    height="50px"
                  />
                </a>
              </Link>
            </div>

            <div className="rounded-2xl flex-row bg-white border-white border-2 w-36">
              <ManageSearchIcon />
              <input
                type="search"
                name="search"
                className="w-24"
                placeholder="Recherche"
              />
            </div>
          </div>
          <nav className="flex-wrap pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
            <div className="flex flex-row w-24">
              <Link href="/askEstimatePage" passHref>
                <a
                  onClick={handleEstimateClick}
                  className="flex px-4 py-2 mt-2 text-sm font-semibold text-gray-900  rounded-lg  md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-yellow-400 focus:bg-yellow-400 focus:outline-none focus:shadow-outline"
                >
                  <IoIosAddCircle size={20} />
                  <span className="mx-2"> Devis </span>
                </a>
              </Link>
            </div>

            <span className="mx-2"></span>
            {status === "unauthenticated" && (
              <button
                className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900  rounded-lg  md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-yellow-400 focus:bg-yellow-400 focus:outline-none focus:shadow-outline"
                onClick={() => signIn()}
              >
                <ExitToAppIcon />
                <span className="ml-2"> Connexion </span>
              </button>
            )}
            {status === "authenticated" && (
              <button
                className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900  rounded-lg  md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-yellow-400 focus:bg-yellow-400 focus:outline-none focus:shadow-outline"
                onClick={() => signOut()}
              >
                <ExitToAppIcon />
                <span className="ml-2"> Déconnexion </span>
              </button>
            )}

            <span className="mx-2"></span>
            {status === "unauthenticated" && (
              <button className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900  rounded-lg  md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-yellow-400 focus:bg-yellow-400 focus:outline-none focus:shadow-outline">
                <Link href="/signup">
                  <a>
                    <AppRegistrationIcon />
                    <span className="ml-2"> Créer un compte </span>
                  </a>
                </Link>
              </button>
            )}
            <div className="relative">
              <button
                onClick={handleToggle}
                // className="text-sm font-semibold text-gray-900  rounded-lg  hover:text-gray-900 focus:text-gray-900 hover:bg-yellow-400 focus:bg-yellow-400 focus:outline-none focus:shadow-outline"
                className="flex px-4 py-2 mt-2 text-sm font-semibold text-gray-900  rounded-lg  md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-yellow-400 focus:bg-yellow-400 focus:outline-none focus:shadow-outline"
              >
                {status === "authenticated" && (
                  <p>
                    <MenuIcon />
                    <span className="ml-2">
                      {currentUserProfile.firstname}{" "}
                      {currentUserProfile.lastname}
                    </span>
                  </p>
                )}
              </button>

              <div
                className={
                  isActiveBtn
                    ? "hidden"
                    : "absolute right-0 w-full origin-top-right rounded-md shadow-lg md:w-72"
                }
              >
                <div className="px-2 py-2 bg-white rounded-md shadow ">
                  <Link href="/estimates">
                    <a className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-yellow-400 focus:bg-yellow-400 focus:outline-none focus:shadow-outline">
                      <BackupTableIcon />
                      <span className="ml-2">Mes devis </span>
                    </a>
                  </Link>
                  {currentUserIsAdmin ? (
                    <Link href="/users" passHref>
                      <a className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-yellow-400 focus:bg-yellow-400 focus:outline-none focus:shadow-outline">
                        <PermContactCalendarIcon />

                        <span className="ml-2">Mes contacts </span>
                      </a>
                    </Link>
                  ) : (
                    <Link href={`/users/edit/${data?.user.id}`} passHref>
                      <a className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-yellow-400 focus:bg-yellow-400 focus:outline-none focus:shadow-outline">
                        <PermContactCalendarIcon />

                        <span className="ml-2">Mon Profil </span>
                      </a>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
