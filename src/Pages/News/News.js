import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleNewsCard from '../Shared/SingleNewsCard/SingleNewsCard';


const News = () => {
    const getNews = useLoaderData()
    return (
        <div>
            {
                <SingleNewsCard news={getNews}></SingleNewsCard>
            }
        </div>
    );
};

export default News;