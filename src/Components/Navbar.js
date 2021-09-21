import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to='/1' activeStyle>
            HOME
          </NavLink>
          <NavLink to='/2' activeStyle>
            ABOUT
          </NavLink>
          <NavLink to='/3' activeStyle>
            ROOMS
          </NavLink>
          <NavLink to='/4' activeStyle>
            SERVICES
          </NavLink>
          <NavLink to='/5' activeStyle>
            GALLERY
          </NavLink>
          <NavLink to='/6' activeStyle>
            SEE {'&'} DO
          </NavLink>
          <NavLink to='/7' activeStyle>
            CONTACT
          </NavLink>
          <Button>
            Book A Room
          </Button>
          </NavMenu>
       </Nav>
    </>
  );
};


 const Nav = styled.nav`
 background-color: #242423;
 cursor: default;
 width: 100%;
 height: 80px;
 display: flex;
 align-items: center;
 justify-content: center;
 position: fixed;
 top:0;
 z-index: 999;
 `;

 const NavLink = styled(Link)`
  color: white ;
  display: flex;
  align-items: center;
  text-decoration: None;
  font-family: "BrandonGrotW01-Light";
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: color 1s;
    &:hover{
        color: #A0A09F;
    }
.button{
    border: 1px solid white;
    padding: 10px;
    font-weight: bold;
}
&.active{
    color: #A0A09F;
}
`;
  
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  white-space: nowrap; 
  grid-gap: 30px;
  @media screen and (max-width: 570px) {
    display: none;
  }
 `;

 const Button = styled.button`
 border: 1px solid white;
 padding: 10px;
 font-weight: bold;
 font-family: "BrandonGrotW01-Light";
 cursor: pointer;
 background-color: #242423;
 color: white;
 width: 140px;
 transition: color 1s;
  &:hover{
      background-color: white;
      color: #242423;
  }
 `
    
export default Navbar;
