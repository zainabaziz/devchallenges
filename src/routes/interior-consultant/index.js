import React from "react";
import styled from "styled-components";
import img7 from "../../assets/photo7.png";
import img8 from "../../assets/photo8.png";

const Container = styled.div`
  height: 100%;
  background: black;
  color: white;
  padding: 42px 74px;
  font-family: "Montserrat", sans-serif;

  a {
    cursor: pointer;
  }

  footer {
    color: #a9a9a9;
    font-size: 12px;
    text-align: center;
  }

  /* display:flex;
justify-content:center; */

  header {
    display: flex;
    justify-content: space-between;

    button {
      background: none;
      color: #fff;
      font-size: 12px;
      font-weight: 200;
      border: 1px solid #fff;
      padding: 8px;
      text-transform: uppercase;
      opacity: 0.5;
    }

    menu {
      display: flex;
      justify-content: space-evenly;
      /* width:100%; */

      a {
        margin-right: 86px;
        color: #fff;
        background: none;

        :last-child {
          margin-right: 0;
        }
      }
    }
  }

  .content {
    width: 100%;
    /* height:100%; */

    display: flex;
    justify-content: center;
    margin-bottom: 250px;
    margin-top: 117px;

    .left {
      width: 30%;
      /* padding-right: 87px; */

      h3 {
        font-weight: normal;
        font-size: 48px;
      }

      p {
        margin: 35px 0;
        font-weight: 300;
        width: 80%;
        opacity: 0.5;
      }

      a {
        font-weight: 600;
        font-size: 18px;
      }
    }

    .right {
      width: 70%;
      display: flex;
      justify-content: center;
      position: relative;

      .banner {
        width: 80%;
        padding-left: 200px;
      }
    }
  }
`;


const UserCard = styled.div`
  color: #fff;
  font-weight: bolder;
  position: absolute;
  /* bottom: 100px; */
  top: 85%;
  right: 30px;
  background: black;
  width: 410px;
  height: 189px;

  h3{

margin-left:26px;

  }

  .info {
    display: flex;

    img {
      border-radius: 50%;
      width: 42px;
      height: 42px;
      padding: 32px;
    }

    .text {

margin-top:35px;


      h4 {
        /* opacity: 0.9; */
        font-weight: 500;
        font-size: 14px;
      }
      p {
        color: #828282;
        font-weight: 500;
        font-size: 12px;
        padding-top:8px;
        padding-bottom:30px;
      }
    }
  }
`;

const InteriorConsultant = () => {
  return (
    <Container>
      <header>
        <button>This Interior</button>
        <menu>
          <a>Home</a>
          <a>Collection</a>
          <a>About</a>
          <a>Contact</a>
        </menu>
      </header>

      <div className="content">
        <div className="left">
          <h3> Mordern interior</h3>
          <p>
            A full-Service residential & commercial interior design and staging
            company offering professional organizing & eco-services.
          </p>
          <a>Read more → </a>
        </div>
        <div className="right">
          <img className="banner" src={img7} />

          <UserCard>
            <div className="info">
              <img src={img8} />
              <div className="text">
                <h4>Aliza Webber</h4>
                <p>Interior designer</p>
              </div>
            </div>
            <h3>Designed in 2020 by</h3>
            <h3> Aliza Webber</h3>
          </UserCard>
        </div>
      </div>
      <footer>Zainab @ DevChallenges.io</footer>
    </Container>
  );
};

export default InteriorConsultant;
