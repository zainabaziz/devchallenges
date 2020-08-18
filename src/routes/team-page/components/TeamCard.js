import React from "react";
import styled from "styled-components";

const Container = styled.div`
  /* display: flex; */
  width: 276px;
  margin-top: 120px;

  :nth-child(3n - 1) {
    margin-top: 210px;
  }

  .wrapper {
    display: flex;
    img {
      width: 200px;
    }

    p {
      writing-mode: vertical-rl;
      text-orientation: mixed;
      font-size: 12px;
      text-transform: uppercase;
    }
  }

  h3 {
    font-weight: 600;
    font-size: 18px;
  }
`;

const TeamCard = (props) => {
  const { imagePath, name, job } = props;

  return (
    <Container>
      <div className="wrapper">
        <img src={imagePath} alt='imagePath' />
        <p>{job}</p>
      </div>
      <h3>{name}</h3>
    </Container>
  );
};

export default TeamCard;
