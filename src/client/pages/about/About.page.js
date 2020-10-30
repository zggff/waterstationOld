import React from "react";
import { Helmet } from "react-helmet";
import { Redirect, Route, Switch } from "react-router";
import {HistoryPage} from "./History.page";
import {AwardsPage} from "./Awards.page";
import {SertificatesPage} from "./Sertificates.page";
import {ProductionPage} from "./Production.page";

export const AboutPage = () => {
  return (
    <div className="home">
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>bellaciao</title>
        </Helmet>
        <div>
            <Switch>
              <Route path="/about/history" component={HistoryPage}/>
              <Route path="/about/production" component={ProductionPage}/>
              <Route path="/about/awards" component={AwardsPage}/>
              <Route path="/about/sertificates" component={SertificatesPage}/>
              <Redirect to="/about/history"/>
            </Switch>
        </div>
        {/* <img className="home-logo" src={logo} alt="happy broiler logo" /> */}
      </div>
    </div>
  );
};
