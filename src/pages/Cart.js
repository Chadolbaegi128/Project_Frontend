import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Checkbox } from 'antd';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 100px 50px 100px;

  h1 {
    font-size: 34px;
  }
`

const Line = styled.div`
  width: auto;
  height: 1px;
  background-color: #ececec;
`
const Contents = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 50px;
`
const InfoBox = styled.div`
  width: 800px;
  height: 340px;
  margin: 0 50px 0 0;

  h1 { 
    font-size: 30px;
  }

  p {
    font-size: 17px;
    margin: 0;
  }
`
const MoneyBox = styled.div`
  display: grid;
  position: relative;
  width: 400px;
  height: 400px;
  background-color: none;
  border: 1px solid black;
  padding: 15px;
  align-items: center;

  b {
    font-size: 17px;    
  }
  P {
    font-size: 17px;
  }
`
const Product = styled.div`
  display: flex;
  justify-content: flex-start;

  h4 {
    font-size: 20px;
    margin: 0 0 4px 0;
  }
  p {
    font-size: 20px;
  }
`
const ProductImg = styled.div`
  width: 120px;
  height: 120px;
  background-color: lightgray;
  margin-left: 10px;
`
const ProductText = styled.div`
  flex-direction: column;
  margin-left: 15px;
`
const Price = styled.div`
  margin-left: 50%;

  h4 {
    font-size: 22px;
  }
`
const BoxLine = styled.div`
  width: 400px;
  height: 1px;
  background-color: #ececec;
`
const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

const OrderBtn = styled.button`
  width: 400px;
  height: 35px;
  background-color: black;
  color: white;
  color: 24px;
  cursor: pointer;
`

Cart.defaultProps = {
  title: 'Cart',
  name: '이름',
  number: '연락처',
  address: '주소',
  requirements: '요구사항'
}

export default function Cart({ title }) {
  return (
    <>
      <Container>
        <h1>{title}</h1>
        <Line />
        <Contents>
          <InfoBox>
            <Product>
              <Checkbox />
              <ProductImg />
              <ProductText>
                <h4>제품명</h4>
                <p>옵션</p>
              </ProductText>
              <Price>
                <h4>77,000원</h4>
              </Price>
            </Product>
          </InfoBox>
          <MoneyBox>
            <b>결제정보</b>
            <BoxLine />
            <Row>
              <p>상품 수</p>
              <p>1</p>
            </Row>
            <Row>
              <p>상품 금액</p>
              <p>77,000</p>
            </Row>
            <Row>
              <p>배송비</p>
              <p>3,000</p>
            </Row>
            <BoxLine />
            <Row>
              <b>총 결제금액</b>
              <b>80,000</b>
            </Row>
            <Link to='/order'>
              <OrderBtn>Order</OrderBtn>
            </Link>
          </MoneyBox>
        </Contents>
      </Container>
    </>
  )
}