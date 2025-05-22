import { useState } from "react";
import axios from "axios";

function LostPets() {
  const [form, setForm] = useState({ breed: "", location: "", image: null });
  const [matches, setMatches] = useState([]); // Initialize as an empty array

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setForm({ ...form, image: e.target.files[0] });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(form).forEach((key) => formData.append(key, form[key]));

    try {
      const res = await axios.post("http://localhost:3000/lost", formData);
      console.log("Match results:", res.data.matches); // Debug log for matches
      setMatches(res.data.matches || []); // Ensure it's an empty array if undefined
    } catch (err) {
      console.error(err);
      alert("Recognition failed!");
    }
  };

  return (
    <div className="container mx-auto mt-32 p-6 max-w-4xl bg-white border rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold text-center mb-6 text-gray-700">
        Report a Lost Pet
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Breed */}
        <div>
          <label htmlFor="breed" className="block text-sm font-medium text-gray-600 mb-2">
            Breed:
          </label>
          <input
            type="text"
            name="breed"
            id="breed"
            value={form.breed}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
            required
          />
        </div>

        {/* Location */}
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-600 mb-2">
            Location Lost:
          </label>
          <input
            type="text"
            name="location"
            id="location"
            value={form.location}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
            required
          />
        </div>

        {/* Image Upload */}
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-600 mb-2">
            Upload Pet Image:
          </label>
          <input
            type="file"
            name="image"
            id="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
          >
            Find Match
          </button>
        </div>
      </form>

      {/* Matches */}
      {Array.isArray(matches) && matches.length > 0 && (
        <div className="mt-10">
          <h3 className="text-2xl font-semibold mb-4 text-gray-700">Potential Matches</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {matches.map((pet, i) => (
              <div
                key={i}
                className="border rounded-lg shadow-md p-4 bg-gray-50 flex flex-col items-center"
              >
                <img
                  src={pet.image}
                  alt={`Match ${i}`}
                  className="w-full h-64 object-cover rounded mb-4"
                />
                <p className="text-gray-700 font-medium">{pet.breed} — {pet.location}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default LostPets;

