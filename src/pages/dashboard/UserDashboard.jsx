import React, { useEffect, useState } from "react";
import UserProfile from "./UserProfile";
import MedicalTeam from "./MedicalTeam";
import MedicalHistory from "./MedicalHistory";
import FeedbackAndHealthTips from "./FeedbackAndHealthTips";
import Notification from "./Notification";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const [activeSection, setActiveSection] = useState("notifications");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userName, setUserName] = useState(""); // State to store the user's name
  const navigate = useNavigate();

  useEffect(() => {
    //   // Retrieve the logged-in user from localStorage
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    //   // Check if the user is valid
    if (loggedInUser && loggedInUser.user) {
      setUserName(loggedInUser.user.fullName || "User"); // Set the user's name
    } else {
      // If no logged-in user, redirect to the login page
      navigate("/auth/login");
    }
  }, [navigate]);

  const renderContent = () => {
    switch (activeSection) {
      case "profile":
        return <UserProfile />;
      case "medicalTeams":
        return <MedicalTeam />;
      case "medicalHistory":
        return <MedicalHistory />;
      case "feedback":
        return <FeedbackAndHealthTips />;
      case "notifications":
        return <Notification />;
      default:
        return <div>Select a section from the sidebar</div>;
    }
  };

  const handleLogout = () => {
    // Clear user data from local storage or session storage
    // localStorage.removeItem("users");
    localStorage.removeItem("loggedInUser"); // Optional, if you store logged-in user data
    // sessionStorage.clear(); // Clear any session storage if used

    // Navigate to the login page
    navigate("/auth/login");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar (hidden on small screens) */}
      <aside
        className={`w-64 bg-white shadow-lg fixed lg:relative lg:block transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 max-md:mt-[4.55rem]`}
      >
        <div className="p-6 text-xl font-semibold border-b">
          <span className="text-green-500">Easy</span><span className="text-blue-500">Reach</span>
        </div>
        <nav className="mt-6 space-y-4">
          <button
            onClick={() => {
              setActiveSection("profile");
              setIsMenuOpen(false);
            }}
            className="block px-6 py-2 text-gray-700 hover:bg-gray-200 rounded"
          >
            Profile
          </button>
          <button
            onClick={() => {
              setActiveSection("medicalTeams");
              setIsMenuOpen(false);
            }}
            className="block px-6 py-2 text-gray-700 hover:bg-gray-200 rounded"
          >
            Medical Teams
          </button>
          <button
            onClick={() => {
              setActiveSection("medicalHistory");
              setIsMenuOpen(false);
            }}
            className="block px-6 py-2 text-gray-700 hover:bg-gray-200 rounded"
          >
            Medical History
          </button>
          <button
            onClick={() => {
              setActiveSection("feedback");
              setIsMenuOpen(false);
            }}
            className="block px-6 py-2 text-gray-700 hover:bg-gray-200 rounded"
          >
            Feedback
          </button>
          <button
            onClick={() => {
              setActiveSection("notifications");
              setIsMenuOpen(false);
            }}
            className="block px-6 py-2 text-gray-700 hover:bg-gray-200 rounded"
          >
            Notifications
          </button>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-800 text-2xl focus:outline-none lg:hidden"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <h1 className="text-2xl font-bold text-gray-800">Hi {userName}!</h1>
          <button
            onClick={handleLogout}
            className="text-gray-600 bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
          >
            Logout
          </button>
        </header>

        <main className="flex-1 p-6 bg-gray-100">{renderContent()}</main>
      </div>
    </div>
  );
};

export default UserDashboard;
