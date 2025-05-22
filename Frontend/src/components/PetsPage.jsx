// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// const PetsPage = () => {
//   const { centerId } = useParams();
//   const [adoptionCenter, setAdoptionCenter] = useState(null);
//   const [filteredPets, setFilteredPets] = useState([]);
//     const navigate = useNavigate();
//     const handleAdoptNowClick = () => {
//       navigate('/forms'); // Navigate to the '/forms' path
//     };
//   useEffect(() => {
//     fetch('/india_pet_adoption.json')
//       .then((response) => response.json())
//       .then((data) => {
//         const center = data.data
//           .flatMap((state) => state.cities)
//           .flatMap((city) => city.adoption_centers)
//           .find((center) => center.id === parseInt(centerId));
//         setAdoptionCenter(center);
//         setFilteredPets(center?.pets_available || []);
//       })
//       .catch((error) => console.error('Error fetching data:', error));
//   }, [centerId]);

//   if (!adoptionCenter) return <div>Loading...</div>;

//   return (
//     <div className="max-w-6xl mx-auto mt-20">
//       <h2 className="text-2xl font-semibold text-center mb-6">
//         Pets Available at {adoptionCenter.name}
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredPets.map((pet, index) => (
//           <div key={index} className="card bg-base-100 shadow-xl">
//             <figure>
//               <img
//                 src="https://img.freepik.com/free-vector/adorable-adopt-dog-illustration_23-2148516349.jpg"
//                 alt={pet.name}
//                 className="w-full h-48 object-cover rounded-t-md"
//               />
//             </figure>
//             <div className="card-body">
//               <h2 className="card-title text-lg font-semibold">{pet.name}</h2>
//               <p className="text-sm text-gray-400">Age: {pet.age}</p>
//               <p className="text-sm text-gray-400">Breed: {pet.breed}</p>
//               <p className="text-sm text-gray-400">Size: {pet.size}</p>
//             </div>
//             <div className="max-w-6xl mx-auto mt-20">
//       {/* Other content */}
//       <button className="btn btn-primary" onClick={handleAdoptNowClick}>
//         Adopt Now
//       </button>
//     </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PetsPage;


import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const PetsPage = () => {
  const { centerId } = useParams();
  const [adoptionCenter, setAdoptionCenter] = useState(null);
  const [filteredPets, setFilteredPets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/india_pet_adoption.json')
      .then((response) => response.json())
      .then((data) => {
        const center = data.data
          .flatMap((state) => state.cities)
          .flatMap((city) => city.adoption_centers)
          .find((center) => center.id === parseInt(centerId));
        setAdoptionCenter(center);
        setFilteredPets(center?.pets_available || []);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [centerId]);

  const handleAdoptNowClick = (pet) => {
    navigate('/forms', { state: { pet } }); // Pass the selected pet data
  };

  if (!adoptionCenter) return <div>Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto mt-20">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Pets Available at {adoptionCenter.name}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPets.map((pet, index) => (
          <div key={index} className="card bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://img.freepik.com/free-vector/adorable-adopt-dog-illustration_23-2148516349.jpg"
                alt={pet.name}
                className="w-full h-48 object-cover rounded-t-md"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-lg font-semibold">{pet.name}</h2>
              <p className="text-sm text-gray-400">Breed: {pet.breed}</p>
              <p className="text-sm text-gray-400">Size: {pet.size}</p>
            </div>
            <div className="max-w-6xl mx-auto mt-20">
              <button
                className="btn btn-primary"
                onClick={() => handleAdoptNowClick(pet)}
              >
                Adopt Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetsPage;
