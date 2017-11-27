import React, { Component } from 'react';
import './App.css';
import PlayButton from "./components/PlayButton";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {isMusicPlaying : false};
  }
  handleClick(event) {
    if (this.state.isMusicPlaying) {
      this.setState({isMusicPlaying: false});
    } else {
      this.setState({isMusicPlaying: true});
    }
  };
  render() {
    return (
      <div className="App">
        <PlayButton onClick = {this.handleClick.bind(this)} isMusicPlaying = {this.state.isMusicPlaying}/>
      </div>
    );
  }
}

export default App;
