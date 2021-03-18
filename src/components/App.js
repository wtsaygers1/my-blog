import React, { Component } from 'react';
import Header from "./Header";


class App extends Component {

  constructor() {
    super();
    this.pages = [
      { readableName: "Home", url: "home" },
      { readableName: "About Me", url: "about-me" },
      { readableName: "Blog", url: "blog" },
      { readableName: "Images", url: "images" },
      { readableName: "Links", url: "links" }
    ];
    this.state = {
      currentPage: 0,
      name: ""
    }
    this.setPage = this.setPage.bind(this)
  }
  setPage(newPageNum){
    console.log(newPageNum)
    this.setState({ currentPage: newPageNum })
  }
  componentDidMount() {
    let name = window.localStorage.getItem("name")

    console.log(name)

    if (name) {
      // do something
      console.log("found the name, ", name)
      this.setState({ name })
    } else {
      console.log("did not find the name, creating new name")
      window.localStorage.setItem("name", "Wally")
    }
  }

  render() {
    return (
      <div className="App container">
        <Header
        pages={this.pages}
        currentPage={this.state.currentPage}
        setPage={this.setPage}
        name={this.state.name}
      >
        unformatted text
       </Header>
      </div>
    )
  }
}

export default App;
