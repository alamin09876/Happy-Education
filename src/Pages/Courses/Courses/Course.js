import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Course = ({ course }) => {
    const { title, picture, details, rating, id } = course
    // console.log(course)
    return (
        <div>

            <Card className="mb-4">
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    {
                        details.length > 100 ?
                            <p>{details.slice(0, 100) + '...'}<Link to={`/course/${id}`}>Read More</Link></p>
                            :
                            <p>{details}</p>
                    }
                    <Card.Text className="d-flex align-items-center">
                        <div className=" me-3" style = {{color : '#ffd700'}}>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStarHalfAlt></FaStarHalfAlt>
                            </div>
                        {rating.number}
                    </Card.Text>
                    <Button variant="primary"><Link to={`/course/${id}`} className="text-decoration-none text-white">Get Premium</Link></Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Course;