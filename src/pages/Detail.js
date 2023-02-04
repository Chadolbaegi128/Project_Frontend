import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 150px;
`

const ImgContainer = styled.div`
  float: left;
  width: 470px;
  height: 470px;
  background-color: lightgray;
  margin-right: 40px;
`

const InfomationContainer = styled.div`
  float: right;
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

const Info = styled.div`
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
  margin: 10px 0 10px 0;
`
const CartBtn = styled.button`
  width: 150px;
  height: 50px;
  font-size: 24px;
  background-color: white;
  border: 1px solid black;
  margin-top: 50px;
`

const BuyBtn = styled.button`
  width: 275px;
  height: 50px;
  font-size: 24px;
  background-color: black;
  color:white;
  margin-top: 50px;
`
const SelectBox = (props) => {
  return (
    <select>
      {props.options.map((option) => (
        <option
          value={option.value}
          defaultValue={props.defaultValue === option.value}
        >
          {option.name}
        </option>
      ))}
    </select>
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
    <Container>
      <ImgContainer />
      <InfomationContainer>
        <Info>
          <h1>{name}</h1>
          <h1>{price.toLocaleString()}</h1>
        </Info>
        <Down>
          <Info>
            <p>{color}</p>
            <SelectBox id="selectbox" options={options} ></SelectBox>
          </Info>
          <Line />
          <Info>
            <p>{quantity}</p>
            <p>{price.toLocaleString()} </p>
          </Info>
          <Line />
          <Info>
            <CartBtn>{cart}</CartBtn>
            <BuyBtn>{buy}</BuyBtn>
            {/* <Link to='/cart'>
              <CartBtn>{cart}</CartBtn>
            </Link>
            <Link to='/order'>
              <BuyBtn>{buy}</BuyBtn>
            </Link> */}

          </Info>
        </Down>

      </InfomationContainer>
    </Container>
  )
}
