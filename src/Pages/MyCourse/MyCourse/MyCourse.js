import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Course from '../../Courses/Courses/Course';
import LeftSideNav from '../../Shared/LeftSideNav/LeftSideNav';

const MyCourse = () => {
    const courses = useLoaderData()
    return (
        <Container className = "course-container mt-5">
            <Row>
                <Col lg="4">
                    <LeftSideNav></LeftSideNav>
                </Col>
                <Col lg="8">
                    <div>

                        <h2 className ="text-center mb-4">This is Our courses</h2>
                        {
                            courses.map(course => <Course key={course.id} course={course}></Course>)
                        }
                    </div>
                </Col>
            </Row>

        </Container>

    );
};

export default MyCourse;