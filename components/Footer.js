import next from "next";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-third">
      <div className="max-w-7xl mx-auto py-6 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          <div className="px-5 py-2">
            <Link href="./catalog">
              <a className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900  rounded-lg  md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-yellow-400 focus:bg-yellow-400 focus:outline-none focus:shadow-outline">
                Catalogue
              </a>
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="./cgv">
              <a className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900  rounded-lg  md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-yellow-400 focus:bg-yellow-400 focus:outline-none focus:shadow-outline">
                CGV
              </a>
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="./about">
              <a className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900  rounded-lg  md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-yellow-400 focus:bg-yellow-400 focus:outline-none focus:shadow-outline">
                Qui sommes-nous
              </a>
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="./legal">
              <a className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900  rounded-lg  md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-yellow-400 focus:bg-yellow-400 focus:outline-none focus:shadow-outline">
                Mentions légales
              </a>
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link href="./contact">
              <a className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900  rounded-lg  md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-yellow-400 focus:bg-yellow-400 focus:outline-none focus:shadow-outline">
                Contact{" "}
              </a>
            </Link>
          </div>
        </nav>
      </div>
    </footer>
  );
}
