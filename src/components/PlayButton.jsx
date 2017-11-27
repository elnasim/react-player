import React, {Component} from 'react';
import '../App.css';

function PlayButton(props) {

  const className = props.isMusicPlaying ? 'PlayButton PlayButton-play' : 'PlayButton PlayButton-stop';
  return (
      <a href="#" title="Play video" className={className} onClick={props.onClick}/>
  );

}

export default PlayButton;