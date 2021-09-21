import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import breakfast from './Assets/Svg/breakfast.svg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from 'styled-components';
import image1 from './Assets/images/gallery1.jpg'
import image2 from './Assets/images/gallery2.jpg'
import image3 from './Assets/images/gallery3.jpg'
import image4 from './Assets/images/gallery4.jpg'
import image5 from './Assets/images/gallery5.jpg'
import image6 from './Assets/images/gallery6.jpg'

const Gallery = () => {
    return (
        <Container>
        <Carousel autoPlay={true} infiniteLoop={true} showStatus={false} showIndicators={false} showThumbs={false} width={290} transitionTime={1000}>
        <div>
        <img src={image1} width='300px' height='600px'></img> 
            
        </div>
        <div>
        <img src={image2} width='300px' height='600px'></img> 
        </div>
    </Carousel>
    <Carousel autoPlay={true} infiniteLoop={true} showStatus={false} showIndicators={false} showThumbs={false} width={290} transitionTime={1000}>
    <div>
     <img src={image3} width='300px' height='600px'></img>         
     </div>
     <div>
     <img src={image4} width='300px' height='600px'></img>         
     </div>
 </Carousel>
 <Carousel autoPlay={true} infiniteLoop={true} showStatus={false} showIndicators={false} showThumbs={false} width={290} transitionTime={1000}>
     <div>
  <img src={image5} width='300px' height='600px'></img>     
  </div>
  <div>
  <img src={image6} width='300px' height='600px'></img>    
  </div>
</Carousel>
</Container>
        )
}

const Container = styled.div`
margin-top:40px;
margin-bottom:40px;
display: flex;
grid-gap:10px;
justify-content:center;
align-items:center;
width: 900px;
margin-left: auto;
margin-right: auto;
`

export default Gallery;
