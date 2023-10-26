import React from 'react';
import Hero from '../Hero/Hero';
import Offers from '../Offers/Offers';
import Popular from '../Popular/Popular';
import NewCollections from '../NewCollections/NewCollections';
import NewsLetter from '../NewsLetter/NewsLetter';

const Home = () => {
  return (
      <div>
         <Hero />
        <Popular />
         <Offers/>
        <NewCollections/>
        <NewsLetter/>
      </div>
  );
}

export default Home;
