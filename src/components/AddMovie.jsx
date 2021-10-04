import React from 'react';
import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    this.handleChange = this.handleChange.bind(this);

    this.resetState = this.resetState.bind(this);

    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleClick() {
    this.resetState();
  }

  resetState() {
    this.setState(() => ({
      title: '',
      subtitle: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    }));
  }

  renderTitle(title) {
    return (
      <label
        htmlFor="title"
        name="title"
        data-testid="title-input-label"
      >
        Título
        <input
          type="text"
          name="title"
          value={ title }
          onChange={ this.handleChange }
          data-testid="title-input"
        />
      </label>
    );
  }

  renderSubtitle(subtitle) {
    return (
      <label
        htmlFor="subtitle"
        name="subtitle"
        data-testid="subtitle-input-label"
      >
        Subtítulo
        <input
          type="text"
          name="subtitle"
          value={ subtitle }
          onChange={ this.handleChange }
          data-testid="subtitle-input"
        />
      </label>
    );
  }

  renderImagePath(imagePath) {
    return (
      <label
        htmlFor="imagePath"
        name="imagePath"
        data-testid="image-input-label"
      >
        Imagem
        <input
          type="text"
          name="imagePath"
          value={ imagePath }
          onChange={ this.handleChange }
          data-testid="image-input"
        />
      </label>
    );
  }

  renderStoryline(storyline) {
    return (
      <label
        htmlFor="storyline"
        name="storyline"
        data-testid="storyline-input-label"
      >
        Sinopse
        <textarea
          name="storyline"
          value={ storyline }
          cols="30"
          rows="10"
          onChange={ this.handleChange }
          data-testid="storyline-input"
        />
      </label>
    );
  }

  renderRating(rating) {
    return (
      <label
        htmlFor="rating"
        name="rating"
        data-testid="rating-input-label"
      >
        Avaliação
        <input
          type="number"
          name="rating"
          value={ rating }
          onChange={ this.handleChange }
          data-testid="rating-input"
        />
      </label>
    );
  }

  renderGenre(genre) {
    return (
      <label
        htmlFor="genre"
        data-testid="genre-input-label"
      >
        Gênero
        <select
          name="genre"
          value={ genre }
          onChange={ this.handleChange }
          data-testid="genre-input"
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
    );
  }

  render() {
    const {
      title, subtitle, imagePath, storyline, rating, genre,
    } = this.state;
    const { onClick } = this.props;

    return (
      <form
        onSubmit={ this.resetState }
        data-testid="add-movie-form"
      >
        { this.renderTitle(title) }
        { this.renderSubtitle(subtitle) }
        { this.renderImagePath(imagePath) }
        { this.renderStoryline(storyline) }
        { this.renderRating(rating) }
        { this.renderGenre(genre) }

        {/* Requisito 14 feito na monitoria individual com a
        ajuda do monitor M. Daniel! */}
        <button
          type="button"
          onClick={ () => {
            onClick(this.state);
            this.handleClick();
          } }
          data-testid="send-button"
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
