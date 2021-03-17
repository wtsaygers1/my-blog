import React from "react";

function Header(props) {

  return (
    <ul className="nav nav-pills">
      <li className="nav-item">
        <a 
        onClick={() => props.setPage(0)}
        className={"nav-link " + (props.currentPage === 0 ? "active" : "")}
        >
        {props.pages[0]}
        </a>
      </li>
      <li className="nav-item">
        <a 
        onClick={() => props.setPage(1)}
        className={"nav-link " + (props.currentPage === 1 ? "active" : "")}
        >
        {props.pages[1]}
        </a>
      </li>
      <li className="nav-item">
        <a 
        onClick={() => props.setPage(2)}
        className={"nav-link " + (props.currentPage === 2 ? "active" : "")}
        >
          {props.pages[2]}
        </a>
      </li>
      <li className="nav-item">
        <a 
        onClick={() => props.setPage(3)}
        className={"nav-link " + (props.currentPage === 3 ? "active" : "")}
        >
          {props.pages[3]}
        </a>
      </li>
      <li className="nav-item">
        <a 
        onClick={() => props.setPage(4)}
        className={"nav-link " + (props.currentPage === 4 ? "active" : "")}
        >
          {props.pages[4]}
        </a>
      </li>
    </ul>
  )
}

export default Header;