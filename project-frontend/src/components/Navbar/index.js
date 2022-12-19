import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
    <div id="header">
          <span className="text">Baltimore COVID-19 and Crime Data Visualizer</span>
        </div>
      <Nav>
        <Bars />
  
        <NavMenu>
        <NavLink to='/crimedata'>
            Crime Data
          </NavLink>
          <NavLink to='/coviddata'>
            COVID Data
          </NavLink>
          <NavLink to='/about'>
            About
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;