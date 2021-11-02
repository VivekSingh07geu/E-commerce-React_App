import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Banners() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        sliderToShow: 1,
        SliderToScroll: 1,
        autoplay: true
    }
    return (
        <Container {...settings}>
            <Wrap>
                <img src = "/images/apple2.png" alt = ""/>
            </Wrap>
            <Wrap>
                <img src = "/images/msi.png" alt = ""/>
            </Wrap>
            <Wrap>
                <img src = "/images/asus.png" alt = ""/>
            </Wrap>
        </Container>
    )
}

export default Banners

const Container = styled(Slider)`
    margin-top: 20px;
    margin-bottom: 80px;
    

    li.slick-active button:before {
        color: white;
    }

    .slick-list {
        overflow: visible;
    }
`



const Wrap = styled.div`
    cursor: pointer;
    img {
        border: 4px solid transparent;
        border-radius: 4px;
        width: 100%;
        height: 100%;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;

    }
`