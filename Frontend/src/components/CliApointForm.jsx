import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useLocation, useNavigate } from 'react-router-dom';

const AppointmentForm = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { clinic } = state;

  const [formData, setFormData] = useState({
    petName: '',
    petBreed: '',
    petSize: '',
    petAge: '',
    issue: '',
    ownerName: '',
    ownerContact: '',
    ownerEmail: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add clinic information to the form data
    const emailData = {
      ...formData,
      clinicName: clinic.name,
      clinicContact: clinic.contact,
    };

    emailjs
      .send(
        'service_6kjrcnm', // Replace with your EmailJS service ID
        'template_19unqeo', // Replace with your EmailJS template ID
        emailData,
        'IIHxFEfsG7PX4HZYE' // Replace with your EmailJS public key
      )
      .then(() => {
        alert('Appointment request sent successfully!');
        navigate('/'); // Navigate to the home page after successful submission
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Failed to send appointment request. Try again.');
      });
  };

  return (
    <div className="container mx-auto mt-36 p-6 max-w-4xl bg-white border rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold text-center mb-6">Appointment Form</h2>
      <p className="text-center text-gray-600 mb-4">Clinic: {clinic.name}</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Pet Name</label>
          <input
            type="text"
            name="petName"
            value={formData.petName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Pet Breed</label>
          <input
            type="text"
            name="petBreed"
            value={formData.petBreed}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Pet Size</label>
          <input
            type="text"
            name="petSize"
            value={formData.petSize}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Pet Age</label>
          <input
            type="number"
            name="petAge"
            value={formData.petAge}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Issue</label>
          <textarea
            name="issue"
            value={formData.issue}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            rows="3"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Owner Name</label>
          <input
            type="text"
            name="ownerName"
            value={formData.ownerName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Contact Number</label>
          <input
            type="text"
            name="ownerContact"
            value={formData.ownerContact}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Email</label>
          <input
            type="email"
            name="ownerEmail"
            value={formData.ownerEmail}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
