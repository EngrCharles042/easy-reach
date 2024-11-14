import React from "react";

const UserProfile = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">User Profile</h2>

      {/* Profile Picture Section */}
      <div className="flex items-center mb-6 max-md:flex-col">
        <div className="w-24 h-24 rounded-full bg-gray-300 mr-4 flex items-center justify-center text-gray-500">
          <span>Photo</span>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Upload New Photo
        </button>
      </div>

      {/* Profile Form */}
      <form className="space-y-4">
        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="fullName"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="phone"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter your phone number"
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="address"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter your address"
          />
        </div>

        <button
          type="button"
          className="w-full mt-4 bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          Edit Profile
        </button>
      </form>
    </div>
  );
};

export default UserProfile;
