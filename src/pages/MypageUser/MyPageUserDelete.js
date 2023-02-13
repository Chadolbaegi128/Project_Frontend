import React, { useState } from 'react';
import styled from 'styled-components';

const Body = styled.div`
    display: flex;
    flex-direction: column;
`

const MyPageText = styled.div`
    align-items: center;
    width: 80%;
    border-bottom: 1px solid lightgray;
    margin-left: 10%;
    margin-top: 3em;
    font-family: Arial;
    font-weight: bold;
    font-size: 2rem;
    padding: 0.3em;
`

const Container = styled.div`
    width: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2px 20px 20px;
    border: 1px solid black;
    margin: 10em 5em;
`;

const Input = styled.input`
    padding: 5px;
    margin-top: 10px;
    font-size: 16px;
    width: 90%;
    float: left;
    border-width: 0 0 1px 0;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    margin-top: 20px;
`;

const Button = styled.button`
    padding: 10px 120px;
    margin: 100px 0 10px;
    font-size: 16px;
    background-color: grey;
    color: white;
    cursor: pointer;
    border: 1px solid black;
`;

const Item = styled.div`
    width: 90%;
    justify-content: flex-start;
    margin-top: 40px;
    font-size: 18px;
    color: black;
`;

const Section = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const MyPageUserDelete = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform submit logic here
    }

    return (
        <Body>
            <MyPageText>My Page</MyPageText>
            <Section>
                <Container>
                    <Form onSubmit={handleSubmit}>
                        <Item>Email</Item>
                        <Input type="email" value={email} onChange={ event =>
                        setEmail(event.target.value)} placeholder="your@email.com"/>
                        <Item>Password</Item>
                        <Input type="password" value={password} onChange={ event => 
                        setPassword(event.target.value)} placeholder="q1w2e3"/>
                        <Button type="submit">Delete</Button>
                    </Form>
                </Container>
            </Section>
        </Body>
    )
}

export default MyPageUserDelete
