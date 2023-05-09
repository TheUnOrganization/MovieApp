import poster1 from "../images/poster1.jpg";
import poster2 from "../images/poster2.jpg";
import poster3 from "../images/poster3.jpg";

function Home() {
    return (
        <>
            <div id="home">
                <h1>Welcome to the Movie Reviewer Database</h1>
                <p>Comment and rate your favorite movies as well as add your own movies to the database. Fun for the whole family!</p>
            </div>
            <div>
                <h2>Featured Movies</h2>
                <li id="home-movies">
                    <div>
                        <img src={poster1} alt="poster1" />
                        <p>The Unbearable Weight of Massive Talent</p>
                    </div>
                    <div>
                        <img src={poster2} alt="poster2" />
                        <p>The Northernman</p>
                    </div>
                    <div>
                        <img src={poster3} alt="poster3" />
                        <p>Doctor Strange in the Multiverse of Madness</p>
                    </div>
                </li>
            </div>
        </>
    );
}

export default Home;