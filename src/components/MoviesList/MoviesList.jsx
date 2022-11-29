import PropTypes from 'prop-types';
import { MovieLink } from './MoviesLink/MoviesLink';
import { StyledMoviesList } from './MoviesList.styled';

export const MoviesList = ({ moviesData }) => (
  <StyledMoviesList>
    {moviesData.map(movie => (
      <MovieLink key={movie.id} movie={movie} />
    ))}
  </StyledMoviesList>
);

MoviesList.propTypes = {
  moviesData: PropTypes.array.isRequired,
};