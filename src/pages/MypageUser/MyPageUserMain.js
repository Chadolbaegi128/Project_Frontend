import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBox } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

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
const MyPageNav = styled.nav`
    display: flex;
    justify-content: space-evenly;
    margin-top: 10em;
`
const MyPageNavItem = styled(Link)`
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

const MyPageUserMain = () => (
    <>
        <MyPageText>My Page</MyPageText>
        <WelcomeUser>Welcome, <br /> Isaac</WelcomeUser>
        <MyPageNav>
            <MyPageNavItem to="/my_page/order_list"><FontAwesomeIcon icon={faBox}/>Order Status</MyPageNavItem>
            <MyPageNavItem to="/my_page/userinfo"><FontAwesomeIcon icon={faUser} />Manage Account</MyPageNavItem>
        </MyPageNav>
    </>
);

export default MyPageUserMain;
