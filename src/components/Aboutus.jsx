import React from 'react'
import { Container } from 'react-bootstrap';
import { Googleplayimg } from './iconsvg';
import { Appstoreimg } from './iconsvg';
import { Greenprofile, Purpleicon, Orangepet, Blueheart } from './iconsvg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Purflower, Orngflower, Grnflower, Skyflower } from './iconsvg';

const Aboutus = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='bg-about'>
            <Container data-aos="fade-right" className='download_padd d-flex flex-column align-items-lg-start align-items-center '>
                <h2 className='mb-0 ff-roboto fs_xl fw-medium text-white lh-111'>Download App</h2>
                <p className='mb-0 ff-neue fs_md fw-light lh-160 op_08 pt-2 mw-393 text-lg-start text-center text-white'>Are you a mobile groomer or just want to access your appointments and client on the go?
                    Try our app, available to Premier or Premier Plus subscribers.</p>
                <div className='d-flex align-items-center gap-3 pt-4'>
                    <Googleplayimg />
                    <Appstoreimg />
                </div>
            </Container>
            <Container id='aboutus' className='about-padd'>
                <h2 data-aos="fade-down" className='mb-0 ff-roboto fs_xl fw-medium text-white lh-111 text-center'>About Us</h2>
                <div data-aos="fade-down" className='d-flex align-items-center justify-content-center'>
                    <p className='mb-0 ff-neue fs_md fw-light lh-160 text-center text-white mw-775 mb-2 pb-4'>Software developed by groomers for groomers
                        Our team has a wealth of experience, over 30 years combined working in dog grooming salons and over 45 years combined in working in software development.</p>
                </div>
                <Slider {...settings}>
                    <div className='px-12'>
                        <div data-aos="zoom-in" className='about-whcard position-relative'>
                            <Greenprofile />
                            <h2 className='mb-0 ff-roboto fs_3md fw-medium text_black12 lh-111 pt-1'>Founded</h2>
                            <p className='mb-0 ff-neue fs_md fw-medium lh-150 text_greenc8 pt-1'>Dec 2009</p>
                            <p className='mb-0 ff-neue fs_md fw-light lh-150 op_07 text_black12 pt-1'>Founded in 2009 to support pet grooming industry to reduce the the administration burden of running a business.</p>
                            <div className='position-absolute pur-flower'>
                                <Grnflower />
                            </div>
                        </div>
                    </div>
                    <div className='px-12'>
                        <div data-aos="zoom-in" className='about-whcard position-relative'>
                            <Purpleicon />
                            <h2 className='mb-0 ff-roboto fs_3md fw-medium text_black12 lh-111 pt-1'>Product Launch</h2>
                            <p className='mb-0 ff-neue fs_md fw-medium lh-150 text_purple9 pt-1'>July 2010</p>
                            <p className='mb-0 ff-neue fs_md fw-light lh-150 op_07 text_black12 pt-1'>Founded in 2009 to support pet grooming industry to reduce the the administration burden of running a business.</p>
                            <div className='position-absolute pur-flower'>
                                <Purflower />
                            </div>
                        </div>
                    </div>
                    <div className='px-12'>
                        <div data-aos="zoom-in" className='about-whcard position-relative'>
                            <Orangepet />
                            <h2 className='mb-0 ff-roboto fs_3md fw-medium text_black12 lh-111 pt-1'>Founded</h2>
                            <p className='mb-0 ff-neue fs_md fw-medium lh-150 text_orange72 pt-1'>Dec 2009</p>
                            <p className='mb-0 ff-neue fs_md fw-light lh-150 op_07 text_black12 pt-1'>Founded in 2009 to support pet grooming industry to reduce the the administration burden of running a business.</p>
                            <div className='position-absolute pur-flower'>
                                <Orngflower />
                            </div>
                        </div>
                    </div>
                    <div className='px-12'>
                        <div data-aos="zoom-in" className='about-whcard position-relative'>
                            <Blueheart />
                            <h2 className='mb-0 ff-roboto fs_3md fw-medium text_black12 lh-111 pt-1'>Founded</h2>
                            <p className='mb-0 ff-neue fs_md fw-medium lh-150 text_blue74  pt-1'>Dec 2009</p>
                            <p className='mb-0 ff-neue fs_md fw-light lh-150 op_07 text_black12 pt-1'>Founded in 2009 to support pet grooming industry to reduce the the administration burden of running a business.</p>
                            <div className='position-absolute pur-flower'>
                                <Skyflower />
                            </div>
                        </div>
                    </div>
                </Slider>
                <div className='d-flex align-items-center justify-content-center veiw-btn-padd'>
                    <button className='btn_view ff-roboto fs_3md fw-normal text-white'>View All</button>
                </div>
            </Container>
        </div>
    )
}

export default Aboutus