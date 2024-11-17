import React, { useEffect, useState } from 'react'

const MedicalHistory = () => {
    const [userName, setUserName] = useState(""); // State to store the user's name

  useEffect(() => {
    //   // Retrieve the logged-in user from localStorage
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    //   // Check if the user is valid
    if (loggedInUser && loggedInUser.user) {
      setUserName(loggedInUser.user.fullName || "Client"); // Set the user's name
    } else {
      // If no logged-in user, redirect to the login page
      console.log("This client doesn't exist");
    }
  });

  return (
<div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Patient Information</h2>
            <div className="text-gray-700 mb-6">
              <p><strong>Name:</strong> {userName}</p>
              <p><strong>Age:</strong> 31</p>
              <p><strong>Blood Type:</strong> O+</p>
              <p><strong>Allergies:</strong> None</p>
            </div>

            <h3 className="text-xl font-semibold mb-3">Medical Records</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>2023-05-15: Annual Physical Exam - Dr. Charles Igwe</li>
              <li>2023-04-10: Blood Test - Normal</li>
              <li>2022-11-22: X-ray for chest pain - No issues found</li>
              <li>2022-05-10: Flu Vaccination</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Past Appointments</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>2023-08-01: Dr. Destiny Ibezim - General Consultation</li>
              <li>2023-06-14: Dr. Georgian Kosisochukwu - Follow-up Visit</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Prescriptions</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Ibuprofen 400mg - Take 1 tablet every 8 hours as needed</li>
              <li>Amoxicillin 500mg - Complete course</li>
            </ul>
          </div>  )
}

export default MedicalHistory