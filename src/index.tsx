import ReactDOM from "react-dom";
import React from "react";

class App extends React.Component
{
  render() {
    return (
      <h1>hello</h1>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))