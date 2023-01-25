import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../Shared/NewsCard/NewsCard';

const Category = () => {
    const catNews = useLoaderData()
    return (
        <div>
            <h5>Total News {catNews?.length}</h5>
            {
                catNews.map(singleNews => <NewsCard key={singleNews._id} news={singleNews}></NewsCard>)
            }
        </div>
    );
};

export default Category;