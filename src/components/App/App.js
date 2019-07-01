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
        face: "",
      },
      happyMessage: "hidden"
    };
    // this.showHappyMessage = this.showHappyMessage.bind(this);
    this.updateForm = this.updateForm.bind(this);
  }
 
  updateForm(event) {
    const value =  event.currentTarget.value;
    const name =  event.currentTarget.name;
    this.setState(prevState => ({ form: {...prevState.form, [name]: value }}));
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
            updateForm={this.updateForm}
            // showHappyMessage={showHappyMessage}
            // happyMessage={happyMessage}
            />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;



  // showHappyMessage (event) {
  //   const happyButtonClicked = event.currentTarget.value;
  //   if (happyButtonClicked === 'happy') {
  //     this.setState (prevState => {
  //       return {
  //         ...prevState,
  //         happyMessage: ""
  //       }
  //     })
  //   }
  

