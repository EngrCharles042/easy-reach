import React from "react";

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
      <p className="font-bold text-lg text-blue-600 mb-8">
        Emergency Number: +234 8104080000
      </p>

      <div className="space-y-4">
        <button className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Dr. John Doe
        </button>
        <button className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Dr. Jane Smith
        </button>
        <button className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Dr. Sam Brown
        </button>
        <button className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Dr. Emily White
        </button>
      </div>
    </div>
  );
};

export default MedicalTeam;
