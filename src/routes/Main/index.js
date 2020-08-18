import React from "react";
import styled from "styled-components";

import ChallengeCard from "../../components/ChallengeCard";

const Container = styled.div`
  /* display: flex; */
  /* flex-direction: row; */
  /* justify-content: center; */
  /* margin: 0px 30px; */

  height: 100%;
  background: #f9fafb;
  padding: 18px;

  h1 {
    text-align: center;
    margin-bottom: 18px;
  }

  .cards-container {
    display: flex;
    justify-content: center;
  }
`;

const Challenges = [
  {
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/devchallenges-1234.appspot.com/o/challengesDesigns%2F404PageThumbnail.png?alt=media&token=81f7c567-c0bc-446f-a549-07eeda31c5ef",
    title: "404 Not Found",
    path: "/404-not-found",
  },

  {
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/devchallenges-1234.appspot.com/o/challengesDesigns%2FmyTeamThumbnail.png?alt=media&token=3dc1bba0-52b9-440d-8a54-fa31ec7c84d8",
    title: "My team page",
    path: "/team-page",
  },

  {
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/devchallenges-1234.appspot.com/o/challengesDesigns%2FinteriorConsultantThumbnail.png?alt=media&token=fb5f8229-8eb9-4d70-b0d4-fbd2829a0cf0",
    title: "Interior Consultant",
    path: "/interior-consultant",
  },

  {
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/devchallenges-1234.appspot.com/o/challengesDesigns%2FrecipeBlogThumbnail.png?alt=media&token=2d696d3c-a8cb-4c7c-907b-561ae1144cc9",
    title: "Recipe page",
    path: "/recipe-page",
  },

  {
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/devchallenges-1234.appspot.com/o/challengesDesigns%2FGalleryThumbnail.png?alt=media&token=92894792-41d1-4d99-8cbb-e828322c87fd",
    title: "My Gallery",
    path: "/my-gallery",
  },
];

const Main = () => {
  return (
    <Container>
      <h1>Dev-Challenges</h1>

      <div className="cards-container">
        {Challenges.map(({ imageUrl, title, path }) => (
          <ChallengeCard imageUrl={imageUrl} title={title} path={path} />
        ))}

        {/* <ChallengeCard
          imageUrl={
            "https://firebasestorage.googleapis.com/v0/b/devchallenges-1234.appspot.com/o/challengesDesigns%2F404PageThumbnail.png?alt=media&token=81f7c567-c0bc-446f-a549-07eeda31c5ef"
          }
          description="404 Not Found"
          path={"/404-Not-Found"}
        /> */}
      </div>

      {/* <div className="div-1">
        <img src="https://firebasestorage.googleapis.com/v0/b/devchallenges-1234.appspot.com/o/challengesDesigns%2F404PageThumbnail.png?alt=media&token=81f7c567-c0bc-446f-a549-07eeda31c5ef" />
        <p>404-Not-Found page</p>
        <Link to="/404-Not-Found">
          <button>View</button>
        </Link>
      </div> */}
      {/* <div className="div-2">this is div 2</div>
      <div className="div-3">this is div 3</div> */}
    </Container>
  );
};

export default Main;
