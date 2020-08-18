import React from "react";
import styled from "styled-components";
import profilePic from "../../assets/profilePhoto.png";
import pic10 from "../../assets/photo10.png";
import pic11 from "../../assets/photo11.png";
import pic12 from "../../assets/photo12.png";
import pic13 from "../../assets/photo13.png";
import pic14 from "../../assets/photo14.png";
import pic15 from "../../assets/photo15.png";


const Container = styled.div`
  display: flex;
  justify-content: center;

  .wrapper {
    /* display:flex;
flex-direction:column;
justify-content:center;
align-items:center; */
    width: 900px;
    margin-top: 40px;

    h3 {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      margin: 10px 0px;
    }

    p {
      color: #a9a9a9;
      font-family: Montserrat;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
    }

    footer {
      display: flex;
      justify-content: center;
      color: #a9a9a9;
      font-family: Montserrat;
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      margin:65px;
      opacity:0.7;
    }

  }

  .user-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #profile-pic {
    width: 120px;
    height: 120px;
    border-radius: 40px;
  }

  .feed {
    display: flex;
    width: 60%;
    /* justify-content: space-evenly; */
    justify-content: center;
    margin: 20px 0px;
    margin-bottom: 55px;
  }

  .boxes {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 24px;
    background: #e5e5e5;
    border-radius: 16px;
    width: 96px;
    height: 58px;
    font-family: Montserrat;

    h4 {
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
    }

    h5 {
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
    }
  }

  .gallery {
    /* background: pink; */
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* height: 100vw; */
    /* height:100%;  */

    img {
      border-radius: 22px;
      /* margin-right: 25px; */
      margin-bottom: 30px;
      height: 280px;
    }
  }

  .top-portion {
    display: flex;
    justify-content: flex-start;
    /* align-items:center; */
    width: 100%;
  }

  .bottom-portion {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .left-side {
    width: 87%;
  }

  .left-side-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .left-side-top {
    width: 100%;
    /* flex:1; */
    display: flex;
    justify-content: flex-start;
  }

  .left-side-bottom {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }

  .right-side {
    width: 33%;
    display: flex;
    justify-content: flex-start;
  }
`;

const MyGallery = () => {
  return (
    <Container>
      <div className="wrapper">
        <div className="user-card">
          {/* this is the user card */}
          <img id="profile-pic" src={profilePic} />
          <h3>Rodney Cotton</h3>
          <p>Helsinki, Finland</p>
          <div className="feed">
            <div className="boxes">
              <h4>100 </h4>
              <h5>Posts</h5>
            </div>
            <div className="boxes">
              <h4> 2,242 </h4>
              <h5>Follower</h5>
            </div>
            <div className="boxes">
              <h4>1,432 </h4>
              <h5>Following</h5>
            </div>
          </div>
        </div>
        <div className="gallery">
          <div className="top-portion">
            <img
              src={pic10}
              style={{ width: "31%", height: "auto", marginRight: "35px" }}
            />
            <img src={pic11} style={{ width: "62%" }} />
          </div>
          <div className="bottom-portion">
            <div className="left-side">
              <div className="left-side-container">
                <div className="left-side-top">
                  <img src={pic12} style={{ width: "94%" }} />
                </div>
                <div className="left-side-bottom">
                  <img
                    src={pic15}
                    style={{ width: "44%", marginRight: "35px" }}
                  />
                  <img src={pic14} style={{ width: "44%" }} />
                </div>
              </div>
            </div>

            <div className="right-side">
              <img src={pic13} style={{ width: "90%", height: "600px" }} />
            </div>
          </div>
        </div>
        <footer>Zainab @ DevChallenges.io</footer>
      </div>
    </Container>
  );
};

export default MyGallery;
