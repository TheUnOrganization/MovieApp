import React from "react";
import styles from "../data/styles.css";

async function getNowPlaying () {

    try {
       const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`);
       const data = await response.json();
       return data;
  
    }  catch (error) {
       console.log(error);
    }
  }
  

function NowPlaying() {
    return (
        <div className={styles.nowPlaying}>
        <div className={styles.nowPlayingList}>
            {
                movies.map((movie) => (
                    <article key={movie.id} className={styles.card}>
                         <img className={styles.poster} src={movie.poster} alt={movie.title} />
                         <div className={styles.details}>
                             <h3> 
                                  <span>
                                        <FaStar size = {18} color='FFA500' className={styles.star} />
                                        <span className={styles.rating}>{movie.rating}</span>
                                  </span>
                                  <span>{movie.release}</span>
                             </h3>
                            <h2 className={styles.title}>{movie.title}</h2>

                        </div>
                    </article>
                ))
            }
        </div>
     </div>
    )
}

export default NowPlaying;