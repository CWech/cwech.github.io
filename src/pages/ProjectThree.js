import './ProjectThree.css';

export default function ProjectThree() {
    return (
        <div className="project-page project-three">
            <h1 className="project-two-title">Happy Mappy</h1>

            <div className="project-three-container">
                <div className="project-three-left">
                    <h2>Project Overview</h2>
                    <p>Happy Mappy is an application designed for users to see New Zealand crash data in a way that is informative and user friendly.</p>
                    <p>Happy Mappy allows users to see a table view of all New Zealand crash data where users can query specific roads, include crashes that
                    are in a certain range of years, see crashes that occured in varying weather conditions, include or exclude car types, and use secondary sorting.</p>
                    <p>The map view allows users to see a cluster map of all recorded crashes on a map of New Zealand. To improve the performance of this, not all crashes are shown
                    on the map at all times, where users can zoom in to a region and more crashes will be fetched. The filtering from the table view can also be used on the map view
                    to visualise the filters used. The map view also has a heat map where distributions of crashes can be seen to represent high or low crash dense areas. </p>
                    <p>The routing view is where users can input a start and end destination and a route will be calculated, showing the directions to get to the destination. Along this route
                     the crashes that have occured along it will show up as crash points. </p>
                    <p>If a user wants to see more detail of a crash, then the advanced crash viewer will show all details available of that specific crash.</p>
                    <img src="/happymappytable.png" alt="Garden" className="project-three-image2"/>
                </div>

                <div className="project-three-right">
                    <img src="/happymappymap.png" alt="Home" className="project-three-image1"/>
                    <img src="/happymappyroute.png" alt="Garden" className="project-three-image3"/>
                </div>
            </div>
        </div>
    );
}
