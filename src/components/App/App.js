import React, { Component, Fragment } from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Calendar from "../Calendar/Calendar";
import Editor from "../Editor/Editor";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        face: ""
      },
      happyMessage: "hidden"
    };
    this.handlerHappyFace = this.handlerHappyFace.bind(this);
  }

  handlerHappyFace (event) {
    this.updateForm(event)
    this.showHappyMessage(event)
  }
  
  updateForm(event) {
    const {value} =  event.currentTarget;
    const {name} =  event.currentTarget;
    this.setState(prevState => ({ form: {...prevState.form, [name]: value }}));
  }

  showHappyMessage() {
    if (this.state.form.face === ":(") {
      this.setState(prevState => {return {...prevState, happyMessage: ""}})
    }
    else if (this.state.form.face === ":)") {
      this.setState(prevState => {return {...prevState,  happyMessage: "hidden"} })
    }
    else if (this.state.form.face === "") {
      this.setState(prevState => {return {...prevState,  happyMessage: "hidden"} })
    }
    else {this.setState(prevState => {return {...prevState,  happyMessage: "hidden"} }) }
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
            render={routerProps => <Editor match={routerProps.match} 
            form={this.state.form}
            handlerHappyFace={this.handlerHappyFace}
            happyMessage={this.state.happyMessage}
            />}
          />
        </Switch>
      </div>
    );
  }
}


export default App;