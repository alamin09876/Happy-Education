import React, { useContext, useState } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import image from '../../../assest/1.jpg'
import './Header.css'
import DarkModeToggle from "react-dark-mode-toggle";


const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const handlerLogout = () => {
    logOut()
      .then(() => {

      })
      .catch(error => console.error(error))
  }
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <img src={image} alt="" srcset="" className='logo' />
        <Navbar.Brand className = "nav-container"><Link to='/'>Happy Education</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-container">
            <Nav.Link ><Link to='/home'>Home</Link></Nav.Link>
            <Nav.Link ><Link to='/course'>Course</Link></Nav.Link>
            <Nav.Link ><Link to='/faq'>FAQ</Link></Nav.Link>
            <Nav.Link ><Link to='/blog'>Blog</Link></Nav.Link>
            
          </Nav>
          <Nav>
          <div> 
            <DarkModeToggle
              onChange={setIsDarkMode}
              checked={isDarkMode}
              size={40}
              className = "toggle"
            />  
        </div>
            <Nav.Link href="#deets">
              {
                user?.uid ?
                  <>
                    <span>{user?.displayName}</span>
                    <Button onClick={handlerLogout} variant="light" style={{ marginLeft: '20px' }}>Log Out</Button>
                  </>
                  :
                  <>
                    <Button variant="light"><Link to="/login">Login</Link></Button>
                    <Button variant="light"><Link to="/registration">Registration</Link></Button>
                  </>
              }


            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              {
                user?.photoURL ?
                  <Image
                    roundedCircle
                    style={{ height: '30px' }}
                    src={user?.photoURL}
                    title={user?.displayName ? user?.displayName : user?.email}
                  ></Image>


                  : <FaUser></FaUser>
              }
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;