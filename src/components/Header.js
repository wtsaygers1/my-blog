import React from "react";

function Header(props) {

  if(props.nerd){
    console.log(`he is a nerd`)
  } else {
    console.log(`he is not a nerd`)
  }

  console.log(props)
  return (
    // a way to put html elements next to each other in React
    // <React.Fragment>
    // <> and </> are short hand for Reach.Fragment
    <>
      <h1>
        Hello {props.name}
      </h1>
      <h3>
        {props.name} is {props.age} years old
    </h3>
    {/* </React.Fragment> */}
    </>
  )
}

export default Header;