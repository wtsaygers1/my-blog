import React, { Component } from 'react';
import Header from "./Header";


class App extends Component {

  constructor() {
    super();
    this.pages = ["Home", "About Me", "Blog", "Images", "Links"];
  }

  render() {
    return (
      <div className="App container">
        <Header
        pages={this.pages}
        />
      </div>
    )
  }
}

export default App;
