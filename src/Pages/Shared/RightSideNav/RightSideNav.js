import React from 'react';
import { Button, ButtonGroup, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FaFacebook, FaTelegram, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa';
import CarousalAds from '../Carousals/CarousalAds';

const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical className='w-75'>
                <Button className='mb-2 rounded-3' variant='outline-primary'>Login With Google</Button>
                <Button className='mb-4 rounded-3' variant='outline-dark'>Login With Github</Button>
            </ButtonGroup>
            <h5>Find Us On</h5>
            <ListGroup className='w-75'>
                <ListGroupItem className='mb-2'><FaFacebook></FaFacebook> Facebook</ListGroupItem>
                <ListGroupItem className='mb-2'><FaTwitter></FaTwitter> Twitter</ListGroupItem>
                <ListGroupItem className='mb-2'><FaYoutube></FaYoutube> Youtube</ListGroupItem>
                <ListGroupItem className='mb-2'><FaTwitch></FaTwitch> Twitch</ListGroupItem>
                <ListGroupItem className='mb-2'><FaTelegram></FaTelegram> Telegram</ListGroupItem>
            </ListGroup>
            <div>
                <CarousalAds></CarousalAds>
            </div>
        </div>
    );
};

export default RightSideNav;