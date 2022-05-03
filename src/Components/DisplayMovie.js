const DisplayMovies = (props) => {

    return (

        <div className="MovieResult">
            {
                props.movie === undefined ? 
                
                null : 
                <>
                    <div className="imageContainer">
                        <img src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} alt={`Poster for ${props.movie.original_title}`} />
                    </div>
                    <div className="textContainer">
                        <p className="movieTitle">{`Title: ${props.movie.title}`}</p>
                        <p className="releaseDate">{`Release Date: ${props.movie.release_date}`}</p>
                        <p className="rating">{`Ratiing: ${props.movie.vote_average}`}</p>
                        <p className="overview">{`Overview: ${props.movie.overview}`}</p>

                    </div>
                </>
            }
        </div>
    )

}

export default DisplayMovies