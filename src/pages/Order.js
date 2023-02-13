import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 100px 50px 100px;

  h1 {
    font-size: 34px;
  }
`
const Contents = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 50px;
`
const Line = styled.div`
  width: auto;
  height: 1px;
  background-color: #ececec;
`
const InfoBox = styled.div`
  width: 620px;
  height: 340px;
  margin: 50px 50px 0 0;

  h1 { 
    font-size: 30px;
  }

  p {
    font-size: 17px;
    margin: 0;
  }
`
const Input = styled.input`
  width: 500px;
  height: 25px;
`
const AdrInput = styled.input`
  width: 400px;
  height: 25px;
`
const AdrBtn = styled.div`
  width: 50px;
  height: 25px;
  background-color: #878787;
  color: white;
  font-size: 10px;
  text-align:center;
  top: 50%;
  
`
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
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
const OrderBtn = styled.button`
  width: 400px;
  height: 35px;
  background-color: black;
  color: white;
  color: 24px;
  cursor: pointer;
`

Order.defaultProps = {
  title: 'Order',
  name: '이름',
  number: '연락처',
  address: '주소',
  requirements: '요구사항'
}

export default function Order({
  title,
  name,
  number,
  address,
  requirements
}) {
  return (
    <>
      <Container>
        <h1>{title}</h1>
        <Line />
        <Contents>
          <InfoBox>
            <h1>배송지 정보</h1>
            <Row>
              <p>{name}</p>
              <Input placeholder="받는 분 이름을 입력해 주세요" />
            </Row>
            <Row>
              <p>{number}</p>
              <Input placeholder="- 없이 입력해 주세요" />
            </Row>
            <Row>
              <p>{address}</p>
              <AdrInput placeholder="주소찾기를 클릭해 주세요" />
              <AdrBtn>주소찾기</AdrBtn>
            </Row>
            <Row>
              <p></p>
              <Input />
            </Row>
            <Row>
              <p>{requirements}</p>
              <Input placeholder="배송시 요청사항을 선택해 주세요" />
            </Row>
          </InfoBox>
          <MoneyBox>
            <b>결제정보</b>
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
            <Row>
              <b>총 결제금액</b>
              <b>80,000</b>
            </Row>
            <Link to='/ordercomplete'>
              <OrderBtn>Order</OrderBtn>
            </Link>
          </MoneyBox>
        </Contents>
      </Container>
    </>
  )
}