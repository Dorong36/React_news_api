import React from 'react';
import { useParams } from 'react-router-dom';
import Categories from './Categories';
import NewsList from './NewsList';
import NewsList02 from './NewsList02';

const NewsPage = () => {

    const params = useParams();
    const category = params.category || 'all'

    return (
        <div>
            <Categories/>
            {/* <NewsList category={category}/> */}
            <NewsList02 category={category}/>
        </div>
    );
};

export default NewsPage;