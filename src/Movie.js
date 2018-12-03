import React, { Component } from "react";
import propTypes from "prop-types";
import LinesEllipsis from "react-lines-ellipsis";
import "./Movie.css";

class Movie extends Component {
  static propTypes = {
    title: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    genres: propTypes.array.isRequired,
    synopsis: propTypes.string.isRequired
  }

  render() {
    const {title, poster, genres, synopsis} = this.props;
    return (
      <div className="Movie">
        <div className="Movie__Column">
            <MoviePoster poster={poster} title={title} />
        </div>   
        <div className="Movie__Column">
            <h1>{title}</h1>
            <div className="Movie__Genres">
                {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
            </div>
            <div className="Movie__Synopsis">
            <LinesEllipsis
                text={synopsis}
                maxLine='3'
                ellipsis='...'
                trimRight
                basedOn='letters'
                />   
            </div>
        </div>
      </div>
    );
  }
}

function MovieGenre({genre}) {
  return (
    <span className="Movie__Genre">{genre}</span>
  )
}

MovieGenre.propTypes = {
  genre: propTypes.string.isRequired
}

function MoviePoster({poster, title}) {
  return (
    <img src={poster} alt={title} title={title} className="Movie__Poster"/>
  )
}

MoviePoster.propTypes = {
  title: propTypes.string.isRequired,
  poster: propTypes.string.isRequired
}

export default Movie;
