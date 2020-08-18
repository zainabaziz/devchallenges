import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 400px;

  margin: 12px;

  padding: 12px;
  border-radius: 8px;
  background: #fff;
  /* background: silver; */

  :hover {
    transform: scale(1.01);
  }

  img {
    width: 100%;
  }

  h3{
      margin: 20px 0px;
  }

  button {
    /* background: red;
    cursor: pointer;
    padding: 8px; */
    background: #f7542e;
    color: #fff;
    border: none;
    padding: 12px;
    width: 103px;

    :hover {
      opacity: 0.8;
    }
  }
`;

const ChallengeCard = (props) => {
  const { imageUrl, title, path,  } = props;

  return (
    <Container>
      <img src={imageUrl} alt='imageUrl' />
      <h3>{title}</h3>
      {/* <p>{description}</p> */}
      <Link to={path}>
        <button>View</button>
      </Link>
    </Container>
  );
};

export default ChallengeCard;
