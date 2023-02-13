import React from 'react'
import styled, { css } from 'styled-components';
import { Link } from "react-router-dom";

const Box = styled.div`  
  display: flex;
  height: 600px;
  width: 930px;
  background-color: none;
  border: 1px solid black;
  margin: 30px auto; 
  position: relative;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 28px;
    text-align: center;
    position: relative;
    margin-top: 150px;
  }

  h2 {
    font-size: 24px;
    text-align: center;
    position: relative;
    margin-top: 50px;
  }  
`
const BtnGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
`
const Button = styled.button`
  width: 350px;
  border: 1.5px solid;
  font-size: 20px;
  background-color: white;
  padding: 3px;
  margin-top: 20px;

  ${(props) =>
    props.type === 'fill' &&
    css`
        background-color: #222;
        color: #fff;
  `}
`

OrderComplete.defaultProps = {
  thx: 'Thank you!',
  text: '주문 감사합니다.',
  history: '주문내역 보기',
  goshopping: '주문 계속하기'
}

export default function OrderComplete({
  thx,
  text,
  history,
  goshopping
}) {
  return (
    <>
      <Box>
        <h1>{thx}</h1>
        <h2>{text}</h2>
        <BtnGroup>
          <Link to='/my_page/order_list'>
            <Button type='line'>{history}</Button>
          </Link>
          <Link to='/'>
            <Button type='fill'>{goshopping}</Button>
          </Link>
        </BtnGroup>
      </Box>
    </>
  )
}