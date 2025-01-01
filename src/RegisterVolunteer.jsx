import React, { useState } from "react";
import { registerVolunteerEndpoint } from "./api";

const RegisterVolunteer = () => {
    const [formData, setFormData] = useState({
        volunteer_name: "",
        phone_number: "",
        availability: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(registerVolunteerEndpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            const result = await response.json();
            alert(result.message || "Volunteer Registered Successfully!");
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register Volunteer</h2>
            <input
                type="text"
                name="volunteer_name"
                placeholder="Volunteer Name"
                value={formData.volunteer_name}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="phone_number"
                placeholder="Phone Number"
                value={formData.phone_number}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="availability"
                placeholder="Availability"
                value={formData.availability}
                onChange={handleChange}
                required
            />
            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterVolunteer;
