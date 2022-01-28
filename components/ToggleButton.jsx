import axios from "axios";
import { VALID_LOADERS } from "next/dist/server/image-config";
import { useState, useEffect } from "react";
// import mailer from "../mailer";

function ToggleButton({ e, handleChange }) {
  console.log(e.status);

  return (
    <div>
      <label className="flex items-center justify-center">
        <input
          type="checkbox"
          disabled={e.status === "WAITING_FOR_VALIDATION" ? true : false}
          className="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-green-500 checked:border-transparent focus:outline-none"
          defaultChecked={e.status === "WAITING_FOR_VALIDATION"}
          onChange={async (event) => {
            const data = new FormData();
            data.append(
              "status",
              e.status !== "VALIDATED" ? "WAITING_FOR_VALIDATION" : "TO_DO"
            );

            axios.patch(`/api/estimate/${e.id}`, data).then(handleChange);
          }}
        />

        <span className="text-gray-700 dark:text-white font-normal"></span>
      </label>
    </div>
  );
}

export default ToggleButton;
