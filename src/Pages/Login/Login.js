import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const { loginWithEmailPassword, setAuthLoading } = useContext(AuthContext)
    const [formState, setFormState] = useState(null)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleLogin = e => {
        e.preventDefault()
        const { email, password } = formState
        loginWithEmailPassword(email, password)
            .then(result => {
                e.target.reset()
                if (result.user.emailVerified) {
                    navigate(from, { replace: true })
                }
                else {
                    toast.error('Email is not verified!')
                }
            })
            .catch(e => toast.error(e.message))
            .finally(() => {
                setAuthLoading(false)
            })
    }

    return (
        <div>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" onBlur={e => setFormState({ ...formState, email: e.target.value })} placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" onBlur={e => setFormState({ ...formState, password: e.target.value })} placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Link className='text-secondary text-decoration-none' to='/registration'>Have No Account?</Link>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Form.Text className="text-muted ms-2">
                </Form.Text>
            </Form>
        </div>
    );
};

export default Login;