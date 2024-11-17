import React, { useState } from "react";
import { MainButton } from "../../components/elements/button/Index";

const AppointmentBooking = ({
  doctorPhoto,
  doctorName,
  specialty,
  email,
  phone,
  onBookAppointment,
  onBackToDashboard,
}) => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    name: "",
    contact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onBookAppointment(formData);
    // Clear form after submission
    setFormData({
      date: "",
      time: "",
      name: "",
      contact: "",
    });
  };

  return (
    <div className="max-md:p-4">
      <h2 className="text-2xl font-semibold mb-6">Book an Appointment</h2>
      <div className="flex items-center mb-6">
        <img
          src={doctorPhoto}
          alt="photo"
          className="w-24 h-24 bg-gray-100 rounded-full object-cover mr-4"
        />
        <div>
          <p className="text-lg font-bold">{doctorName}</p>
          <p className="text-gray-600">Specialty: {specialty}</p>
          <p className="text-gray-600">Contact: {email}</p>
          <p className="text-gray-600">Phone: {phone}</p>
        </div>
      </div>

      <form className="space-y-4 max-md:space-y-2" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700"
          >
            Select Date:
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="time"
            className="block text-sm font-medium text-gray-700"
          >
            Select Time:
          </label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Your Full Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="contact"
            className="block text-sm font-medium text-gray-700"
          >
            Your Contact Number:
          </label>
          <input
            type="tel"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Enter your contact number"
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div className="flex">
          <MainButton
            type="button"
            onClick={onBackToDashboard}
            className="max-md:py-2 mr-10 max-md:mr-5 bg-red-500 hover:bg-red-600 mt-0 max-md:mt-0"
          >
            Back
          </MainButton>
          <MainButton
            type="submit" className="max-md:py-2 mt-0 max-md:mt-0"
          >
            Book
          </MainButton>
        </div>
      </form>
    </div>
  );
};

export default AppointmentBooking;
