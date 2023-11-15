import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Container, Row } from 'react-bootstrap';
import Chartimg from '../assets/images/chartimg.png';
import { Reporticon, Servicesicon, Purpets, Msgicon } from './iconsvg';
import { Purflower, Orngflower, Grnflower, Skyflower } from './iconsvg';

const Features = () => {
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
                breakpoint: 980,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='bg-blue'>
            <Container>
                <Row className='chartpad'>
                    <Col lg={5} className='d-flex flex-column justify-content-center align-items-lg-start align-items-center'>
                        <h2 className='mb-0 ff-roboto text-lg-black12 fs_xl fw-medium lh-111 text-white text-lg-start text-center text-capitalize mw-491 pb-2'>Let your customer experience shine</h2>
                        <p className='mb-0 ff-neue fs_3md text-lg-black12 fw-light lh-160 text-white text-lg-start text-center mw-409 pb-lg-4'>Automated client rating, provides instant feedback on client booking history, partner this with your own Loyalty program.</p>
                        <button className='btn_freey mt-4 ff-roboto fs_3md fw-normal text-white'>Free Trial</button>
                    </Col>
                    <Col lg={7} className='pt-lg-0 pt-4 mt-2'>
                        <div className='position-relative'>
                            <img src={Chartimg} alt="Chartimg" className='w-100' />
                            <div className='position-absolute yel-card d-sm-block d-none yelcard-position'>
                                <div className='yell-card'>
                                    <p className='mb-0 ff-neue fs_3sm fw-medium text-black lh-150'>1:00 - 7:00</p>
                                    <p className='mb-0 ff-neue fs_2sm fw-medium text-black lh-150'>Half Day</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className=''>
                <h2 className='mb-0 ff-roboto text-center fs_xl fw-medium lh-111 text-white'>Features</h2>
                <div className='d-flex align-items-center justify-content-center pt-2'>
                    <p className='mb-0 ff-neue fs_md fw-light lh-160 text-center text-white mw-555 pb-lg-5 pb-4'>ShakeYourTail provides your business with the following key features to run an successful dog grooming business.</p>
                </div>
                <Slider {...settings}>
                    <div className='px-12'>
                        <div data-aos="zoom-in" className='bg_whcard position-relative'>
                            <Msgicon />
                            <h2 className='mb-0 ff-roboto fs_3md fw-medium text_black12 lh-111'>Schedule</h2>
                            <p className='mb-0 ff-neue fs_md fw-light lh-150 text_black12 op_07'>Powerful and easy to use, book appointments for your team members and view a colour coded schedule, at a glance.</p>
                            <div className='position-absolute grn-flower'>
                                <Grnflower />
                            </div>
                        </div>
                    </div>
                    <div className='px-12'>
                        <div data-aos="zoom-in" className='bg_whcard position-relative'>
                            <Purpets />
                            <h2 className='mb-0 ff-roboto fs_3md fw-medium text_black12 lh-111'>Clients & Pets</h2>
                            <p className='mb-0 ff-neue fs_md fw-light lh-150 text_black12 op_07'>Managing your Clients is effortless; Record Client details, view appointment history, breed, photos, medical notes, vet contact, groom note Client loyalty and more.</p>
                            <div className='position-absolute grn-flower'>
                                <Purflower />
                            </div>
                        </div>
                    </div>
                    <div className='px-12'>
                        <div data-aos="zoom-in" className='bg_whcard position-relative'>
                            <Reporticon />
                            <h2 className='mb-0 ff-roboto fs_3md fw-medium text_black12 lh-111'>Reports</h2>
                            <p className='mb-0 ff-neue fs_md fw-light lh-150 text_black12 op_07'>Report and export client details, appointments, marketing, no shows and more..</p>
                            <div className='position-absolute grn-flower'>
                                <Orngflower />
                            </div>
                        </div>
                    </div>
                    <div className='px-12'>
                        <div data-aos="zoom-in" className='bg_whcard position-relative'>
                            <Servicesicon />
                            <h2 className='mb-0 ff-roboto fs_3md fw-medium text_black12 lh-111'>Services</h2>
                            <p className='mb-0 ff-neue fs_md fw-light lh-150 text_black12 op_07'>Add custom services to appointments, supplementary treatments, collection and drop offs, promotion packages and more.</p>
                            <div className='position-absolute grn-flower'>
                                <Skyflower />
                            </div>
                        </div>
                    </div>
                </Slider>
                <div className='d-flex align-items-center justify-content-center pt-lg-5 pt-4'>
                    <button className='btn-view ff-roboto fs_3md fw-normal text-white'>View All Features</button>
                </div>
            </Container>
        </div>
    )
}

export default Features