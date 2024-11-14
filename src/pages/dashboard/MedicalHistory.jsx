import React from 'react'

const MedicalHistory = () => {
  return (
<div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Patient Information</h2>
            <div className="text-gray-700 mb-6">
              <p><strong>Name:</strong> John Doe</p>
              <p><strong>Age:</strong> 35</p>
              <p><strong>Blood Type:</strong> O+</p>
              <p><strong>Allergies:</strong> None</p>
            </div>

            <h3 className="text-xl font-semibold mb-3">Medical Records</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>2023-05-15: Annual Physical Exam - Dr. Jane Smith</li>
              <li>2023-04-10: Blood Test - Normal</li>
              <li>2022-11-22: X-ray for chest pain - No issues found</li>
              <li>2022-05-10: Flu Vaccination</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Past Appointments</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>2023-08-01: Dr. John Doe - General Consultation</li>
              <li>2023-06-14: Dr. Jane Smith - Follow-up Visit</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Prescriptions</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Ibuprofen 400mg - Take 1 tablet every 8 hours as needed</li>
              <li>Amoxicillin 500mg - Complete course</li>
            </ul>
          </div>  )
}

export default MedicalHistory