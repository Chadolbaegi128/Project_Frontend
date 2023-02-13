import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

const GalleryContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-bottom: 5em;
`;

const ImageContainer = styled.div`
    width: 33%;
    height: 33%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5em;
`;

const Image = styled.img`
    object-fit: contain;
    width: 300px;
    height: 300px;
`;

const ImageInfo = styled.div`
    width: 300px;
    margin-top: 0.5em;
`;

const GalleyName = styled.div`
    width: 100%;
    color: black;
    font-family: "Arial";
    display: flex;
    justify-content: center;
    margin-top: 5em;
    font-size: 1.5rem;
    font-weight: bold;
`;

function Gallery() {
    const [data, setData] = useState([]);

    useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=9')
        .then(response => response.json())
        .then(data => setData(data));
    }, []);

    return (
        <GalleryContainer>
            <GalleyName>BEST</GalleyName>
            {data.map((data, index) => (
                <ImageContainer key={index}>
                    <NavLink to={`/detail/${index}`}><Image src={data.image} alt="gallery" /></NavLink>
                    <ImageInfo>{data.title}</ImageInfo>
                    <ImageInfo>{data.price}$</ImageInfo>
                </ImageContainer>
            ))}
        </GalleryContainer>
    )
};

export default Gallery;