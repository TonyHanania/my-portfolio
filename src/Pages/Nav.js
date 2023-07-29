import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
const NavStyles = styled.nav`
  ul {
    margin: 20px 0;
    padding: 0;
  }

  li {
    margin: 0 10px 0 0;
    padding: 0;
    list-style: none;
    display: inline-block;
  }
`;

const LinkStyles = styled(Link)`
  border-radius: 3px;
  border: 2px solid palevioletred;
  background: palevioletred;
  color: white;
  padding: 0.25em 1em;
  font-weight: bold;
  font-size: 1.2em;
  text-decoration: none;
`;

const Navigation = () => {
  return (
    <ul>
      <li>
        <LinkStyles to="/">Home</LinkStyles>
      </li>
      <li>
        <LinkStyles to="/contact">contact</LinkStyles>
      </li>
      <li>
        <LinkStyles to="/another">another</LinkStyles>
      </li>
    </ul>
  );
};
export default Navigation;
