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
        // Storing response within movieResults variable.

        const movieResults = response.data.results

        // updating value of randomMovie state to be the results array returned from API call.

        setRandomMovie(movieResults)

      })

    // useEffect will run whenever the chosenMovie state is updated, in this case it is being updated through handleRandomMovie
  }, [chosenMovie])

  // Updating chosenMovie state value using the randomMovie state and running movieRandomizer function to pull random index out of array stored. 
  // This whole process is stored within a handle function which is then called on button click.

  const handleRandomMovie = () => {

    setChosenMovie(randomMovie[MovieRandomizer()]);

  }


  return (
    <div className="App wrapper">

      <header className='header'>
        <h1>Get Flix and Chill</h1>
        <div className="headerText">
          <p>Get Flix and Chill. An app created using the Movie Database API that gives you a random movie to watch on day where you can't decide.</p>
          <p>Hit the Button. Get a Flick. And Chill....</p>
        </div>
      </header>

      {/* handleRandomMovie gets called on click, stored within an anonymous function to stop it from continuously running on click */}
      <button className='watch' onClick={() => { handleRandomMovie() }}>WATCH</button>

{/* chosenMovie being sent as prop to DisplayMovie component after random index has been selected for a single movie object */}
      <DisplayMovies movie={chosenMovie} />

      <footer className="footer">
        <p>Created at Juno College of Technology</p>
      </footer>
    </div >
  );
}

export default App;
