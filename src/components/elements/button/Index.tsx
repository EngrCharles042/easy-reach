import React from "react";
import { ClipLoader } from "react-spinners";

export const MainButton = ({
  isLoading,
  onClick,
  type = "button",
  children,
  className = "",
  disabled = false,
  ...props
}) => (
  <button
    className={`self-stretch px-3 py-4 mt-20 w-full text-lg font-semibold leading-6 text-white whitespace-nowrap rounded-xl bg-green-500 hover:bg-green-600 transition duration-300 max-md:mt-10 max-md:max-w-full ${className}`}
    {...props}
    onClick={onClick}
    disabled={disabled}
  >
    {isLoading ? <ClipLoader color="#fff" size={20} /> : children}
  </button>
);

export const AppointmentButton = ({
  label,
  onClick,
  children,
  className = "",
  ...props
}) => (
  <button
    className={`w-1/2 py-2 mt-5 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300 max-md:w-full ${className}`}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
);
