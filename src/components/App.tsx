import React,{useState, useEffect} from 'react';
import '../App.css';
import Header from './Header'
import Movie from './Movie'
import Search from "./Search";

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b"; // you should replace this with yours
interface moveInterfact {
  Title:string
}
function App() {
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState<Array<moveInterfact>>([])
  const [errorMessage, setErrorMessage] = useState(null)
  const [msg, setMsg] = useState<string>('')
  // https://www.freecodecamp.org/news/how-to-build-a-movie-search-app-using-react-hooks-24eb72ddfaf7/
  useEffect(() => {
    console.log('useEffect');
    setMsg(new Date().toLocaleTimeString())
    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(response => {
        if (response.Response === "True") {
          setMovies(response.Search);
          setLoading(false);
        } else {
          setLoading(false);
        }
      })
      .then(jsonResponse => {
        console.log('jsonResponse',jsonResponse);
      })
  },[msg])
  const changeMessage = () => {
    setMsg(new Date().toLocaleTimeString())
  }
  const search = (searchValue:string) => {
    setLoading(true);
    setErrorMessage(null);
    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
      .then(response => response.json())
      .then(jsonResponse => {
        console.log('jsonResponse:',jsonResponse);
        if (jsonResponse.Response === "True") {
          setMovies(jsonResponse.Search);
          setLoading(false);
        } else {
          setErrorMessage(jsonResponse.Error);
          setLoading(false);
        }
      });
  };

  return (
    <div className="App">
      <Header text="HOOKED" />
      <button onClick={changeMessage}>{msg}</button>
      <Search search={search} />
      <p className="App-intro">Sharing a few of our favourite movies</p>
      <div className="movies">
        {loading && !errorMessage ? (
         <span>loading...</span>
         ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          movies.map((movie, index) => (
            <Movie key={`${index}-${movie.Title}`} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
