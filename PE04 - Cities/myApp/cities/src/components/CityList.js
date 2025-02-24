// src/components/CityList.js
import React from 'react';
import { Link } from 'react-router-dom';

const CityList = ({ cities }) => (
    <div>
        <h2>Cities List</h2>
        <ul>
            {cities.map(city => (
                <li key={city.id}>
                    <Link to={`/city/${city.id}`}>{city.name}</Link>
                </li>
            ))}
        </ul>
    </div>
);

export default CityList;