import React from "react";
import { Helmet } from "react-helmet";
import { Redirect, Route, Switch } from "react-router";

import {WaterPage} from "./Water.page";
import {CoolersPage} from "./Coolers.page";
import {RepairCoolerPage} from "./RepairCooler.page";
import {ReplaceWaterPage} from "./ReplaceWater.page";


export const GoodsPage = () => {
  return (
    <div className="home">
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>bellaciao</title>
        </Helmet>
        <div>
            <Switch>
              <Route path="/goodsAndServices/water" component={WaterPage}/>
              <Route path="/goodsAndServices/coolers" component={CoolersPage}/>
              <Route path="/goodsAndServices/repair" component={RepairCoolerPage}/>
              <Route path="/goodsAndServices/replace" component={ReplaceWaterPage}/>
              <Redirect to="/goodsAndServices/water"/>
            </Switch>
        </div>
      </div>
    </div>
  );
};
