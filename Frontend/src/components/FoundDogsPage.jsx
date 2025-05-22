import React, { useState } from "react";
import axios from "axios";

const FoundDogsPage = () => {
  const [formData, setFormData] = useState({
    dogName: "",
    breed: "",
    location: "",
    description: "",
    contact: "",
    image: "",
  });

  const [uploading, setUploading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle image upload to S3
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post("http://localhost:5000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setFormData((prevData) => ({ ...prevData, image: response.data.imageUrl }));
      alert("Image uploaded successfully!");
    } catch (error) {
      console.error("Image upload failed:", error);
      alert("Image upload failed. Try again.");
    } finally {
      setUploading(false);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.image) {
      alert("Please upload an image before submitting.");
      return;
    }

    try {
      await axios.post("http://localhost:5000/found-dog", formData);
      alert("Found Dog Report Submitted Successfully!");
      setFormData({ dogName: "", breed: "", location: "", description: "", contact: "", image: "" });
    } catch (error) {
      console.error("Error submitting report:", error);
      alert("Failed to submit report. Try again.");
    }
  };

  return (
    <div>
      <h2>Report a Found Dog</h2>
      <form style={{ marginTop: "120px" }} onSubmit={handleSubmit}>
        <input type="text" name="dogName" placeholder="Dog's Name" value={formData.dogName} onChange={handleChange} required />
        <input type="text" name="breed" placeholder="Breed" value={formData.breed} onChange={handleChange} required />
        <input type="text" name="location" placeholder="Location Found" value={formData.location} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
        <input type="text" name="contact" placeholder="Your Contact Info" value={formData.contact} onChange={handleChange} required />

        <input type="file" onChange={handleImageUpload} />
        {uploading && <p>Uploading image...</p>}
        {formData.image && <img src={formData.image} alt="Uploaded" style={{ width: "100px", marginTop: "10px" }} />}

        <button type="submit">Submit Report</button>
      </form>
    </div>
  );
};

export default FoundDogsPage;
