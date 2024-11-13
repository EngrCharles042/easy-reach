import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Welcome from "../pages/Welcome";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";

const AuthenticationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />

      <Route path="auth/signup" element={<Signup />} />

      <Route path="auth/login" element={<Login />} />

      <Route path="*" element={<Navigate to="auth/login" replace />} />
    </Routes>
  );
};

export default AuthenticationRoutes;
