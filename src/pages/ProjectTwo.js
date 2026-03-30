import './ProjectTwo.css';
import Navbar from "../components/Navbar";

export default function ProjectTwo() {
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
        <div className="project-two">
            <h1 className="project-title">Plant Pal</h1>
            <p className="project-subtitle">
                Social gardening app with tracking, 2D garden planning, and community features.</p>

            <div className="project-two-container">
                <div className="project-two-left">
                    <h2>Project Overview</h2>
                    <p>Plant Pal is a gardening application designed to help garden enthusiasts manage and maintain their home gardens more effectively.</p>
                    <h3>Key Features</h3>
                    <ul>
                        <li>Custom trackers to monitor activities such as watering, harvesting, and weeding.</li>
                        <li>Friend requests and ability to search for other users' gardens.</li>
                        <li>2D garden template to visualise gardens.</li>
                        <li>Notifications with reminders of when tasks need to be performed.</li>
                        <li>Extensive testing framework.</li>
                    </ul>
                    <h3>My Contributions</h3>
                    <ul>
                        <li>Helped extend testing framework with manual, unit, integration, and automated tests.</li>
                        <li>Implemented API integration for plant library, so users could find plant information.</li>
                        <li>Custom built profanity filter with warnings if multiple inappropriate actions occured.</li>
                        <li>Implemented reset password and confirm email with code sent to the users email.</li>
                        <li>Helped with editing and view password.</li>
                    </ul>
                </div>

                <div className="project-two-right">
                    <h2>Preview</h2>
                    <div className="image-scroll">
                    <img src="/plantpalhome.png" alt="Home" className="project-two-image1"/>
                    <img src="/plantpalfriends.png" alt="Friends" className="project-two-image2"/>
                    <img src="/plantpalgarden.png" alt="Garden" className="project-two-image3"/>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
}
