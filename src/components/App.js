import React, { Component } from 'react';
import Header from "./Header";


class App extends Component {
// constructor is first thing to be called
  constructor() {
// super to inherit any classes, functions, methods from parent component extending from
    super();
// pages is an array of objects
    this.pages = [
      { readableName: "Home", url: "home" },
      { readableName: "About Me", url: "about-me" },
      { readableName: "Blog", url: "blog" },
      { readableName: "Images", url: "images" },
      { readableName: "Links", url: "links" }
    ];
// define this.state which is an object, but its also inherited from the componenet
// which is brought in from super which means it belongs to react and it is 
// stateful and we can use it and modify it only using setState and this.state
    this.state = {
      currentPage: 0,
    }
// binding function which computer renders everything in constructor and then
// skips all our other functions down to the render function
    this.setPage = this.setPage.bind(this)
  }
  setPage(newPageNum){
    console.log(newPageNum)
    this.setState({ currentPage: newPageNum })
  }
  componentDidMount() {
  // goes to this after the first render
    console.log("in the component did mount method")

    let currentPage = window.localStorage.getItem("currentPage")

    console.log(currentPage)

    if (currentPage) {
      // do something
      console.log("found the currentPage, ")
      // console.log(typeof currentPage)
      this.setState({ currentPage: JSON.parse(currentPage) })
    } else {
      console.log("did not find the currentPage, creating new currentPage instance")
      window.localStorage.setItem("currentPage ", 0)
    }
  }
  componentDidUpdate() {
    // runs this method any time the page is updated
    console.log("in the component did update method", this.state.currentPage)
    window.localStorage.setItem("currentPage", JSON.stringify(this.state.currentPage))
  }

  render() {
  // render method only has one thing which is a return and the return makes
  // what will be displayed initially and then checks any functions in the 
  // constructor
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
