import React from "react";
import styled from "styled-components";
import LayOut from "../../components/LayOut";
import { motion } from "framer-motion";
import { title } from "../../components/Anime";

const Contact = () => {
  return (
    <LayOut>
      <Header exit="exit" variants={title} initial="hidden" animate="show">
        Contact me
      </Header>
    </LayOut>
  );
};

const Header = styled(motion.div)`
  color: var(--white);
  font-size: 30px;
  margin-bottom: 20px;
`;
const Greeting = styled.div`
  color: var(--white);
  padding-top: 50px;

  h2 {
    font-size: 50px;
    margin-bottom: 20px;
  }
`;
const Desc = styled.div`
  color: var(--white);
  /* 
  button {
    padding: 10px 17px;
    margin-top: 20px;
    outline: none;
    border: none;
    border-radius: 4px;
    background: var(--green);
    color: var(--white);
    font-size: 20px;
    position: relative;
    z-index: 999;
    transition: 0.5s;

    &::after {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      border-radius: 4px;
      top: -10px;
      right: -10px;
      border: 2px solid var(--green);
      z-index: 5;
      transition: 0.5s;
    }

    &:hover {
      &::after {
        top: -2px;
        right: -2px;
        border-radius: 6px;
      }
    }
  } */
`;

export default Contact;
