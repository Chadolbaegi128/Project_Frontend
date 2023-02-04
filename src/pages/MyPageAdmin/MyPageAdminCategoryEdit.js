import React from 'react';
import styled from 'styled-components';

const Maincategory = styled.a`
font-family: "Arial";
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    margin-bottom: 3em;
    font-weight: bold;
`;

const CategoryItems = styled.div`
  display: flex;
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
const CategoryMenus = styled.div`
font-size: 1.2rem;
  margin: 0;
  margin-top: 1em;
  color: black;
  font-weight: bold;
  font-family: "Arial";
  display: flex;
  width: 100%;
  justify-content: right;
`

const CategoryMenu = styled.a`
margin-right: 200px;
  color: #fff;
  text-decoration: none;
  color: black;
    cursor: pointer;
  &:hover {
    color: grey;
  }
`
const CategoryMenus2 = styled.div`
font-size: 1.2rem;
  margin: 0;
  margin-top: 1em;
  color: black;
  font-weight: bold;
  font-family: "Arial";
  display: flex;
  width: 100%;
  justify-content: right;
`

const CategoryMenu2 = styled.a`
margin-right: 200px;
  color: #fff;
  text-decoration: none;
  color: black;
    cursor: pointer;
  &:hover {
    color: grey;
  }
`
const CategoryMenus3 = styled.div`
font-size: 1.2rem;
  margin: 0;
  margin-top: 1em;
  color: black;
  font-weight: bold;
  font-family: "Arial";
  display: flex;
  width: 100%;
  justify-content: right;
`

const CategoryMenu3 = styled.a`
margin-right: 200px;
  color: #fff;
  text-decoration: none;
  color: black;
    cursor: pointer;
  &:hover {
    color: grey;
  }
`


const MyPageAdminCategoryEdit = () => (
    <>       
      <Maincategory> Category </Maincategory>       
        <CategoryItems>
        <CategoryItem href="#">OUTER</CategoryItem>
        <CategoryItem href="#">TOP</CategoryItem>
        <CategoryItem href="#">BOTTOM</CategoryItem>
        <CategoryItem href="#">ACC</CategoryItem>
        </CategoryItems>

        <CategoryMenus>
        <CategoryMenu>수정</CategoryMenu>
        </CategoryMenus>
        <CategoryMenus2>
        <CategoryMenu2>삭제</CategoryMenu2>
        </CategoryMenus2>
        <CategoryMenus3>
        <CategoryMenu3>추가</CategoryMenu3>
        </CategoryMenus3>

    </>
    
);

export default MyPageAdminCategoryEdit;