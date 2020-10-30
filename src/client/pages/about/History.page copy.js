import React from "react";
import { Helmet } from "react-helmet";

export const GoodsPage = () => {
  return (
    <div className="home">
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>bellaciao</title>
        </Helmet>
        <h1>Bella Ciao</h1>
        <h2>
          увлекательная история нашей компании
        </h2>
        {/* <img className="home-logo" src={logo} alt="happy broiler logo" /> */}
      </div>
    </div>
  );
};
