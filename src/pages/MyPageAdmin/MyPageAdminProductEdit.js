import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
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

const ImageInfo = styled.input`
  width: 300px;
  margin-top: 1em;
  border: none;
  border-bottom: 1px solid black;
  font-family: 'Arial';
`;

const Btn = styled.button`
  color: red;
  background-color: transparent;
  border: 1px solid black;
  font-family: 'Arial';
  cursor: pointer;
  margin-top: 1em;

  &:active {
    box-shadow: inset -.3rem -.1rem 1rem  #FBFBFB, inset .3rem .4rem .8rem #BEC5D0; 
  }
`

const AddProductForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const MyPageAdminProductEdit = () => {
  const [productsdata, setProductsdata] = useState([]);
  const imagePathInput = useRef();
  const productNameInput = useRef();
  const categoryInput = useRef();
  const priceInput = useRef();
  const infoInput = useRef();
  const editProductNameInput = useRef([]);
  const editProductPriceInput = useRef([]);
  const editProductImagePathInput = useRef([]);
  const editProductCategoryInput = useRef([]);
  const editProductInfoInput = useRef([]);


  function AddProductHandler(e) {
    e.preventDefault();

    fetch('http://localhost:4000/api/product',{
      method:"POST",
      body: JSON.stringify({
        productName: productNameInput.current.value,
        category: categoryInput.current.value,
        company: "unknown",
        price: priceInput.current.value,
        imagePath: imagePathInput.current.value,
        info: infoInput.current.value,
      }),
    })
  }

  useEffect(() => {
    //fetch("http://localhost:4000/api/product")
    fetch("https://fakestoreapi.com/products?limit=6")
      .then(res => res.json())
      .then(data => setProductsdata(data))
  }, []);

  const DeleteBtnClickHandler = (e) => {
    fetch(`http://localhost:4000/api/product/${e.target.getAttribute("data-num")}`,{
      method:"DELETE"
    })
  }

  const EditBtnClickHandler = (e) => {
    fetch(`http://localhost:4000/api/product/${e.target.getAttribute("data-num")}`,{
      method:"PUT",
      body: JSON.stringify({
        productName: editProductNameInput.current[`${e.target.getAttribute("data-num")}`].value,
        category: editProductCategoryInput.current[`${e.target.getAttribute("data-num")}`].value,
        company: "unknown",
        price: editProductPriceInput.current[`${e.target.getAttribute("data-num")}`].value,
        imagePath: editProductImagePathInput.current[`${e.target.getAttribute("data-num")}`].value,
        info: editProductInfoInput.current[`${e.target.getAttribute("data-num")}`].value,
      }),
    })
  }

  return (
    <>
      <div style={{display: 'flex', justifyContent: 'center', fontFamily: 'Arial', fontSize: '1.5rem', margin: '2em 0'}}>Product Edit</div>
      <Container>
        {productsdata.map((product, index) => (
          <ImageContainer key={index}>
              <Image src={product.image} alt="gallery" />
              <ImageInfo ref={e => (editProductNameInput.current[`${index}`] = e)} type='text' placeholder={product.title}></ImageInfo>
              <ImageInfo ref={e => (editProductPriceInput.current[`${index}`] = e)} type='text' placeholder={product.price}></ImageInfo>
              <ImageInfo ref={e => (editProductImagePathInput.current[`${index}`] = e)} type='text' placeholder='imagePath'></ImageInfo>
              <ImageInfo ref={e => (editProductCategoryInput.current[`${index}`] = e)} type='text' placeholder={product.category}></ImageInfo>
              <ImageInfo ref={e => (editProductInfoInput.current[`${index}`] = e)} type='text' placeholder={product.description}></ImageInfo>
              <Btn data-num={index} onClick={DeleteBtnClickHandler}>Delete</Btn>
              <Btn data-num={index} onClick={EditBtnClickHandler} style={{color: 'blue'}}>Edit</Btn>
          </ImageContainer>
        ))}
      </Container>
      <div style={{display: 'flex', justifyContent: 'center', fontFamily: 'Arial', fontSize: '1.5rem', margin: '2em 0'}}>Add New Product</div>
      <AddProductForm onSubmit={AddProductHandler}>
        <input type="text" name="imagePath" ref={imagePathInput} placeholder='imagePath' />
        <input type="text" name='productName' ref={productNameInput} placeholder='productName' style={{marginTop: '1em'}} />
        <input type="text" name='category' ref={categoryInput} placeholder='category' style={{marginTop: '1em'}} />
        <input type="text" name='price' ref={priceInput} placeholder='price' style={{marginTop: '1em'}} />
        <input type="text" name='info' ref={infoInput} placeholder='info' style={{marginTop: '1em'}} />
        <Btn type="submit" style={{margin: '3em 0', color: 'black'}} >Add</Btn>
      </AddProductForm>
    </>
  );
};

export default MyPageAdminProductEdit;