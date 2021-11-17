import React from "react";
import "./App.css";

function App() {
  const name = "리액트";
  return (
    <>
      {/*주석주석*/}
      <div
        className="react" //주석
      >
        {name}
      </div>
      <input></input>
      <input></input>
    </>
  );
}

export default App;
