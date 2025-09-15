import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProjectOne from "./pages/ProjectOne";
import ProjectTwo from "./pages/ProjectTwo";
import ProjectThree from "./pages/ProjectThree";
import ProjectFour from "./pages/ProjectFour";
import CV from "./pages/CV";
import './App.css';

function Home() {
    const projects = [
        {
            title: "AI NZ Coin Detector",
            description: "Using computer vision techniques and AI model training, I created a model that can detect " +
                "NZ coins, and count their denominations to calculate a summed monetary amount of coins in an image.",
            path: "/project-one",
            image: "/AIcoinimage.png",
            skills: "Skills: Python, AI, Computer Vision, TensorFlow"
        },
        {
            title: "Happy Mappy",
            description: "Happy Mappy was a group project that analysed real New Zealand crash data. Happy Mappy allows users to see a detailed table with extensive sorting " +
                "and filters to look at crash data. There are also features to see this data as clusters on a map, and be able to search for a route and see crashes along that route.",
            path: "/project-three",
            image: "/happymappylogo.png",
            skills: "Skills: Java, API's, Data Analysis"
        },
        {
            title: "Plant Pal",
            description: "Plant Pal was full year project that I worked on in a group. It is a gardening application to " +
                "help people manage their gardens. Plant Pal allows users to track and monitor plants, get notifications for watering, " +
                "harvesting, and weeding, visualise gardens with a 2D plan, and explore community gardens to see how friends " +
                "manage theirs.",
            path: "/project-two",
            image: "/plantpallogo.png",
            skills: "Skills: Testing, Java, HTML, Full Stack"
        },
        {
            title: "Twitch Streamer Similarity & Performance Analyzer",
            description: "I analysed the top 100 Twitch Streamers and the rest to measure their stream counts and average viewer durations. I built a recommendation algorithm which can be used " +
                "by smaller streamers to gain visibility by collaborating with streamers with shared viewers, or recommend similar streamers for viewers.",
            path: "/project-four",
            image: "/twitchlogo.png",
            skills: "Skills: Python, Pandas, Data Analysis, Algorithms"
        }
    ];

    return (
        <div>
            <section className="hero">
                <h1>Cody Wech</h1>
                <p className="hero-description">4th Year Software Engineer | University of Canterbury</p>
                <h3>Email: codywech12@gmail.com</h3>
            </section>
            <div className="home-container">
                <div className="about">
                    <h2>About Me</h2>
                    <p>I am a fourth year software engineer at the University of Canterbury. I am passionate
                        about expanding my knowledge in anything software related.</p>
                    <p>Over the past few years, I have
                    gained a hands-on experience in web development, software security, software testing, AI projects,
                    and much more.</p>
                    <p>Beyond software engineering, I enjoy gaming, checking on the latest in tech advancements,
                    and having a healthy lifestyle.</p>
                    <p>My goal is to meaningfully contribute to the software engineering
                    space though my skills and passion.</p>
                </div>
                <div className="projects">
                    <h2>
                        Projects <span className="projects-note">*Click on the boxes for more detail*</span>
                    </h2>
                    <div className="project-grid">
                        {projects.map((proj, i) => (
                            <Link key={i} to={proj.path} className="project-card">
                                <div className="project-info">
                                    <h3>{proj.title}</h3>
                                    <div className="project-skills">
                                        <h4>{proj.skills}</h4>
                                    </div>
                                    <p>{proj.description}</p>
                                </div>
                                <div className="project-img-container">
                                    <img src={proj.image} alt={proj.title} className="project-image"/>
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>

            </div>
        </div>
    );
}


function App() {
    return (
        <Router>
            <Navbar />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/project-one" element={<ProjectOne />} />
                    <Route path="/project-two" element={<ProjectTwo />} />
                    <Route path="/project-three" element={<ProjectThree />} />
                    <Route path="/project-four" element={<ProjectFour />} />
                    <Route path="/cv" element={<CV />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
