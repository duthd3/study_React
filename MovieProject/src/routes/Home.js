import Movie from "../component/Movie";
import { useState, useEffect  } from "react";
import styles from "./Home.module.css";

function Home(){
  const [loading, setLoading] = useState(true);
  const[movies, setMovies] = useState([]);
  const getMovies = async() => {
    const json = await (
      await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")
    ).json();
    
    setMovies(json.data.movies);
    setLoading(false);
  }
  useEffect(()=>{
    getMovies();
      
  },[]);
  console.log(movies);
  return <div>
    {loading ? <h1>Loading...</h1> : <div className={styles.movies}>{movies.map(movie=>(
      <Movie 
        key={movie.id}
        id={movie.id} 
        coverImg = {movie.medium_cover_image} 
        title={movie.title} year={movie.year} 
        summary={movie.summary} 
        genres={movie.genres}
      />
      //child에게 component를 전달.
    ))}
    </div>}
    
  </div>
  //map 함수를 사용할때는 key값을 꼭 줘야한다.
}
export default Home;