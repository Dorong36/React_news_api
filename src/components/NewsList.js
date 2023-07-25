import React, {useEffect, useState} from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';
import styled from 'styled-components'

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin : 0 auto;
    margin-top: 2rem;
    @media screen and (max-width : 768px){
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`

const NewsList = ({category}) => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        const load = async () => {
            setLoading(true)
            try {
                const query = category === 'all' ? '' : `&category=${category}`
                const res = await axios.get(
                `https://newsapi.org/v2/top-headlines?country=us${query}&apiKey=2169d4002b734a38a3eee6e599cbe574`
                )
                setArticles(res.data.articles)
            } catch (e){
                console.log(e)
            }
            setLoading(false)
        }
        load();
    },[category])

    if(loading) {
        return <NewsListBlock>Loading...</NewsListBlock>
    }

    if(!articles) {
        return null
    }


    return (
        <NewsListBlock>
            {
                articles.map((article)=>(
                    article.urlToImage &&
                    <NewsItem key={article.url} article={article}></NewsItem>
                ))
            }
        </NewsListBlock>
               
    );
};

export default NewsList;