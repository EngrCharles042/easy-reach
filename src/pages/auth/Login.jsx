import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../../components/elements/forms/InputField";
import PasswordField from "../../components/elements/forms/PasswordField";
import { MainButton } from "../../components/elements/button/Index";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const navigate = useNavigate();

  // Regular expression for basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear error messages on input change
    if (name === "email") {
      setEmailErrorMessage("");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setEmailErrorMessage("");

    const { email, password } = formData;

    // // Validate email format
    // if (!emailRegex.test(email)) {
    //   setEmailErrorMessage("Please enter a valid email address.");
    //   return;
    // }

    // // Validate that password is not empty
    // if (password.trim() === "") {
    //   setErrorMessage("Please enter your password.");
    //   return;
    // }

    // Retrieve users from local storage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email exists and password matches
    const user = existingUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      console.log("Login Successful!", user);
      // Save the logged-in user to localStorage
      localStorage.setItem("loggedInUser", JSON.stringify({user}));
      navigate("/dashboard");
    } else {
      setErrorMessage("Invalid email or password.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-10 bg-gray-100">
      <Link
        to="/"
        className="w-full flex justify-between items-center text-xl font-bold px-4"
      >
        LOGO
      </Link>
      <h1 className="text-3xl font-bold mb-4">Log In</h1>
      <form
        onSubmit={handleLogin}
        className="flex flex-col w-1/2 p-5 rounded-md shadow-lg font-medium max-md:w-full"
      >
        <InputField
          label="Email"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        {/* Email error message */}
        {emailErrorMessage && (
          <p className="text-red-500 text-xs mb-2">{emailErrorMessage}</p>
        )}
        <PasswordField
          label="Password"
          value={formData.password}
          placeholder="Enter your password"
          name="password"
          onChange={handleChange}
        />
        {/* Password error message */}
        {errorMessage && (
          <p className="text-red-500 text-xs mb-2">{errorMessage}</p>
        )}
        <div className="flex items-center justify-between mt-6 max-w-full text-xl max-md:flex-wrap">
          <label className="flex gap-2.5 items-center text-gray-600">
            <input type="checkbox" className="shrink-0 w-4 h-4" />
            <span className="self-stretch my-auto">Remember me</span>
          </label>
          <Link to="/" className="text-red-500 underline">
            Forgot Password
          </Link>
        </div>
        <div className="flex justify-between mb-10">
          <MainButton
            type="button"
            onClick={() => window.history.back()}
            className="mr-10 max-md:mr-5 bg-red-500 hover:bg-red-600"
          >
            Back
          </MainButton>
          <MainButton type="submit">Log In</MainButton>
        </div>
      </form>
      <div className="flex flex-wrap text-xl gap-2.5 items-center self-center mt-12 text-center max-md:mt-10">
        <span className="text-zinc-800">New user?</span>
        <Link to="/auth/signup" className="text-zinc-800 underline">
          Create an account
        </Link>
      </div>
    </div>
  );
};

export default Login;
