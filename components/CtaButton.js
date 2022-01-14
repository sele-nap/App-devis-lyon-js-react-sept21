import React from "react";
import Link from "next/link";

const CtaButton = (props) => {
  return (
    <div>
      <button
        className="shadow w-64 h-12 bg-yellow-400 hover:bg-yellow-500 focus:shadow-outline focus:outline-none  font-bold py-2 px-4 rounded"
        type={props.type}
        onClick={props.action}
      >
        {props.icon}
        <span className="mx-2">{props.title} </span>
      </button>
    </div>
  );
};

export default CtaButton;
