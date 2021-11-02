import React from 'react'
import styled from 'styled-components'

function Detail() {
    return (
        <Container>
            
            <Wrap>
                <Image>
                    <img src = "/images/mac.jpeg" alt = "" />
                </Image>
                <Summary>
                    <Price>
                        <h2>Name</h2>
                        <p>₹53,990</p>
                        <Button>ADD TO CART</Button>
                    </Price>
                    <Specification>
                        <div>Specification</div> 
                        <Table>
                            <Tr>
                                <Key>Processor Name</Key>
                                <Value>Ryzen 5 Hexa Core</Value> 
                            </Tr>
                            <Tr>
                                <Key>SSD</Key>
                                <Value>No</Value>
                            </Tr>
                            <Tr>
                                <Key>RAM</Key>
                                <Value>8 GB</Value>
                            </Tr>

                            <Tr>
                                <Key>RAM Type</Key>
                                <Value>DDR4</Value>
                            </Tr>
                            <Tr>
                                <Key>HDD Capacity</Key>
                                <Value>1 TB</Value>
                            </Tr>
                            <Tr>
                                <Key>Operating System</Key>
                                <Value>Windows 10 Home</Value>
                            </Tr>
                            <Tr>
                                <Key>Graphic Processor</Key>
                                <Value>NVIDIA GeForce GTX 1650</Value>
                            </Tr>
                            <Tr>
                                <Key>Clock Speed</Key>
                                <Value>3 GHz with Turbo Boost Upto 4 GHz</Value>
                            </Tr>
                            
                            </Table>
                    </Specification>
                </Summary>
            </Wrap>
        </Container>
    )
}

export default Detail

const Container = styled.div`
    height: calc(100vh - 70px);
    display: flex;
    align-items: center;
    justify-content: center;

`

const Wrap = styled.div`
    max-width: 100%;
    max-height: 100%;
    align-items: center;
    display: flex; 
    justify-content: center;
    position: absolute;
`
const Image = styled.div`
    border-radius: 10px;
    width: 500px;
    height: 350px;
    border: 3px solid rgba(249 , 249 , 249 , 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25 , 0.46 , 0.45 , 0.94) 0s;
    padding: 10px;
    margin: 15px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        max-width: 100%;
        max-height: 100%;
    } 

`
const Summary = styled.div`
    display: flex;
    flex-direction: column;
`
const Price = styled.div`
    border-radius: 10px;
    display: flex;
    width: 420px;
    flex-direction: column;
    border: 2px solid rgba(249 , 249 , 249 , 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25 , 0.46 , 0.45 , 0.94) 0s;
    margin: 15px;
    padding: 10px;
    p {
        font-size: 30px;
    }

`

const Button = styled.a`
    display: flex;
    justify-content: center;
    background: #fb641b;
    border: none;
    color: #fff;
    width: 100%;
    height: 40px;
    align-items: center;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 2px;
    border-radius: 8px;
    cursor: pointer;
    text-decoration: none;

`
const Specification = styled.div`
    border-radius: 10px;
    overflow: hidden;
    width: 420px;
    height: fit-content;
    border: 3px solid rgba(249 , 249 , 249 , 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25 , 0.46 , 0.45 , 0.94) 0s;
    padding: 10px;
    margin: 15px;
`
const Table = styled.table`
    min-width: 100%;
`
const Tr = styled.tr`
    
    display: flex;
    justify-content: space-between;
`
const Key = styled.td``
const Value = styled.td``