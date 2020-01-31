import React, { Component } from 'react';
import Sound from 'react-sound';

class SoundBar extends Component {

	
	render() {
	  return (
	    <Sound
	      url="./sound/21stCenturyFox.mp3"
	      playStatus={Sound.status.PLAYING}
	      loop="true"
	    />
	  );
	}	
}

export default SoundBar;

