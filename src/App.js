import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import "./App.css";

import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";

class App extends Component {
  render() {
    return (
      <main className="container">
        <Movies />
        <Switch>
          <Route path="/movies" compoent={Movies} />
          <Route path="/customers" compoent={Customers} />
          <Route path="/rentals" compoent={Rentals} />
          <Route path="/not-found" compoent={NotFound} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    );
  }
}

export default App;
