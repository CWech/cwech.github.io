import './ProjectTwo.css';
import { Link } from "react-router-dom";

export default function ProjectTwo() {
    return (
        <div className="project-page project-two">
            <Link to="/" className="back-button">← Back</Link>
            <h1 className="project-two-title">Plant Pal</h1>

            <div className="project-two-container">
                <div className="project-two-left">
                    <h2>Project Overview</h2>
                    <p>
                        Plant Pal is a gardening application designed to help garden enthusiasts manage and maintain their home gardens more effectively. Plant Pal allows users to input detailed information about their gardens and the specific plants they grow. Once the garden and plant details are entered, users can create custom trackers, or find public trackers created by other gardeners for each plant to monitor essential activities such as watering, harvesting, and weeding. The application is designed to provide timely notifications, reminding users when these tasks need to be performed, ensuring that their plants receive the care they need to thrive.
                    </p>
                        <p>Throughout the application, we emphasized creating an intuitive user interface and ensuring that the application could handle various types of plants and garden setups. We also implemented features such as friend requests and searching for other users’ gardens to create a more community-driven experience, to see how your friends are managing their gardens. Additionally, the 2D garden plan template, allows users to visualise their gardens, plan for expansion, and organise their gardens effectively.</p>
                    <p>Plant Pal is designed to accommodate gardeners of all skill levels, providing the tools to maintain a thriving garden, creating a more enjoyable and rewarding experience.</p>
                    <p>Plant Pal was designed using gradle, Spring Boot, Thymeleaf, and GitLab CI.</p>
                    <p>This project had a major focus on testing including unit, integration, automated, end-to-end, mocking, and extensive manual testing.</p>
                    <img src="/plantpalgarden.png" alt="Garden" className="project-two-image3"/>
                </div>

                <div className="project-two-right">
                    <img src="/plantpalhome.png" alt="Home" className="project-two-image1"/>
                    <img src="/plantpalfriends.png" alt="Friends" className="project-two-image2"/>
                </div>
            </div>
        </div>
    );
}
