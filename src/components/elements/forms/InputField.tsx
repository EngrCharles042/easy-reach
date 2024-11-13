import React from "react";

const InputField = ({ label, value, type, placeholder, name, onChange }) => {
  return (
    <div className="flex flex-col mt-9 w-full max-md:max-w-full">
      <label
        htmlFor={name}
        className="flex-1 shrink gap-4 w-full text-xl tracking-tight leading-none max-md:max-w-full"
      >
        {label}
      </label>
      <div className="flex flex-wrap gap-1.5 items-center px-5 py-4 mt-1.5 w-full text-2xl tracking-tight bg-white rounded-lg border-2 border-solid border-slate-300 min-h-[66px] max-md:max-w-full">
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className="flex-1 shrink self-stretch my-auto outline-none basis-0 max-md:max-w-full"
          required
        />
      </div>
    </div>
  );
};

export default InputField;
