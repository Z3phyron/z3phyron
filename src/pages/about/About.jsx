import React from "react";
import styled from "styled-components";
import LayOut from "../../components/LayOut";
import { motion } from "framer-motion";
import { title } from "../../components/Anime";

const About = () => {
  return (
    <LayOut>
      <Header exit="exit" variants={title} initial="hidden" animate="show">
        _About me ( )
      </Header>
      <Desc exit="exit" variants={title} initial="hidden" animate="show">
        <p>
          A Front End Web Developer based in Lagos, Nigeria. I have over two
          year of experience in writing maintainable and functional code,
          following best practices, and building websites.
        </p>
        <p>
          I'm a software Engineering student at NIIT, where I plan on studying
          more to help build my career. Adept knowledge in building robust
          RESTful APIs, dashboards, API Integrations. I value teamwork and
          respect everyone’s opinion.
        </p>
      </Desc>
      <Skills>
        <h3 className="header">SKills</h3>
        <div className="skillset">
          <div>python</div>
          <div>ReactJs</div>
          <div>
            
            <strong>State Management:</strong> Redux
          </div>
          <div>NextJs</div>
          <div>Java</div>
          <div>NodeJs</div>
          <div>TypeScript</div>
          <div>SQL</div>
          <div>Graphql </div>
          <div>WordPress</div>
        </div>
      </Skills>
    </LayOut>
  );
};

const Header = styled(motion.div)`
  color: var(--white);
  font-size: 30px;
  margin-bottom: 20px;
`;
const Skills = styled(motion.div)`
  color: var(--white);

  margin-top: 10vh;

  .header {
    font-size: 30px;
    margin-bottom: 25px;
  }

  .skillset {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
  }
`;

const Desc = styled.div`
  color: var(--white);
  p {
    margin-bottom: 20px;
  }
`;

export default About;
