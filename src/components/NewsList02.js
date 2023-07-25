import React, {useEffect, useState} from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';
import styled from 'styled-components'
import usePromise from '../lib/usePromise';

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

const NewsList02 = ({category}) => {

    const [loading, response, error] = usePromise(()=>{
        const query = category === 'all' ? '' : `&category=${category}`
        return axios.get(
            `https://newsapi.org/v2/top-headlines?country=us${query}&apiKey=2169d4002b734a38a3eee6e599cbe574`
        );
    }, [category])


    if(loading) {
        return <NewsListBlock>Loading...</NewsListBlock>
    }

    // 아직 response 값이 설정되지 않았을 때
    if(!response) {
        return null;
    }

    // error 발생했을 때
    if(error) {
        return <NewsListBlock>Error</NewsListBlock>
    }

    // response 값이 유효할 때
    const {articles} = response.data;

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

export default NewsList02;