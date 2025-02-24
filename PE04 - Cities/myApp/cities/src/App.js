// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import CityList from './components/CityList';
import CityDetails from './components/CityDetails';
import AddCity from './components/AddCity';

const App = () => {
    const [cities, setCities] = useState([
        { id: 1, name: 'Seattle', country: 'USA', population: 744955}, 
        { id: 2, name: 'Redmond', country: 'USA', population: 71000},
        { id: 3, name: 'Portland', country: 'USA', population: 654741}, 
    ]);

    const addCity = (city) => {
        const newCity = { id: cities.length + 1, ...city };
        setCities([...cities, newCity]);
    };

    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<CityList cities={cities} />} />
                    <Route path="/add-city" element={<AddCity addCity={addCity} />} />
                    <Route path="/city/:id" element={<CityDetails cities={cities} />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;