// src/components/CityDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const CityDetails = ({ cities }) => {
    const { id } = useParams();
    const city = cities.find(city => city.id === Number(id));

    if (!city) return <h2>City not found</h2>;

    return (
        <div>
            <h2>{city.name}</h2>
            <p>Country: {city.country}</p>
            <p>Population: {city.population}</p>
        </div>
    );
};

export default CityDetails;