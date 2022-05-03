import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios'
import PageRandomizer from './Components/PageRandomizer';
import MovieRandomizer from './Components/movieRandomizer';
import DisplayMovies from './Components/DisplayMovie';


function App() {

  const [randomMovie, setRandomMovie] = useState([])
  const [chosenMovie, setChosenMovie] = useState()

  useEffect(() => {

    axios({
      url: "https://api.themoviedb.org/3/discover/movie",
      method: "GET",
      params: {
        api_key: "be43d3d616ab1557173075498866686c",
        page: PageRandomizer(),
        with_original_language: 'en',
      }

    })
      .then((response) => {
        const movieResults = response.data.results

        setRandomMovie(movieResults)

      })
      
    }, [chosenMovie])

    const handleRandomMovie = () => {

      setChosenMovie(randomMovie[MovieRandomizer()]);

    }


  return (
    <div className="App">
      <header>
        <h1>Get Flix and Chill</h1>
        <p>Get Flix and Chill. An app created using the Movie Database API that gives you a random movie to watch on day where you can't decide.</p>
        <p>Hit the Button Below.</p>
        <p>Get Yourself a Flick.</p>
        <p>And Chill....</p>
      </header>

      <button onClick={() => {handleRandomMovie()}}>WATCH</button>
      
      <DisplayMovies movie={chosenMovie}/>

    </div>
  );
}

export default App;
