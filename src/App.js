import './App.css';
import Header from './components/Header';
import Mainfeature from './components/Mainfeature';
import Features from './components/Features';
import Worksection from './components/Worksection';
import Pricingplan from './components/Pricingplan';
import Aboutus from './components/Aboutus';
import Testimonial from './components/Testimonial';
import Faqsec from './components/Faqsec';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import Aos from 'aos';

function App() {
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 2000
      }
    );
    Aos.refresh()
  });
  return (
    <div>
      <Header />
      <Mainfeature />
      <Features />
      <Worksection />
      <Pricingplan />
      <Aboutus />
      <Testimonial />
      <Faqsec />
      <Footer />
    </div>
  );
}

export default App;
