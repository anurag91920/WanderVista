import React from 'react';

import Hero from './Hero';
import Events from './Events';
import Explore from './Explore';
import Upcomming from './Upcomming';


function HomePage () {
    return (
        <>
          <Hero />
          <Events />
          <Explore />
          <Upcomming />
        </>
    );
}

export default HomePage;