import React from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

const MyPageText = styled.div`
    width: 80%;
    border-bottom: 1px solid lightgray;
    margin-left: 10%;
    margin-top: 3em;
    font-family: Arial;
    font-weight: bold;
    font-size: 2rem;
    padding: 0.3em;
`

const WelcomeUser = styled.div`
    width: 80%;
    margin-left: 10%;
    padding: 0.3em;
    font-family: Arial;
    font-size: 1.5rem;
    margin-top: 0.5em;
`

const MyPageAdminNav = styled.nav`
    display: flex;
    justify-content: space-evenly;
    margin-top: 7em;
`
const MyPageAdminNavItem = styled(NavLink)`
    font-family: Arial;
    font-size: 2rem;
    text-decoration: none;
    color: black;

    &:hover {
    color: lightgray;
    scale: 0.95;
    transition: all 0.2s linear 0s;
    }
`

const MyPageAdminMain = () => (
  <>
    <MyPageText>My Page</MyPageText>
    <WelcomeUser>Welcome, <br /> Admin</WelcomeUser>
    <MyPageAdminNav>
      <MyPageAdminNavItem to="/admin/category">Category Edit</MyPageAdminNavItem>
      <MyPageAdminNavItem to="/admin/product">Product Edit</MyPageAdminNavItem>
      <MyPageAdminNavItem to="/admin/order">Orderstatus Edit</MyPageAdminNavItem>
    </MyPageAdminNav>
  </>    
);

export default MyPageAdminMain;