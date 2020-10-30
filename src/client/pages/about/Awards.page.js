import React from "react";
import { Helmet } from "react-helmet";

export const AwardsPage = () => {
  return (
    <div className="home">
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>bellaciao</title>
        </Helmet>
        <h1>Bella Ciao</h1>
        <h2>
          выездной пейнтбольный клуб Bella Ciao
        </h2>
        {/* <img className="home-logo" src={logo} alt="happy broiler logo" /> */}
      </div>
    </div>
  );
};
