import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Welcome from "../pages/Welcome";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import UserDashboard from '../pages/dashboard/UserDashboard';
import AppointmentBooking from '../pages/dashboard/AppointmentBooking';

const AuthenticationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />

      <Route path="auth/signup" element={<Signup />} />

      <Route path="auth/login" element={<Login />} />

      <Route path="dashboard" element={<UserDashboard />} />

      <Route path="appointment" element={<AppointmentBooking />} />

      <Route path="*" element={<Navigate to="auth/login" replace />} />
    </Routes>
  );
};

export default AuthenticationRoutes;
