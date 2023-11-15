import React from 'react'
import { Container } from 'react-bootstrap';
import { Yelllock, Keyblue, Profilegreen, Redtick } from './iconsvg';
import Timelineimg1 from '../assets/images/timeline-bell1.png';
import Timelineimg2 from '../assets/images/timeline-bell2.png';
import Timelineimg3 from '../assets/images/timeline-bell3.png';
import Timelineimg4 from '../assets/images/timeline-bell4.png';


const Worksection = () => {
    return (
        <div className='work-padd'>
            <Container>
                <h2 data-aos="fade-up" className='mb-0 ff-roboto fs_xl fw-medium text_black12 lh-111'>How It Work</h2>
                <p data-aos="fade-up" className='mb-0 ff-neue fs_md fw-light text_black12 lh-160 mw-585 pt-2 pb-5'>ShakeYourTail is an online scheduling and CRM service & is super easy to use, you can trial our premier service free for 30 days.</p>
                <div className='timeline position-relative d-flex flex-lg-row flex-column'>
                    <div className='container1 d-flex align-items-start justify-content-lg-center justify-content-start'>
                        <div data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="1500" className='content position-relative'>
                            <Yelllock />
                            <p className='mb-0 ff-roboto fs_3md fw-medium lh-111 text_black12 pt-2'>Register</p>
                            <p className='mb-0 ff-neue fs_md fw-light lh-150 text_black12 op_07 pt-2'>Create a account</p>
                            <div className='position-absolute timeline-bell1'>
                                <img src={Timelineimg1} alt="Timelineimg1" />
                            </div>
                            <p className='fs_3xl ff-neue fw-bold lh-150 op_12 text_yell position-absolute work-text mb-0'>01</p>
                        </div>
                    </div>
                    <div className='container1 d-flex align-items-start justify-content-lg-center justify-content-start'>
                        <div data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="1700" className='content position-relative'>
                            <Keyblue />
                            <p className='mb-0 ff-roboto fs_3md fw-medium lh-111 text_black12 pt-2'>Login</p>
                            <p className='mb-0 ff-neue fs_md fw-light lh-150 text_black12 op_07 pt-2 '>Create a account</p>
                            <div className='position-absolute timeline-bell1'>
                                <img src={Timelineimg2} alt="Timelineimg2" />
                            </div>
                            <p className='fs_3xl ff-neue fw-bold lh-150 op_12 text_Sky position-absolute work-text mb-0'>02</p>
                        </div>
                    </div>
                    <div className='container1 d-flex align-items-start justify-content-lg-center justify-content-start'>
                        <div data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="1900" className='content position-relative'>
                            <Profilegreen />
                            <p className='mb-0 ff-roboto fs_3md fw-medium lh-111 text_black12 pt-2'>Customise</p>
                            <p className='mb-0 ff-neue fs_md fw-light lh-150 text_black12 op_07 pt-2 mw-172'>Customise your emails, SMS & settings.</p>
                            <div className='position-absolute timeline-bell2'>
                                <img src={Timelineimg3} alt="Timelineimg3" />
                            </div>
                            <p className='fs_3xl ff-neue fw-bold lh-150 op_12 text_Blue position-absolute work-text1 mb-0'>03</p>
                        </div>
                    </div>
                    <div className='container1 d-flex align-items-start justify-content-lg-center justify-content-start'>
                        <div data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="2100" className='content position-relative'>
                            <Redtick />
                            <p className='mb-0 ff-roboto fs_3md fw-medium lh-111 text_black12 pt-2'>Done</p>
                            <p className='mb-0 ff-neue fs_md fw-light lh-150 text_black12 op_07 pt-2 mw-200'>You're Ready to Rock! Add clients & start booking appointments.</p>
                            <div className='position-absolute timeline-bell3'>
                                <img src={Timelineimg4} alt="Timelineimg4" />
                            </div>
                            <p className='fs_3xl ff-neue fw-bold lh-150 op_12 text_Red1 position-absolute work-text2 mb-0'>04</p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Worksection