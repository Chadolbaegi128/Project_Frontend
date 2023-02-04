import React from 'react';
import styled from 'styled-components';

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
    justify-content: left;
    margin-left: 15em;
    margin-top: 5em;
    font-size: 1.5rem;
    font-weight: bold;
`
const ProductMenus = styled.div`
font-size: 1.2rem;
  margin: 0;
  margin-right: 4em;
  margin-top: 1em;
  color: black;
  font-weight: bold;
  font-family: "Arial";
  display: flex;
  width: 100%;
  justify-content: right;
`

const ProductMenu = styled.a`
margin-right: 200px;
  color: #fff;
  text-decoration: none;
  color: black;
    cursor: pointer;
  &:hover {
    color: grey;
  }
`
const ProductMenus2 = styled.div`
font-size: 1.2rem;
  margin: 0;
  margin-right: 4em;
  margin-top: 1em;
  color: black;
  font-weight: bold;
  font-family: "Arial";
  display: flex;
  width: 100%;
  justify-content: right;
`

const ProductMenu2 = styled.a`
margin-right: 200px;
  color: #fff;
  text-decoration: none;
  color: black;
    cursor: pointer;
  &:hover {
    color: grey;
  }
`

const MyPageAdminProductEdit = () => {
    const images = [
        'https://picsum.photos/id/10/300',    
        'https://picsum.photos/id/11/300',    
        'https://picsum.photos/id/12/300',    
        'https://picsum.photos/id/13/300',    
        'https://picsum.photos/id/14/300',    
        'https://picsum.photos/id/15/300',    
        
    ];

    return (
        <GalleryContainer>
            <GalleyName> Add Products </GalleyName>
            <ProductMenus>
        <ProductMenu>수정</ProductMenu>
        </ProductMenus>
        <ProductMenus2>
        <ProductMenu2>삭제</ProductMenu2>
        </ProductMenus2>
            {images.map((image, index) => (
                <ImageContainer key={index}>
                    <Image src={image} alt="gallery" />
                    <ImageInfo>제품명</ImageInfo>
                    <ImageInfo>가격</ImageInfo>
                    <ImageInfo>입고일</ImageInfo>
                    
                </ImageContainer>
            ))}
        </GalleryContainer>
    );
};

export default MyPageAdminProductEdit;
