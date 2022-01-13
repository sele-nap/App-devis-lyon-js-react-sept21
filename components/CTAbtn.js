import React from "react";

import Link from "next/link";

const CTAbtn = (props) => {
  return (
    <div className="py-2 px-4 w-48 hover:bg-yellow-300 bg-yellow-400 focus:ring-yellow-600 focus:ring-offset-red-200 text-gray-900 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg mb-10">
      <Link href={props.link} passHref>
        <div className="flex justify-center items-center cursor-pointer">
          <span className="ml-2"> {props.title}</span>
        </div>
      </Link>
    </div>
  );
};

export default CTAbtn;
