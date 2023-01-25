import React, { useContext, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Profile = () => {
    const { updateUser, updateUserPassword, setAuthLoading, user } = useContext(AuthContext)
    const fnameRef = useRef(user?.displayName)
    const photoRef = useRef(user?.photoURL)
    const passRef = useRef(null)
    const [terms, setTerms] = useState(false)

    const handleUpdateInfo = e => {
        e.preventDefault()
        const displayName = fnameRef.current.value
        const photoURL = photoRef.current.value
        const changePassword = passRef.current.value
        updateUser({ displayName, photoURL })
            .then(result => {
                toast.success("Successfully Updated User Information")
                handleUpdatePassword(changePassword)
            })
            .catch(e => {
                toast.error("Failed To Update User Name or Photo")
            })
            .finally(() => {
                setAuthLoading(false)
            })
    }

    const handleUpdatePassword = (newPassword) => {
        updateUserPassword(newPassword)
            .then()
            .catch(e => {
                console.log(e.message);
                toast.error("Failed To Update User Password")
            })
    }

    return (
        <div>
            <Form onSubmit={handleUpdateInfo}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" defaultValue={user?.email} readOnly />
                </Form.Group>
                <Form.Group className="mb-3" controlId="fname">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control ref={fnameRef} type="text" name="fname" defaultValue={user?.displayName} placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passRef} type="password" name="password" placeholder="Changed Your Password Here" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="photo">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control ref={photoRef} type="text" name="photo" defaultValue={user?.photoURL} placeholder="Your Photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" onClick={() => setTerms(!terms)} label='Sure To Update Information' />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!terms}>
                    Update Profile
                </Button>
                <Form.Text className="text-muted ms-2">
                </Form.Text>
            </Form>
        </div>
    );
};

export default Profile;