import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Assets/logo-png.png";
const NavStyles = styled.nav`
  border: red 1px solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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

  .logo {
    max-height: 15rem;
    max-width: 60rem;
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
    <NavStyles>
      <img src={Logo} className="logo" />
      <ul>
        <li>
          <LinkStyles to="/">Home</LinkStyles>
        </li>
        <li>
          <LinkStyles to="/aboutme">About me</LinkStyles>
        </li>
        <li>
          <LinkStyles to="/projects">Projects</LinkStyles>
        </li>
        <li>
          <LinkStyles to="/myskills">Skills</LinkStyles>
        </li>
        <li>
          <LinkStyles to="/myworkexperience">Work Experience</LinkStyles>
        </li>
      </ul>
    </NavStyles>
  );
};
export default Navigation;
