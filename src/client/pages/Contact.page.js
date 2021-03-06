import React from "react";
import { Helmet } from "react-helmet";
import logo from "../../images/happy-broiler-logo.svg";

export const ContactPage = () => {
  return (
    <div className="home">
      <div>
        <Helmet>ц
          <meta charSet="utf-8" />
          <title>bellaciao</title>
        </Helmet>
        <h1>Контакты</h1>
        <p><b>ООО «АкваЭкспресс»</b></p>
        <p>140400, Московская область, г. Коломна, ул. Октябрьской революции, д. 429Б.</p>
        <p><b>Телефоны:</b> +7 (496) 618-84-54, +7 (965) 244-03-19, +7 (496) 610-11-11 бухгалтерия</p>
        <p>Прием заказов с 9:00 до 17:00.</p>
        <p><b>Адреса обменных пунктов по г. Коломна:</b></p>
        <ul>
          <li>Союз-Сервис №3 – ул. Зеленая д. 31 (напротив Пединститута)</li>
          <li>Союз-Сервис №6 – ул. Октябрьской революции д. 163а (Городищи)</li>
          <li>ЗАО «Продтовары» №11 – Кирова д. 17</li>
          <li>ЗАО «Продтовары» №14 – Ленина д. 70</li>
          <li>ЗАО «Продтовары» №121 – ул. Октябрьской Революции д. 414</li>
          <li>ЗАО «Продтовары» №32 – ул. Пионерская д. 50 (Болотный)</li>
          <li>Магазин «СМАК» - Песковское шоссе д. 42 (Радужный)</li>
          <li>Магазин «СМАК»-Малинское шоссе д.24а (Городищи) </li>
        </ul>
        {/* <img className="home-logo" src={logo} alt="happy broiler logo" /> */}
      </div>
    </div>
  );
};
