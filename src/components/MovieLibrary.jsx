import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };

    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);

    this.onSearchTextChange = this.onSearchTextChange.bind(this);

    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
  }

  onSelectedGenreChange({ target: { value } }) {
    this.setState({ selectedGenre: value });
  }

  onSearchTextChange({ target: { value } }) {
    this.setState({ searchText: value });
  }

  onBookmarkedChange({ target: { checked } }) {
    this.setState({ bookmarkedOnly: checked });
  }

  // Requisito 18 - feito uma função para filtrar os filmes com a ajuda do monitor M. Daniel na monitoria individual
  filterSearch() {
    const { movies, searchText } = this.state;
    const movieList = movies.filter((movie) => movie.title
      .toLowerCase().includes(searchText.toLowerCase())
    || movie.subtitle
      .toLowerCase().includes(searchText.toLowerCase())
    || movie.storyline
      .toLowerCase().includes(searchText.toLowerCase()));
    return movieList;
  }

  filterBookmarked() {
    const { movies } = this.state;
    const movieList = movies.filter((movie) => movie.bookmarked);
    return movieList;
  }

  filterGenre() {
    const { movies, selectedGenre } = this.state;
    const movieList = movies.filter((movie) => movie.genre === selectedGenre);
    return movieList;
  }

  render() {
    const onClick = (objeto) => objeto;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
          onSearchTextChange={ this.onSearchTextChange }
          onBookmarkedChange={ this.onBookmarkedChange }
        />
        <MovieList
          movies={ this.filterSearch()
          || this.filterBookmarked()/*
          || filterGenre() */ }
        />
        <AddMovie onClick={ onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
