import axios from "axios";
import { useState, useEffect } from "react";

function ToggleButtonToDo({ e, handleChange }) {
  console.log(e.status);
  return (
    <div>
      <label className="flex items-center space-x-3 mb-3">
        <input
          type="checkbox"
          name="checked"
          className="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-green-500 checked:border-transparent focus:outline-none"
          defaultChecked={e.status === "TO_DO"}
          onChange={async (event) => {
            axios
              .patch(`/api/estimate/${e.id}`, {
                status: e.status !== "TO_DO" ? "TO_DO" : "DRAFT",
              })
              .then(handleChange);
          }}
        />
        <span className="text-gray-700 dark:text-white font-normal"></span>
      </label>
    </div>
  );
}

export default ToggleButtonToDo;
