import React from "react";
import useStyles from "isomorphic-style-loader/useStyles";
// import s from "../App.scss";
import s from "./Footer.component.scss";

export const Footer = () => {
  useStyles(s);
  return (
    <footer className="footer">
      <p>2020 г. ООО «АкваЭкспресс» 140400 Московская область, Коломна, ул. Октябрьской революции, 429Б</p>
      <p>Интернет-магазин питьевой воды и оборудования - кулеры, пурифайеры, аксессуары Служба доставки воды в Подмосковье по городам Коломна, Луховицы, Воскресенск, Егорьевск, Шатура, Москва</p>
    </footer>
  );
};
