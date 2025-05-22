import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PetAdoptionForm = () => {
  const [data, setData] = useState(null);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [adoptionCenters, setAdoptionCenters] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/india_pet_adoption.json')
      .then((response) => response.json())
      .then((data) => {
        setData(data.data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleStateChange = (e) => {
    const selectedStateId = e.target.value;
    setSelectedState(selectedStateId);
    setSelectedCity('');
    setAdoptionCenters([]);
  };

  const handleCityChange = (e) => {
    const selectedCityName = e.target.value;
    setSelectedCity(selectedCityName);

    const stateData = data.find((state) => state.state_id === parseInt(selectedState));
    const cityData = stateData?.cities.find((city) => city.city_name === selectedCityName);
    setAdoptionCenters(cityData?.adoption_centers || []);
  };

  const handleAdoptNow = (centerId) => {
    navigate(`/pets/${centerId}`);
  };

  return (
    <div className="py-20 max-w-6xl mx-auto mt-20">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Welcome to Snuggle Sanctuary’s Adoption Page
      </h2>

      <div className="mt-8 mb-4">
        <label htmlFor="state" className="block text-lg font-medium text-gray-400">
          Select State
        </label>
        <select
          id="state"
          className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
          value={selectedState}
          onChange={handleStateChange}
        >
          <option value="" disabled>
            Select a state
          </option>
          {data &&
            data.map((state) => (
              <option key={state.state_id} value={state.state_id}>
                {state.state_name}
              </option>
            ))}
        </select>
      </div>

      {selectedState && (
        <div className="mb-4">
          <label htmlFor="city" className="block text-lg font-medium text-gray-400">
            Select City
          </label>
          <select
            id="city"
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
            value={selectedCity}
            onChange={handleCityChange}
          >
            <option value="" disabled>
              Select a city
            </option>
            {data
              .find((state) => state.state_id === parseInt(selectedState))
              ?.cities.map((city) => (
                <option key={city.city_name} value={city.city_name}>
                  {city.city_name}
                </option>
              ))}
          </select>
        </div>
      )}

      {selectedCity && adoptionCenters.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {adoptionCenters.map((center) => (
            <div key={center.id} className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src="Orgban.gif"
                  alt={center.name}
                  className="w-full h-48 object-cover rounded-t-md"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-lg font-semibold">{center.name}</h2>
                <p className="text-sm text-gray-400">{center.address}</p>
                <p className="text-sm text-gray-400">Contact: {center.contact}</p>
                <button className="btn btn-primary" onClick={() => handleAdoptNow(center.id)}>
                  Adopt Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PetAdoptionForm;
