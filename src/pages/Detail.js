import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Category from './Home/Category';

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 80px;
`
const ImgContainer = styled.div`
  width: 470px;
  height: 470px;
  background-color: lightgray;
  margin-right: 40px;
`
const InfomationContainer = styled.div`
  width: 470px;
  height: 470px;

  h1 {
    font-size: 20px;
    display:inline;
    margin-top: 0;
  }
  p {
    font-size: 18px;
  }
`
const Row = styled.div`
  display: flex;
  justify-content: space-between;
`
const Down = styled.div`
  margin-top: 150px;
`

const Line = styled.div`
  width: 470px;
  height: 1px;
  background-color: #ececec;
  position: absolute;
`
const CartBtn = styled.button`
  width: 150px;
  height: 50px;
  font-size: 24px;
  background-color: white;
  border: 1px solid black;
  margin-top: 50px;
  cursor: pointer;
`
const BuyBtn = styled.button`
  width: 275px;
  height: 50px;
  font-size: 24px;
  background-color: black;
  color:white;
  margin-top: 50px;
  cursor: pointer;
`
const Select = styled.select`
  width: 300px;
  height: 30px;
  font-size: inherit;
  margin: 0;
`
const SelectBox = (props) => {
  return (
    <Select>
      {props.options.map((option) => (
        <option
          value={option.value}
          defaultValue={props.defaultValue === option.value}
          key={option.name}
        >
          {option.name}
        </option>
      ))}
    </Select>
  );
};

Detail.defaultProps = {
  name: '제품명',
  price: 77000,
  color: 'Color',
  quantity: '수량',
  options: [
    { value: "red", name: "빨강" },
    { value: "green", name: "파랑" },
    { value: "yeloow", name: "노랑" },
  ],
  cart: 'Cart',
  buy: 'Buy Now'
}

export default function Detail({
  name,
  price,
  color,
  quantity,
  options,
  cart,
  buy
}) {
  return (
    <>
      <Category />
      <Container>
        <ImgContainer />
        <InfomationContainer>
          <Row>
            <h1>{name}</h1>
            <h1>{price.toLocaleString()}</h1>
          </Row>
          <Down>
            <Row>
              <p>{color}</p>
              <SelectBox options={options} />
            </Row>
            <Line />
            <Row>
              <p>{quantity}</p>
              <p>{price.toLocaleString()} </p>
            </Row>
            <Line />
            <Row>
              <Link to='/cart'>
                <CartBtn>{cart}</CartBtn>
              </Link>
              <Link to='/order'>
                <BuyBtn>{buy}</BuyBtn>
              </Link>
            </Row>
          </Down>
        </InfomationContainer>
      </Container>
    </>
  )
}