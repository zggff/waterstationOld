import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import useStyles from "isomorphic-style-loader/useStyles";
import s from "./Navbar.component.scss";

export const Navbar = ({sticky}) => {
  
  useStyles(s);
  let [navActive, setNavActive] = useState(false);
  let [checkboxUnderEverything,setCheckboxUnderEverything] = useState(false);
  let [buttonsPoppedOut,setButtonsPoppedOut] = useState({
    goods:false,
    about:false,
  });
  const changeNav = () => {
    setNavActive(!navActive);
  };
  
  return (
    <nav className={"sticked"}>
      <input type="checkbox" id="check" style={{zIndex: checkboxUnderEverything?"-100":""}} checked={navActive} readOnly onClick={()=>{
        setCheckboxUnderEverything(true);
        changeNav();
      }}
          
      />
      <label onClick={changeNav} className="checkbtn">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="bars"
          className="svg-inline--fa fa-bars fa-w-14"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
          ></path>
        </svg>
      </label>
      <div className="click" style={{
        position:"fixed",
        // top: 0,
        // left: 0,
        width: "100vw",
        height: "100vh",
        opacity: 0,
        display: navActive?"":"none"
      }} onClick={changeNav}>

      </div>
      
      <ul >
        <li>
          <NavLink onClick={changeNav} to="/" exact>главная</NavLink>
        </li>
        <li className="dropdown">
        <NavLink to="/about"  className="dropdown-btn" style={{
              backgroundColor: buttonsPoppedOut.about?"var(--button-primary":"",
            }}  onClick={(event)=>{
              event.preventDefault();
              var currentState = JSON.parse(JSON.stringify(buttonsPoppedOut));
              currentState.about = !currentState.about;

              setButtonsPoppedOut(currentState);
              
        }}><a>{buttonsPoppedOut.about?"о компании ▲":"о компании ▼"}</a>

              <div className="dropdown-content" style={{
                 display: buttonsPoppedOut.about?"block":"none"
                }
              }>
                <a className="hello">{buttonsPoppedOut.about?"о компании ▲":"о компании ▼"}</a>
                <NavLink  onClick={changeNav} to="/about/history" exact>история</NavLink>
                <NavLink onClick={changeNav} to="/about/production">производство</NavLink>
                <NavLink onClick={changeNav} to="/about/awards">награды</NavLink>
                <NavLink onClick={changeNav} to="/about/sertificates">сертификаты</NavLink>
            </div></NavLink> 
        </li> 
        <li className="dropdown">
            <NavLink to="/goodsAndServices" style={{
              backgroundColor: buttonsPoppedOut.goods?"var(--button-primary":"",
            }}  className="dropdown-btn" onClick={(event)=>{
              event.preventDefault();
              var currentState = JSON.parse(JSON.stringify(buttonsPoppedOut));
              currentState.goods = !currentState.goods;

              setButtonsPoppedOut(currentState);
              
            }}><a>товары и услуги {buttonsPoppedOut.goods?"▲":"▼"}</a>
              <div className="dropdown-content" style={{
                 display: buttonsPoppedOut.goods?"block":"none",

                }
              }>
                <a className="hello">товары и услуги {buttonsPoppedOut.goods?"▲":"▼"}</a>
                <NavLink  onClick={changeNav} to="/goodsAndServices/water">вода</NavLink>
                <NavLink onClick={changeNav} to="/goodsAndServices/coolers">кулеры</NavLink>
                <NavLink onClick={changeNav} to="/goodsAndServices/repair">ремонт кулеров</NavLink>
                <NavLink onClick={changeNav} to="/goodsAndServices/replace">замена воды</NavLink>
            </div></NavLink> 
        </li>
        {/* <li>
          <NavLink onClick={changeNav} to="/contact">обратная связь</NavLink>
        </li> */}
        <li>
          <NavLink onClick={changeNav} to="/contact">контакты</NavLink>
        </li>
        <li>
          <NavLink onClick={changeNav} to="/articles">статьи</NavLink>
        </li>
      </ul>
    </nav>
  );
};
