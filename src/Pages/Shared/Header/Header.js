import React, { useContext } from 'react';
import { Button, Image, Spinner } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {
    const { user, logOut, authLoading } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
    }
    return (
        <div>
            <Navbar className='mb-4' collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand>
                        <Link to={'/'}>Dragon News</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='mt-2 text-decoration-none text-muted' to='/allnews'>All News</Link>
                            <Nav.Link href="#pricing">Sports</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link>
                                <p className='mt-1'>
                                    {
                                        user?.displayName ?
                                            user.displayName.slice(0, 19) : user?.email ?
                                                user.email : ''
                                    }
                                </p>
                            </Nav.Link>
                            {
                                user?.email && <Nav.Link>
                                    <Button onClick={handleLogOut} className='roundedCircle' variant='outline-dark'>Logout</Button>
                                </Nav.Link>
                            }
                            {
                                !authLoading && <>
                                    {
                                        user?.uid ?
                                            <>
                                                {
                                                    <Link to='/profile'>
                                                        {
                                                            user?.photoURL ?
                                                                <Image className='mt-3 me-2 mb-2' height='25' roundedCircle src={user.photoURL}></Image>
                                                                :
                                                                <FaUser className='mt-3 me-2 mb-2'></FaUser>
                                                        }
                                                    </Link>
                                                }
                                            </>
                                            :
                                            <>
                                                <Link to='/login'>
                                                    <Button className='me-2 fw-bold' variant='outline-primary'>Login</Button>
                                                </Link>
                                                <Link to='/registration'>
                                                    <Button className='fw-bold' variant='outline-primary'>Registration</Button>
                                                </Link>
                                            </>
                                    }
                                </>
                            }
                        </Nav>
                        <div className='d-lg-none'>
                            <LeftSideNav></LeftSideNav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;