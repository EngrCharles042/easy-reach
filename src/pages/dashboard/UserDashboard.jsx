import React, { useState } from "react";
import UserProfile from "./UserProfile";
import MedicalTeam from "./MedicalTeam";
import MedicalHistory from "./MedicalHistory";
import FeedbackAndHealthTips from "./FeedbackAndHealthTips";
import Notification from "./Notification";
import { FaBars, FaTimes } from "react-icons/fa";

const UserDashboard = () => {
  const [activeSection, setActiveSection] = useState("profile");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar (hidden on small screens) */}
      <aside
        className={`w-64 bg-white shadow-lg fixed lg:relative lg:block transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 mt-[4.55rem]`}
      >
        <div className="p-6 text-xl font-semibold text-gray-800 border-b">
          LOGO
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

          <h1 className="text-2xl font-bold text-gray-800">Hi User</h1>
          <button className="text-gray-600 bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
            Logout
          </button>
        </header>

        <main className="flex-1 p-6 overflow-y-auto">{renderContent()}</main>
      </div>
    </div>
  );
};

export default UserDashboard;
