const API_KEY = "4b29db90&"

export const searchMovies = async ({search}) => {
  if (search === "") return null
  try {
    const res = await fetch(`https://omdbapi.com/?apikey=${API_KEY}s=${search}`)
    const json = await res.json()

    const movies = json.Search

    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))

  } catch(e) {
    throw new Error("no se encontraron peliculas");
  }
}