import responseMovies from '../Mocks/resultApi.json'

export const useMovies = () => {
  const movies = responseMovies.Search
  const mappedMovies = movies.map(movie => {
    return {
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    }
  })
  return {
    movies: mappedMovies,
  }
}
