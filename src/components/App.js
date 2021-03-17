import React from 'react';
import Header from "./Header";


function App() {
  let name = "Wally";

  let age = 31;

  return (
    <div className="App ">
      <Header
        text="howdy"
        name={name}
        age={age}
        // demonstrating that a key with no value is null and will assume true
        nerd
      />
      App Layer Components
    </div>
  );
}

export default App;
