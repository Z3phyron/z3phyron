import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { links } from "./Links";

const Navbar = () => {
  return (
    <Cont>
      <Wrap>
        {links.map((link, i) => (
          <LinkBox key={i}>
            <NavLink to={link.path}>{link.icon}</NavLink>
          </LinkBox>
        ))}
      </Wrap>
    </Cont>
  );
};

const Cont = styled.div`
  padding: 5%;
  width: 100%;
  height: 10vh;
  position: fixed;
  bottom: 5vh;
  left: 0;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  /* right: 5%; */


`;
const Wrap = styled.ul`
  //
  width: 50%;
  height: 80px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
  align-items: center;
  padding: 0 5%;
  /* From https://css.glass */
  background: var(--dark-2);
  border-radius: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.6px);
  -webkit-backdrop-filter: blur(7.6px);
  border: none;
  outline: none;

  @media (max-width: 900px) {
    padding: 0 5%;
    width: 100%;
  }
`;

const LinkBox = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 15px;

  background: var(--green);
  transition: all 0.5s;

  &:hover {
    transform: scale(1.1);
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-size: 30px;
    color: #fff;
  }

  @media (max-width: 900px) {
    width: 50px;
    height: 50px;
    a {
      font-size: 25px;
    }
  }

  @media (max-width: 900px) {
    width: 40px;
    height: 40px;
    a {
      font-size: 20px;
    }
  }
`;

export default Navbar;
