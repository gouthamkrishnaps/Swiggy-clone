import React from 'react'
import { Col, Row } from 'react-bootstrap'

function About() {
  return (
    <div >
        <div style={{backgroundColor:'aliceblue'}} className="container-fluid appstore d-flex justify-content-center align-items-center">
        <Row>
            <Col>
                <div className='d-flex justify-content-center align-items-center'>
                    <h4 className='mt-2'>For better experience,download the Swiggy app now</h4>
                </div>
            </Col>

            <Col>
                <div className=' d-flex gap-2'>
                    <div style={{color:'white'}}>
                        <img style={{width:'300px',height:'100px'}} src="https://pluspng.com/img-png/get-it-on-google-play-badge-png-get-it-on-google-play-646.png" alt="" />
                    </div>
                    <div style={{color:'white',height:'100px'}}>
                       <img style={{width:'300px'}} src="https://truefreedomachievers.com/wp-content/uploads/2018/10/apple-store-png-3.png" alt="" />
                    </div>
                </div>
            </Col>
        </Row>
        </div>
        <div  style={{backgroundColor:'black',color:'white'}} className="footer container-fluid">
                <Row className='pt-5 pb-5'>
                    <Col lg={2}></Col>
                    <Col lg={8}>
                        <Row>
                            <Col lg={3}>
                                <div>
                                    <img style={{width:'140px'}} src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza" alt="" />
                                    <p>© 2023 Bundl Technologies Pvt. Ltd</p>
                                </div>
                            </Col>
                            <Col lg={3}>
                            <div>
                                <h4>Company</h4>
                                <p>About</p>
                                <p>Careers</p>
                                <p>Team</p>
                                <p>Swiggy one</p>
                                <p>Swiggy instamart</p>
                                <p>Swiggy genie</p>
                            </div>
                            </Col>
                            <Col lg={3}>
                            <div>
                                <h4>Contact us</h4>
                                <p>Help & Support</p>
                                <p>Ride with us</p>
                                <p>Partner with us</p>
                            </div>
                            <div>
                                <h4>Contact us</h4>
                                <p>Terms & condition</p>
                                <p>Cookie policy</p>
                                <p>Privacy policy</p>
                            </div>
                            </Col>
                            <Col lg={3}>
                            <div>
                                <h4>We deliver to:</h4>
                                <p>Bangalore</p>
                                <p>Hydrabad</p>
                                <p>Gujarat</p>
                                <p>Kerala</p>
                                <p>Delhi</p>
                                <p>Tamil nadu</p>
                                <div className='btn btn-outline-secondary'> 561 cities</div>
                            </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={2}></Col>
                </Row>
        </div>
    </div>
  )
}

export default About