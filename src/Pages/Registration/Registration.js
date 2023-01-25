import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Registration = () => {
    const { signUpWithEmailPassword, updateUser, verifyEmail, setAuthLoading } = useContext(AuthContext)
    const [formState, setFormState] = useState(null)
    const [terms, setTerms] = useState(false)
    let navigate = useNavigate()

    const handleSignUp = e => {
        e.preventDefault()

        const { email, password, fname } = formState || {}
        if (!formState || !email || !password || !fname) return toast.error('Email/Name/Password is Missing or Auto-Completed!')

        signUpWithEmailPassword(email, password)
            .then(result => {
                e.target.reset()
                handleUpdateUser(fname)
                handleVerifyEmail()
                navigate('/login')
            })
            .catch(e => {
                toast.error(e.message)
            })
            .finally(() => {
                setAuthLoading(false)
            })
    }

    const handleUpdateUser = (displayName) => {
        updateUser({ displayName })
            .then()
            .catch(e => {
                toast.error("Failed To Update User Name")
            })
    }

    const handleVerifyEmail = () => {
        verifyEmail()
            .then(() => toast.success('An Email send for verification. Please Check inbox/spam folder.'))
            .catch(e => {
                toast.error("Failed To Send Verified email")
            })
    }

    return (
        <div>
            <Form onSubmit={handleSignUp}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name="fname" onBlur={e => setFormState({ ...formState, fname: e.target.value })} placeholder="Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" onBlur={e => setFormState({ ...formState, email: e.target.value })} placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" onBlur={e => setFormState({ ...formState, password: e.target.value })} placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" onClick={() => setTerms(!terms)} label={<>Accept <Link to='/terms'>Terms and Conditions?</Link></>} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Link className='text-secondary text-decoration-none' to='/login'>Have Account?</Link>
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!terms}>
                    Submit
                </Button>
                <Form.Text className="text-muted ms-2">
                </Form.Text>
            </Form>
        </div>
    );
};

export default Registration;