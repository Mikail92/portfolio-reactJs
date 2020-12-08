import React, {Fragment} from 'react';
import Header from '../../components/header';
import Preloader from '../../components/preloader';
import Hero from '../../components/hero';
import PortfolioItem from '../../components/portfolio-item';

const Homepage = () => {
    return (
      <Fragment>
          <Preloader />
          <Header />
          <Hero />
          {/* start About Section */}
  
          {/* end About Section */}
          <PortfolioItem 
            title="Minimalism"
            subtitle="Illustration . Art Direction"
            imgUrl="images/protfolio/img-1.jpg"
            url="http://google.com"
            alt="Illustration"
          />
      </Fragment>
    );
  }
  
  export default Homepage;