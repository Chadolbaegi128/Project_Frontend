import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
`
const Contents = styled.div`
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

const AddressInput = styled.input`
  width: 300px;
  height: 25px;
`
const Box = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px;

`

const MoneyBox = styled.div`
  width: 400px;
  height: 400px;
  background-color: none;
  border: 1px solid black;
  margin-top: 50px;
`

Order.defaultProps = {
  title: 'Order',
  name: '이름',
  number: '연락처',
  address: '주소',
  requirements: '요구사항'
}

export default function Order({ title }) {
  return (
    <Contents>
      <h1>{title}</h1>
      <Line />
      <Container>
        <InfoBox>
          <h1>배송지 정보</h1>
          <Box>
            <p>이름</p>
            <Input placeholder="받는 분 이름을 입력해 주세요" />
          </Box>
          <Box>
            <p>연락처</p>
            <Input placeholder="- 없이 입력해 주세요" />
          </Box>
          <Box>
            <p>주소</p>
            <Input placeholder="주소찾기를 클릭해 주세요" />
          </Box>
          <Box>
            <p></p>
            <Input />
          </Box>
          <Box>
            <p>요구사항</p>
            <Input placeholder="배송시 요청사항을 선택해 주세요" />
          </Box>
        </InfoBox>
        <MoneyBox>
          <p>결제정보</p>
        </MoneyBox>
      </Container>
    </Contents>
  )
}
