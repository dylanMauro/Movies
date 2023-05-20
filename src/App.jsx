import "./App.css";
import { Movies } from "./components/Movies.jsx"
import { useMovies } from "./hooks/useMovies.js"
import { useSearch } from "./hooks/useSearch";
 // referencia mutable, que persiste en ciclo de vida de un componente, este componente vuelve a renderizar al cambiar sus valores, y su valor no es reiniciado

function App() {
  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search })

  const handleSubmit = (e) => {
    e.preventDefault()
    getMovies();
  }

  const handleChange = (e) => {
    updateSearch(e.target.value)
  }  

  return (
    <div className="page">
      <header>
        <h1>Buscador de peliculas</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Avengers, The Croods, The Lorax..." name="query" onChange={handleChange}/>
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{color: "red"}}>{error}</p>}
      </header>

      <main>
       { loading? <h2>Las peliculas están cargando...</h2> :
        <Movies movies={movies}/> }
      </main>
    </div>
  );
}

export default App;
