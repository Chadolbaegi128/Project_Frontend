import React from 'react'
import styled from 'styled-components';

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

Cart.defaultProps = {
  title: 'Cart'
}
export default function Cart({ title }) {
  return (
    <Container>
      <h1>{title}</h1>
      <Line />
    </Container>
  )
}
