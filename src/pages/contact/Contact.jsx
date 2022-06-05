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

      <Desc></Desc>
    </LayOut>
  );
};

const Header = styled(motion.div)`
  color: var(--white);
  font-size: 30px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  color: var(--white);
`;

export default Contact;
