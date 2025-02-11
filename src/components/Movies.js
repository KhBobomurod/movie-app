import React, { Component } from "react";
import Movie from "./Movie";

class Movies extends Component {
  state = {};
  render() {
    const { movies = [] } = this.props;
    return (
      <div className="movies">
        {movies.length ? (
          movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
        ) : (
          <p>Nothing found</p>
        )}
      </div>
    );
  }
}

export default Movies;
