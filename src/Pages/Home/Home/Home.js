import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'
import image from '../../images/2.jpg'
import image1 from '../../images/3.jpg'
import image2 from '../../images/4.jpg'

const Home = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image2}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2 style={{ color: 'blue' }}>Welcome to Happy Education</h2>
                        
                        <Button variant="light" className = "nav-container"><Link to='/course'>Our Courses</Link></Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image1}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h2 style={{ color: 'blue' }}>Welcome to Happy Education</h2>
                        
                        <Button variant="light" className = "nav-container"><Link to='/course'>Our Courses</Link></Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image2}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h2 style={{ color: 'blue' }}>Welcome to Happy Education</h2>
                        <Button variant="light"><Link to='/course'>Our Courses</Link></Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>


        </div>
    );
};

export default Home;