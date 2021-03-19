import React from "react";

function Header(props) {

  // console.log(window.localStorage.getItem("name"))
  // window.localStorage.setItem("animal", "dog")
  // window.localStorage.removeItem("animal")
  // window.localStorage.clear()

  return (
    <>
      <ul className="nav nav-pills">
        {
          //the map method is great instead of a for loop in react
          props.pages.map((item, index) => {
            {/* console.log(item) */ }
            {/* key is a prop needed to add anytime you dynamically render */ }
            return (
              <li className="nav-item" key={index}>
                <a
                  href={"#"}
                  onClick={() => props.setPage(index)}
                  className={"nav-link " + (props.currentPage === index ? "active" : "")}
                >
                  {item.readableName}
                </a>
              </li>
            )
          })
        }
        {/* <div className="btn btn-secondary">
          {props.children}
        </div> */}
      </ul>
    </>
  )
}

export default Header;