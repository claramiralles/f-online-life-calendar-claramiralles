import React, { Component, Fragment } from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Calendar from "../Calendar/Calendar";
import Editor from "../Editor/Editor";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faces: []
    };
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={routerProps => <Calendar match={routerProps.match} />}
          />
          <Route
            path="/editor"
            render={routerProps => <Editor match={routerProps.match} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
