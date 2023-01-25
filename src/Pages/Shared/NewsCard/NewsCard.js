import React from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaBookmark, FaEye, FaShare, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { _id, rating, title, total_view, author: { name, published_date, img }, image_url, details } = news || {}
    return (
        <div>
            <Card className="mb-3">
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex'>
                        <Image className='me-2' style={{ width: '60px' }} thumbnail roundedCircle src={img}></Image>
                        <div>
                            <h4 className='mb-0'>{name}</h4>
                            <p>{published_date}</p>
                        </div>
                    </div>
                    <div>
                        <FaBookmark className='me-2'></FaBookmark>
                        <FaShare></FaShare>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title className='text-center '>{title}</Card.Title>
                    {/* <Image className='img-fluid' width={600} src={image_url}></Image> */}
                    <Card.Img variant='top' src={image_url}></Card.Img>
                    <Card.Text>
                        {
                            details?.length > 200 ?
                                <>
                                    {
                                        details.slice(0, 200) + '.....  '
                                    }
                                    <Link to={`/news/${_id}`}>Read More</Link>
                                </>
                                : <>details</>
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted d-flex justify-content-between">
                    <div>
                        <FaStar className='me-2'></FaStar>{rating?.number}
                    </div>
                    <div>
                        <FaEye className='me-2'></FaEye>{total_view}
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCard;