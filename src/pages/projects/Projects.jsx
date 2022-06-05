import React from "react";
import styled from "styled-components";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import LayOut from "../../components/LayOut";
import { projects } from "../info";
import { motion } from "framer-motion";
import { title } from "../../components/Anime";

const Projects = () => {
  return (
    <LayOut>
      <Cont>
        <Header exit="exit" variants={title} initial="hidden" animate="show">
          Projects <RiLightbulbFlashFill />
        </Header>
        <Desc exit="exit" variants={title} initial="hidden" animate="show">
          <p>Some things i've been working on in the past few years:</p>
        </Desc>
        <ProjContainer>
          {projects &&
            projects.map((proj, i) => (
              <Proj key={proj.id} className={i % 2 === 0 ? "" : "reverse"}>
                <Details
                  initial={{
                    opacity: 0,
                    x: i % 2 === 0 ? -300 : 300,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.55,
                      // delay: 2,
                      staggerChildren: 1.2,
                      when: "afterChildren",
                    },
                  }}
                  exit={{
                    opacity: 0,
                    x: -300,
                    transition: {
                      duration: 0.55,
                      // delay: 0.3,
                      staggerChildren: 0.5,
                    },
                  }}
                >
                  <h2 className="title">{proj.title}</h2>
                  <p className="desc">{proj.desc}</p>
                  <a href={proj.link}>
                    <button>View Project</button>
                  </a>
                </Details>
                <Image
                  initial={{
                    opacity: 0,
                    y: i % 2 === 0 ? -300 : 300,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.35,
                      // delay: 2,
                      staggerChildren: 1.2,
                      when: "afterChildren",
                    },
                  }}
                  exit={{
                    opacity: 0,
                    y: i % 2 === 0 ? -300 : 300,
                    transition: {
                      duration: 0.35,
                      // delay: 0.3,
                      staggerChildren: 0.5,
                    },
                  }}
                >
                  <img src={proj.image} alt="" />
                </Image>
              </Proj>
            ))}
        </ProjContainer>
      </Cont>
    </LayOut>
  );
};

const Cont = styled.div`
  //
`;
const Header = styled(motion.div)`
  color: var(--white);
  font-size: 30px;
  margin-bottom: 20px;
`;
const Desc = styled(motion.div)`
  color: var(--white);
  font-size: 15px;
`;

const ProjContainer = styled.div`
  display: grid;
  grid-gap: 50px;
  margin-top: 10vh;
  margin-bottom: 20vh;
  @media (max-width: 820px) {
    grid-gap: 80px;
  }
`;

const Proj = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &.reverse {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
  }

  @media (max-width: 820px) {
    flex-direction: column-reverse;
    &.reverse {
      flex-direction: column-reverse;
    }
  }
`;
const Details = styled(motion.div)`
  color: var(--white);
  width: 45%;

  .title {
    font-size: 30px;
    margin-bottom: 20px;
  }

  .desc {
    line-height: 150%;
    letter-spacing: 1px;
    word-spacing: 1px;
  }
  @media (max-width: 820px) {
    width: 100%;
  }
`;
const Image = styled(motion.div)`
  color: var(--white);
  width: 45%;
  height: 40vh;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid var(--green);
  transition: all 0.5s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s;
  }

  &:hover {
    img {
      transform: scale(1.2);
    }
  }

  @media (max-width: 820px) {
    width: 100%;
    height: 60vh;
    margin-bottom: 30px;
  }
  @media (max-width: 420px) {
    width: 100%;
    height: 30vh;
    margin-bottom: 30px;
  }
`;

export default Projects;
