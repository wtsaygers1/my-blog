import React, { Component } from 'react';
import Header from "./Header";


class App extends Component {

  constructor() {
    super();
    this.pages = ["Home", "About Me", "Blog", "Images", "Links"];
    this.state = {
      currentPage: 1
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
        />
      </div>
    )
  }
}

export default App;
