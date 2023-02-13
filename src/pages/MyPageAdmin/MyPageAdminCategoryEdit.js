import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const CategoryItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CategoryItem = styled.input`
  text-decoration: none;
  color: black;
  font-family: "Arial";
  font-size: 1rem;
  margin-top: 2em;
  margin-right: 1em;
  border: none;
  border-bottom: 1px solid gray;
`
const CategoryEditMenus = styled.div`
  margin: 3em;
  margin-left: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
`

const Btn = styled.button`
  color: black;
  margin-right: 1em;
  padding: 0 0.5em;
  font-family: Arial;
  font-size: 1rem;
  background-color: transparent;
  border: 1px solid black;
  cursor: pointer;

  &:active {
    box-shadow: inset -.3rem -.1rem 1rem  #FBFBFB, inset .3rem .4rem .8rem #BEC5D0;
  }
`

function MyPageAdminCategoryEdit() {
  const [categoriesdata, setCategoriesdata] = useState([]);
  const addCategoryInput = useRef();
  const editCategoryInput = useRef([]);


  useEffect(() => {
    fetch("http://localhost:4000/api/category")
      .then(res => res.json())
      .then(data => setCategoriesdata(data))
  }, []);

  const DeleteBtnClickHandler = (categoryId) => {
    fetch(`http://localhost:4000/api/category/${categoryId}`,{
      method:"DELETE"
    })
  }

  const AddBtnClickHandler = (e) => {
    fetch('http://localhost:4000/api/category',{
      method:"POST",
      body: JSON.stringify({
        categoryName: addCategoryInput.current.value
      }),
    })
  }

  const EditBtnClickHandler = (categoryId) => {
    const newCategoryData = categoriesdata.find(category => category._id === categoryId)

    fetch(`http://localhost:4000/api/category/${categoryId}`,{
      method:"PUT",
      body: JSON.stringify({
        categoryName: newCategoryData.categoryName
      }),
    })
  }

  return(
  <>
    <div style={{display: 'flex', justifyContent: 'center', fontFamily: 'Arial', fontSize: '1.5rem', margin: '2em 0'}}>Category Edit</div>
      <CategoryItems>
        {categoriesdata.map((category, index) => (
          <div key={category._id} style={{display:'flex'}}>
            <CategoryItem onChange={(e) => {
              const newCategoryData = [...categoriesdata]

              newCategoryData[index].categoryName = e.target.value
              setCategoriesdata(newCategoryData)
            }} type='text' placeholder={category.categoryName} value={categoriesdata[index].categoryName}></CategoryItem>
            <Btn style={{color: 'blue', marginTop: '1em'}} onClick={() => {
              EditBtnClickHandler(category._id)
            }}>Edit</Btn>
            <Btn style={{color: 'red', marginTop: '1em'}} onClick={() => {
              DeleteBtnClickHandler(category._id)
            }}>Delete</Btn>
          </div>
        ))}
      </CategoryItems>

      <CategoryEditMenus>
        <input ref={addCategoryInput} style={{marginRight: '1em'}} type='text'></input>
        <Btn style={{padding: '0.3em'}}onClick={AddBtnClickHandler}>Add</Btn>
      </CategoryEditMenus>
  </>
  )
};

export default MyPageAdminCategoryEdit;