import React from "react";
import { Helmet } from "react-helmet";

export const ArticlesPage = () => {
  var htmlCode = "<b>hello z<hr></hr></b>";
  return (
    <div className="home">
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>bellaciao</title>
        </Helmet>
        <h1>Bella Ciao</h1>
        <h2>
          выездной пейнтбольный клуб Bella Ciao fwefew
        </h2>
        <div dangerouslySetInnerHTML={{
          __html: htmlCode
        }}></div>
        {/* <img className="home-logo" src={logo} alt="happy broiler logo" /> */}
      </div>
    </div>
  );
};
