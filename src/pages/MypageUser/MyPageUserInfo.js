import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 1400px;
`

const MyPageText = styled.div`
    align-items: center;
    max-width: 1800px;
    min-width: 1800px;
    border-bottom: 1px solid lightgray;
    margin-left: 10%;
    margin-top: 1em;
    font-family: Arial;
    font-weight: bold;
    font-size: 2rem;
    padding: 0.3em;
`

const Section = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const Container = styled.div`
    position: relative;
    left: 100px;
    max-width: 700px;
    min-width: 700px;
    height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2px 20px 20px;
    border: 1px solid black;
    margin: 5em 5em;
`;

const Input = styled.input`
    padding: 5px;
    margin-top: 10px;
    font-size: 16px;
    width: 430px;
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

const Address = styled.input`
    position: relative;
    left: 20px;
    width: 330px;
    padding: 5px;
    margin-top: 5px;    
    border-width: 1px;    
`;

const Address2 = styled.input`
    position: relative;
    left: 20px;
    width: 437px;
    padding: 5px;
    margin-top: 5px;    
    border-width: 1px;    
`;

const AddressButton = styled.button`
    position: relative;
    top: 1px;
    left: 25px;
    width: 100px;
    padding: 4px;
    margin-left: 2px;
    font-size: 14px;
    background-color: white;
    border-width: 1px; 
    color: #bcbcbc;
    cursor: pointer;
`;

const InputButton = styled.button`
    position: relative;
    left: -51px;
    top: 12px;
    font-family: Arial;
    font-size: 1rem;
    color: white;
    border: 1px solid white;
    cursor: pointer;
    background-color: grey;
    width: 50px;
    height: 25px;
    border-radius: 10px;
`

const Button = styled.button`
    padding: 10px 160px;
    margin: 60px 0 10px;
    font-size: 20px;
    background-color: grey;
    color: white;
    font-family: Arial;
    font-weight: bold;
    cursor: pointer;
    border: 1px solid white;
`;

const Item = styled.div`
    width: 90%;
    justify-content: flex-start;
    margin-top: 40px;
    font-size: 18px;
    color: black;
`;

const ItemBox = styled.div`
    position: relative;
    left: 20px;
    width: 500px;
    justify-content: flex-start;
    border-width: 0 0 1px 0;
`

const Bottom = styled.div`
    position: relative;
    left: 50px;
    top: 850px;
    text-align: center;
    width: 150px;    
`

const LinkToDelete = styled(Link)`
    position: relative;
    left: 100px;
    font-family: Arial;
    text-decoration: none;
    &:link{
    color: grey;
    }
    float: right;
`;

styled.div`
    display: flex;
    width: 1000px;
    align-items: center;
`;


const MyPageUserInfo = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

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
                        <ItemBox>
                            <Input 
                            type="email"
                            value={email}
                            onChange={ event => setEmail(event.target.value) }
                            placeholder="your@email.com"/>
                        <InputButton>Edit</InputButton>
                        </ItemBox>                          
                        <Item>Name</Item>
                        <ItemBox>
                            <Input 
                            type="name"
                            value={name}
                            onChange={ event => setName(event.target.value) }
                            placeholder="Hong Gildong"/>
                            <InputButton>Edit</InputButton>                        
                        </ItemBox>                        
                        <Item>Password</Item>
                        <ItemBox>
                            <Input 
                                type="password"
                                value={password}
                                onChange={ event => setPassword(event.target.value) }
                                placeholder="q1w2e3"/>
                            <InputButton>Edit</InputButton> 
                        </ItemBox>                        
                        <Item>Phone Number</Item>
                        <ItemBox>
                            <Input 
                                type="phone"
                                value={phone}
                                onChange={ event => setPhone(event.target.value )}
                                placeholder="010-1234-5678"/>
                            <InputButton>Edit</InputButton>
                        </ItemBox>                        
                        <Item>Address</Item>
                        <div>
                            <Address 
                                type="address1"
                                placeholder="주소 찾기를 클릭해주세요."/>
                            <AddressButton>주소찾기</AddressButton>
                            <Address2 type="address2" />
                        </div>
                        <Button type="submit">Save</Button>
                    </Form>
                </Container>                
                <Bottom>
                    <LinkToDelete to="/my_page/delete_accounts">회원탈퇴 하기</LinkToDelete>
                </Bottom>                                     
            </Section>
        </Body>
    )
}

export default MyPageUserInfo