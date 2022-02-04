import next from "next";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full z-10 relative flex flex-col bg-third  bottom-0 left-0 h-20 items-center  pb-4 pt-2 sm:flex-row">
      <div className="max-w-screen-xl mx-auto px-4 h-10 sm:h-4">
        <ul className="flex justify-around font-bold">
          <li className="cursor-pointer">
            <Link href="./catalog">
              <a className="flex px-4 py-2 mt-2 text-sm font-semibold text-gray-900  rounded-lg  md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-yellow-400 focus:bg-yellow-400 focus:outline-none focus:shadow-outline">
                Catalogue
              </a>
            </Link>
          </li>
          <li className="ml-4 cursor-pointer">
            <Link href="./cgv">
              <a className="flex px-4 py-2 mt-2 text-sm font-semibold text-gray-900  rounded-lg  md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-yellow-400 focus:bg-yellow-400 focus:outline-none focus:shadow-outline">
                CGV
              </a>
            </Link>
          </li>
          <li className="ml-4 cursor-pointer">
            <Link href="./about">
              <a className="flex px-4 py-2 mt-2 text-sm font-semibold text-gray-900  rounded-lg  md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-yellow-400 focus:bg-yellow-400 focus:outline-none focus:shadow-outline">
                Qui sommes nous
              </a>
            </Link>
          </li>
          <li className="ml-4">
            <Link href="./legal">
              <a className="flex px-4 py-2 mt-2 text-sm font-semibold text-gray-900  rounded-lg  md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-yellow-400 focus:bg-yellow-400 focus:outline-none focus:shadow-outline">
                Mentions légales
              </a>
            </Link>
          </li>
          <li className="ml-4">
            <Link href="./contact">
              <a className="flex px-4 py-2 mt-2 text-sm font-semibold text-gray-900  rounded-lg  md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-yellow-400 focus:bg-yellow-400 focus:outline-none focus:shadow-outline">
                Nous contacter
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
