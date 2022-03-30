import React from "react";
import { useState, useEffect } from 'react';
import { catchErrors } from '../utils';
import { getListings } from '../fetch'
import SectionWrapper from '../components/SectionWrapper'


const Home = () => {

  const [listings, setListings] = useState(null);

  useEffect(() => {
      fetch('http://localhost:3001/')
      .then(responce => responce.json())
      .then(data => setListings(data));
    

    // const fetchData = async () => {
    //   const data = await getListings();
    //   setListings(data);
    // };

    // catchErrors(fetchData)
  }, []);


    console.log('listings',listings);
    return (
      <div className="container">
        {/* {listings &&
        listings.map((listing) => (
          <h2>{listing.make}</h2>
        ))} */}
        <SectionWrapper listings = {listings} ></SectionWrapper>
      </div>
    );
  };
  
  export default Home;