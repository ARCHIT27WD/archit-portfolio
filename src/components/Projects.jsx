import React from "react";
import spotify from "../assets/spotify.png";
import gemini from "../assets/gemini.png";
import fatigue from "../assets/fatigue.png";
import Footer from "./Footer";

export const project = [
    {
        title: "Spotify Clone",
        description:
            "Crafted a Spotify Clone Platform, tailored for normal Music Listeners. Engineered the system using a potent blend of HTML, CSS, JavaScript.",
        image: spotify,
        git: "https://github.com/ARCHIT27WD/SpotifyMy_clone",
        technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
        title: "Gemini Clone",
        description:
            "Crafted a Gemini Clone, designed to enhance Google Search, improve user interactions, and provide accurate information.",
        image: gemini,
        git: "https://gemini-clone-archit.netlify.app/",
        technologies: ["React.js", "Tailwind CSS", "Gemini API"],
    },
    {
        title: "Fatigue Detection System",
        description:
            "Developed an AI-powered fatigue detection system using Python and OpenCV. Implemented real-time yawn detection and eye blink analysis for monitoring driver alertness.",
        image: fatigue,
        git: "https://github.com/ARCHIT27WD/Fatigue-Detection-System",
        technologies: ["Python", "AI"],
    },
];

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow">
            <a href={git} target="_blank" rel="noopener noreferrer">
                <img className="w-full rounded-t-lg h-auto object-cover" src={image} alt={title} />
            </a>
            <div className="p-4">
                <a href={git} target="_blank" rel="noopener noreferrer">
                    <h5 className="text-2xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">
                        {title}
                    </h5>
                </a>
                <p className="font-normal text-gray-300">{description}</p>
            </div>
            <div className="m-4 flex justify-between">
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tag, index) => (
                        <p key={`${index}-${tag}`} className="text-sm text-blue-500">
                            #{tag}
                        </p>
                    ))}
                </div>
                <a
                    href={git}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-300 border border-gray-200 rounded-lg shadow p-2 hover:text-green-500 duration-300"
                >
                    GitHub
                </a>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="bg-black min-h-screen flex flex-col">
            <div className="flex-grow flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
};


export default Projects;
