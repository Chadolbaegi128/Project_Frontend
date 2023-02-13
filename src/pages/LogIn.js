import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ELICE_AUTH_TOKEN_KEY } from '../constants/auth';
import { setItem, getItem, removeItem } from '../lib/localStorage';
import { useSetRecoilState } from 'recoil';
import { useNavigate } from "react-router-dom";

import { $user } from '../store/user'

const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Section = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const Container = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2px 20px 20px;
    border: 1px solid black;
    margin: 5em 5em 0;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    margin-top: 10px;
`;

const Input = styled.input`
    padding: 5px;
    margin-top: 10px;
    font-size: 16px;
    width: 55%;
    float: left;
    border-width: 0 0 1px 0;
`;

const Item = styled.div`
    width: 55%;
    justify-content: flex-start;
    margin-top: 20px;
    font-size: 18px;
    color: black;
`;

const Button = styled.button`
    padding: 10px 120px;
    margin-top: 60px;
    font-size: 16px;
    background-color: white;
    color: black;
    cursor: pointer;
    border: 1px solid black;
`;

styled.h2`
    padding: 20px 0 5px 0;
`

const LogIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const setUser = useSetRecoilState($user)
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform submit logic here


        fetch("http://localhost:4000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password
            }),
        })
        .then( res => res.json())
        .then( response => {
            if (response.token) {
                setItem(ELICE_AUTH_TOKEN_KEY, response.token)
                window.location.reload()
            }
        })
    };


    useEffect(() => {
        const savedToken = getItem(ELICE_AUTH_TOKEN_KEY)

        // savedToken이 있으면 로그인 되있는 상태
        if (savedToken) {
            //
            fetch("http://localhost:4000/api/account/user", {
                headers: {
                    'authorization': `auth ` + savedToken
                }
            })
            .then( res => res.json())
            .then(userRes => {
                console.log(userRes);
                console.log('^ userRes');
                if (userRes._id) {
                    setUser(userRes);
                    navigate('/', {replace: true})
                }
            })
        }
    }, [])

    const handleLogout = () => {
        removeItem(ELICE_AUTH_TOKEN_KEY);
        window.location.reload();
    }



    return <>
        <Body>
            <Section>
                <Container>
                    <h2>Login</h2>
                    <Form onSubmit={handleSubmit}>
                    <Item>Email</Item>
                    <Input
                        type="email"
                        value={email}
                        onChange={ event => setEmail(event.target.value)}
                        placeholder="your@email.com"/>
                    <Item>Password</Item>
                    <Input
                    type="password"
                    value={password}
                    onChange={ event => setPassword(event.target.value)}
                    placeholder="Password"/>
                    <Button type="submit" >Login</Button>
                    <Button type="button" onClick={handleLogout}>Logout</Button>
                    </Form>
                </Container>
            </Section>
        </Body>
    </>
}

export default LogIn