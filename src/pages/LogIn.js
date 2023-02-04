import React, { useState } from "react";
import styled from "styled-components";

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

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform submit logic here
    };
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
                    <Button type="submit">Login</Button>
                    </Form>
                </Container>
            </Section>            
        </Body>
    </>
}

export default LogIn