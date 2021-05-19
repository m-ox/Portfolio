  
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Axios from "axios"

import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import PortfolioDetail from "./portfolio/portfolio-detail";
import Auth from "./pages/auth";
import NoMatch from "./pages/no-match";

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    }

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this)
    this.handleUnsuccessfulLogin = this.handleUnsuccessfulLogin.bind(this)
  }

  handleSuccessfulLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    })
  }

  handleUnsuccessfulLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    })
  }

  checkLoginStatus() {
    return Axios.get("https://api.devcamp.space/logged_in", {
      withCredentials: true
    }).then(response => {
      const loggedIn = response.data.logged_in
      const loggedInStatus = this.state.loggedInStatus

      // if logged in and status LOGGED_IN - do nothing
      // if logged in and status NOT_LOGGED_IN - update state to logged in
      // if not logged in and status LOGGED_IN - update state to logged out

      if (loggedIn && loggedInStatus === "LOGGED_IN") {
        return loggedIn
      } else if (loggedIn && loggedInStatus === "NOT_LOGGED_IN") {
        this.setState({
          loggedInStatus: "LOGGED_IN"
        })
      } else if (!loggedIn && loggedInStatus === "LOGGED_IN") {
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN"
        })
      }

    })
    .catch(error => {
      console.log("Server Error", error)
    })
  }

  componentDidMount() {
    this.checkLoginStatus()
  }

  authorizedPages() {
    return [
      <Route path='/blog' component={Blog} />
    ]
  }

  render() {
    return (
      <div className="container">
        <Router>
            <NavigationContainer loggedInStatus={this.state.loggedInStatus} />

            <Switch>
              <Route exact path="/" component={Home} />

              <Route
                path="/auth"
                render={props => (
                  <Auth
                    {...props}
                    handleSuccessfulLogin={this.handleSuccessfulLogin}
                    handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
                  />
                )}  
              />

              <Route path="/about-me" component={About} />
              <Route path="/contact" component={Contact} />
              {this.state.loggedInStatus === "LOGGED_IN" ? this.authorizedPages() : null}
              <Route
                exact
                path="/portfolio/:slug"
                component={PortfolioDetail}
              />
              <Route component={NoMatch} />
            </Switch>
        </Router>
      </div>
    );
  }
}