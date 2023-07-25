import React from 'react';
import { styled } from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

const Title = styled.div`
    font-size: larger;
    font-weight: 700;
    margin-right: 20px;
`

const categoryList = [
    {
        name : 'all',
        text : 'All'
    },{
        name : 'business',
        text : 'Business'
    },{
        name : 'entertainment',
        text : 'Entertainment'
    },{
        name : 'sports',
        text : 'Sports'
    },{
        name : 'health',
        text : 'Health'
    },{
        name : 'technology',
        text : 'Technology'
    },
]

const CategoriesBlock = styled.div`
    background-color: Darkgray;
    display: flex;
    padding: 1rem;
    width : 768px;
    margin : 0 auto;
    @media screen and (max-width : 768pc) {
        width: 100%;
        overflow-x: auto;
    }
`

const Category = styled(NavLink)`
    font-size: 1.125rem;
    cursor : pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    padding-bottom: 0.25rem;
    color : lightgray;

    &:hover{
        color : #495057;
    }

    &.active {
        font-weight: 600;
        border-bottom: 2px solid white;
        color : white;
        &:hover {
            color : white;
        }
    }

    &+& {
        margin-left: 1rem;
    }
`

const Categories = () => {
    return (
        <CategoriesBlock>
            <Title>NewsAPI Study</Title>
            {
                categoryList.map((c)=>(
                    <Category 
                        key={c.name}
                        className={({isActive}) => (isActive? 'active' : undefined)}
                        to={c.name === 'all' ? '/' : `/${c.name}`}
                    >
                        {c.text}
                    </Category>
                ))
            }
        </CategoriesBlock>
    );
};

export default Categories;