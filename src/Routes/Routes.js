import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import CoursesData from '../Pages/AllCourse/AllCourse/CoursesData';
import Blog from '../Pages/Blog/Blog/Blog';
import Course from '../Pages/Courses/Courses/Course';
import FAQ from '../Pages/FAQ/FAQ/FAQ';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login/Login';
import Registration from '../Pages/Login/Registration/Registration';
import MyCourse from '../Pages/MyCourse/MyCourse/MyCourse';
import PrivateRoute from './PrivateRoute/PrivateRoute';



export const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path : '/',
                element : <Home></Home>,
                loader : () => fetch('https://happy-zone-server.vercel.app/course')
            },
            {
                path : '/home',
                element : <Home></Home>,
            },
            {
                path : '/course',
                element : <MyCourse></MyCourse>,
                loader : () => fetch('https://happy-zone-server.vercel.app/course')
            },
            {
                path : '/course/:id',
                element : <PrivateRoute><CoursesData></CoursesData></PrivateRoute>,
                loader :({params}) =>{
                    return fetch (`https://happy-zone-server.vercel.app/course/${params.id}`)
                }
            },
            {
                path :'/login',
                element :<Login></Login>
            },
            {
                path : '/registration',
                element: <Registration></Registration>
            },
            {
                path : '/faq',
                element : <FAQ></FAQ>,
            },
            {
                path : '/blog',
                element: <Blog></Blog>
            },
            { path: '*', element: <div>This route is not found</div> }
        ]
    }
])
