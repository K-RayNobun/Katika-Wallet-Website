import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router-dom";
import pic from "./../../Assets/Img/404.png";

export default function Error() {
  return (
    <Styles>
      <Container className="error__main">
        <img src={pic} className="error__image" />
        <h1>Oops! This page cannot be found.</h1>
        <p>
          We cannot find the page you are looking for. You can return to the
          home page.
        </p>
        <Link to={"/"} className="backbtn">
          Back To Home Page
        </Link>
      </Container>
    </Styles>
  );
}

const Styles = styled.div`
  .error__main {
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .error__image {
    max-width: 26.66667rem;
    width: 80%;
    margin-bottom: 25px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    pointer-events: none;
    user-select: none;
  }
  h1 {
    font-family: poppins, mirza, sans-serif;
    font-size: 30px;
    font-weight: 600;
    line-height: 42px;
    color: rgb(32, 36, 40);
    text-align: center;
  }
  p {
    font-family: poppins, mirza, sans-serif;
    font-size: 15px;
    font-weight: 400;
    line-height: 30px;
    text-align: center;
  }
  .backbtn {
    border: 0px;
    background-color: #8815ae;
    color: white;
    padding: 15px 25px;
    border-radius: 7px;
    text-decoration: none;
    &:hover {
      opacity: 0.9;
    }
  }
`;
