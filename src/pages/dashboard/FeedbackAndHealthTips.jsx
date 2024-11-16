import React, { useState } from "react";
import { MainButton } from "../../components/elements/button/Index";
import InputField from "../../components/elements/forms/InputField";

const FeedbackAndHealthTips = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const [showNotification, setShowNotification] = useState(false); // For notification

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback Submitted:", formData);

    // Clear form
    setFormData({
      name: "",
      email: "",
      feedback: "",
    });

    // Show notification
    setShowNotification(true);

    // Hide notification after 3 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-md:p-4">
      {/* Notification */}
      {showNotification && (
        <div className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-md shadow-lg transition-opacity duration-500 z-50">
          Thank you for your feedback!
        </div>
      )}

      <h2 className="text-2xl font-semibold mb-4">Feedback Form</h2>
      <p className="text-gray-700 mb-6">
        This feedback helps us to understand you more and serve you better.
      </p>

      <form className="flex flex-col mx-auto space-y-4 w-1/2 max-md:w-full" onSubmit={handleSubmit}>
        <InputField
          label="Name"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
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
        <div>
          <label
            htmlFor="feedback"
            className="block text-xl tracking-tight leading-none"
          >
            Your Feedback
          </label>
          <textarea
            id="feedback"
            name="feedback"
            className="flex flex-wrap items-center px-4 py-3 mt-2 w-full text-lg bg-white rounded-lg border-2 border-solid border-slate-300 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your feedback"
            rows="4"
            value={formData.feedback}
            onChange={handleChange}
          ></textarea>
        </div>
        <MainButton type="submit" className="max-md:w-full">
          Submit Feedback
        </MainButton>
      </form>

      <h2 className="text-2xl font-semibold my-6">Health Tips</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Drink plenty of water every day.</li>
        <li>Exercise regularly for at least 30 minutes.</li>
        <li>Get at least 7-8 hours of sleep every night.</li>
        <li>Maintain a balanced diet with fruits and vegetables.</li>
        <li>Stay up-to-date with health checkups.</li>
      </ul>
    </div>
  );
};

export default FeedbackAndHealthTips;
