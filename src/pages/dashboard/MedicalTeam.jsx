import React, { useState } from "react";
import { AppointmentButton } from "../../components/elements/button/Index";
import AppointmentBooking from "./AppointmentBooking";
import Modal from "../../components/elements/modal/Modal";

const MedicalTeam = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showNotification, setShowNotification] = useState(false); // For notification

  const doctors = [
    {
      name: "Dr. John Doe",
      photo: "/path/to/photo1.jpg",
      specialty: "Cardiology",
      email: "john@example.com",
      phone: "123-456-7890",
    },
    {
      name: "Dr. Jane Smith",
      photo: "/path/to/photo2.jpg",
      specialty: "Dermatology",
      email: "jane@example.com",
      phone: "987-654-3210",
    },
    {
      name: "Dr. Sam Brown",
      photo: "/path/to/photo3.jpg",
      specialty: "Neurology",
      email: "sam@example.com",
      phone: "555-555-5555",
    },
    {
      name: "Dr. Emily White",
      photo: "/path/to/photo4.jpg",
      specialty: "Pediatrics",
      email: "emily@example.com",
      phone: "111-111-1111",
    },
  ];

  const handleOpenModal = (doctor) => {
    setSelectedDoctor(doctor);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDoctor(null);
  };

  const handleBookAppointment = (data) => {
    // Show notification
    setShowNotification(true);

    // Hide notification after 3 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);

    console.log("Appointment booked:", data);
    handleCloseModal();
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      {/* Notification */}
      {showNotification && (
        <div className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-md shadow-lg transition-opacity duration-500 z-50">
          Appointment booked!
        </div>
      )}

      <h2 className="text-2xl font-semibold mb-4">Our Medical Team</h2>
      <p className="text-gray-700 mb-6">
        Our team of experienced doctors is committed to providing you with
        personalized care and expert medical advice. You can consult them for
        general health concerns, chronic conditions, and preventive care. Each
        consultation is aimed at delivering high-quality medical assistance to
        meet your unique needs.
      </p>

      <h3 className="text-xl font-semibold mb-3">
        Here's what you can expect from your consultation:
      </h3>
      <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
        <li>Detailed discussions about your health concerns.</li>
        <li>Personalized treatment plans or preventive health advice.</li>
        <li>Clear instructions for follow-ups or further tests, if needed.</li>
        <li>Confidentiality and respectful interactions at all times.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-3">Emergency Contact</h3>
      <p className="text-gray-700 mb-6">
        If you need immediate assistance, please call:
      </p>
      <p className="font-bold text-lg text-green-600">
        Emergency Number: +234 8104080000
      </p>

      <div className="flex flex-col items-center">
        {doctors.map((doctor, index) => (
          <AppointmentButton
            key={index}
            onClick={() => handleOpenModal(doctor)}
          >
            {doctor.name}
          </AppointmentButton>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedDoctor && (
          <AppointmentBooking
            doctorPhoto={selectedDoctor.photo}
            doctorName={selectedDoctor.name}
            specialty={selectedDoctor.specialty}
            email={selectedDoctor.email}
            phone={selectedDoctor.phone}
            onBookAppointment={handleBookAppointment}
            onBackToDashboard={handleCloseModal}
          />
        )}
      </Modal>
    </div>
  );
};

export default MedicalTeam;
