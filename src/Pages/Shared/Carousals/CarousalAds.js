import React from 'react';
import { Carousel } from 'react-bootstrap';
import Brand1 from '../../../assets/Brands/google-company.jpeg'
import Brand2 from '../../../assets/Brands/my-company.jpg'

const CarousalAds = () => {
    return (
        <div>
            <Carousel variant="dark" className='mt-4 w-75'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Brand1}
                        style={{ height: '100px' }}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Brand2}
                        style={{ height: '100px' }}
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div >
    );
};

export default CarousalAds;