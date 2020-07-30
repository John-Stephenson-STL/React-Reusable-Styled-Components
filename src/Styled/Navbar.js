import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';

export const StyledNavbar = styled.nav`
  display: flex;
  padding: 20px;
  align-items: center;
  margin-bottom: 40px;

  @media (max-width: 786px) {
    flex-direction: column;
  }
`;

export const NavBrand = styled(Link)`
  flex-grow: 1;
  font-size: 24px;
  font-weight: 700;
  color: #333;
  text-decoration: none;
`;

export const NavItems = styled.ul`
  list-style: none;
  padding-inline-start: 0;
  display: flex;
  align-items: center;
`;

export const NavItem = styled(Link)`
  margin-right: 20px;
  cursor: pointer;
  transition: 250ms;
  cursor: pointer;
  color: #333;
  text-decoration: none;

  &&:hover {
    transform: scale(1.05);
  }
`;

export const LinkButton = styled(NavItem)`
  padding: 10px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid #663399;

  ${(props) => 
     props.primary && 
       css`
         background: #663399;
         color: white;
       `}
`;