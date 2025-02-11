import React, { Component } from "react";
import Movies from "../components/Movies";
import Searchbar from "../components/Searchbar";

class Main extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=9309374a=fantastic")
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search || [] }))
  }

  searchMovies = (text, type = "all") => {
    fetch(
      `http://www.omdbapi.com/?apikey=9309374a&s=${text}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )    
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search || [] }))
  };
  render() {
    return (
      <div className="container">
        <Searchbar searchMovies={this.searchMovies} />
        <Movies movies={this.state.movies} />
      </div>
    );
  }
}

export default Main;
