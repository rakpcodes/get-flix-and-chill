const DisplayMovies = (props) => {

    console.log(props)

    return (
        <div className="MovieResult">
            {
                props.movie === undefined ? 
                
                null : 
                <>
                    <div className="imageContainer">
                        <img src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} alt={`Poster for ${props.movie.original_title}`} />
                    </div>
                    <p>{props.movie.title}</p>
                </>
            }
        </div>
    )

}

export default DisplayMovies