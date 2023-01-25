import { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, authLoading } = useContext(AuthContext)
    const location = useLocation()
    if (authLoading) return <>
        <Spinner animation="border" variant="primary" />
        <Spinner animation="border" variant="secondary" />
        <Spinner animation="border" variant="success" />
        <Spinner animation="border" variant="danger" />
        <Spinner animation="border" variant="warning" />
        <Spinner animation="border" variant="info" />
        <Spinner animation="border" variant="light" />
        <Spinner animation="border" variant="dark" />
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="secondary" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="info" />
        <Spinner animation="grow" variant="light" />
        <Spinner animation="grow" variant="dark" />
    </>

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children
};

export default PrivateRoute;