import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'

const CategoryItems = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 2em;
`;

const CategoryItem = styled.div`
    text-decoration: none;
    color: black;
    font-family: "Arial";
    font-size: 1rem;
    cursor: pointer;

    &:hover {
    color: grey;
    }
`

const Category = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const CategoryItemClickHandler = () => {
    return navigate('/');
  }

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
  <>
    <CategoryItems>
        {data.map((category) => (
          <CategoryItem onClick={CategoryItemClickHandler}>{category.toUpperCase()}</CategoryItem>
        ))}
    </CategoryItems>
  </>
  )
};

export default Category;