import React from 'react';
import styled from 'styled-components';
import { Parallax} from "react-parallax";
import bgimage1 from './Assets/images/assets.jpg';
import bgimage2 from './Assets/images/image2.jpg';
import bgimage3 from './Assets/images/image3.jpg'
import breakfast from './Assets/Svg/breakfast.svg';
import dining from './Assets/Svg/dining.svg';
import freeWifi from './Assets/Svg/freeWifi.svg';
import garden from './Assets/Svg/garden.svg';
import housekeeping from './Assets/Svg/housekeeping.svg';
import pool from './Assets/Svg/pool.svg';

import Gallery from './carousel'

const Home = () => {
    return (
        <Container>
           <TextContainer>
               <MainText>
                   Ferofly
               </MainText>
               <SubText>
                   -Magnify your Journey-
               </SubText>
           </TextContainer>
           <Parallax bgImage={bgimage1} bgImageStyle={{height:'631px',width:'980px'}} strength={500}>
               <div style={{ height: 500 }}></div>
           </Parallax>
           <DateContainer>
               <div>
               <label> Check in</label>
               <input type="date"></input>
               </div>
               <div>
               <label> Check out</label>
               <input type="date"></input>
               </div>
               <div>
               <label> Adults</label>
               <input type="number" className="SmallBox"></input>
               </div>
               <div>
               <label >Kids</label>
               <input type="number" className="SmallBox"></input>
               </div>
               <div className="buttonDiv">
               <button className="feroflyButton">search</button>
               </div>
           </DateContainer>
           <AboutContainer>
            <h1>ABOUT</h1>
            <p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.​</p>
           </AboutContainer>
           <Parallax bgImage={bgimage2} bgImageStyle={{height:'631',width:'980px'}} strength={500}>
           <div style={{height: 500 }} className="parallax-container">
               <div className="parallax-text">
               <h1>OUR ROOMS</h1>
               <p>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
               <button className="feroflyButton2">Book a Room</button>
               </div>
           </div>
           </Parallax>
           <ServiceContainer>
               <h1>OUR SERVICES</h1>
               <IconContainer>
                   <div>
                       <img src={breakfast} width='30px' height='30px' alt=""></img>
                       <span>breakfast</span>
                       <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                   </div>
                   <div>
                       <img src={dining} width='30px' height='30px' alt=""></img>
                       <span>Garden</span>
                       <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                   </div>
                   <div>
                       <img src={freeWifi} width='30px' height='30px' alt=""></img>
                       <span>Pool</span>
                       <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                   </div>
                   <div>
                       <img src={garden} width='30px' height='30px' alt=""></img>
                       <span>Free Wifi</span>
                       <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                   </div>
                   <div>
                       <img src={housekeeping} width='30px' height='30px' alt=""></img>
                       <span>Daily Housekeeping</span>
                       <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                   </div>
                   <div>
                       <img src={pool} width='30px' height='30px' alt=""></img>
                       <span>In-Room Dining Service</span>
                       <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                   </div>
               </IconContainer>
           </ServiceContainer>
           <Gallery/>
           <ServiceContainer>
               <h1>THINGS TO DO</h1>
               <IconContainer>
                   <div>
                       <span>Wineries Tour</span>
                       <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                   </div>
                   <div>
                       <span>Cultural Sites</span>
                       <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                   </div>
                   <div>
                       <span>Market Tour </span>
                       <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                   </div>
                   <div>
                       <span>Leisure Activities</span>
                       <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                   </div>
                   <div>
                       <span>Birds Safari</span>
                       <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                   </div>
                   <div>
                       <span>Horse Riding </span>
                       <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                   </div>
               </IconContainer>
           </ServiceContainer>
           <Parallax bgImage={bgimage3} bgImageStyle={{height:'631',width:'980'}} strength={500}>
           <div style={{height: 500 }} className="parallax-container">
               <div className="parallax-text">
               <h1>OUR ROOMS</h1>
               <p>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
               <button className="feroflyButton2">Book a Room</button>
               </div>
           </div>
           </Parallax>
        </Container>
        
        
        )
}

const Container = styled.div`
.parallax-container{
    display: flex;
    justify-content: center;
    align-items: center;
}
.parallax-text{
    height: 360px;
    width: 370px;
    background-color: white;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1{
        font-family: BrandonGrotW01-Light;
        font-size: 25px;
        font-weight: 100;
    }
     
    p{
        text-align: center;
        font-family: BrandonGrotW01-Light;
        font-style: italic;
    }
}
.feroflyButton{
    border: 1px solid white;
    padding: 10px;
    font-weight: bold;
    font-family: "BrandonGrotW01-Light";
    cursor: pointer;
    background-color: #242423;
    color: white;
    width: 140px;
}
.feroflyButton2{
    border: 1px solid black;
    padding: 10px;
    font-weight: bold;
    font-family: "BrandonGrotW01-Light";
    cursor: pointer;
    background-color:white;
    color:  #242423;
    width: 140px;
    transition: color 1s;
    &:hover{
        background-color:  #242423;
        color: white;
    }
}
`
const TextContainer = styled.div`
display: grid;
margin-top: 160px;
margin-bottom:100px;

`
const MainText = styled.text`
font-family: DidoteTextW01-Italic,serif;
font-size: 40px;
font-weight: 600;
letter-spacing: 0.05em;

`
const SubText = styled.text`
font-family: DidoteTextW01-Italic,serif;
width: 100%;
letter-spacing: 0.05em;
font-size: 20px;
`
const DateContainer = styled.div`
margin-top:30px;
display:flex;
justify-content:center;
grid-gap:10px;

div{
    display:flex;
    flex-direction:column;
    align-items: baseline;
}
label{
    font-size: 13px;
    font-family: BrandonGrotW01-Light,sans-serif;

}
input{
    width: 260px;
    height: 30px;
}
.SmallBox{
    width: 50px;
    height: 30px;
}
.buttonDiv{
    justify-content: end;
}

`
const AboutContainer = styled.div`
margin-top: 8%;
display: grid;
margin-bottom: 7%;

h1{
    font-family: BrandonGrotW01-Light;
    font-size: 25px;
    font-weight: 100;
}
 
p{
    width: 500px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    font-family: BrandonGrotW01-Light;
    font-style: italic;
}
`
const ServiceContainer = styled.div`
margin-top: 8%;
margin-bottom: 8%;
h1{
    font-family: BrandonGrotW01-Light;
    font-size: 25px;
    font-weight: 100;
}
span{
    font-family: BrandonGrotW01-Light;
    font-size:18px;
    color: #242423;
    font-weight: bold;
    margin-top: 5px;
}
p{
    font-family: BrandonGrotW01-Light;
    font-style: italic;
}
`
const IconContainer = styled.div`
    margin-top:3%;
    display: grid;
    grid-gap: 1px;
    grid-template-columns: repeat(3, 1fr);
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
    grid-row-gap: 42px;
div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

span{
    display:inherit;
}

p{
    width:300px;
    text-align: center;
}
`


export default Home;