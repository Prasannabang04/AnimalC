import React, { useState } from "react";

const LostDogsPage = () => {
  const [formData, setFormData] = useState({
    dogName: "",
    breed: "",
    location: "",
    description: "",
    contact: "",
    image: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formDataImage = new FormData();
    formDataImage.append("image", file);

    try {
      const response = await fetch("http://localhost:5000/upload-image", {
        method: "POST",
        body: formDataImage,
      });
      const data = await response.json();
      if (data.imageUrl) {
        setFormData({ ...formData, image: data.imageUrl });
      }
    } catch (error) {
      console.error("Image upload failed:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.dogName || !formData.breed || !formData.location || !formData.description || !formData.contact || !formData.image) {
      alert("Please fill all fields and upload an image!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/report-dog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, status: "lost" }),
      });

      const result = await response.json();
      alert(result.message);
    } catch (error) {
      console.error("Error submitting report:", error);
    }
  };

  return (
    <div>
      <h2>Report a Lost Dog</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="dogName" placeholder="Dog's Name" onChange={handleChange} required />
        <input type="text" name="breed" placeholder="Breed" onChange={handleChange} required />
        <input type="text" name="location" placeholder="Last Seen Location" onChange={handleChange} required />
        <textarea name="description" placeholder="Description" onChange={handleChange} required />
        <input type="text" name="contact" placeholder="Your Contact Info" onChange={handleChange} required />
        <input type="file" onChange={handleImageUpload} required />
        <button type="submit">Submit Report</button>
      </form>
    </div>
  );
};

export default LostDogsPage;
