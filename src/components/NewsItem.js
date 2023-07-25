import React from 'react';
import styled from 'styled-components'

const NewsItemBlock = styled.div`
    display: flex;
    border: 1px solid lightgray;
    border-radius : 5px;
    height: 210px;
    .thumbnail {
        /* margin-right: 1rem; */
        margin: 0 auto;
        img {
            display: block;
            width: 200px;
            height: 100%;
            object-fit: cover;
        }
    }
    .contents {
        text-align: left;
        padding : 15px;
        h2 {
            margin : 0;
            a {
                color : black;
                font-size: large;
            }
        }
        p {
            margin : 0;
            line-height: 1.5;
            margin-top: 0.5rem;
            white-space: normal;
        }
    }
    & + & {
        margin-top: 3rem;
    }
`;

const NewsItem = ({article}) => {
    const {title, description, url, urlToImage} = article;
    return (
        <NewsItemBlock>
            {
                urlToImage && (
                    <div className='thumbnail'>
                        <a href={url} target="_blank" rel='noopener noreferrer'>
                            <img src={urlToImage} alt='thumbnail'/>
                        </a>
                    </div>
                )
            }
            <div className='contents'>
                <h2>
                    <a href={url} target="_blank" rel='noopener noreferrer'>
                        {title}
                    </a>
                </h2>
                <p>{description}</p>
            </div>
        </NewsItemBlock>
    );
};

export default NewsItem;