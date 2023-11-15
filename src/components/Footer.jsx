import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footerlogo from '../assets/images/footer-logo.png';
import { Facebookicon, Tweeticon, Instaicon, Linkdin, Telegramicon } from './iconsvg';

const Footer = () => {
    return (
        <div className='bg_blue position-relative'>
            <Container className='footer-padd'>
                <Row>
                    <Col data-aos="fade-right" md={6} className='d-flex flex-column gap-4'>
                        <img src={Footerlogo} alt="Footerlogo" className='mw-297 w-100' />
                        <p className='mb-0 ff-neue fs_md fw-light text-white lh-150 op_08 mw-397'>Rutrum mauris vitae at vitae augue placerat arcu in. Vel in elementum tempor enim accumsan enim a magna at. Dolor lorem nisi dignissim nulla.</p>
                        <div className='d-flex align-items-center gap-2'>
                            <Facebookicon />
                            <Tweeticon />
                            <Instaicon />
                            <Linkdin />
                            <Telegramicon />
                        </div>
                    </Col>
                    <Col data-aos="fade-left" md={6} className='d-flex align-items-start pt-lg-0 pt-4 justify-content-md-end justify-content-start'>
                        <div className='d-flex gap-5'>
                            <ul className='mb-0 list-unstyled'>
                                <li className='ff-neue fs_md fw-medium text-white lh-150'>Important Links</li>
                                <li><a href="" className='ff-neue fs_md fw-light text-white op_08'>About Us</a></li>
                                <li><a href="" className='ff-neue fs_md fw-light text-white op_08'>Features</a></li>
                                <li><a href="" className='ff-neue fs_md fw-light text-white op_08'>Pricing</a></li>
                                <li><a href="" className='ff-neue fs_md fw-light text-white op_08'>How It Work</a></li>
                                <li><a href="" className='ff-neue fs_md fw-light text-white op_08'>New Features</a></li>
                            </ul>
                            <ul className='mb-0 list-unstyled'>
                                <li className='ff-neue fs_md fw-medium text-white lh-150'>Important Links</li>
                                <li><a href="" className='ff-neue fs_md fw-light text-white op_08'>Testimonials</a></li>
                                <li><a href="" className='ff-neue fs_md fw-light text-white op_08'>FAQs</a></li>
                                <li><a href="" className='ff-neue fs_md fw-light text-white op_08'>Contact Us</a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className='border-top'>
                <Container>
                    <h2 className='mb-0 ff-neue fs_md fw-light text-white lh-150 text-center py-3'>Copy
                        Made with Powered by Petstar -<a href='https://www.petstar.co.uk/#' target='blank' className='text-white text-decoration-underline'>DOG GROOMING BUSINESSES & PET SERVICES</a> </h2>
                </Container>
            </div>
        </div>
    )
}

export default Footer;