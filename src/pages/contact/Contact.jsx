import React from "react";
import styled from "styled-components";
import LayOut from "../../components/LayOut";
import { motion } from "framer-motion";
import { title } from "../../components/Anime";
// import { Formik, Form } from "formik";
// import * as Yup from "yup";
// import FormikControl from "../../utils/formik/FormikControl";
// import { css } from "@emotion/react";
// import { toast } from "react-toastify";
// import PulseLoader from "react-spinners/PulseLoader";


// const override = css`
//   display: block;
//   margin: 0 auto;
//   border-color: var(--black);
// `;

// import { useSelector, useDispatch } from "react-redux";

const Contact = () => {
  //  let color = "#000";
  // const initialValues = {
  //   email: "",
  //   password: "",
  // };

  // const dispatch = useDispatch();

  // const validationSchema = Yup.object({
  //   email: Yup.string().email("Invalid email format").required("Required"),
  //   password: Yup.string().required("Required"),
  // });

  // const onSubmit = (values) => {
  //   console.log("Form data", values);
  //   dispatch(signUp(values));
  // };

  return (
    <LayOut>
      <Header exit="exit" variants={title} initial="hidden" animate="show">
        Contact me
      </Header>
      {/* <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form>
              <FormikControl
                control="input"
                type="email"
                label="Email"
                name="email"
              />
              <FormikControl
                control="input"
                type="password"
                label="Password"
                name="password"
              />
              
                  <FormikControl
                    control="textarea"
                    type="tet"
                    label="Say Something About Me"
                    name="secret"
                  />

                  <Button type="submit" disabled={!formik.isValid}>
                    {isLoading ? (
                      <PulseLoader
                        color={color}
                        loading={true}
                        css={override}
                        size={10}
                      />
                    ) : (
                      <>Submit</>
                    )}
                  </Button>
            </Form>
          );
        }}
      </Formik> */}
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
