import React from 'react'
import styled from 'styled-components'
import Laptops from './Laptops'
import Banners from './Banners'

function Home() {

    return (
        <Container>
            <Banners/>
            <Laptops />
        </Container>
    )
}

export default Home

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    overflow-x: hidden;
`

