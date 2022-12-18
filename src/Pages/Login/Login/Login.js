import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Login = () => {

    const { loginUser, loginInWithGoogle, loginInWithGithub } = useContext(AuthContext)
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const alamin = location.state?.from?.pathname || '/'
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const githubSignIn = () => {
        loginInWithGithub(githubProvider)
            .then(result => {
                const user = result.user
                console.log(user)
                navigate(alamin, { replace: true })
                console.log(alamin)
            })
            .catch(error => {
                console.error(error)
            })
    }
    const googleSignIn = () => {
        loginInWithGoogle(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(alamin, { replace: true })
                console.log(alamin)
            })
            .catch(error => {
                console.error(error)
            })
    }


    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        loginUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
                setError('');
                navigate(alamin, { replace: true })
                console.log(alamin)
            })
            .catch(error => {
                // console.error(error);
                setError(error.message);
            })
    }
    return (
        <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required />
            </Form.Group>
            <Button variant="primary" type="submit" className="mb-4">
                Login
            </Button>

            <Form.Text className='text-danger mb-4'>
                {error}
            </Form.Text>
            <br></br>
            <Button variant="primary" type="submit" className="mb-4">
                 <Link to="/registration" className="text-white">Go to Register</Link>
            </Button>
            <br></br>
            <ButtonGroup vertical>
                <Button onClick={googleSignIn} className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Sign In With Google</Button>
                <Button className='mb-2' variant="outline-dark" onClick={githubSignIn}><FaGithub></FaGithub> Sign In With GitHub</Button>
            </ButtonGroup>
        </Form>
    );
};

export default Login;