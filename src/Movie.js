import React, { Component } from "react";
import propTypes from "prop-types";
import "./Movie.css";

class Movie extends Component {
  static propTypes = {
    title: propTypes.string.isRequired,
    poster: propTypes.string.isRequired
  }

  render() {
    const {title, poster} = this.props;
    return (
      <div>
        <h1>
          {title}
        </h1>
        <MoviePoster poster={poster}></MoviePoster>
      </div>
    );
  }
}

function MoviePoster({poster}) {
  return (
    <img src={poster} alt=""/>
  )
}

MoviePoster.propTypes = {
  poster: propTypes.string.isRequired
}

export default Movie;
