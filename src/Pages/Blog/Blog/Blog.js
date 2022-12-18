import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './Blog.css'

const Blog = () => {
    return (
        <Accordion defaultActiveKey="0" className ="blog">
            <Accordion.Item eventKey="0">
                <Accordion.Header>what is cors ?</Accordion.Header>
                <Accordion.Body>
                    Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header> Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                <Accordion.Body>
                    Firebase helps you make your app the best it can be with tools for the entire journey. Optimize app performance at launch and beyond to deliver the best experience. Learn more. Backed by Google. Monitor App Performance. Accelerate Development. Customize Your App.
                    Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header> How does the private route work?</Accordion.Header>
                <Accordion.Body>
                    The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated. The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.
                    If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header> What is Node? How does Node work?</Accordion.Header>
                <Accordion.Body>
                Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.
                It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default Blog;