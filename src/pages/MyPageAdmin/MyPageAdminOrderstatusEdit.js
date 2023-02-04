import React from 'react';
import styled from 'styled-components';


const Ordermenu = styled.a`
font-family: "Arial";
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    margin-bottom: 3em;
    font-weight: bold;
`;
const Box = styled.div`
margin: 0;
width: 100px;
height: 20px;
`
const MyPageAdminOrderstatusEdit = () => (
    <>
        <Ordermenu>
        Order Status
        </Ordermenu>
        <Box></Box>
    </>
    
);

export default MyPageAdminOrderstatusEdit;