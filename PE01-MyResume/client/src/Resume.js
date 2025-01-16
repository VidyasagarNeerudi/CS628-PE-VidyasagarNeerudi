import React from "react";
import "./Resume.css";

const Resume = () => {
    return (
        <div className="resume">
            <header className="header">
              <h1>Vidyasagar Neerudi</h1>
              <p>8935 160TH AVE NE, Redmond WA, 98052 | 206-636-9281 | nvidyasagar.us125@gmail.com</p>
            </header>

            <section className="section">
                <h2>Education</h2>
                <div className="education">
                <h3>Master of Science in Computer Science</h3>
                <p>City University of Seattle, Seattle USA | Dec 2025</p>
                <p>GPA: 3.9/4.0</p>
                <h3>Bachelor of Science in Mechanical Engineering</h3>
                <p>CMR Technical Campus, Hyderabad INDIA | May 2019</p>
                <p>CGPA: 5.8/10.0</p>
                </div>
            </section>
            <section className="section">
                <h2>Projects</h2>
                <div className="projects">
                    <h3>Uncovering Music Trends and Listener Preferences on Spotify</h3>
                    <p>Using Spotify's vast audio feature collection, the project Uncovering Music Trends and Listener Preferences on Spotify aims to investigate changing trendds in music qualities and user Preferences</p>
                </div>
            </section>
            <section className="section">
                <h2>Programming Skills</h2>
                <div className="skills">
                <h3>Python: Building a Strong Foundation</h3>
                <p>
                 Developed foundational skills in Python programming, focusing on basic syntax, data types, and control structures. Worked on small-scale projects to strengthen problem-solving abilities, including simple automation scripts and interactive programs.
                </p>
             </div>
        </section>

        </div>
    );
};

export default Resume;