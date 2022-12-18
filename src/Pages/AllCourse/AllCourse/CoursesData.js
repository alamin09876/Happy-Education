import React, { useRef } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ReactToPdf from 'react-to-pdf';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { Button } from 'react-bootstrap';


const CoursesData = () => {
    const courseDetails = useLoaderData();

   const pdfRef = useRef()
    const {title, picture, details, rating} = courseDetails
    console.log(courseDetails)
    return (
        <div ref = {pdfRef}>
            <Card className="mb-4 mt-4">
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
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
                   
                </Card.Body>
                <ReactToPdf targetRef = {pdfRef} scale={0.6}>
                    {({toPdf}) => <Button variant="primary" onClick={toPdf} style={{margin : "10px auto",boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" }}>Download PDF</Button>}
                </ReactToPdf>
            </Card>
           
        </div>
    );
};

export default CoursesData;