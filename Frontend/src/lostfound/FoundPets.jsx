
import { useState } from "react";
import axios from "axios";

function FoundPets() {
  const [reportType, setReportType] = useState("found");

  const [form, setForm] = useState({
    animalType: "",
    breed: "",
    color: "",
    gender: "",
    age: "",
    date: "",
    location: "",
    description: "",
    image: null,
    reporterName: "",
    reporterPhone: "",
    reporterEmail: "",
    reward: "",
    isInjured: false,
    microchipId: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      setForm({ ...form, image: files[0] });
    } else if (type === "checkbox") {
      setForm({ ...form, [name]: checked });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    Object.entries(form).forEach(([key, val]) => {
      formData.append(key, val);
    });

    formData.append("reportType", reportType); // ✅ Critical for unified schema

    try {
      const endpoint = `http://localhost:3000/animal`; // ✅ Use unified endpoint
      await axios.post(endpoint, formData);
      alert(`Your ${reportType} report has been submitted!`);

      setForm({
        animalType: "",
        breed: "",
        color: "",
        gender: "",
        age: "",
        date: "",
        location: "",
        description: "",
        image: null,
        reporterName: "",
        reporterPhone: "",
        reporterEmail: "",
        reward: "",
        isInjured: false,
        microchipId: ""
      });
    } catch (err) {
      console.error(err);
      alert("Submission failed!");
    }
  };

  return (
    <div className="container mx-auto mt-20 p-6 max-w-4xl bg-white border rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Report a {reportType === "found" ? "Found" : "Lost"} Pet
      </h2>

      {/* Report Type */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Report Type:</label>
        <select
          name="reportType"
          value={reportType}
          onChange={(e) => setReportType(e.target.value)}
          className="w-full p-3 border rounded-md"
        >
          <option value="found">Found</option>
          <option value="lost">Lost</option>
        </select>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Animal Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Animal Type:</label>
          <select
            name="animalType"
            value={form.animalType}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
            required
          >
            <option value="">Select</option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Bird">Bird</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Breed */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Breed:</label>
          <input
            type="text"
            name="breed"
            value={form.breed}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
            required
          />
        </div>

        {/* Color */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Color / Markings:</label>
          <input
            type="text"
            name="color"
            value={form.color}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Gender:</label>
          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
            required
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Unknown">Unknown</option>
          </select>
        </div>

        {/* Age */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Age (approx.):</label>
          <input
            type="text"
            name="age"
            value={form.age}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
          />
        </div>

        {/* Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Date {reportType === "found" ? "Found" : "Lost"}:
          </label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
            required
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Location:</label>
          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Description:</label>
          <textarea
            name="description"
            rows="4"
            value={form.description}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
          />
        </div>

        {/* Image */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Upload Image:</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
            required
          />
        </div>

        {/* Reporter Info */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Your Name:</label>
          <input
            type="text"
            name="reporterName"
            value={form.reporterName}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number:</label>
          <input
            type="tel"
            name="reporterPhone"
            value={form.reporterPhone}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email (optional):</label>
          <input
            type="email"
            name="reporterEmail"
            value={form.reporterEmail}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
          />
        </div>

        {/* Reward (only for Lost) */}
        {reportType === "lost" && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Reward (optional):</label>
            <input
              type="text"
              name="reward"
              value={form.reward}
              onChange={handleChange}
              className="w-full p-3 border rounded-md"
            />
          </div>
        )}

        {/* Injured */}
        <div className="flex items-center">
          <input
            type="checkbox"
            name="isInjured"
            checked={form.isInjured}
            onChange={handleChange}
            className="mr-2"
          />
          <label className="text-sm font-medium text-gray-700">Is the animal injured?</label>
        </div>

        {/* Microchip */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Microchip ID (if known):</label>
          <input
            type="text"
            name="microchipId"
            value={form.microchipId}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
          />
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700"
          >
            Submit Report
          </button>
        </div>
      </form>
    </div>
  );
}

export default FoundPets;


// import { useState } from "react";
// import axios from "axios";
// import { useAuth } from "../auth/AuthContext";
// import { useNavigate } from "react-router-dom";

// function FoundPets() {
//   const { currentUser } = useAuth();
//   const navigate = useNavigate();
//   const [reportType, setReportType] = useState("found");

//   const [form, setForm] = useState({
//     animalType: "",
//     breed: "",
//     color: "",
//     gender: "",
//     age: "",
//     date: "",
//     location: "",
//     description: "",
//     image: "",
//     reporterName: "",
//     reporterPhone: "",
//     reporterEmail: "",
//     reward: "",
//     isInjured: false,
//     microchipId: ""
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setForm({ ...form, [name]: type === "checkbox" ? checked : value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!currentUser) {
//       alert("Please log in to submit a report.");
//       navigate("/login");
//       return;
//     }

//     try {
//       await axios.post("http://localhost:3000/animals", {
//         ...form,
//         reportType,
//         userId: currentUser.id
//       }, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`
//         }
//       });

//       alert("Report submitted!");
//       setForm({
//         animalType: "",
//         breed: "",
//         color: "",
//         gender: "",
//         age: "",
//         date: "",
//         location: "",
//         description: "",
//         image: "",
//         reporterName: "",
//         reporterPhone: "",
//         reporterEmail: "",
//         reward: "",
//         isInjured: false,
//         microchipId: ""
//       });
//     } catch (err) {
//       alert("Submission failed.");
//       console.error(err);
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto mt-10">
//       <h2 className="text-2xl font-bold mb-4">Report a {reportType} Pet</h2>
//       <form onSubmit={handleSubmit} className="space-y-3">
//         <select value={reportType} onChange={(e) => setReportType(e.target.value)}>
//           <option value="found">Found</option>
//           <option value="lost">Lost</option>
//         </select>
//         <input placeholder="Animal Type" name="animalType" value={form.animalType} onChange={handleChange} />
//         <input placeholder="Breed" name="breed" value={form.breed} onChange={handleChange} />
//         <input placeholder="Color" name="color" value={form.color} onChange={handleChange} />
//         <input placeholder="Gender" name="gender" value={form.gender} onChange={handleChange} />
//         <input placeholder="Age" name="age" value={form.age} onChange={handleChange} />
//         <input placeholder="Date" type="date" name="date" value={form.date} onChange={handleChange} />
//         <input placeholder="Location" name="location" value={form.location} onChange={handleChange} />
//         <textarea placeholder="Description" name="description" value={form.description} onChange={handleChange}></textarea>
//         <input placeholder="Image URL" name="image" value={form.image} onChange={handleChange} />
//         <input placeholder="Your Name" name="reporterName" value={form.reporterName} onChange={handleChange} />
//         <input placeholder="Phone" name="reporterPhone" value={form.reporterPhone} onChange={handleChange} />
//         <input placeholder="Email" name="reporterEmail" value={form.reporterEmail} onChange={handleChange} />
//         {reportType === "lost" && <input placeholder="Reward (optional)" name="reward" value={form.reward} onChange={handleChange} />}
//         <label>
//           <input type="checkbox" name="isInjured" checked={form.isInjured} onChange={handleChange} /> Injured?
//         </label>
//         <input placeholder="Microchip ID" name="microchipId" value={form.microchipId} onChange={handleChange} />
//         <button className="bg-blue-600 text-white px-4 py-2 rounded" type="submit">Submit Report</button>
//       </form>
//     </div>
//   );
// }

// export default FoundPets;


