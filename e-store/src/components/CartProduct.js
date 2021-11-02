import React from 'react'
import styled from 'styled-components' 

function CartProduct() {
    return (
        <Container>
            <Image>
                <CartImage src = "/images/asus_rog.jpeg" alt = ""/>
            </Image>
            <CarInfo>
                <Title>
                    Name
                </Title>
                <Price>
                    <small>$</small>
                    <strong>43343</strong>
                </Price>
                <RemoveItem>Remove From Cart</RemoveItem>
            </CarInfo>
        </Container>
    )
}

export default CartProduct

const Container = styled.div`
    width: 800px;
    display: flex;
    border-bottom: 1px solid lightgray;
    border-right: 1px solid lightgray;
` 
const Image = styled.div`
    max-width: 200px;
    max-height: 200px;
`
const CartImage = styled.img`
    margin: 10px;
    max-width: 200px;
    max-height: 200px;
`
const CarInfo = styled.div`
    margin-top: 50px;
`

const Title = styled.p`
    font-weight: bold;
    margin-bottom: 5px;
`
const Price = styled.p`
    margin-bottom: 30px;
`

const RemoveItem = styled.button`
    border-radius: 4cm;
    background: rgb(161, 5, 251);
    border: 1px solid;
    height: 30px;
    margin-top: 10px;
    border-color: rgb(161, 5, 251);
    width: 150px;
    color: aliceblue;
    font-weight: bold;
    cursor: pointer;
`