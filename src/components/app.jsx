import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';
import giphy from 'giphy-api';


class App extends Component {
  constructor(props) {
  	super(props);

  	this.state = {
  		gifs: [],
  		selectedGifId: "9kSobmZh9K46Y"
  	}
  }

  search = (query) => {
  	giphy('ZbEDwkiB7w7JhpUHEmY276MMjsSodT8x').search({
    q: query,
    rating: 'g',
    limit: 10
    }, (err, res) => {
      this.setState({
        gifs: res.data
      })
    });
  }

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search}/>
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif}/>
        </div>
      </div>
    );
  }
}

export default App;
