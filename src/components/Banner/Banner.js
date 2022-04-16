import React from 'react';
import { Carousel } from 'react-bootstrap';
import profile from '../../Assets/Image/profile.png'
import banner1 from '../../Assets/Image/Banner/law-banner1.jpg'
import banner2 from '../../Assets/Image/Banner/law-banner2.jpg'
import banner3 from '../../Assets/Image/Banner/law-banner3.jpg'

const Banner = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <div className='d-flex justify-content-between align-items-end'>
                        <div className='text-start'>
                            <h2>Hello</h2>
                            <h3>I AM MIKE HENDRICKS</h3>
                            <p>CRIMINAL DEFENCE LAWYER</p>
                        </div>
                        <div >
                            <img className='img-fluid' src={profile} alt="" />
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>High Quality Law Advice And Support You Can Affor</h3>
                    <p>We strongly believe that everyone deserves equal rights</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Emergency Service</h3>
                    <h4>24 Hours a Day, 7 Days a Week</h4>
                    <h1>+8801717808752</h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;