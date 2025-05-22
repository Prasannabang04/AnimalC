import { useState } from "react";
import axios from "axios";

const MatchPet = () => {
  const [image, setImage] = useState(null);
  const [matches, setMatches] = useState([]);

  const handleMatch = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("image", image);

    const res = await axios.post("http://localhost:3000/match", data);
    setMatches(res.data.matches);
  };

  return (
    <div>
      <h2>Find a Match for Your Lost Pet</h2>
      <form onSubmit={handleMatch}>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} required />
        <button type="submit">Find Matches</button>
      </form>

      {matches.length > 0 && (
        <div>
          <h3>Possible Matches Found:</h3>
          {matches.map((pet, index) => (
            <div key={index}>
              <img src={pet.image} alt="Match" width="200" />
              <p>{pet.breed} - {pet.location}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MatchPet;
