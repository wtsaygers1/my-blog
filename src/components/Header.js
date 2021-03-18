import React from "react";

function Header(props) {
  return (
    <ul className="nav nav-pills">
      {
        //the map method is great instead of a for loop in react
        props.pages.map((item, index) => {
          {/* key is a prop needed to add anytime you dynamically render */ }
          return (
            <li className="nav-item">
              <a
                onClick={() => props.setPage(index)}
                className={"nav-link " + (props.currentPage === index ? "active" : "")}
              >
                {item}
              </a>
            </li>
          )
        })
      }
    </ul>

  )
}

export default Header;