import React, { useState, useEffect } from 'react';
import { useWeather } from '../context/WeatherContext';
import axios from 'axios';
import CITY_LIST from "../data/cities_turkey.json"

const CITY_URL = CITY_LIST


function Location() {
  const { setCity } = useWeather();
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('İstanbul');

  useEffect(() => {
    axios.get(CITY_URL)
      .then(response => {
        const cities = response.data;
        setCities(cities);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSelect = (e) => {
    setSelectedCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selectedCity);
    setCity(selectedCity);
    setSelectedCity();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="search-box">
        <select className='select' value={selectedCity} onChange={handleSelect}>
          <option value="">Select a city</option>
          {cities.map(city => (
            <option className='select' key={city.id} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
        <button type='submit'>Search</button>
      </form>
    </div>
  );
}

export default Location;