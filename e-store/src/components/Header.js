import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import SearchIcon from '@mui/icons-material/Search';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
    return (
        <Container>
            <Left>
                <img className = "logo" src = "/images/logo.png" alt = "" />
                <Search>
                    <input className = "search_input" type = "text" />
                    {/* <SearchIcon /> */}
                </Search>
            </Left>
            <Right>
                <Link to = '/cart'>
                    <Cart>
                        <span>Cart</span>
                    </Cart>
                </Link>
                {/* <ShoppingCartIcon /> */}
                <Login>Login</Login>
            </Right>
        </Container>
    )
}

export default Header


const Container = styled.div`
    height: 70px;
    background: #f5f0f2;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    position: sticky;
`

const Left = styled.div` 
    display: flex;
    flex-direction: row;
    flex: 1;
    img {
        width: 120px;
    }
`

const Right = styled.div`
    display: flex;
    flex-direction: row;
`

const Search = styled.div`
    padding: 8px 16px;
`
const Cart = styled.div`
    padding: 8px 20px;
`
const Login = styled.div`
    border: 1px solid #f43f34;
    padding: 8px 16px;
    border-radius: 4px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background-color: white;
    transition: all 0.2s ease 0s;
    cursor: pointer;

    &:hover {
        background-color: black;
        color: white;
        border: 1px solid red;
    }
`