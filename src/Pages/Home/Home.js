import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../Shared/NewsCard/NewsCard';

const Home = () => {
    const allNews = useLoaderData()
    return (
        <div>
            <h2>Total News: {allNews?.length}</h2>
            {
                allNews.map(singleNews => (
                    <NewsCard key={singleNews._id} news={singleNews}></NewsCard>
                ))
            }
        </div>
    );
};

export default Home;