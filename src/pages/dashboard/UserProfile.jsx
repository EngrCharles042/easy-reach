import React, { useEffect, useState } from "react";
import InputField from "../../components/elements/forms/InputField";
import { MainButton } from "../../components/elements/button/Index";

const UserProfile = () => {
  const [profilePic, setProfilePic] = useState(null); // State for profile picture
  const [tempPic, setTempPic] = useState(null); // Temporary state for new picture upload
  const [isSaving, setIsSaving] = useState(false); // State to control button visibility
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setTempPic(reader.result); // Temporarily hold the selected picture
        setIsSaving(true); // Show the save button
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSavePic = () => {
    if (tempPic) {
      setProfilePic(tempPic); // Save the new profile picture
      localStorage.setItem("profilePic", tempPic); // Save to local storage
      setTempPic(null); // Clear temporary state
      setIsSaving(false); // Reset to show upload button
    }
  };

  useEffect(() => {
    // Fetch profile picture from local storage (if available)
    const savedPic = localStorage.getItem("profilePic");
    if (savedPic) {
      setProfilePic(savedPic);
    }

    // Fetch logged-in user data from local storage
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))?.user;

    if (loggedInUser) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        fullName: loggedInUser.fullName || "",
        email: loggedInUser.email || "",
        phoneNumber: loggedInUser.phoneNumber || "",
        address: loggedInUser.address || "",
      }));
    }
  }, []);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (loggedInUser) {
      // Update user profile in local storage
      loggedInUser.user = { ...loggedInUser.user, ...formData };
      localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

      // Optionally, update all users in the local storage
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const updatedUsers = users.map((user) =>
        user.email === loggedInUser.user.email ? { ...user, ...formData } : user
      );
      localStorage.setItem("users", JSON.stringify(updatedUsers));
    }

    setIsEditing(false); // Exit edit mode
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">User Profile</h2>

      {/* Profile Picture Section */}
      <div className="flex items-center mb-6 max-md:flex-col">
        <div className="w-24 h-24 rounded-full bg-gray-300 mr-4 flex items-center justify-center overflow-hidden">
          {profilePic ? (
            <img
              src={profilePic}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-gray-500">Photo</span>
          )}
        </div>
        <div>
          {!isSaving ? (
            <label
              htmlFor="upload-photo"
              className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600"
            >
              Upload New Photo
              <input
                id="upload-photo"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          ) : (
            <button
              onClick={handleSavePic}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Save Profile Picture
            </button>
          )}
        </div>
      </div>

      {/* Profile Form */}
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <InputField
          label="Full Name"
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          placeholder="Enter your full name"
          disabled
          onChange={() => {}}
          className="border rounded bg-gray-200 text-gray-500 cursor-not-allowed"
        />
        <InputField
          label="Email"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          placeholder="Enter your email"
          disabled
          onChange={() => {}}
          className="border rounded bg-gray-200 text-gray-500 cursor-not-allowed"
        />
        <InputField
          label="Phone Number"
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          placeholder="Enter your phone number"
          disabled={!isEditing} // Editable only when isEditing is true
        />
        <InputField
          label="Address"
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          placeholder="Enter your address"
          disabled={!isEditing} // Editable only when isEditing is true
        />
        <div className="mt-6 flex justify-end space-x-4">
          {isEditing ? (
            <>
              <MainButton onClick={() => setIsEditing(false)}>
                Cancel
              </MainButton>
              <MainButton onClick={handleSave}>Save Changes</MainButton>
            </>
          ) : (
            <MainButton onClick={() => setIsEditing(true)}>
              Edit Profile
            </MainButton>
          )}
        </div>
      </form>
    </div>
  );
};

export default UserProfile;
