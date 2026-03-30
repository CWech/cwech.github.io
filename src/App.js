import {BrowserRouter as Router,Routes, Route, Link} from "react-router-dom";
import ProjectOne from "./pages/ProjectOne";
import ProjectTwo from "./pages/ProjectTwo";
import ProjectThree from "./pages/ProjectThree";
import ProjectFour from "./pages/ProjectFour";
import './App.css';
import {useEffect} from "react";
import Navbar from "./components/Navbar"

function Home() {
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const scroll_param = params.get("scroll");

        if (scroll_param) {
            setTimeout(() => {
                const scroll = document.getElementById(scroll_param);
                if (scroll) {
                    scroll.scrollIntoView({behavior: "smooth"});
                }
            }, 100);
        }
    }, []);
    const projects = [
        {
            title: "AI NZ Coin Detector",
            path: "/project-one",
            image: "/AIcoinimage.png",
            skills: "Skills: Python, AI, Computer Vision, TensorFlow"
        },
        {
            title: "Happy Mappy",
            path: "/project-two",
            image: "/happymappylogo.png",
            skills: "Skills: Java, API's, Data Analysis"
        },
        {
            title: "Plant Pal",
            path: "/project-three",
            image: "/plantpallogo.png",
            skills: "Skills: Testing, Java, HTML, Full Stack"
        },
        {
            title: "Twitch Streamer Similarity & Analyzer",
            path: "/project-four",
            image: "/twitchlogo.png",
            skills: "Skills: Python, Pandas, Data Analysis, Algorithms"
        }
    ];

    return (
        <div>
            <Navbar/>
            <div className="home-page" id="home">
            <div className="landing">

                <div className="bg-image" style={{backgroundImage: "url('/nz.jpg')"}}>

                </div>


                <div className="overlay"></div>
                <div className="section hero-projects">
                <section className="hero">

                    <div className="hero-center">
                        <div className="hero-box">
                        <h1>Cody Wech</h1>
                        <p className="subtitle">Final Year Software Engineer</p>
                        </div>
                    </div>

                    <span className="skill skill1">Web Dev</span>
                    <span className="skill skill2">Full Stack</span>
                    <span className="skill skill3">AI</span>
                    <span className="skill skill4">Python</span>
                    <span className="skill skill5">Algorithms</span>
                    <span className="skill skill6">Data</span>
                    <span className="skill skill7">Testing</span>
                    <span className="skill skill8">Java</span>

                </section>
                </div>
                <div className="projects" id="projects">
                    <h2>Projects
                    </h2>
                    <div className="project-grid" id="project-grid">
                        {projects.map((proj, i) => (
                            <Link key={i} to={proj.path} className="project-card">
                                <div className="project-img-container">
                                    <img src={proj.image} alt={proj.title} className="project-image"/>
                                </div>
                                <div className="project-info">
                                    <h3>{proj.title}</h3>
                                    <div className="project-skills">
                                        <h4>{proj.skills}</h4>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>
            </div>
                <div className="section about-section" id="about">
                    <div className="about-bg" style={{ backgroundImage: "url(/nz2.jpg"}}></div>
                    <div className="about-content">
                        <h2>About Me</h2>
                        <div className="about-intro">
                        <p>I am a final year Software Engineer, from the University of Canterbury, passionate about
                        expanding my knowledge in all things software related.</p>
                        <p>Over the past few years, I have gained a hands-on experience in web development, software
                        testing, AI projects, and much more.</p>
                            <p>My goal is to meaningfully contribute to the software engineering space through
                            my skills and willingness to learn</p>
                        <p>Currently seeking opportunities to apply my skills in the real-world.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


function App() {
    return (
        <Router>
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/project-one" element={<ProjectOne />} />
                    <Route path="/project-three" element={<ProjectTwo />} />
                    <Route path="/project-two" element={<ProjectThree />} />
                    <Route path="/project-four" element={<ProjectFour />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
