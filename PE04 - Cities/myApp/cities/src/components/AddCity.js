// src/components/AddCity.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddCity = ({ addCity }) => {
    const [formData, setFormData] = useState({ name: '', country: '', population: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addCity(formData);
        navigate('/'); // Redirect to Cities List after adding
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add City</h2>
            <input
                type="text"
                name="name"
                placeholder="City Name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="country"
                placeholder="Country"
                value={formData.country}
                onChange={handleChange}
                required
            />
            <input
                type="number"
                name="population"
                placeholder="Population"
                value={formData.population}
                onChange={handleChange}
                required
            />
            <button type="submit">Add City</button>
        </form>
    );
};

export default AddCity;