import React from 'react';
import AboutUs from '../components/Home/AboutUs/AboutUs';
import Header from '../components/Home/Header/Header';
import OurServices from '../components/Home/OurServices/OurServices';
import Testimonials from '../components/Home/Testimonials/Testimonials';
import WhatWeDo from '../components/Home/WhatWeDo/WhatWeDo';
import WorkingSkills from '../components/Home/WorkingSkills/WorkingSkills';
import Footer from '../components/Home/Footer/Footer'

const Home = () => {
    return (
        <>
        <Header />
       <AboutUs />
       <WhatWeDo/>
      <OurServices/>
      <WorkingSkills />
      <Testimonials/>
      <Footer/>
        
        </>
    );
};

export default Home;