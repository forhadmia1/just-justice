import React from 'react';
import { Carousel } from 'react-bootstrap';
import profile from '../../Assets/Image/profile.png'
import banner1 from '../../Assets/Image/Banner/law-banner1.jpg'
import banner2 from '../../Assets/Image/Banner/law-banner2.jpg'
import banner3 from '../../Assets/Image/Banner/law-banner3.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100 slider-img"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <div className='d-flex justify-content-between align-items-end'>
                        <div className='text-start'>
                            <h2 className='banner-title'>Hello</h2>
                            <h3 className='banner-title'>I AM Jesica</h3>
                            <p>CRIMINAL DEFENCE LAWYER</p>
                        </div>
                        <div >
                            <img className='img-fluid w-75' src={profile} alt="" />
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 slider-img"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className='banner-title'>High Quality Law Advice And Support You Can Affort</h3>
                    <p>We strongly believe that everyone deserves equal rights</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 slider-img"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className='banner-title'>Emergency Service</h3>
                    <h4>24 Hours a Day, 7 Days a Week</h4>
                    <h4>+12099216581</h4>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;