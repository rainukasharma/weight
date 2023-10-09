import React from "react";
const ReusableForm = ({ onSubmit, fields, errors, showCancel, submitButtonLabel, customClass ,customButtonClass}) => {

  return (
    <form className={`${customClass} flex flex-col w-1/3 m-16`} onSubmit={onSubmit}>
      {fields.map((field, index) => (
        <div key={index} className="flex flex-col">
          <label className="text-lg mb-2">
            {field.label}
            { field.required && errors[field.name] && (
              <span className="text-red-500">*</span>
            )}
          </label>
          {field.type === "select" ? (
            <select
              name={field.name}
              className={`border bg-white border-gray-300 py-2 px-3 mb-4 focus:outline-none focus:ring focus:border-[#6759FF] ${
                errors[field.name] ? "border-red-500" : ""
              }`}
              required={field.required}
            >
              {field.options?.map((option, optionIndex) => (
                <option key={optionIndex} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={field.type}
              name={field.name}
              placeholder={field.label}
              className={`border border-gray-300 py-2 px-3 mb-4 focus:outline-none focus:ring focus:border-[#6759FF] ${
                errors[field.name] ? "border-red-500" : ""
              }`}
              required={field.required}
              maxLength={field.maxLength}
              minLength={field.minLength}
            />
          )}
        </div>
      ))}

      <div className="flex justify-center space-x-4">
      {showCancel && (
          <button
            type="button"
            className="px-12 py-2 text-[#6759FF] border border-[#6759FF] hover:bg-gray-200"
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          className={` ${customButtonClass} py-2 px-12 text-white bg-[#6759FF] hover:bg-[#5549CC]`}
        >
         {submitButtonLabel}
        </button>
      </div>
    </form>
  );
};

export default ReusableForm;
