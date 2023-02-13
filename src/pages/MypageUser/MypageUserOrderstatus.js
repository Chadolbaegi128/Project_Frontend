import React from 'react';
import styled from 'styled-components';

const MypageText = styled.div`
    width: 80%;
    border-bottom: 1px solid lightgray;
    margin-left: 10%;
    margin-top: 3em;
    font-family: Arial;
    font-weight: bold;
    font-size: 2rem;
    padding: 0.3em;
`

const TableHeader = styled.div`
    display: flex;
    width: 60%;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;
    margin-left: 20%;
    margin-top: 5em;
    padding: 0.3em;
`

const TableHeaderItem = styled.div`
    font-family: Arial;
    padding: 0 2em;
    font-size: 1rem;
`

const Tablerow = styled.div`
    display: flex;
    width: 60%;
    justify-content: space-between;
    margin-left: 21%;
    margin-top: 1em;
`

const TableItem = styled.div`
    font-family: Arial;
    font-size: 1rem;
`

const CancelBtn = styled.button`
    font-family: Arial;
    font-size: 1rem;
    border: 1px solid black;
    background-color: white;
    box-shadow: 1px 1px 1px black;

    &:active {
        margin: 1px 0 0 1px;
        box-shadow: none;
    }
`

const MyPageUserOrderstatus = () => (
    <>
        <MypageText>My Page</MypageText>
        <TableHeader>
            <TableHeaderItem>Date</TableHeaderItem>
            <TableHeaderItem>Product Name</TableHeaderItem>
            <TableHeaderItem>Status</TableHeaderItem>
            <TableHeaderItem>Cancel</TableHeaderItem>
        </TableHeader>
        <Tablerow>
            <TableItem>0000-00-00</TableItem>
            <TableItem>New Jeans 1</TableItem>
            <TableItem>Order Completed</TableItem>
            <CancelBtn>Cancel</CancelBtn>
        </Tablerow>
    </>
);

export default MyPageUserOrderstatus;
