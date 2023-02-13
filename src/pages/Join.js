import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ELICE_AUTH_TOKEN_KEY } from "../constants/auth";
import { getItem, setItem } from "../lib/localStorage";
import { useSetRecoilState } from "recoil";
import { useNavigate } from 'react-router-dom'

import { $user } from "../store/user";

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
    justify-content: center;
    align-items: center;
    padding: 2px 20px 20px;
    border: 1px solid black;
    margin: 1em 5em;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    margin-top: 20px;
`;

const Input = styled.input`
    padding: 5px;
    margin-top: 10px;
    font-size: 16px;
    width: 50%;
    float: left;
    border-width: 0 0 1px 0;
`;

const Button = styled.button`
    padding: 10px 120px;
    margin-top: 30px;
    font-size: 16px;
    background-color: white;
    color: black;
    cursor: pointer;
    border: 1px solid black;
`;

const Item = styled.div`
    width: 50%;
    justify-content: flex-start;
    margin-top: 20px;
    font-size: 18px;
    color: black;
`;

styled.div`
    width: 100%;
    align-items: center;
`

const Join = () => {
    const [email, setEmail] = useState("");
    const [password, setPW] = useState("");
    const [confirm, setConfirm] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const setUser = useSetRecoilState($user);

    const navigate = useNavigate()

    const handleSubmit = (event) =>{
        event.preventDefault();
        // Perform submit logic here

        fetch("http://localhost:4000/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "fullName": name,
                "email": email,
                "password": password,
                "address": address,
            }),
        })
        .then( res => res.json())
        .then( response => {
            setItem(ELICE_AUTH_TOKEN_KEY, response.token)
            window.location.reload()
        })
    }

    useEffect(() => {
        const savedToken = getItem(ELICE_AUTH_TOKEN_KEY);

        // savedToken이 있으면 회원가입이 성공한 상태
        if(savedToken){
            //
            fetch("http://localhost:4000/api/account/user", {
                headers: {
                    "authorization": `auth ${savedToken}`
                }
            })
            .then( res => res.json())
            .then( response => {
                console.log(response)
                console.log("^ user response")
                if (response._id) {
                    navigate('/', {replace: true})
                }
            })
        }
    }, [])

    return (
        <Body>
            <Section>
                <Container>
                    <h2>Join</h2>
                    <Form onSubmit={handleSubmit}>
                        <Item>Name</Item>
                        <Input
                            type="name"
                            value={name}
                            onChange={ event => setName(event.target.value) }
                            placeholder="Name"
                        />
                        <Item>Email</Item>
                        <Input
                            type="text"
                            value={email}
                            onChange={ event => setEmail(event.target.value) }
                            placeholder="your@email.com"
                        />
                        <Item>Password</Item>
                        <Input
                            type="password"
                            value={password}
                            onChange={ event => setPW(event.target.value) }
                            placeholder="Password"
                        />
                        <Item>Confirm Password</Item>
                        <Input
                            type="password"
                            value={confirm}
                            onChange={ event => setConfirm(event.target.value) }
                            placeholder="Confirm Password"
                        />
                        <Item>Address</Item>
                            <Input
                            type="address"
                            name="address"
                            value={address}
                            onChange={ event => setAddress(event.target.value) }
                            placeholder="Address"/>
                    <Button type="submit">Join</Button>
                    </Form>
                </Container>
            </Section>

        </Body>
    );
}

export default Join;