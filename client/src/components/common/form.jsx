import React from "react";
import { formControls } from "../../config";
const CommonForm = ({ formControls }) => {
  return (
    <form>
      <div className="flex flex-col gap-3">
        {formControls.map((controlItem) => {
          return (
            <div key={controlItem.name} className="flex flex-col">
              <label htmlFor={controlItem.name}>{controlItem.label}</label>
              <input
                type={controlItem.type}
                name={controlItem.name}
                placeholder={controlItem.placeholder}
                className="border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
          );
        })}
      </div>
    </form>
  );
};

export default CommonForm;
