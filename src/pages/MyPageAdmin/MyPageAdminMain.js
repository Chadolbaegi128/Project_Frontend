import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Logo = styled.div`
  font-size: 3rem;
  margin: 0;
  margin-top: 1em;
  color: black;
  font-weight: bold;
  font-family: "Arial";
  display: flex;
  width: 100%;
  justify-content: center;
`;

const Navigation = styled.nav`
  display: flex;
  width: 100%;
  justify-content: right;
`;

const NavItem = styled.a`
  margin-left: 20px;
  color: #fff;
  text-decoration: none;
  color: black;

  &:hover {
    color: grey;
  }
`;

const Menus = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 2em;
`;
const Menu = styled(Link)`
    text-decoration: none;
    color: black;
    font-family: "Arial";
    font-size: 1rem;
    margin-bottom: 5em;

    &:hover {
    color: grey;
    }
    `



const MyPageAdminMain = () => (
    <>
        <Navigation>
            <NavItem href="#">Logout</NavItem>
            <NavItem href="#">Mypage</NavItem>
            <NavItem href="#">Order</NavItem>
        </Navigation>
        <Logo>Shop N' Go</Logo>
        <Menus>
            <Menu to="/admin/admin_product">Product</Menu>
            <Menu to="/admin/admin_category">Category</Menu>
            <Menu to="/admin/admin_order">Order</Menu>
        </Menus>
    </>    
);



export default MyPageAdminMain;