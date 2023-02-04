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

const Address = styled.input`
    position: relative;
    left: 90px;
    width: 36%;
    padding: 5px;
    margin-top: 5px;    
    border-width: 1px;    
`;

const Address2 = styled.input`
    position: relative;
    left: 90px;
    width: 55%;
    padding: 5px;
    margin-top: 5px;    
    border-width: 1px;    
`;

const AddressButton = styled.button`
    position: relative;
    left: 90px;
    top: 1px;
    width: 20%;
    padding: 4px 8px;
    margin-left: 2px;
    font-size: 14px;
    background-color: white;
    border-width: 1px; 
    color: #bcbcbc;
    cursor: pointer;
`;

const Button = styled.button`
    padding: 10px 120px;
    margin-top: 20px;
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
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform submit logic here
    };

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
                            onChange={event => setName(event.target.value)}
                            placeholder="Name"
                        />
                        <Item>Phone Number</Item>
                        <Input
                            type="phone"
                            value={phone}
                            onChange={event => setPhone(event.target.value)}
                            placeholder="010-1234-5678"
                        />
                        <Item>Email</Item>
                        <Input
                            type="email"
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                            placeholder="your@email.com"
                        />
                        <Item>Password</Item>
                        <Input
                            type="password"
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                            placeholder="Password"
                        />
                        <Item>Confirm Password</Item>
                        <Input
                            type="password"
                            value={confirm}
                            onChange={event => setConfirm(event.target.value)}
                            placeholder="Password"
                        />
                        <Item>Address</Item>
                        <div>
                            <Address
                                type="address1"
                                placeholder="주소 찾기를 클릭해주세요." />
                            <AddressButton>주소 찾기</AddressButton>
                            <Address2 type="address2" />
                        </div>
                        <Button type="submit">Join</Button>
                    </Form>
                </Container>
            </Section>
            
        </Body>
    );
}

export default Join;