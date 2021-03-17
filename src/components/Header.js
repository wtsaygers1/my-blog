import React from "react";

function Header(props) {


  console.log(props)
  return (
    <ul className="nav nav-pills">
      <li className="nav-item">
        <a className="nav-link active">{props.pages[0]}</a>
      </li>
      <li className="nav-item">
        <a className="nav-link">{props.pages[1]}</a>
      </li>
      <li className="nav-item">
        <a className="nav-link">{props.pages[2]}</a>
      </li>
      <li className="nav-item">
        <a className="nav-link">{props.pages[3]}</a>
      </li>
      <li className="nav-item">
        <a className="nav-link">{props.pages[4]}</a>
      </li>
    </ul>
  )
}

export default Header;