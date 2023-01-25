import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleNewsCard = ({ news }) => {
    const { category_id, _id, rating, title, total_view, author: { name, published_date, img }, image_url, details } = news || {}
    return (
        <div>
            <Card className='p-2'>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}>
                        <Button variant="primary">Go For Same Category News</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleNewsCard;