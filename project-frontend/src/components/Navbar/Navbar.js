import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/crimedata' activeStyle>
            CrimeData
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;