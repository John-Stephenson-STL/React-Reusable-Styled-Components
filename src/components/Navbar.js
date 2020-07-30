import React from "react";
import { Link } from "react-router-dom";
import {StyledNavbar, NavBrand, NavItems, NavItem, LinkButton} from '../Styled/Navbar';

export default function Navbar() {
  return (
    <StyledNavbar>
      <NavBrand to='/'>Cool Product</NavBrand>
      <NavItems>
        <NavItem to='/pricing'>Pricing</NavItem>
        <NavItem>Docs</NavItem>
        <LinkButton>Log in</LinkButton>
        <LinkButton primary>Get Started For Free</LinkButton>
      </NavItems>
    </StyledNavbar>
  );
}