import React from 'react';
import styled from 'styled-components';

const ContactForm = () => {
    return(
        <Container>
           
            <TextContainer>CONTACT US</TextContainer>
            <InfoContainer>
                <p>info@mysite.com</p>
                <p>/</p>
                <p>500 Terry Francois Street, San Francisco, CA 94158</p>
                <p>/</p>
                <p>Tel: 123-456-7890 </p>
            </InfoContainer>
        <Form>
            <ul>
                <div className="div1">
                <li>
                    <input type="text" id="name" name="user_name" placeholder="Name"></input>
                </li>
                <li>

                    <input type="email" id="mail" name="user_email" placeholder="Email"></input>
                </li>
                </div>
                <li>
                    <input type="text" className="subject" name="user_nickName" placeholder="subject"></input>
                </li>
                <li>
                    <input type="text" className="message" name="user_nickName" placeholder="message"></input>
                </li>
                <li>
                    <button id="button" onclick="sumbit()">SUBMIT</button>
                </li>
                <li>
                    <p id="error"></p>
                </li>
            </ul>
        </Form>
        </Container>
        
        
        
        )
}

const Form = styled.form`
ul{
    list-style: none;
    width: 600px;
    margin-left: auto;
    margin-right: auto;
    grid-gap: 10px;
    display: flex;
    flex-direction: column;
}
.div1{
    display: flex;
    justify-content: center;
    grid-gap: 10px;
}
.subject{
    width:100%;
}
.message{
    width:100%;
    height:100px;
}
input{
    width: 291px;
    height: 36px;
    border: none;
}
::-webkit-input-placeholder{
    color: red;
}
#button {
    width: 600px;
    height: 45px;
    border: none;
    background-color: #242423;
    color: white;
}
`
const Container = styled.div`
background-color: #F5F5F5;
margin-top:15%;
padding-top: 2%;
`
const TextContainer = styled.div`
margin-top: 2%;
margin-bottom: 2%;
line-height: 1.4em;
text-align: center;
font-size: 25px;
font-family: BrandonGrotW01-Light;
`
const InfoContainer = styled.div`
display: flex;
justify-content: center;
grid-gap: 5%;
p{
        text-align: center;
        font-family: BrandonGrotW01-Light;
        font-style: italic;
}
`

export default ContactForm;