import React from "react";
import { useNavigate } from "react-router-dom";
import { MainButton } from "../components/elements/button/Index";

const Welcome = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("auth/login");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen text-center bg-gray-100">
      <div className="text-4xl font-bold text-gray-800">
        Welcome to EasyReach Health
      </div>
      <div className="mt-4 text-lg text-gray-600">
        Your health at your fingertips. Get medical advice, book appointments,
        and much more.
      </div>
      <MainButton className="mt-10 w-[30%] max-md:w-2/3 mx-auto" onClick={handleGetStarted}>
        Get Started
      </MainButton>
    </div>
  );
};

export default Welcome;
