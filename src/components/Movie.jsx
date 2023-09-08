import styles from "./movie.module.css";
const Movie = ({ movies }) => {
  return (
    <div className={styles.movieContainer}>
      {
        movies.map((movie) => {
          const keyVals = Object.keys(movie).filter((element) => element !== 'name' && element !== "_id");
          return (<div key={movie._id} className={styles.movie}>
            <h1>{movie.name}</h1>
            {
              keyVals.map((key) => <p key={key}>{key}: {movie[key]}</p>)
            }
          </div>)
        })
      }
    </div>
  )
}

export default Movie