import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import withStyles from "isomorphic-style-loader/withStyles";
import s from "./App.scss";
import { Navbar } from "./components/Navbar.components";


import { HomePage } from "./pages/Home.page";
import { AboutPage } from "./pages/about/About.page";
import { ContactPage } from "./pages/Contact.page";
import { CommentsPage } from "./pages/Comments.page";
import { GoodsPage } from "./pages/goodsAndServices/Goods.page";
import { ArticlesPage } from "./pages/Articles.page";

import { Footer } from "./components/Footer.components";
import { Header } from "./components/Header.component";

class App extends React.Component {
  render() {
    return ( 
      <div id="app">
        <Navbar/>

        <Switch>
          <Route path="/" exact render={() => (
            <Header fullScreen={true}/>
        )} />        
        </Switch>
        


        <div className="content">
            <Switch>
              <Route path="/" exact component={HomePage}/>
              <Route path="/contact" component={ContactPage} />
              <Route path="/goodsAndServices" component={GoodsPage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/comments" component={CommentsPage} />
              <Route path="/articles" component={ArticlesPage} />
              <Redirect to="/" />
            </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}
export default withStyles(s)(App);
