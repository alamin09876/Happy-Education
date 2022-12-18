import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('https://happy-zone-server.vercel.app/details')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return (
        <div className='nav-container' >
            {
                courses.map(course => <p key={course.id}>
                    <Link to={`/course/${course.id}`} style={{border : '1px solid grey', padding : "5px", margin: "20px", boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"}}>{course.name}</Link >
                </p>)
            }
        </div>
    );
};



export default LeftSideNav;