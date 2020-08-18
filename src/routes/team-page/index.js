import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
import TeamCard from "./components/TeamCard";
import img1 from "../../assets/photo1.png";
import img2 from "../../assets/photo2.png";
import img3 from "../../assets/photo3.png";
import img4 from "../../assets/photo4.png";
import img5 from "../../assets/photo5.png";
import img6 from "../../assets/photo6.png";



const Container = styled.div`
  background: #fafafa;
  color: black;
  /* height: 100%; */

  display: flex;
  justify-content: center;
  padding: 32px;
  padding-bottom: 0px;

  .content {
    width: 920px;
    margin: 40px;
    margin-bottom: 10px;

    footer {
      color: #a9a9a9;
      font-size: 12px;
      text-align: center;
      margin-top: 200px;
    }
  }

  .header {
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      flex: 1;
    }

    div {
      flex: 1;

      h4 {
        text-transform: uppercase;
      }

      p {
        font-weight: normal;
      }
    }
  }

  .team-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const team = [
  {
    imagePath: img1,
    name: "Bill Mahoney",
    job: "Product owner",
  },
  {
    imagePath: img2,
    name: "Saba Cabrera",
    job: "Art director",
  },

  {
    imagePath: img3,
    name: "Shae Le",
    job: "Tech Lead ",
  },

  {
    imagePath: img4,
    name: "Skylah Lu",
    job: "UX Designer",
  },

  {
    imagePath: img5,
    name: "Griff Richards",
    job: " Developer",
  },
  {
    imagePath: img6,
    name: "Stan John ",
    job: "Developer",
  },
];

const TeamPage = () => {
  return (
    <Container>
      <div className="content">
        <div className="header">
          <h1>The creative crew</h1>
          <div>
            <h4>Who we are</h4>
            <p>
              We are team of creatively diverse. driven. innovative individuals
              working in various locations from the world.
            </p>
          </div>
        </div>
        <div className="team-container">
          {team.map(({ imagePath, name, job }) => (
            <TeamCard imagePath={imagePath} name={name} job={job} />
          ))}
        </div>
        <footer>Zainab @ DevChallenges.io</footer>
      </div>
    </Container>
  );
};

export default TeamPage;
