import React from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Pagelogo from '../assets/images/page-logo.png';
import Mobileimg from '../assets/images/mobileimg-header.png';
import Estherimg from '../assets/images/esthermanimg.png';
import { Greentick } from './iconsvg';

const Header = () => {
    const [show, setshow] = useState(true)
    return (
        <div className='bg-header'>
            <Container>
                <div className='d-flex align-items-center justify-content-between py-3 fix_nav'>
                    <div className='mw-175 cur_pointer'>
                        <img src={Pagelogo} alt="pagelogo" className='w-100' />
                    </div>
                    <ul className={`${show ? "left_100" : "left_0"} nav_bar`}>
                        <li><a href="#home" onClick={() => setshow(!show)} className='ff-neue linehov position-relative fs_md fw-medium text-white'>Home</a></li>
                        <li><a href="#features" onClick={() => setshow(!show)} className='ff-neue linehov position-relative fs_md fw-medium text-white'>Features</a></li>
                        <li><a href="#pricing" onClick={() => setshow(!show)} className='ff-neue linehov position-relative fs_md fw-medium text-white'>Pricing</a></li>
                        <li><a href="#freetrial" onClick={() => setshow(!show)} className='ff-neue linehov position-relative fs_md fw-medium text-white'>Free Trial</a></li>
                        <li className='ff-neue glass_hover fs-md fw-medium text-white btn-sign cur_pointer'>Sign In</li>
                    </ul>
                    <div onClick={() => setshow(!show)} className={`${show ? "" : "cross"} navline`}>
                        <span className='crl-1'></span>
                        <span className='crl-2'></span>
                        <span className='crl-3'></span>
                    </div>
                </div>
            </Container>
            <Container id='home'>
                <Row className='pt-lg-3 pt-5 pb-lg-5 pb-4'>
                    <Col lg={6} data-aos="fade-right" className='d-flex pt-lg-0 pt-5 flex-column justify-content-center align-items-lg-start align-items-center'>
                        <h2 className='mb-0 mw-530 ff-roboto fs_2xl fw-bold text-lg-start text-center text-white lh-101 pb-1'>Smart, Simple Software</h2>
                        <p className='mb-0 ff-neue fs_3md fw-medium text-white text-lg-start text-center lh-150 pb-4 mw-558'>Dog Grooming Software, helping to reduce 'no shows' with appointment confirmations, reminders & more.</p>
                        <div className='d-flex gap-3'>
                            <button className='btn-free button-4 ff-roboto fs_3md fw-normal text-white'>Free Trial</button>
                            <button className='btn-explore button-4 ff-roboto fs_3md fw-normal text-white'>Explore More</button>
                        </div>
                    </Col>
                    <Col lg={6} data-aos="fade-left" className='d-flex align-items-center justify-content-center pt-lg-0 pt-4'>
                        <div className='mw-411 position-relative z-1'>
                            <img src={Mobileimg} alt="mobileimg" className='w-100' />
                            <div className='blurcard glass_hover esthercard d-flex gap-2 position-absolute'>
                                <img src={Estherimg} alt="Estherimg" className='mw-44 w-100' />
                                <div>
                                    <p className='mb-0 ff-neue fs_3sm fw-bold text-black lh-150'>Esther Howard</p>
                                    <p className='mb-0 ff-neue fs_sm fw-light text-black lh-150'>Manager</p>
                                </div>
                            </div>
                            <div className='blurcard glass_hover greencard d-flex gap-2 position-absolute'>
                                <Greentick />
                                <div>
                                    <p className='mb-0 ff-neue fs_3sm fw-bold text-black lh-150'>Theresa Webb</p>
                                    <p className='mb-0 ff-neue fs_sm fw-light text-black lh-150'>CEO</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header;