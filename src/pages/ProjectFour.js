import './ProjectFour.css';
import Navbar from "../components/Navbar";

export default function ProjectFour() {
    return (
        <div>
            <Navbar/>
            <div
                className="project-page"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(15,23,42,0.85), rgba(15,23,42,0.85)),
                        url('/nz.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"}}>
                <h1 className="project-title">
                    Twitch Streamer Similarity & Performance Analyzer</h1>

                <p className="project-subtitle">
                    Data analysis system for comparing Twitch streamers using similarity metrics and performance insights.</p>

            <div className="project-four-container">
                <div className="project-four-left">
                    <h2>Project Overview</h2>
                    <p>The Twitch Streamer Similarity & Performance Analyzer is a data analysis project designed to explore the metrics and relationships between the top
                    100 twitch streamers and the rest. </p>

                    <h3>Key Features</h3>
                    <ul>
                        <li>Recommendation system to identify similar streamers based on shared viewership</li>
                        <li>Using Pandas and Dask for parallel computing</li>
                        <li>Jaccard and Cosine similarity measurements</li>
                        <li>Analyses all top 100 streamers and their avg viewer duration, and stream counts</li>
                        <li>Compare any streamer against the top 100 streamers</li>
                    </ul>
                </div>

                <div className="project-four-right">
                    <h2>Preview</h2>
                    <div className="image-scroll">
                    <img src="/top100streamers.png" alt="Home" className="project-four-image1"/>
                    <img src="/top100vsrest.png" alt="Garden" className="project-four-image3"/>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
