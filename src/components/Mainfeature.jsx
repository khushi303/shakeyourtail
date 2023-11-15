import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Petsicon } from './iconsvg';
import { Notifyicon } from './iconsvg';
import { Scheduleicon } from './iconsvg';
import { Org2flower, Sky2flower, Redflower } from './iconsvg';

const Mainfeature = () => {
    return (
        <div id='features' className='pt-5 pb-5'>
            <Container>
                <Row className=''>
                    <Col lg={3} md={6} className='whitecard-gap d-flex flex-column pb-lg-0 pb-4'>
                        <div data-aos="fade-up" className='white_card position-relative'>
                            <Petsicon />
                            <h2 className='mb-0 ff-roboto fs_3md fw-medium lh-111 text_black12 pt-2 pb-2'>Clients & Pets</h2>
                            <p className='mb-0 ff-neue fs_md fw-light text_black12 lh-150 mw-229 op_07'>Managing your Clients and their Pets is effortless; Record their details, add emergency contacts, Medical Notes, Grooming notes, view their appointment history, set alerts and much more…</p>
                            <div className='position-absolute red-flower'>
                                <Sky2flower />
                            </div>
                        </div>
                        <div data-aos="fade-up" className='white_card position-relative'>
                            <Notifyicon />
                            <h2 className='mb-0 ff-roboto fs_3md fw-medium lh-111 text_black12 pt-2 pb-2'>Notifications & Reminders</h2>
                            <p className='mb-0 ff-neue fs_md fw-light text_black12 lh-150 mw-229 op_07'>We’ll take the strain by automatically sending your Clients, their appointment reminders, confirmations, ‘Miss You’s and No Shows, by text or email.</p>
                            <div className='position-absolute red-flower'>
                                <Redflower />
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6} className='d-flex align-items-center justify-content-center pb-md-0 pb-4'>
                        <div data-aos="fade-up" className='white_card1 position-relative'>
                            <Scheduleicon />
                            <h2 className='mb-0 ff-roboto fw-medium lh-111 text_black12 fs_3md pt-2 pb-2'>Schedule</h2>
                            <p className='mb-0 ff-neue fs_md fw-light text_black12 lh-150 mw-229 op_07'>Powerful and easy to use, book appointments to your team members and view your colour coded schedule, ‘at a glance’.</p>
                            <div className='position-absolute red-flower'>
                                <Org2flower />
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} data-aos="fade-left" className='d-flex justify-content-around align-items-center pt-lg-0 pt-2'>
                        <div >
                            <h2 className='mb-0 ff-roboto fw-medium fs_xl text_black12 pb-3'>Main Features</h2>
                            <p className='mb-0 ff-neue fs_md fw-light text_black12 lh-150 mw-499 pb-2 op_07'>ShakeYourTail is an trusted dog grooming software based in the cloud; Client, appointment, scheduling and document management service.</p>
                            <p className='mb-0 ff-neue fs_md fw-light text_black12 lh-150 mw-499 pb-2 op_07'>Great for Salons & Groomers on the move; Run it on your PC, laptop, Ipad, Tablet or Mobile with a standard internet connection.</p>
                            <p className='mb-0 ff-neue fs_md fw-light text_black12 lh-150 mw-499 pb-2 op_07'>Store everything in one place and leave the tech stuff to us.</p>
                            <p className='mb-0 ff-neue fs_md fw-light text_black12 lh-150 mw-499 op_07'>We provide a complete service solution, giving you peace of mind, we support, secure, update and keep your data, all safely backed up.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Mainfeature