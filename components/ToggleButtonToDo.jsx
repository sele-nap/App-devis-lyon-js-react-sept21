import axios from "axios";

function ToggleButtonToDo({ e, handleChange }) {
  return (
    <div>
      <label className="flex items-center justify-center">
        <input
          type="checkbox"
          name="checked"
          className="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-green-500 checked:border-transparent focus:outline-none"
          defaultChecked={e.status === "TO_DO"}
          onChange={async (event) => {
            const data = new FormData();
            data.append("status", e.status !== "TO_DO" ? "TO_DO" : "DRAFT");
            axios.patch(`/api/estimate/${e.id}`, data).then(handleChange);
            router.push("/estimates");
          }}
        />
        <span className="text-gray-700 dark:text-white font-normal"></span>
      </label>
    </div>
  );
}

export default ToggleButtonToDo;
