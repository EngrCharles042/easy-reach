import React, { useState } from "react";
import PasswordField from "../../components/elements/forms/PasswordField";
import { useNavigate } from "react-router-dom";
import InputField from "../../components/elements/forms/InputField";
import { MainButton } from "../../components/elements/button/Index";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const navigate = useNavigate();

  // Regular expression for password validation
  const regExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+=])[A-Za-z\d!@#$%^&*()_+=]{8,}$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear error messages when user changes input
    if (name === "email") {
      setEmailErrorMessage("");
    } else if (name === "password" || name === "confirmPassword") {
      setPasswordErrorMessage("");
    }
  };

  const handleSignUp = (e) => {  
    e.preventDefault();  
    setErrorMessage("");  
    setEmailErrorMessage("");  
    setPasswordErrorMessage("");  
  
    const { email, password, confirmPassword } = formData;  
  
    // Basic validation for email  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  
    if (!emailRegex.test(email)) {  
      setEmailErrorMessage("Please enter a valid email address.");  
      return;  
    }  
  
    // Password requirements validation  
    const passwordCriteriaMet = regExp.test(password); // Use the regex defined above  
    if (!passwordCriteriaMet) {  
      setPasswordErrorMessage(  
        "Password must contain at least: one lowercase letter, one uppercase letter, one number, one special character [!@#$%^&*()_+=], and must not be less than 8 characters."  
      );  
      return;  
    }  
  
    // Check if passwords match  
    if (password !== confirmPassword) {  
      setErrorMessage("Passwords do not match.");  
      return;  
    }  
  
    // Process sign-up logic (e.g., API request) here  
    console.log("Sign Up Successful!", formData);  
  
    // Navigate to login page  
    navigate("/auth/login");  
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Sign Up</h1>
      <form
        onSubmit={handleSignUp}
        className="flex flex-col w-1/2 p-5 rounded-md shadow-lg font-medium max-md:w-full"
      >
        <InputField
          label="Full Name"
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter your full name"
        />
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
          placeholder="Create a password"
          name="password"
          onChange={handleChange}
        />
        {/* Password error message */}
        {passwordErrorMessage && (
          <p className="text-red-500 text-xs mb-2">{passwordErrorMessage}</p>
        )}
        <PasswordField
          label="Confirm Password"
          value={formData.confirmPassword}
          placeholder="Confirm your password"
          name="confirmPassword"
          onChange={handleChange}
        />
        {errorMessage && (
          <p className="text-red-500 text-xs mb-2">{errorMessage}</p>
        )}
        <div className="flex justify-between">
          <MainButton type="submit" className="mr-10 max-md:mr-5">
            Create Account
          </MainButton>

          <MainButton type="button" onClick={() => window.history.back()}>
            Back
          </MainButton>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
