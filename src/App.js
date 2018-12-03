import React, { Component } from "react";
import Movie from "./Movie";
import "./App.css";

class App extends Component {
  state = {}

  componentDidMount() {
    this._getMovie();
  }

  _getMovie = async () => {
    const movies = await this._callApi();
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch("https://yts.am/api/v2/list_movies.json?sort_by=download_count")
    .then((response) => response.json())
    .then((json) => json.data.movies)
    .catch(err => console.log(err))
  }

  _renderMovie = () => {
    return this.state.movies.map((data, index) => <Movie key={index} title={data.title} poster={data.large_cover_image}></Movie>);
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovie() : "Loading..."}
      </div>
    );
  }
}

export default App;
