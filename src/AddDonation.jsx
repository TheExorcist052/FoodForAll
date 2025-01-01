import React, { useState } from "react";
import { addDonationEndpoint } from "./api";

const AddDonation = () => {
    const [formData, setFormData] = useState({
        donor_name: "",
        food_type: "",
        donation_type: "",
        expiry_date: "",
        location: "",
        food_image: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, food_image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const uploadData = new FormData();
        Object.keys(formData).forEach((key) => {
            uploadData.append(key, formData[key]);
        });

        try {
            const response = await fetch(addDonationEndpoint, {
                method: "POST",
                body: uploadData,
            });
            const result = await response.json();
            alert(result.message || "Donation Added Successfully!");
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Donation</h2>
            <input
                type="text"
                name="donor_name"
                placeholder="Donor Name"
                value={formData.donor_name}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="food_type"
                placeholder="Food Type"
                value={formData.food_type}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="donation_type"
                placeholder="Donation Type"
                value={formData.donation_type}
                onChange={handleChange}
                required
            />
            <input
                type="date"
                name="expiry_date"
                placeholder="Expiry Date"
                value={formData.expiry_date}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
                required
            />
            <input type="file" onChange={handleFileChange} required />
            <button type="submit">Add Donation</button>
        </form>
    );
};

export default AddDonation;
