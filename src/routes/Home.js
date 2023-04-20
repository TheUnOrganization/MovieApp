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
                        <img src="poster1.jpg" alt="poster1" />
                        <p>The Unbearable Weight of Massive Talent</p>
                    </div>
                    <div>
                        <img src="poster2.jpg" alt="poster2" />
                        <p>The Northernman</p>
                    </div>
                    <div>
                        <img src="poster3.jpg" alt="poster3" />
                        <p>Doctor Strange in the Multiverse of Madness</p>
                    </div>
                </li>
            </div>
        </>
    );
}

export default Home;