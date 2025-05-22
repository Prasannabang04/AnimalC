import React, { useState, useEffect } from 'react';

const Rescue = () => {
  const [data, setData] = useState(null);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [Rescue, setRescue] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null); // State for selected contact details
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  useEffect(() => {
    // Assuming the JSON file is stored locally or on a public server
    fetch("/rescue_center_ind.json") // Replace with your actual path
      .then((response) => response.json())
      .then((data) => {
        setData(data.data); // Store the fetched data
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleStateChange = (e) => {
    const selectedStateID = e.target.value;
    setSelectedState(selectedStateID);
    setSelectedCity('');
    setRescue([]); // Reset the pet clinic data when state changes
  };

  const handleCityChange = (e) => {
    const selectedCityName = e.target.value;
    setSelectedCity(selectedCityName);

    // Find the state and the city, then filter clinics
    const stateData = data.find((state) => state.state_id === parseInt(selectedState));
    const cityData = stateData?.cities.find((city) => city.city_name === selectedCityName);
    setRescue(cityData?.rescue_centers || []);
  };

  const handleContactClick = (center) => {
    setSelectedContact(center);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedContact(null);
  };

  return (
    <div className="max-w-6xl mx-auto mt-20">
      <h2 className="text-2xl font-semibold text-center mb-6">Rescue</h2>
      <p className="text-justify">
      Welcome to the Rescue Page of Snuggle Sanctuary, where hope begins and every life is valued. Our mission is to rescue and care for abandoned and stray animals, providing them with a safe and nurturing environment. We believe every animal deserves love, warmth, and a chance at a better life. Through our dedicated efforts and your support, we strive to make a difference, one rescue at a time. Join us in our journey to create a world where every animal feels safe, loved, and cared for. Together, we can transform lives and give these animals the second chance they deserve.      </p>

      <div className="mt-8 mb-4">
        <label htmlFor="state" className="text-center block text-lg font-medium text-gray-400">
          Select State
        </label>
        <select
          id="state"
          className="mt-2 block w-full px-4 py-2 border border-gray-400 rounded-md shadow-md focus:outline-none focus:border-indigo-500"
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
          <label htmlFor="city" className="mt-8 text-center block text-lg font-medium text-gray-400">
            Select City
          </label>
          <select
            id="city"
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            value={selectedCity}
            onChange={handleCityChange}
          >
            <option value="" disabled>
              Select a City
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

      {selectedCity && Rescue.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Rescue.map((center) => (
            <div key={center.id} className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src="MNL.jpg" // This can be replaced with a real image path
                  alt={center.name}
                  className="w-full h-48 object-cover rounded-t-md"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-lg font-semibold">{center.name}</h2>
                <p className="text-sm text-gray-400">{center.address}</p>
                <div className="card-action justify-end">
                  <button
                    className="btn btn-primary"
                    onClick={() => handleContactClick(center)}
                  >
                    Contact Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {isModalOpen && selectedContact && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-md shadow-lg max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-4">{selectedContact.name}</h3>
            <p className="text-sm text-gray-500">Address: {selectedContact.address}</p>
            <p className="text-sm text-gray-500">Contact: {selectedContact.contact}</p>
            <div className="mt-4 flex justify-end">
              <button
                className="btn btn-secondary mr-2"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rescue;
