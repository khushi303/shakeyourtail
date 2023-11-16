import './App.css';
import { BrowserRouter } from "react-router-dom";
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
import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import Backtotopbtn from './assets/images/back-to-top.png';
import { Loader } from './components/iconsvg';

function App() {
  // -------------------aos-------------------------//
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 3000
      }
    );
    Aos.refresh()
  });
  // -------------------------scroll-to-top------------------//
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 100) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  // ---------------------------preloader-------------------------//
  document.getElementById('root')
  const [screenLoading, setScreenLoading] = useState(false);
  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 5000);
  }, []);
  return (
    <div>
      {screenLoading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <>
            <Header />
            <Mainfeature />
            <Features />
            <Worksection />
            <Pricingplan />
            <Aboutus />
            <Testimonial />
            <Faqsec />
            <Footer />
            <div>
              <img onClick={() => top()} src={Backtotopbtn} alt='Backtotopbtn' className={backToTop ? "pos-fix1" : "d-none"} />
            </div>
          </>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
