import './ProjectThree.css';
import Navbar from "../components/Navbar";

export default function ProjectThree() {
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
                backgroundPosition: "center"}}
        >
            <h1 className="project-title">Happy Mappy</h1>
            <p className="project-subtitle">
                Interactive NZ crash data visualisation with filtering, mapping, and routing.</p>

            <div className="project-three-container">
                <div className="project-three-left">
                    <h2>Project Overview</h2>
                    <p>Happy Mappy is an application designed for users to see New Zealand crash data in a way that is informative and user friendly.</p>
                    <h3>Key Features</h3>
                    <ul>
                        <li>Query specific roads</li>
                        <li>Filter and sort for years, weather conditions, car types, and more.</li>
                        <li>Map view to see cluster map of all crashes or queried crashes</li>
                        <li>Routing view to see crashes along a user specified route</li>
                    </ul>
                    <h3>My Contributions</h3>
                    <ul>
                        <li>Implemented the sorting & secondary sorting on table view</li>
                        <li>Added API functionality with OpenStreetMap for map view</li>
                        <li>Helped work on pagination for the table view</li>
                        <li>Implemented import data for CSV upload of crash data</li>
                    </ul>
                </div>
                <div className="project-three-right">
                    <h2>Preview</h2>
                    <div className="image-scroll">
                    <img src="/happymappytable.png" alt="Table View" />
                        <img src="/happymappymap.png" alt="Map" />
                        <img src="/happymappyroute.png" alt="Route" />
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
