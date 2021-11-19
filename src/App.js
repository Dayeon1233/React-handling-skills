import React, { Component } from "react";
import LifeCycleSample from "./LifeCycleSample";
import ErrorBoundary from "./ErrorBoundary";

function getRandomColor(){
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
  //61777215는 hex로 표현하면 ffffff 이다. 
}
class App extends Component {
  state = {
    color : '#000000'
  }
  
  handleClick = () => {
    this.setState({
      color:getRandomColor()
    });
  }

  render(){
    return (
      <div>
        <button onClick={this.handleClick}>랜덤색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color}/>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
