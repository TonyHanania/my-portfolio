import styled from "styled-components";
import React from "react";
import { Link, useLocation } from "react-router-dom";

import MySVGComponent from "./Assets/logo-svg";

const NavStyles = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ul {
    margin: 20px 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 600px) {
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      height: 200px;
    }
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
  text-decoration: none;
  color: black;
  padding: 0.25em 1em;
  font-weight: bold;
  font-size: 1.2em;
  border-radius: 3px;
  border: 2px solid #e1a412;

  /* Default styles for non-active buttons */
  background: white;

  /* Styles for active button */
  ${(props) =>
    props.isActive &&
    `
    background: lightgray;
    color: black;
  `}

  :hover {
    background: #e1a412;
    color: white;
  }
`;

const Navigation = () => {
  const location = useLocation();

  return (
    <NavStyles>
      <MySVGComponent />
      <ul>
        <li>
          <LinkStyles to="/" isActive={location.pathname === "/"}>
            Home
          </LinkStyles>
        </li>
        <li>
          <LinkStyles to="/aboutme" isActive={location.pathname === "/aboutme"}>
            About me
          </LinkStyles>
        </li>
        <li>
          <LinkStyles
            to="/projects"
            isActive={location.pathname === "/projects"}
          >
            Projects
          </LinkStyles>
        </li>
        <li>
          <LinkStyles
            to="/myskills"
            isActive={location.pathname === "/myskills"}
          >
            Skills
          </LinkStyles>
        </li>
        <li>
          <LinkStyles
            to="/myworkexperience"
            isActive={location.pathname === "/myworkexperience"}
          >
            Work Experience
          </LinkStyles>
        </li>
      </ul>
    </NavStyles>
  );
};

export default Navigation;
