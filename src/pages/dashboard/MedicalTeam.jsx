import React from "react";
import { AppointmentButton } from "../../components/elements/button/Index";

const MedicalTeam = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
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
        <AppointmentButton> Dr. John Doe </AppointmentButton>
        <AppointmentButton> Dr. Jane Smith</AppointmentButton>
        <AppointmentButton> Dr. Sam Brown</AppointmentButton>
        <AppointmentButton> Dr. Emily White</AppointmentButton>
      </div>
    </div>
  );
};

export default MedicalTeam;
