import React from 'react'

import Header from './Header'
import ImageSlider from './Imageslider';
import Category from './Category';
import Gallery from './Gallery';

const Home = () => {
  return <>
    <Header />
    <Category />
    <ImageSlider />
    <Gallery />
  </>
}

export default Home;