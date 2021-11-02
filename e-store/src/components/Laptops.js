import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import Detail from './Detail'

function Laptops() {
    return (
        <Container>
            <Grid>
                <Cover>
                    <Link to = "/detail">
                        <Wrap>
                            <img  src = "/images/mac.jpeg" alt = "" /> 
                        </Wrap>
                    </Link>
                    <p>NAme</p>
                </Cover>
                <Cover>
                    <Link to = "/detail">
                        <Wrap>
                            <img  src = "/images/msi.jpeg" alt = "" /> 
                        </Wrap>
                    </Link>
                    <p>NAme</p>
                </Cover>
                <Cover>
                    <Link to = "/detail">
                        <Wrap>
                            <img  src = "/images/msi.jpeg" alt = "" /> 
                        </Wrap>
                    </Link>
                    <p>NAme</p>
                </Cover>
                <Cover>
                    <Link to = "/detail">
                        <Wrap>
                            <img  src = "/images/msi.jpeg" alt = "" /> 
                        </Wrap>
                    </Link>
                    <p>NAme</p>
                </Cover>

                <Cover>
                    <Wrap>
                        <img  src = "/images/mac.jpeg" alt = "" /> 
                    </Wrap>
                    <p>NAme</p>
                </Cover>
                <Cover>
                    <Wrap>
                        <img  src = "/images/msi.jpeg" alt = "" /> 
                    </Wrap>
                    <p>NAme</p>
                </Cover>
                <Cover>
                    <Wrap>
                        <img  src = "/images/asus_rog.jpeg" alt = "" /> 
                    </Wrap>
                    <p>NAme</p>
                </Cover>
                <Cover>
                    <Wrap>
                        <img  src = "/images/legion.jpeg" alt = "" /> 
                    </Wrap>
                    <p>NAme</p>
                </Cover>
            </Grid>
        </Container>
    )
}

export default Laptops

const Container = styled.div`
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 50px;
`
const Grid = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4 , minmax(0 , 1fr));
` 

const Cover = styled.div`
    p {
        margin-top: 15px;
        text-align: center;
        text-transform: capitalize;
    }
`
const Wrap = styled.div`
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    height: 200px;
    width: 300px;
    border: 3px solid rgba(249 , 249 , 249 , 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25 , 0.46 , 0.45 , 0.94) 0s;
    margin: auto;
    display: flex;
    justify-content: center;
    padding: 10px;

    img {
        max-width: 100%;
        max-height: 100%;
    } 

    &:hover {
        transform: scale(1.10);
        border-color: rgba(249 , 249 , 249 , 0.8);
    }
`

