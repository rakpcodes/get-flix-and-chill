import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios'
import PageRandomizer from './Components/PageRandomizer';
import MovieRandomizer from './Components/MovieRandomizer';


function App() {

  const [randomMovie, setRandomMovie] = useState()

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
        const movieResults = response.data
        console.log("movieResults", movieResults)

        setRandomMovie(movieResults)
      })

  }, [])

  return (
    <div className="App">
      <header>
        <h1>Get Flix and Chill</h1>
        <p>Get Flix and Chill. An app created using the Movie Database API that gives you a random movie to watch on day where you can't decide.</p>
        <p>Hit the Button Below.</p>
        <p>Get Yourself a Flick.</p>
        <p>And Chill....</p>
      </header>


      {/* A div from a component to display the result. */}


      {/* OnClick will run a function to display the result */}
      <button>WATCH</button>

    </div>
  );
}

export default App;
