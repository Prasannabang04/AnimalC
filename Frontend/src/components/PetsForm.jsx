// import React, { useState, useEffect } from 'react';
// import emailjs from 'emailjs-com';
// import { useNavigate } from 'react-router-dom';

// const PetAdoptionForm = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     organizationName: '',
//     petName: '',
//     petAge: '',
//     petBreed: '',
//     userContact: '',
//     appointmentDate: '',
//     visitingTime: '',
//   });

//   const navigate = useNavigate(); // Use the useNavigate hook to navigate

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Use EmailJS to send the email
//     emailjs.send(
//       'service_312vu4w', // Service ID
//       'template_9p66j3f', // Template ID
//       formData,
//       '30YgnACVPK_mz6Nyg' // User ID
//     )
//     .then((response) => {
//       console.log('Success:', response);
//       alert('Form submitted successfully!');
      
//       // Navigate to home page after successful submission
//       navigate('/'); // This redirects to the home page
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//       alert('An error occurred. Please try again.');
//     });
//   };

//   return (
//     <div className="container mx-auto mt-10 p-6 max-w-4xl bg-white border rounded-lg shadow-md">
//       <h2 className="text-3xl font-semibold text-center mb-6 text-gray-700">Pet Adoption Request Form</h2>

//       <form onSubmit={handleSubmit}>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-600 mb-2" htmlFor="username">
//               Username / ID:
//             </label>
//             <input
//               type="text"
//               id="username"
//               name="username"
//               value={formData.username}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-600 mb-2" htmlFor="organizationName">
//               Organization Name:
//             </label>
//             <input
//               type="text"
//               id="organizationName"
//               name="organizationName"
//               value={formData.organizationName}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-600 mb-2" htmlFor="petName">
//               Pet Name:
//             </label>
//             <input
//               type="text"
//               id="petName"
//               name="petName"
//               value={formData.petName}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-600 mb-2" htmlFor="petAge">
//               Pet Age:
//             </label>
//             <input
//               type="text"
//               id="petAge"
//               name="petAge"
//               value={formData.petAge}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-600 mb-2" htmlFor="petBreed">
//               Pet Breed:
//             </label>
//             <input
//               type="text"
//               id="petBreed"
//               name="petBreed"
//               value={formData.petBreed}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-600 mb-2" htmlFor="userContact">
//               User Contact:
//             </label>
//             <input
//               type="text"
//               id="userContact"
//               name="userContact"
//               value={formData.userContact}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-600 mb-2" htmlFor="appointmentDate">
//               Appointment Date:
//             </label>
//             <input
//               type="date"
//               id="appointmentDate"
//               name="appointmentDate"
//               value={formData.appointmentDate}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-600 mb-2" htmlFor="visitingTime">
//               Visiting Time:
//             </label>
//             <input
//               type="time"
//               id="visitingTime"
//               name="visitingTime"
//               value={formData.visitingTime}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//         </div>

//         <div className="text-center mt-4">
//           <button
//             type="submit"
//             className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             Submit Request
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default PetAdoptionForm;

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';

const PetAdoptionForm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Pre-fill formData with pet details from the state
  const { pet } = location.state || {};
  const [formData, setFormData] = useState({
    username: '',
    userContact: '',
    userAddress: '',
    adoptioncentername: '',
    appointmentDate: '',
    visitingTime: '',
    petName: pet?.name || '',
    petBreed: pet?.breed || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS send function
    emailjs
      .send(
        'service_6kjrcnm', // Service ID
        'template_2xnn568', // Template ID
        formData, // Form data object
        'IIHxFEfsG7PX4HZYE' // User ID
      )
      .then((response) => {
        console.log('Email sent successfully:', response);
        alert('Your adoption request has been submitted successfully!');
        navigate('/'); // Redirect to the home page
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('An error occurred while submitting your request. Please try again.');
      });
  };

  return (
    <div className="container mx-auto mt-32 p-6 max-w-4xl bg-white border rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold text-center mb-6 text-gray-700">
        Pet Adoption Request Form
      </h2>
      <form onSubmit={handleSubmit}>
        {/* User Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-600 mb-2">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-3 border rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="userContact" className="block text-sm font-medium text-gray-600 mb-2">
              Contact Number:
            </label>
            <input
              type="text"
              id="userContact"
              name="userContact"
              value={formData.userContact}
              onChange={handleChange}
              className="w-full p-3 border rounded-md"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="userAddress" className="block text-sm font-medium text-gray-600 mb-2">
            Address:
          </label>
          <input
            type="text"
            id="userAddress"
            name="userAddress"
            value={formData.userAddress}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
            required
          />
        </div>

        {/* Adoption Center Details */}
        <div className="mb-4">
          <label htmlFor="adoptioncentername" className="block text-sm font-medium text-gray-600 mb-2">
            Adoption Center Name:
          </label>
          <input
            type="text"
            id="adoptioncentername"
            name="adoptioncentername"
            value={formData.adoptioncentername}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
            required
          />
          <p className="text-sm text-gray-500">This is to confirm the name of the adoption center.</p>
        </div>

        {/* Appointment Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <label htmlFor="appointmentDate" className="block text-sm font-medium text-gray-600 mb-2">
              Appointment Date:
            </label>
            <input
              type="date"
              id="appointmentDate"
              name="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleChange}
              className="w-full p-3 border rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="visitingTime" className="block text-sm font-medium text-gray-600 mb-2">
              Visiting Time:
            </label>
            <input
              type="time"
              id="visitingTime"
              name="visitingTime"
              value={formData.visitingTime}
              onChange={handleChange}
              className="w-full p-3 border rounded-md"
              required
            />
          </div>
        </div>

        {/* Pet Details */}
        <div className="mb-4">
          <label htmlFor="petName" className="block text-sm font-medium text-gray-600 mb-2">
            Pet Name:
          </label>
          <input
            type="text"
            id="petName"
            name="petName"
            value={formData.petName}
            readOnly
            className="w-full p-3 border rounded-md bg-gray-100"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="petBreed" className="block text-sm font-medium text-gray-600 mb-2">
            Pet Breed:
          </label>
          <input
            type="text"
            id="petBreed"
            name="petBreed"
            value={formData.petBreed}
            readOnly
            className="w-full p-3 border rounded-md bg-gray-100"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
          >
            Submit Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default PetAdoptionForm;
