import React, { Component } from 'react';
import Header from "./Header";


class App extends Component {

  constructor() {
    super();
    this.Waltsname = "Wally";
    this.age = 31
    // possibly could be updated in future for site visits
    
    //  state must be defined in the constructor and state is immutable meaning we
    // can define things and they will stay forever until we use a special method to
    // rename them
    this.state = {
      clicked: 0
    }
    // best practice is to do everything in the constructor b/c easier to reuse
    // a method
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler(e){
    // this.setState is the only way to modify the state of your component
    this.setState({clicked: this.state.clicked + 1})
  }

  render() {
    return (
      <div className="App ">
        <Header
          text="howdy"
          name={this.Waltsname}
          age={this.age}
          // demonstrating that a key with no value is null and will assume true
          nerd
        />
      App Layer Components
      <div>
        clicked: {this.state.clicked}
      </div>
      <button 
        type="button" 
        className="btn btn-primary" 
        // another way to do what we did in the constructor
        // onClick={this.clickHandler.bind(this)}
        onClick={this.clickHandler}
        >
        click me!
        </button>
      </div>
    )
  }
}

export default App;
