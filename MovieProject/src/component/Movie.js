import propTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({id, coverImg, title, year, summary, genres }){//이 component들을 부모로 부터 받아온다.
    return <div className={styles.moive}>
    <img src={coverImg} alt={title} className={styles.movie__img}></img>
    <h2 className={styles.movie__title}>
      <Link to={`/movie/${id}`}>{title}</Link>({year})
    </h2>

    <p>{summary.length > 235 ? `${summary.slice(0,235)}...`:summary}</p>
    <ul className={styles.movie__genres}>
      {genres.map(g=><li key={g}>{g}</li>)}
    </ul>
    <hr></hr>
  </div>
  
}
Movie.propTypes = {
    id : propTypes.number.isRequired,
    coverImg : propTypes.string.isRequired,
    title : propTypes.string.isRequired,
    year : propTypes.number.isRequired,
    summary : propTypes.string.isRequired,
    genres : propTypes.arrayOf(propTypes.string).isRequired,
};

export default Movie;