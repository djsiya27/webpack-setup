import React from "react";
import reactDom from "react-dom";

function App() {
  return <h1>Hello from React</h1>;
}

reactDom.render(<App />, document.getElementById("root"));
