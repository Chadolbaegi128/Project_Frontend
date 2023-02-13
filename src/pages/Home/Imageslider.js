import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const SliderContainer = styled.div`
  width: 100%;
  height: 500px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2em;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  transition: all 1s ease-in-out; // doesn't work
`;

const ImageSlider = () => {
  const images = [
    'https://picsum.photos/id/1/1920/500',
    'https://picsum.photos/id/2/1920/500',
    'https://picsum.photos/id/3/1920/500',
    'https://picsum.photos/id/4/1920/500',
    'https://picsum.photos/id/5/1920/500'
  ];
  
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [index, images.length]);

  return (
    <SliderContainer>
        <Image src={images[index]} alt="slider" />
    </SliderContainer>
  );
};

export default ImageSlider;