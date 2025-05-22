
import { useEffect, useState } from "react";
import axios from "axios";

function DisplayPets() {
  const [pets, setPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const [lostRes, foundRes] = await Promise.all([
          axios.get("http://localhost:3000/animal?type=lost"),
          axios.get("http://localhost:3000/animal?type=found"),
        ]);
        const combined = [...lostRes.data, ...foundRes.data];
        setPets(combined);
        setFilteredPets(combined);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, []);

  useEffect(() => {
    const filtered = pets.filter((pet) =>
      (pet.breed?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pet.location?.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredPets(filtered);
  }, [searchTerm, pets]);

  const openModal = (pet) => setSelectedPet(pet);
  const closeModal = () => setSelectedPet(null);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="container mx-auto mt-24 p-6 max-w-6xl">
      <h2 className="text-3xl font-semibold text-center mb-10 text-gray-700">Lost & Found Pets</h2>

      {/* 🔍 Search */}
      <div className="mb-8 text-center">
        <input
          type="text"
          placeholder="Search by breed or location..."
          className="w-full md:w-1/2 p-3 border border-gray-300 rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Pet Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredPets.length === 0 ? (
          <p>No pets found.</p>
        ) : (
          filteredPets.map((pet) => (
            <div
              key={pet._id}
              onClick={() => openModal(pet)}
              className="cursor-pointer bg-white border rounded shadow p-4 hover:shadow-lg transition"
            >
              <img
                src={pet.image}
                alt="Pet"
                className="w-full h-64 object-cover rounded mb-3"
              />
              <div className="flex justify-between items-center mb-2">
                <p className="font-bold text-lg">{pet.breed}</p>
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    pet.reportType === "lost"
                      ? "bg-red-100 text-red-600"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  {pet.reportType.toUpperCase()}
                </span>
              </div>
              <p className="text-gray-600">{pet.location}</p>
              <p className="text-sm text-gray-400">
                {pet.reportType === "lost" ? "Lost" : "Found"} on{" "}
                {new Date(pet.date).toLocaleDateString()}
              </p>
            </div>
          ))
        )}
      </div>

      {/* Modal */}
      {selectedPet && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full relative shadow-lg">
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
            >
              &times;
            </button>
            <img
              src={selectedPet.image}
              alt="Pet"
              className="w-full h-64 object-cover rounded mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">{selectedPet.breed}</h3>
            <div className="text-gray-700 space-y-1 text-sm">
              <p><strong>Animal Type:</strong> {selectedPet.animalType}</p>
              <p><strong>Color:</strong> {selectedPet.color || "N/A"}</p>
              <p><strong>Gender:</strong> {selectedPet.gender}</p>
              <p><strong>Age:</strong> {selectedPet.age || "Unknown"}</p>
              <p><strong>Location:</strong> {selectedPet.location}</p>
              <p><strong>Date:</strong> {new Date(selectedPet.date).toLocaleDateString()}</p>
              <p><strong>Description:</strong> {selectedPet.description || "None"}</p>
              <p><strong>Microchip ID:</strong> {selectedPet.microchipId || "N/A"}</p>
              <p><strong>Injured:</strong> {selectedPet.isInjured ? "Yes" : "No"}</p>
              {selectedPet.reportType === "lost" && selectedPet.reward && (
                <p><strong>Reward:</strong> ₹{selectedPet.reward}</p>
              )}
              <hr className="my-2" />
              <p className="font-medium text-gray-800">Reported By:</p>
              <p><strong>Name:</strong> {selectedPet.reporterName}</p>
              <p><strong>Phone:</strong> {selectedPet.reporterPhone}</p>
              {selectedPet.reporterEmail && (
                <p><strong>Email:</strong> {selectedPet.reporterEmail}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DisplayPets;
// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useAuth } from "../auth/AuthContext";

// function DisplayPets() {
//   const { currentUser } = useAuth();
//   const [pets, setPets] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchPets = async () => {
//     try {
//       const res = await axios.get("http://localhost:3000/animals");
//       setPets(res.data);
//     } catch (err) {
//       console.error("Error loading pets", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchPets();
//   }, []);

//   const markAsResolved = async (id) => {
//     try {
//       await axios.put(`http://localhost:3000/animals/${id}`, {}, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`
//         }
//       });
//       fetchPets();
//     } catch (err) {
//       console.error("Error resolving", err);
//     }
//   };

//   if (loading) return <div className="text-center mt-10">Loading...</div>;

//   return (
//     <div className="max-w-6xl mx-auto mt-10 p-6">
//       <h2 className="text-3xl font-semibold mb-6 text-center">Lost & Found Pets</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {pets.map((pet) => (
//           <div key={pet._id} className="bg-white shadow rounded p-4">
//             <img src={pet.image} alt="pet" className="w-full h-48 object-cover mb-2 rounded" />
//             <h3 className="text-xl font-bold">{pet.breed}</h3>
//             <p className="text-sm text-gray-600">{pet.location}</p>
//             <p className="text-xs text-gray-400">Reported: {new Date(pet.date).toLocaleDateString()}</p>

//             {currentUser?.id === pet.userId && (
//               <button
//                 onClick={() => markAsResolved(pet._id)}
//                 className="mt-2 text-blue-600 underline"
//               >
//                 Mark as Resolved
//               </button>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default DisplayPets;
