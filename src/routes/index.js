import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
// import Menu from "./Menu";
import NotFound from "./404-not-found";
import Main from "./Main";
import TeamPage from "./team-page";
import InteriorConsultant from "./interior-consultant";
import Recipe from "./recipe-page";
import MyGallery from "./my-gallery";

// const Container = styled.div`
//   display: flex;
// `;

const Routes = () => {
  return (
    <>
      <Switch>
        {/* <Route exact path="/" component={main} /> */}
        <Route exact path="/404-Not-Found" component={NotFound} />
        <Route exact path="/" component={Main} />
        <Route exact path="/team-page" component={TeamPage} />
        <Route exact path="/interior-consultant" component={InteriorConsultant} />
        <Route exact path="/recipe-page" component={Recipe} />
        <Route exact path="/my-gallery" component={MyGallery} />

        
      </Switch>
    </>
  );
};

export default Routes;
