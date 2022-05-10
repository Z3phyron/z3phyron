import React from "react";
import styled from "styled-components";
import { hello, home_btn, home_desc, name, prof } from "../../components/Anime";
import LayOut from "../../components/LayOut";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <LayOut>
      <Greeting>
        <Hello exit="exit" variants={hello} initial="hidden" animate="show">
          Hello!
        </Hello>
        <Name exit="exit" variants={name} initial="hidden" animate="show">
          My name is Damian
        </Name>
        <Prof variants={prof} initial="hidden" animate="show" exit="exit">
          I'm a Front_End <span>Engineer</span>
        </Prof>
      </Greeting>
      <Desc variants={home_desc} initial="hidden" animate="show" exit="exit">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Exercitationem praesentium iusto nostrum nobis doloremque eum fuga
          iure quam dicta fugit.
        </p>
        <motion.button
          variants={home_btn}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          Say Hello
        </motion.button>
      </Desc>
    </LayOut>
  );
};

const Hello = styled(motion.h2)`
  font-size: 50px;
  margin-bottom: 20px;
  @media (max-width: 900px) {
    font-size: 40px;
    margin-bottom: 20px;
  }
  @media (max-width: 420px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;
const Name = styled(motion.h2)`
  font-size: 50px;
  margin-bottom: 20px;
  @media (max-width: 900px) {
    font-size: 40px;
    margin-bottom: 20px;
  }
  @media (max-width: 420px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;
const Prof = styled(motion.h2)`
  font-size: 50px;
  margin-bottom: 20px;
  line-height: 150%;
  @media (max-width: 900px) {
    font-size: 40px;
    margin-bottom: 20px;
  }
  @media (max-width: 420px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;
const Greeting = styled.div`
  color: var(--white);
  padding-top: 50px;
`;
const Desc = styled(motion.div)`
  color: var(--white);

`;

export default Home;
