import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import styles from "./Detail.module.css";

function Detail(){
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState();
    const getMovie = async()=>{
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setDetail(json.data.movie);
        setLoading(false);
    };
    useEffect(()=>{
        getMovie();
    },[]);
    console.log(detail);
    return <div className={styles.detail}>
        {loading?<h2>loading...</h2>:<div>
        <h2>{detail.title_long}</h2>
        <h3>Rating:{detail.rating}</h3>
        <img src={detail.medium_cover_image}></img>
        <p>{detail.description_intro}</p>
        <ul>
            {detail.genres.map(g=><li key={g}>{g}</li>)}
        </ul>
            
        
        </div>}
    </div>
}

export default Detail;
