import React from 'react';
import { motion } from "framer-motion";
import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const Logo = styled.div`
  font-size: 3rem;
  color: black;
  font-weight: bold;
  font-family: "Arial";
  cursor: pointer;
`;

const LogoWrap = styled.div`
  height: 10em;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Navigation = styled.nav`
  display: flex;
  width: 97%;
  justify-content: right;
  margin-top: 3em;
`;

const NavItem = styled.div`
  color: gray;
  text-decoration: none;
  font-family: "Arial";
  margin-left: 2em;

  &:hover {
    color: lightgray;
    scale: 1.1;
    transition: all 0.3s linear 0s;
  }
`;

function Header() {
  const navigate = useNavigate();

  const LogoClickHandler = () => {
    return navigate('/');
  }

  return (
    <>
      <Navigation>
          <NavLink to={`/login`} style={{textDecoration: 'none'}}><NavItem>Login</NavItem></NavLink>
          <NavLink to={`/join`} style={{textDecoration: 'none'}}><NavItem>Join</NavItem></NavLink>
          <NavLink to={`/order`} style={{textDecoration: 'none'}}><NavItem>Order</NavItem></NavLink>
          <NavLink to={`/cart`} style={{textDecoration: 'none'}}><NavItem>Cart</NavItem></NavLink>
      </Navigation>
      <LogoWrap>
        <motion.div
            drag
            dragConstraints={{top:0}}
            dragSnapToOrigin
            dragElastic={0.5}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
        >
          <Logo onClick={LogoClickHandler}>Shop N' Go</Logo>
        </motion.div>
      </LogoWrap>
      <Outlet />
    </>
)};

export default Header;