
import React from "react";
import spotify from '../assets/spotify.png'
import gemini from '../assets/gemini.png'
import fatigue from '../assets/fatigue.png'
import Footer from './Footer'
import power from '../assets/power.png'

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {title==='Gemini Clone' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={gemini} alt="" />
            </a>}

            {title==='Spotify Clone' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={spotify} alt="" />
            </a>}

            {title==='Fatigue Detection System' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={fatigue} alt="" />
            </a>}

            {title==='Power-BI Credit Card Dashboard' && <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover " src={power} alt="" />
            </a>}
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};
  
const Projects = () => {
    return (
        <div className="bg-black">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 place-items-center m-12 p-12">

                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        links={item.links}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}


export const project = [
    {
        title:'Spotify Clone',
        description:'Developed a dynamic Spotify Clone web application designed for everyday music lovers. This project replicates the core UI/UX features of the original Spotify platform, offering an immersive and responsive user experience to implement key functionalities such as interactive song cards',
        image: {spotify},
        git:'https://github.com/ARCHIT27WD/SpotifyMy_clone',
        technologies:['HTML' ,'CSS' , 'JAVASCRIPT']
    },
    {
        title:'Gemini Clone',
        description:'Crafted a Gemini Clone , Gemini is designed to enhance Google search engine, improve user interactions, and provide more accurate and contextually relevant information.',
        image: {gemini},
        git:"https://gemini-clone-archit.netlify.app/",
        technologies:[ 'React JS', 'tailwind CSS' ,'Gemini Api']
    },
    {
        title:'Fatigue Detection System',
        description:'Developed an AI-powered fatigue detection system using Python and libraries like OpenCV and Dlib.Implemented real-time yawn detection and eye blink analysis to monitor driver alertness.Designed an efficient pipeline for live video stream processing with high accuracy and responsiveness',
        image: {fatigue},
        git:"https://github.com/ARCHIT27WD/Fatigue-Detection-System",
        technologies:[ 'Python', 'AI' ]
    },
    {
        title:'Power-BI Credit Card Dashboard',
        description:'Developed an interactive credit card customer insights dashboard using Power BI. Utilized data modeling, DAX, and Power Query to uncover spending patterns, customer segmentation, and risk analysis. Designed intuitive visualizations and KPIs to support data-driven decision-making for financial performance tracking.',
        image: {power},
        git:"https://github.com/ARCHIT27WD/Credit-Card-Power-BI",
        technologies:[ 'Power-BI', 'SQL', 'pgadmin' ]
    }
]

export default Projects










/*export const project = [
    {
        title:'Spotify Clone',
        description:'Crafted a Spotify Clone Platform ,tailored for normal Music Listeners,Engineered the system using a potent blend of HTML, CSS, JavaScrip',
        image: {spotify},
        git:'https://github.com/ARCHIT27WD/SpotifyMy_clone',
        technologies:['HTML' ,'CSS' , 'JAVASCRIPT']
    },
    {
        title:'Gemini Clone',
        description:'Crafted a Gemini Clone , Gemini is designed to enhance Google search engine, improve user interactions, and provide more accurate and contextually relevant information.',
        image: {gemini},
        git:"https://gemini-clone-archit.netlify.app/",
        technologies:[ 'React JS', 'tailwind CSS' ,'Gemini Api']
    }
]*/

