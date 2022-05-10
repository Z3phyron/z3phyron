import React, { useState } from "react";
import styled from "styled-components";
// import { pageAnimation } from "./Anime";
import { motion } from "framer-motion";
import {Link} from "react-router-dom"

const LayOut = ({ children }) => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <Cont>
      <div className="eclipse circle_1"></div>
      <div className="eclipse circle_2"></div>
      <Logo className={navbar ? "isActive" : ""}>
        <Link to="/"> Ricketts</Link>
       
      </Logo>
      <Pages
      // exit="exit"
      // variants={pageAnimation}
      // initial="hidden"
      // animate="show"
      >
        {children}
      </Pages>
    </Cont>
  );
};

const Cont = styled.div`
  .eclipse {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background: var(--green);
    position: fixed;
    z-index: 5;

    filter: blur(100.6px);
  }

  .circle_1 {
    top: 50%;
    left: 5%;

    @media (max-width: 420px) {
      top: 60%;
      left: 5%;
    }
  }
  .circle_2 {
    top: 20%;
    right: 20%;
    @media (max-width: 420px) {
      top: 20%;
      right: 5%;
    }
  }
`;
const Logo = styled.div`
  font-size: 50px;
  padding: 0 3%;
  display: flex;
  align-items: center;
  height: 15vh;
  color: var(--green);
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  transition: 0.5s;
  z-index: 999;
  a {
    color: var(--green);
  }
  &.isActive {
    /* From https://css.glass */
    background: var(--dark-1);
    backdrop-filter: blur(7.6px);
    -webkit-backdrop-filter: blur(7.6px);
    border: none;
    outline: none;
    height: 15vh;
  }

  @media (max-width: 420px) {
    font-size: 30px;
    height: 10vh;
    &.isActive {
      height: 10vh;
    }
  }
`;
const Pages = styled(motion.div)`
  padding: 3% 10%;
  padding-top: 15vh;
  overflow: hidden;
  z-index: 99;
  font-family: "Space Grotesk", sans-serif;
`;

export default LayOut;
