import React, { useState, useEffect } from 'react';
import Header from "./Header";
import BlogPage from './BlogPage';
import blogData from './blogData.json';
// import BlogPage1 from './BlogPage1';
import Image from "./Image";
// import Body from './Body';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';


function App() {
  let pages = [
    { readableName: "Home", url: "home" },
    { readableName: "About Me", url: "about-me" },
    { readableName: "Blog", url: "blog" },
    { readableName: "Images", url: "images" },
    { readableName: "Links", url: "links" }
  ];

  const [currentPage, setCurrentPage] = useState(0)

  // component did update
  const setPage = (newPageNum) => {
    setCurrentPage(newPageNum)
      window.localStorage.setItem('currentPage', JSON.stringify(newPageNum))
  }

  // component did mount
  useEffect(() => {
    let localStoragePage = window.localStorage.getItem('currentPage')
    if (localStoragePage !== currentPage) {
      setCurrentPage(JSON.parse(localStoragePage))
    }
  }, [currentPage])

  return (
    <div className="App container">
    <Router>
      <Header
        pages={pages}
        currentPage={currentPage}
        setPage={setPage}
      />
      {
        blogData ? blogData.map(
        (b, i) => {
          return (
            <>
            <Link to={`/week/${i}`}>
              Week {i}
            </Link>
            {i < blogData.length - 1 && ' - '}
          </>)
        })
        :'loading'
      }

      <Switch>
        {/* do not have to specify true because exact is a truthy value */}
        <Route exact={true} path="/">
          <SimpleComponent />
        </Route>
        <Route path="/image">
          <Image />
        </Route>
        <Route path={`/blogpage/:pageNum`}>
          <BlogPage page={0}/>
        </Route>
      </Switch>
      
      {/* <BlogPage1 /> */}
      {/* <BlogPage page={1}/>
      <BlogPage page={2}/>
      <BlogPage page={3}/> */}
      </Router>
    </div>
  )
}

const SimpleComponent = () =>{
  return (
    <h1>Simple Home Page</h1>
  )
}

export default App;
