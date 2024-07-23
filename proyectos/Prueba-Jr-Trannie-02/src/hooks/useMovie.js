import responsiveWithMovies from '../mocks/with-results.json'
import responsiveWithOutMovies from '../mocks/no-results.json'

export function useMovies () {
    const movies = responsiveWithMovies.Search
  
    const mappedMovies = movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      image: movie.Poster,
    }))
  
    return { movies: mappedMovies}
}