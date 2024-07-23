import './App.css'
import { useMovies } from './hooks/useMovie.js'
import { Movies } from './components/Movies.jsx'




function App() {
  const {movies: mappedMovies} = useMovies()

  return (
    <>
      <div className='page'>

        <header>
          <h1>Buscador de peliculas</h1>
          <form className='form'>
            <input type="text" placeholder='Avengers, Star Wars, ...'/>
            <button type='submit'>Buscar</button>
          </form>
        </header>

        <main>
          <Movies movies={mappedMovies} />
        </main>
      
      </div>
    </>
  )
}

export default App
