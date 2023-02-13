import React from 'react';
import { motion } from "framer-motion";
import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom'
import { useLoginUser } from '../../hooks/user.hook'
import { removeItem } from '../../lib/localStorage'
import { ELICE_AUTH_TOKEN_KEY } from '../../constants/auth'

const Logo = styled.div`
  font-size: 4rem;
  color: black;
  font-weight: bold;
  font-family: 'Londrina Shadow';
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
  const {user} = useLoginUser()
  const navigate = useNavigate();

  const LogoClickHandler = () => {
    return navigate('/');
  }

  const handleLogout = () => {
    removeItem(ELICE_AUTH_TOKEN_KEY)
    window.location.reload()
  }

  return (
    <>
      <Navigation>
        {

          user === null &&  <NavLink to={`/login`} style={{textDecoration: 'none'}}><NavItem>Login</NavItem></NavLink>
        }
         { user === null &&  <NavLink to={`/join`} style={{textDecoration: 'none'}}><NavItem>Join</NavItem></NavLink>}
          {user && user._id && <button onClick={() => handleLogout()}>Logout</button>}
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
    </>
)};

export default Header;