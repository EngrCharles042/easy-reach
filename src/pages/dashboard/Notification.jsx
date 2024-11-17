import React from 'react'

const Notification = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
            <ul className="text-gray-700 space-y-2">
              <li>Appointment with Dr. Charles Obi on Oct 24, 2024</li>
              <li>Updated profile information</li>
              <li>Checked medical history</li>
            </ul>
            <h2 className="text-2xl font-semibold mt-6 mb-4">Upcoming Appointments</h2>
            <ul className="text-gray-700 space-y-2">
              <li>Dr. Georgian Kosisochukwu - Oct 28, 2024 at 2:00 PM</li>
              <li>Dr. Destiny Ibezim - Nov 3, 2024 at 11:30 AM</li>
            </ul>
          </div>
  )
}

export default Notification