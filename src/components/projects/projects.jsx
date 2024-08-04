import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from 'react-responsive-carousel';
import "./projects.scss";
import TechStackComponent from '../techstack,jsx/techStack';
import AboutMe from '../aboutMe/aboutMe';
import Technologies from '../technologies/technologies';

// Import your images
import dune from "../../assets/dune.png";
import duneP from "../../assets/dune-p.png";
import baatcheet from "../../assets/baatcheet.png";
import baatcheet2 from "../../assets/baatcheet2.png";
import baatcheet3 from "../../assets/baatcheet3.png";
import baatcheetP from "../../assets/baatcheetP.png";
import baatcheetP2 from "../../assets/baatcheetP2.png";
import tps from "../../assets/tps.png";
import tps2 from "../../assets/tps2.png";
import tps3 from "../../assets/tps3.png";
import tps4 from "../../assets/tps4.png";
import tpsP from "../../assets/tps-p.png";

import ni1 from "../../assets/ni1.png";
import ni2 from "../../assets/ni2.png";
import ni3 from "../../assets/ni3.png";
import ni4 from "../../assets/ni4.png";

function ProjectsComponent() {
  const projects =  [
    {
      id:'tps',
      title: 'Rooftop solar calculator',
      description: 'A responsive rooftop solar calculator for Tata Power Solar. Made using Angular, Angular Material UI and Node JS.',
      images: [tps,  tps2, tps3, tps4, tpsP],
      link: 'https://calculator.tatapowersolar.com/',
    },
    {
      id:'baatcheet',
      title: 'Baatcheet',
      description: 'Robust bilingual web app for a content management system and a learning management portal for a leading Indian mental health nonprofit. Made using Angular, Bootstrap and JAVA.',
      images: [baatcheet, baatcheet2, baatcheet3, baatcheetP, baatcheetP2],
      link: 'https://baatcheet.sangath.in/login',
    },
    {
      id:'ni',
      title: 'Sentiment analysis and clustering',
      description: 'A sentiment analysis and entity clustering web app powered by React, AWS Amplify, LLMS - DistilBERT and Gemini',
      images: [ni4,ni1,ni2,ni3],
      link: null,
    },
    {
      id:'duneApp',
      title: 'Dune Wiki',
      description: 'A Dune Wiki PWA (progressive web app) based on the book and movie franchise. Made using React, Tailwind CSS. Hosted on Vercel and GitHub Pages.',
      images: [dune, duneP],
      link: 'https://lasertruf.github.io/dune/',
    },
    {
      id:'more',
      title: 'Coming soon...',
      description: 'A MERN stack based match making app currently under development.',
      images: [],
      link: null,
    },
  ];

  return (
    <div className="mt-6 w-3/4">
      <AboutMe/>

      <div className="flex mt-5 items-center gap-4 text-3xl text-primary font-bold">
        <div className="h-0.5 bg-primary w-8"> </div>
        <span className='text-primary'>Projects</span>
        <div className="h-0.5 bg-primary flex-auto"> </div>
      </div>

     
        {
          projects.map(el =>
            <div key={el.id} className=' ml-12'>
              <div className='mt-6 flex gap-2 justify-start items-center'>
                <a id={el.id} href={el.link} 
                  target="_blank" rel="noopener noreferrer" 
                  className="text-xl bold text-lowEmphasis">{el.title}</a>
              </div>
              <div className='text-base text-gray-300 mt-2 w-4/4'>{el.description}</div>
              <div className='w-full overflow-x-auto  flex gap-2 mt-6 mb-10'>
  
              {el.images.map((img, index) => (
                      <div key={index} className=' flex-none p-4'>
                        <img src={img} alt={`project-${el.id}-${index}`}  
                         style={{cursor:'pointer !important'}} className='carousel-image cursor-pointer' />
                      </div>
                    ))}
  
  
                
              </div>
            </div>
          )
        }
  
      <Technologies/>
    </div>
  );
}

export default ProjectsComponent;
