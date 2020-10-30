import React, {useEffect, useState} from "react";
import useStyles from "isomorphic-style-loader/useStyles";

import background_image from "../../images/1920_1080_20100422013404207695.jpg";
import { Navbar } from "./Navbar.components";
// import { WindowDimension } from "../hooks/WindowDimension.hook"

// import s from "../App.scss";
import s from "./Header.component.scss";
// import useSticky from "../hooks/UseSticky";

export const Header = (props) => {
  useStyles(s);

 
  // useStyles(s);
  return (
    <header>
      <div style={{
        backgroundImage: `url(${background_image})`,
        // height: props.fullScreen?`100vh`:"",
      }} className="header">
    </div>
    </header>
    
  );
};
