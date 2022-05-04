const DisplayMovies = (props) => {

    return (

        <div className="MovieResult">
            {
                props.movie === undefined ?

                    null :
                    <>
                        <div className="resultContainer">

                            <div className="imageContainer">
                                <img src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} alt={`Poster for ${props.movie.original_title}`} />
                            </div>
                            <div className="textContainer">
                                <p className="movieTitle"><span>Title:</span> {props.movie.title}</p>
                                <p className="releaseDate"><span>Release Date:</span> {props.movie.release_date}</p>
                                <p className="rating"><span>Rating:</span> {props.movie.vote_average}</p>
                                <p className="overview"><span>Overview:</span> {props.movie.overview}</p>

                            </div>
                        </div>
                    </>
            }
        </div>
    )

}

export default DisplayMovies