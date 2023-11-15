import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NewIdea, ContactSvg } from './iconsvg';
import Wave from '../assets/images/FooterWave.png';


const Faqsec = () => {
    return (
        <div className='faq-padd position-relative'>
            <Container>
                <h2 data-aos="zoom-in" className=" fs_xl text-black fw-medium lh-111 ff-roboto mb-0 pb-3 text-lg-start text-center">
                    FAQ’s
                </h2>
                <Row className="align-items-center justify-content-lg-between justify-content-center">
                    <Col data-aos="fade-down" lg={7}>
                        <div
                            className="accordion accordion-flush pt-3"
                            id="accordionFlushExample"
                            data-aos="zoom-in-up"
                            data-aos-easing="linear"
                            data-aos-duration="1000"
                        >
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed ff-Neue fw-medium fs_3md text-black"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseOne"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseOne"
                                    >
                                        Do you have a mobile app?
                                    </button>
                                </h2>
                                <div
                                    id="flush-collapseOne"
                                    className="accordion-collapse collapse show ff-Neue fw-light fs_md text_black17 mw_596 op_08"
                                    data-bs-parent="#accordionFlushExample"
                                >
                                    <div className="accordion-body">
                                        Yes, our mobile app is available to premier and premier plus
                                        subscribers, allowing you to manage your business on the go.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed ff-Neue fw-medium fs_3md text-black"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseTwo"
                                    >
                                        Do you support start-up business?
                                    </button>
                                </h2>
                                <div
                                    id="flush-collapseTwo"
                                    className="accordion-collapse collapse ff-Neue fw-light fs_md text_black17 op_08 mw_596"
                                    data-bs-parent="#accordionFlushExample"
                                >
                                    <div className="accordion-body">
                                        Yes, our mobile app is available to premier and premier plus
                                        subscribers, allowing you to manage your business on the go.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed ff-Neue fw-medium fs_3md text-black"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseThree"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseThree"
                                    >
                                        I’ve used up all my monthly SMS credits, can I buy more?
                                    </button>
                                </h2>
                                <div
                                    id="flush-collapseThree"
                                    className="accordion-collapse collapse ff-Neue fw-light fs_md text_black17 op_08 mw_596"
                                    data-bs-parent="#accordionFlushExample"
                                >
                                    <div className="accordion-body">
                                        Yes, our mobile app is available to premier and premier plus
                                        subscribers, allowing you to manage your business on the go.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed ff-Neue fw-medium fs_3md text-black"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseFour"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseFour"
                                    >
                                        What do I need to access the system?
                                    </button>
                                </h2>
                                <div
                                    id="flush-collapseFour"
                                    className="accordion-collapse collapse ff-Neue fw-light fs_md text_black17 op_08 mw_596"
                                    data-bs-parent="#accordionFlushExample"
                                >
                                    <div className="accordion-body">
                                        Yes, our mobile app is available to premier and premier plus
                                        subscribers, allowing you to manage your business on the go.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed ff-Neue fw-medium fs_3md text-black"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseFive"
                                        aria-expanded="false"
                                        aria-controls="flush-collapseFive"
                                    >
                                        Can you import my data?
                                    </button>
                                </h2>
                                <div
                                    id="flush-collapseFive"
                                    className="accordion-collapse collapse ff-Neue fw-light fs_md text_black17 op_08 mw_596"
                                    data-bs-parent="#accordionFlushExample"
                                >
                                    <div className="accordion-body">
                                        Yes, our mobile app is available to premier and premier plus
                                        subscribers, allowing you to manage your business on the go.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col data-aos="fade-down" lg={4} className="col-10 pt-4 pt-lg-0">
                        <div className="help_box">
                            <p className="ff-roboto fs_2lg lh-111 fw-medium text-black text-center mb-0 pb-2">
                                Need help?
                            </p>
                            <p className="fs_md ff-Neue lh-150 op_08 text-black fw-lighter text-center mb-0 pb-3">
                                Ask our support team
                            </p>
                            <div className="help_btn glass_hover d-flex gap-2 align-items-center justify-content-center">
                                <NewIdea />
                                <p className="text-white fs_3md fw-normal ff-roboto mb-0 text-nowrap">
                                    New Idea?
                                </p>
                            </div>
                            <div className="help_btn glass_hover d-flex gap-2 align-items-center justify-content-center mt-3">
                                <ContactSvg />
                                <p className="text-white fs_3md fw-normal ff-roboto mb-0 text-nowrap">
                                    Contact Us
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className='position-absolute wave start-0 end-0'>
                <img src={Wave} alt="wave" className='w-100' />
            </div>
        </div>
    )
}

export default Faqsec