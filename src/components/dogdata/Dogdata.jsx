import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dogdata() {
const [breedImage, setBreedImage] = useState(null);
const [breedData, setBreedData] = useState(null);
const [isLoading, setIsLoading] = useState(true);


useEffect(() => {
    let urlParams = new URLSearchParams(window.location.search);
    let breedname = urlParams.get("breedname");
    let breedid = urlParams.get("breedid");



    dogfetchdata (breedname,breedid)
    }, []); 

    function dogfetchdata (breedname,breedid) {
        axios.get(`https://dog.ceo/api/breed/${breedname}/images/random`)
        .then(response => setBreedImage(response.data.message))
        .catch(error => console.log(error));

        axios.get(`https://dogapi.dog/api/v2/breeds/${breedid}`)
        .then(response => {
          const breed = response.data.data;
          if (breed) {
            const {
              name,
              description,
              life: { min: minLife, max: maxLife },
              male_weight: { min: minMaleWeight, max: maxMaleWeight },
              female_weight: { min: minFemaleWeight, max: maxFemaleWeight }
            } = breed.attributes;
    
            setBreedData({
              name,
              description,
              life: `${minLife} - ${maxLife}`,
              maleWeight: `${minMaleWeight} - ${maxMaleWeight}`,
              femaleWeight: `${minFemaleWeight} - ${maxFemaleWeight}`
            });
          } else {
            console.log('Breed data not found');
          }
          setIsLoading(false);
        })
        .catch(error => console.log(error));

    }

return (
    <div>
    {isLoading ? (
        <div class="spinner-grow text-primary" role="status">
        <p></p></div>
    ) : (
        <div className="doggy">
            
        <h1>{breedData.name}</h1>
        <img src={breedImage} alt={breedData.name} />
        <p>Description: {breedData.description}</p>
        <p>Life: {breedData.life}</p>
        <p>Male Weight: {breedData.maleWeight}</p>
        <p>Female Weight: {breedData.femaleWeight}</p>
            
</div>
        
    )}
    
    </div>
);
}

export default Dogdata;
