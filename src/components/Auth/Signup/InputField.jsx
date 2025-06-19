import React from "react";

const InputField = ({
  label,
  type,
  placeholder,
  register,
  name,
  errors = false,
  isTextArea,
  rows,
  options,
}) => {
  return (
    <div>
      <label className="text-white text-sm font-semibold">{label}</label>

      {isTextArea ? (
        <textarea
          {...register(name, { required: `${label} is required` })}
          placeholder={placeholder}
          rows={rows || 5}
          className="w-full p-4 mt-1 bg-[#2C2F38] text-white border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      ) : type === "select" ? (
        <select
          {...register(name, { required: `${label} is required` })}
          className="w-full p-4 mt-1 bg-[#2C2F38] text-white border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="">Select {label}</option>
          {options &&
            options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
        </select>
      ) : (
        <input
          {...register(name, { required: errors && `${label} is required` })}
          type={type}
          placeholder={placeholder}
          className="w-full p-4 mt-1 bg-[#2C2F38] text-white border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 file:bg-[#e36a08] file:text-white file:text-sm file:py-0.5 file:px-3 file:rounded-md file:border-0 file:cursor-pointer"
          accept={type === "file" ? "image/*" : undefined}
        />
      )}

      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>
      )}
    </div>
  );
};

export default InputField;
