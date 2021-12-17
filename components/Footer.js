import next from "next";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col bg-third fixed bottom-0 left-0 dark:bg-gray-800 pb-4 pt-2 sm:flex-row">
      <div className="max-w-screen-xl mx-auto px-4 h-10 sm:h-4">
        <ul className="flex justify-between">
          <li className="">
            <Link href="./catalog">
              <a
                className="text-black-400 hover:text-black-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                href="#"
              >
                Catalogue
              </a>
            </Link>
          </li>
          <li className="ml-4">
            <Link href="./cgv">
              <a
                className="text-black-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                href="#"
              >
                CGV
              </a>
            </Link>
          </li>
          <li className="ml-4">
            <Link href="./about">
              <a
                className="text-black-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                href="#"
              >
                Qui sommes nous
              </a>
            </Link>
          </li>
          <li className="ml-4">
            <Link href="./legal">
              <a
                className="text-black-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                href="#"
              >
                Mentions légales
              </a>
            </Link>
          </li>
          <li className="ml-4">
            <Link href="./contact">
              <a
                className="text-black-400 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                href="#"
              >
                Nous contacter
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
