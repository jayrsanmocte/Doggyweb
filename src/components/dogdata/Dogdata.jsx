import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


function Dogdata() {
  const [breedImages, setBreedImages] = useState([]);
  const [breedData, setBreedData] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let urlParams = new URLSearchParams(window.location.search);
    let breedname = urlParams.get('breedname');
    let breedid = urlParams.get('breedid');

    dogfetchdata(breedname, breedid);
  }, []);

  function dogfetchdata(breedname, breedid) {
    axios
      .get(`https://dog.ceo/api/breed/${breedname}/images`)
      .then((response) => setBreedImages(response.data.message))
      .catch((error) => console.log(error));

    axios
      .get(`https://dogapi.dog/api/v2/breeds/${breedid}`)
      .then((response) => {
        const breed = response.data.data;
        if (breed) {
          const {
            name,
            description,
            life: { min: minLife, max: maxLife },
            male_weight: { min: minMaleWeight, max: maxMaleWeight },
            female_weight: { min: minFemaleWeight, max: maxFemaleWeight },
          } = breed.attributes;

          setBreedData({
            name,
            description,
            life: `${minLife} - ${maxLife}`,
            maleWeight: `${minMaleWeight} - ${maxMaleWeight}`,
            femaleWeight: `${minFemaleWeight} - ${maxFemaleWeight}`,
          });
        } else {
          console.log('Breed data not found');
        }
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }

 

  return (
    <div className="background-container">
      {isLoading ? (
        <div className="spinner-grow text-primary" role="status">
          <p></p>
        </div>
      ) : (
        <div className="container dodo" id="dogowarper">
          <div className="doggy">
            <h1 className="dogo">{breedData.name}</h1>
            <div id="carouselExampleIndicators" className="carousel slide" data-mdb-ride="carousel">
              <div className="carousel-indicators">
                {breedImages.slice(0, 5).map((_, index) => (
                  <button
                    type="button"
                    data-mdb-target="#carouselExampleIndicators"
                    data-mdb-slide-to={index}
                    className={index === currentImageIndex ? 'active' : ''}
                    aria-label={`Slide ${index + 1}`}
                    key={index}
                  ></button>
                ))}
              </div>
              <div className="carousel-inner">
                {breedImages.map((image, index) => (
                  <div
                    className={`carousel-item ${index === currentImageIndex ? 'active' : ''}`}
                    key={index}
                  >
                    <img src={image} className="carousel-image" alt={breedData.name} />
                  </div>
                ))}
              </div>

            </div>
            <div className="thumbnail-gallery">
              {breedImages.slice(0, 10).map((image, index) => (
                <img
                  src={image}
                  className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                  alt={breedData.name}
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
           
            <p>Description: {breedData.description}</p>
            <p className="pdog">Life: {breedData.life}</p>
            <p className="pdog">Male Weight: {breedData.maleWeight}</p>
            <p className="pdog">Female Weight: {breedData.femaleWeight}</p>
            <Link to="/searchDog">
              <button className="btn btn-warning">Go Back</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dogdata;
