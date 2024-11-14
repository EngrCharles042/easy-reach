import React from "react";

const FeedbackAndHealthTips = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Feedback Form</h2>
      <p className="text-gray-700 mb-6">
        This feedback helps us to understand you more and serve you better.
      </p>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-600">Your Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="block text-gray-600">Your Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block text-gray-600">Your Feedback</label>
          <textarea
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Enter your feedback"
            rows="4"
          ></textarea>
        </div>
        <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Submit Feedback
        </button>
      </form>
      <h2 className="text-2xl font-semibold my-4">Health Tips</h2>
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
