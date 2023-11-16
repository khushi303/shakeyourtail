import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Petsimg from '../assets/images/ptetsimg.png';
import Dogprofileimg from '../assets/images/dogprofile.png';
import { Starsvg, Leftarrow, Rightarrow } from './iconsvg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Greenellipse from '../assets/images/green-ellipse.png';

const Testimonial = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const slider = React.useRef(null);
    return (
        <div id='testimonials' className='test-padd position-relative'>
            <Container>
                <h2 data-aos="zoom-in" className='mb-0 ff-roboto fs_xl fw-medium text_black12 text-center lh-111'>Testimonial</h2>
                <Row className='test-rowpadd'>
                    <Col data-aos="fade-right" lg={6} className='d-flex align-items-center justify-content-center'>
                        <img src={Petsimg} alt="Petsimg" className='w-100' />
                    </Col>
                    <Col data-aos="fade-left" lg={6} className='position-relative pt-lg-0 pt-4'>
                        <Slider ref={slider} {...settings}>
                            <div className='px-2'>
                                <div className='p-3'>
                                    <img src={Dogprofileimg} alt="Dogprofileimg" />
                                    <p className='mb-0 ff-neue fs_3md fw-light lh-130 text_black17 op_08 pt-3 pb-2'>“ShakeYourTail is amazing, helping me easily manage my appointments and reduce my business admin with automated confirmations and reminders.”</p>
                                    <Starsvg />
                                    <p className='mb-0 ff-neue fs_lg fw-bold text_blue43 pt-3 lh-150'>Mathew Spry</p>
                                    <p className='mb-0 ff-neue fs_2md fw-medium lh-150 text_black17 op_08 pb-4'>Director @ BArkingham, UK</p>
                                </div>
                            </div>
                            <div className='px-2'>
                                <div className='p-3'>
                                    <img src={Dogprofileimg} alt="Dogprofileimg" />
                                    <p className='mb-0 ff-neue fs_3md fw-light lh-130 text_black17 op_08 pt-3 pb-2'>“ShakeYourTail is amazing, helping me easily manage my appointments and reduce my business admin with automated confirmations and reminders.”</p>
                                    <Starsvg />
                                    <p className='mb-0 ff-neue fs_lg fw-bold text_blue43 pt-3 lh-150'>Mathew Spry</p>
                                    <p className='mb-0 ff-neue fs_2md fw-medium lh-150 text_black17 op_08 pb-4'>Director @ BArkingham, UK</p>
                                </div>
                            </div>
                            <div className='px-2'>
                                <div className='p-3'>
                                    <img src={Dogprofileimg} alt="Dogprofileimg" />
                                    <p className='mb-0 ff-neue fs_3md fw-light lh-130 text_black17 op_08 pt-3 pb-2'>“ShakeYourTail is amazing, helping me easily manage my appointments and reduce my business admin with automated confirmations and reminders.”</p>
                                    <Starsvg />
                                    <p className='mb-0 ff-neue fs_lg fw-bold text_blue43 pt-3 lh-150'>Mathew Spry</p>
                                    <p className='mb-0 ff-neue fs_2md fw-medium lh-150 text_black17 op_08 pb-4'>Director @ BArkingham, UK</p>
                                </div>
                            </div>
                        </Slider>
                        <div className='d-flex arrows-np position-absolute align-items-center gap-1'>
                            <button onClick={() => slider?.current?.slickPrev()} className='border-0 bg-transparent btn-arrow'><Leftarrow /></button>
                            <button onClick={() => slider?.current?.slickNext()} className='border-0 bg-transparent btn-arrow'><Rightarrow /></button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img src={Greenellipse} alt="Greenellipse" className='Greenellipse position-absolute end-0 d-md-block d-none' />
        </div>
    )
}

export default Testimonial