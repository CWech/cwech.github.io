import './ProjectFour.css';
import { Link } from "react-router-dom";

export default function ProjectFour() {
    return (
        <div className="project-page project-four">
            <Link to="/" className="back-button">← Back</Link>
            <h1 className="project-four-title">Twitch Streamer Similarity & Performance Analyzer</h1>

            <div className="project-four-container">
                <div className="project-four-left">
                    <h2>Project Overview</h2>
                    <p>The Twitch Streamer Similarity & Performance Analyzer is a data analysis project designed to explore the metrics and relationships between the top
                    100 twitch streamers and the rest. </p>
                    <p> Using the Twitch dataset and Pandas, I made an algorithm the analyse how the top 100 streamers compare to all the other streamers
                    in terms of their average viewer duration and their streamer counts. This can be useful for smaller streamers to see how their metrics compare against the top streamers.
                    The project involved using parallel computing where algorithms such as Jaccard and Cosine similarity measures were used.</p>
                    <p>I also made a recommendation system to identify similar streamers based on shared viewership so viewers can find streamers similar to who they already enjoy. </p>
                </div>

                <div className="project-four-right">
                    <img src="/top100streamers.png" alt="Home" className="project-four-image1"/>
                    <img src="/top100vsrest.png" alt="Garden" className="project-four-image3"/>
                </div>
            </div>
        </div>
    );
}
