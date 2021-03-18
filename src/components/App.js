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
      currentPage: 0
    }
    this.setPage = this.setPage.bind(this)
  }
  setPage(newPageNum){
    console.log(newPageNum)
    this.setState({currentPage: newPageNum})
  }

  render() {
    return (
      <div className="App container">
        <Header
        pages={this.pages}
        currentPage={this.state.currentPage}
        setPage={this.setPage}
      >
        unformatted text
       </Header>
      </div>
    )
  }
}

export default App;
