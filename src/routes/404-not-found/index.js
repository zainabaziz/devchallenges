import React from "react";
import styled from "styled-components";
import Graphic from "../../assets/scarecrow.png";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  height: 100%;

  #title {
    position: absolute;
    left: 77px;
    top: 40px;
    font-weight: bold;
  }

  #footer {
    position: absolute;
    left: 607px;
    bottom: 20px;
    font-size: 14px;
  }

  .column {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .content-wrapper {
    width: 70%;

    h1 {
      color: #333333;
      font-size: 54px;
      font-weight: bold;
    }

    p {
      color: #4f4f4f;
      font-weight: normal;
      font-size: 24px;
      margin: 36px 0;
    }

    button {
      background: #333333;
      font-weight: bold;
      font-size: 12px;
      font-family: "Space Mono", monospace;
      color: #ffffff;
      text-transform: uppercase;
      padding: 24px 28px;
      cursor: pointer;
    }
  }

  .scarecrow {
    width: 540px;
  }
`;

const NotFound = () => {
  return (
    <Container>
      <p id="title"> 404 not found </p>
      <div className="column">
        <img src={Graphic} className="scarecrow" alt="scarecrow" />
      </div>

      <div className="column ">
        <div className="content-wrapper">
          <h1>I have bad news for you</h1>
          <p>
            The page you are looking for might be removed or is temporarily
            unavailable
          </p>
          <Link to="/">
            <button>Back to homepage</button>
          </Link>
        </div>
      </div>
      <p id="footer">Zainab @ DevChallenges.io</p>
    </Container>
  );
};

export default NotFound;
