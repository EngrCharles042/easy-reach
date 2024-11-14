import React, { useState } from "react";
import UserProfile from "./UserProfile";
import MedicalTeam from "./MedicalTeam";
import MedicalHistory from "./MedicalHistory";
import FeedbackAndHealthTips from "./FeedbackAndHealthTips";
import Notification from "./Notification";

const UserDashboard = () => {
  const [activeSection, setActiveSection] = useState("profile");

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
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg max-md:hidden">
        <div className="p-6 text-xl font-semibold text-gray-800 border-b">
          LOGO
        </div>
        <nav className="mt-6 space-y-4">
          <button
            onClick={() => setActiveSection("profile")}
            className="block px-6 py-2 text-gray-700 hover:bg-gray-200 rounded"
          >
            Profile
          </button>
          <button
            onClick={() => setActiveSection("medicalTeams")}
            className="block px-6 py-2 text-gray-700 hover:bg-gray-200 rounded"
          >
            Medical Teams
          </button>
          <button
            onClick={() => setActiveSection("medicalHistory")}
            className="block px-6 py-2 text-gray-700 hover:bg-gray-200 rounded"
          >
            Medical History
          </button>
          <button
            onClick={() => setActiveSection("feedback")}
            className="block px-6 py-2 text-gray-700 hover:bg-gray-200 rounded"
          >
            Feedback
          </button>
          <button
            onClick={() => setActiveSection("notifications")}
            className="block px-6 py-2 text-gray-700 hover:bg-gray-200 rounded"
          >
            Notifications
          </button>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
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
