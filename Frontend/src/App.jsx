import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./home/Home";
import Abouts from "./about/Abouts";
import Adoptions from "./adoption/Adoptions";
import Clinics from "./clinics/Clinics";
import Rescues from "./rescue/Rescues";
import Login from "./components/Login";
import E_train from "./etrain/E_train";
import Navbar from "./components/Navbar";
import PetsPage from "./pets/adoption_pets";
import PetAdoptionForm from "./components/PetsForm";
import AppointmentForm from "./components/CliApointForm";
import Bloges from "./components/Bloges";
import Snake1 from "./blogs/Content.jsx/Snake1";
import Snake2 from "./blogs/Content.jsx/Snake2";
import Etraind from "./etrain/content/Etraind";
import Etrainc from "./etrain/content/Etrainc";
import LostPets from "./lostfound/LostPets";
import FoundPets from "./lostfound/FoundPets";
import DisplayPets from "./lostfound/DisplayPets";
import MatchPet from './lostfound/MatchPet';
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Protected Routes */}
        <Route path="/about" element={<ProtectedRoute><Abouts /></ProtectedRoute>} />
        <Route path="/adoption" element={<ProtectedRoute><Adoptions /></ProtectedRoute>} />
        <Route path="/clinic" element={<ProtectedRoute><Clinics /></ProtectedRoute>} />
        <Route path="/rescue" element={<ProtectedRoute><Rescues /></ProtectedRoute>} />
        <Route path="/etrain" element={<ProtectedRoute><E_train /></ProtectedRoute>} />
        <Route path="/blogs" element={<ProtectedRoute><Bloges /></ProtectedRoute>} />
        <Route path="/sb1" element={<ProtectedRoute><Snake1 /></ProtectedRoute>} />
        <Route path="/sb2" element={<ProtectedRoute><Snake2 /></ProtectedRoute>} />
        <Route path="/etd" element={<ProtectedRoute><Etraind /></ProtectedRoute>} />
        <Route path="/etc" element={<ProtectedRoute><Etrainc /></ProtectedRoute>} />
        <Route path="/lost-pets" element={<ProtectedRoute><LostPets /></ProtectedRoute>} />
        <Route path="/found-pets" element={<ProtectedRoute><FoundPets /></ProtectedRoute>} />
        <Route path="/display-pets" element={<ProtectedRoute><DisplayPets /></ProtectedRoute>} />
        <Route path="/pets/:centerId" element={<ProtectedRoute><PetsPage /></ProtectedRoute>} />
        <Route path="/forms" element={<ProtectedRoute><PetAdoptionForm /></ProtectedRoute>} />
        <Route path="/appointment" element={<ProtectedRoute><AppointmentForm /></ProtectedRoute>} />
        <Route path="/match" element={<ProtectedRoute><MatchPet /></ProtectedRoute>} />

        {/* Optional: Fallback route */}
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </>
  );
}

export default App;
