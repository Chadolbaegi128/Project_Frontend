import React from 'react';
import styled from 'styled-components';

const OrderstatudTable = styled.table`
    width: 75%;
    margin: auto;
`

const OrderstatudTableHead = styled.th`
    border-bottom: 1px solid lightgray;
`

const MyPageAdminOrderstatusEdit = () => (
    <>
        <div style={{display: 'flex', justifyContent: 'center', fontFamily: 'Arial', fontSize: '1.5rem', margin: '2em 0'}}>Orderstatus Edit</div>
        <OrderstatudTable>
            <OrderstatudTableHead>Order Number</OrderstatudTableHead>
            <OrderstatudTableHead>Customer Name</OrderstatudTableHead>
            <OrderstatudTableHead>Phone number</OrderstatudTableHead>
            <OrderstatudTableHead>Price</OrderstatudTableHead>
            <OrderstatudTableHead>Order Status</OrderstatudTableHead>
            <OrderstatudTableHead>Edit / Delete</OrderstatudTableHead>
            <tr align="center">
                <td>20230210-1</td>
                <td>Gildong Hong</td>
                <td>010-1234-1234</td>
                <td>12.34$</td>
                <td>Order Complted</td>
                <td><button style={{marginRight: '0.5em'}}>Edit</button><button>Delete</button></td>
            </tr>
        </OrderstatudTable>
    </> 
);

export default MyPageAdminOrderstatusEdit;