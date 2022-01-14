import React from "react";

const EditEstimateArray = () => {
  return (
    <div>
      <thead>
        <tr className="bg-gray-50">
          <th className="p-2 border-r cursor-auto text-md font-bold text-gray-500">
            <div className="flex items-center justify-center">
              Description
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 9l4-4 4 4m0 6l-4 4-4-4"
              />
            </div>
          </th>
          <th className="p-2 border-r cursor-auto text-md font-bold text-gray-500">
            <div className="flex items-center justify-center">
              Quantité
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 9l4-4 4 4m0 6l-4 4-4-4"
              />
            </div>
          </th>

          <th className="p-2 border-r cursor-auto text-md font-bold text-gray-500">
            <div className="flex items-center justify-center">
              Prix unitaire HT
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 9l4-4 4 4m0 6l-4 4-4-4"
              />
            </div>
          </th>

          <th className="p-2 border-r cursor-auto text-md font-bold text-gray-500">
            <div className="flex items-center justify-center">
              Prix total HT
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 9l4-4 4 4m0 6l-4 4-4-4"
              />
            </div>
          </th>
        </tr>
      </thead>
    </div>
  );
};

export default EditEstimateArray;
