import React from "react";
import './Navbar.css';
import {Link,useNavigate,useLocation } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleProjectsClick = (e) => {
        e.preventDefault();
        if (location.pathname !== "/") {
            navigate("/");
            return;
        }
        const home = document.getElementById("home");
        const projects = document.getElementById("project-grid");

        const navbar_offset = -71;
        const height =
            home.getBoundingClientRect().top +
            window.pageYOffset +
            navbar_offset;

        window.scrollTo({ top: height, behavior: "smooth" });
        projects.classList.add("flash");
        setTimeout(() => {
            projects.classList.remove("flash");
        }, 1000);
    };

    const handleAboutClick = (e) => {
        e.preventDefault();
        if (location.pathname !== "/") {
            navigate("/?scroll=about");
            return;
        }
        const about = document.getElementById("about");

        const height =
            about.getBoundingClientRect().top +
            window.pageYOffset;
        window.scrollTo({ top: height, behavior: "smooth" });
    };

    return (
        <nav className="navbar">
            <h1 className="logo">
                <Link to="/">Cody Wech</Link>
            </h1>
            <div className="nav-links">
                <a href="#home" onClick={handleProjectsClick}>
                    Projects</a>
                <a href="#about" onClick={handleAboutClick}>
                    About Me
                </a>
                <a href="mailto:codywech12@gmail.com">
                    Get in Touch</a>
            </div>
        </nav>
    );
}