// Bradley Ayers
// QAP3
// July 22 - 26, 2024

import React, { useState, useEffect } from 'react';
import { capitalizeWords } from './utils';

function BreedSelector({ setBreed, setNumImages, setImages }) {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');
  const [num, setNum] = useState(1);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => {
        const breedList = Object.keys(data.message);
        setBreeds(breedList);
        if (breedList.length > 0) {
          setSelectedBreed(breedList[0]);
        }
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBreed(selectedBreed);
    setNumImages(num);

    fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/${num}`)
      .then(response => response.json())
      .then(data => setImages(data.message));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Select Breed:&nbsp;&nbsp;
        <select value={selectedBreed} onChange={(e) => setSelectedBreed(e.target.value)}>
          {breeds.map(breed => (
            <option key={breed} value={breed}>{capitalizeWords(breed)}</option>
          ))}
        </select>
      </label>
      <label>
        Number of Images:&nbsp;&nbsp;
        <input 
          type="number" 
          value={num} 
          onChange={(e) => setNum(e.target.value)} 
          min="1" 
          max="100" 
        />
      </label>
      <button type="submit">See Doggos</button>
    </form>
  );
}

export default BreedSelector;