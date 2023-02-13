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

    ::placeholder{
        color: black;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    margin-top: 20px;
`;

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
    const [inputs, setInputs] = useState({
        userEmail: '',
        userName: '',
        userPW: '',
        userPhone: '',
        userAddress: '',
    })
    let regEmail =  /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
    let regPassword = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,16}$/; // 영문 숫자 포함 8~ 16자리
    let regfullName = /^[가-힣a-zA-Z]*$/;
    let regPhone = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{3,4}$/;
    let regAddress = /^[가-힣a-zA-Z]*$/; 

    const handleSubmit = (event) =>{
        event.preventDefault();
        // Perform submit logic here
    }

    const handleChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        const nextInputs = { ...inputs, [name]: value,};
        setInputs(nextInputs);
    }

    const checkEmail = (str) => {
        return(regEmail.test(str));
    }

    const checkName = (str) => {
        return(regfullName.test(str));
    }

    const checkPass = (str) => {
        return(regPassword.test(str));
    }

    const checkPhone = (str) => {
        return(regPhone.test(str));
    }

    const checkAddress = (str) => {
        return(regAddress.test(str));
    }

    const userInfoHandler = async () => {
        if(checkEmail(inputs.userEmail) === false || inputs.userEmail === ""){
            alert("이메일을 입력해주세요!");
            return;
        }else if(checkName(inputs.userName) === false || inputs.userName === ""){
            alert("이름을 입력해주세요!");
            return;
        }else if(checkPass(inputs.userPW) === false || inputs.userPW === ""){
            alert("비밀번호는 영문 숫자 포함 8~ 16자리를 조합하여 입력해주세요!");
            return;
        }else if(checkPhone(inputs.userPhone) === false || inputs.userPhone === ""){
            alert("전화번호 양식에 맞춰 입력해주세요!");
            return;
        }else if(checkAddress(inputs.userAddress === false) || inputs.userAddress === ""){
            alert("주소를 다시 입력해주세요!");
            return;
        }else{            
            try{
                    const response =await fetch('https://fakestoreapi.com/users/1', {
                    method: "PUT",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body:JSON.stringify(
                        {
                            email: inputs.userEmail,
                            name: inputs.userName,
                            password: inputs.userPW,
                            phone: inputs.userPhone,
                            address: inputs.userAddress
                        }),
                })
                const response2 = await response.json();
                console.log(response2);
                return response2; 
            } catch (err){
                alert("다시 시도해주세요!");
            }
        }
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
                            type="text"
                            name="email"
                            onChange={handleChange}
                            placeholder="your@email.com" />
                        </ItemBox>                         
                        <Item>Name</Item>
                        <ItemBox>
                            <Input 
                            type="name"
                            name="name"
                            onChange={handleChange}
                            placeholder="Hong Gildong"/>                        
                        </ItemBox>                        
                        <Item>Password</Item>
                        <ItemBox>
                            <Input 
                                type="password"
                                name="password"
                                onChange={handleChange}
                                placeholder="q1w2e3"/>
                        </ItemBox>                        
                        <Item>Phone Number</Item>
                        <ItemBox>
                            <Input 
                                type="phone"
                                name="phone"
                                onChange={handleChange}
                                placeholder="010-1234-5678" maxlength="13"/>
                        </ItemBox>                        
                        <Item>Address</Item>
                        <ItemBox>
                            <Input 
                            type="address"
                            name="address"
                            onChange={handleChange}
                            placeholder="서울특별시 엘리스구 엘리스동 엘리스맨션 106호"/>
                        </ItemBox>                        
                        <Button type="submit" onClick={userInfoHandler} >Save</Button>
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
