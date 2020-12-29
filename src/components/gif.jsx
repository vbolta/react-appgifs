import React, { Component } from 'react';

class Gif extends Component {
	handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  render() {

    const src = `https://media4.giphy.com/media/${this.props.id}/giphy.gif?cid=ecf05e470b7caef3a0256ff498ec211fd6e34b194e72be34&rid=giphy.gif`;
    return (
      <img src={src} alt="" className="gif" onClick={this.handleClick}/>
    );
  }
}

export default Gif;

