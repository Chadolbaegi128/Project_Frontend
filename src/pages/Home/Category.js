import React from 'react';
import styled from 'styled-components';

const CategoryItems = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 2em;
`;

const CategoryItem = styled.a`
    text-decoration: none;
    color: black;
    font-family: "Arial";
    font-size: 1rem;

    &:hover {
    color: grey;
    }
`

const Category = () => {
  return (
  <>
    <CategoryItems>
        <CategoryItem href="#">OUTER</CategoryItem>
        <CategoryItem href="#">TOP</CategoryItem>
        <CategoryItem href="#">BOTTOM</CategoryItem>
        <CategoryItem href="#">ACC</CategoryItem>
    </CategoryItems>
  </>
  )
};

export default Category;