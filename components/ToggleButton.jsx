import axios from "axios";
import { useState, useEffect } from "react";


function ToggleButton({ e }) {

  return (
    <div>
           <input
              type="checkbox"
              name="toggle"
              id="Green"
              className="checked:bg-green-500 outline-none focus:outline-none right-4 checked:right-0 duration-200 ease-in absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
              checked={e.status === "VALIDATED"}
              onChange={async (event) => {
              axios.patch(`/api/estimate/${e.id}`,{status: event.target.value === "on" ? "VALIDATED" : "TO_DO"})
              console.log()
              }}
            />
            <label
              htmlFor="Green"
              className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
            ></label>
    </div>
  );
}

export default ToggleButton;