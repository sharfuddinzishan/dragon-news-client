import axios from 'axios';
import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState()
    useEffect(() => {
        axios.get('https://dragon-news-server-one-swart.vercel.app/categories')
            .then(result => {
                setCategories(result.data)
            })
    }, [])
    return (
        <div>
            <h2>Categories {categories?.length}</h2>
            {
                categories?.map(category => <p key={category?._id}>
                    <Link to={`/category/${category?._id}`}>{category?.name}</Link>
                </p>)
            }
        </div>
    );
};

export default LeftSideNav;