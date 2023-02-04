import React from 'react';
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
    width: auto;
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
`

const Gallery = () => {
    const images = [
        'https://picsum.photos/id/10/300',    
        'https://picsum.photos/id/11/300',    
        'https://picsum.photos/id/12/300',    
        'https://picsum.photos/id/13/300',    
        'https://picsum.photos/id/14/300',    
        'https://picsum.photos/id/15/300',    
        'https://picsum.photos/id/16/300',    
        'https://picsum.photos/id/17/300',    
        'https://picsum.photos/id/18/300'
    ];

    return (
        <GalleryContainer>
            <GalleyName>BEST</GalleyName>
            {images.map((image, index) => (
                <ImageContainer key={index}>
                    <NavLink to={`/detail/${index}`}><Image src={image} alt="gallery" /></NavLink>
                    <ImageInfo>Product Name</ImageInfo>
                    <ImageInfo>Price</ImageInfo>
                </ImageContainer>
            ))}
        </GalleryContainer>
    );
};

export default Gallery;