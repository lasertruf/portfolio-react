import React from 'react';
import "./projects.scss"
import TechStackComponent from '../techstack,jsx/techStack';
import AboutMe from '../aboutMe/aboutMe';
import Card from './card';
import dune from "../../assets/dune.png"
import duneP from "../../assets/dune-p.png"
import baatcheet from "../../assets/baatcheet.png"
import baatcheetP from "../../assets/baatcheetP.png"
import tps from "../../assets/tps.png"
import tpsP from "../../assets/tps-p.png"
function ProjectsComponent() {

  const projects =  [
    {
      id:'duneApp',
      title: 'Dune Wiki',
      description: 'A Dune Wiki PWA (progressive web app) based on the book and movie franchise. Made using React, Tailwind CSS. Hosted on Vercel and GitHub Pages.',
      imageUrl: dune,
      imageUrlP: duneP,
      link: 'https://lasertruf.github.io/dune/',
    },
    {
      id:'baatcheet',
      title: 'Baatcheet',
      description: 'Robust bilingual front end web app for a content management system and a learning management portal for a leading Indian mental health nonprofit. Made using Angular and Bootstrap.',
      imageUrl: baatcheet,
      imageUrlP: baatcheetP,
      link: 'https://baatcheet.sangath.in/login',
    },
    {
      id:'tps',
      title: 'Rooftop solar calculator',
      description: 'A responsive rooftop solar calculator for Tata Power Solar. Made using Angular',
      imageUrl: tps,
      imageUrlP: tpsP,
      link: 'https://calculator.tatapowersolar.com/',
    },
   
  ];


  return (
    <div className="mt-10 w-3/4">
     <AboutMe/>

      <div className="flex mt-5 items-center gap-4 text-3xl text-primary font-bold">
        <div className="h-0.5 bg-primary w-8"> </div>
        <span className='text-primary'>Projects</span>
        <div className="h-0.5 bg-primary flex-auto"> </div>
      </div>


      {/* <div>
          <div className="gallery">
          {projects?.map((project, index) => (
            <Card key={index} {...project} />
          ))}
        </div>
      </div> */}
      

{
  projects.map(el=>
    <div key={el.id} className='ml-12'>
    <div className='mt-6 flex gap-2 justify-start items-center'>
      <a  id={el.id} href={el.link} 
        target="_blank" rel="noopener noreferrer" 
        className="text-xl bold text-white">{el.title} </a> 
     
     
       
    </div>
    <div className=' text-base text-white mt-2 w-4/4 '>{el.description}</div>

    <div onClick={()=>{document.getElementById(`${el.id}`).click()}}
     className='w-full h-auto justify-center items-stretch flex gap-4 mt-6 mb-10'>
      <div className='w-3/4 overflow-clip flex bg-white rounded-md p-2'>
        <img 
         className='rounded-md object-fill overflow-hidden cursor-pointer' 
          src={el.imageUrl} alt="" srcset="" />
      </div>
      
      <div onClick={()=>{document.getElementById('duneApp').click()}} className='w-1/4 flex justify-center items-stretch bg-white rounded-md p-2'>
        <img className='rounded-md cursor-pointer  object-contain ' src={el.imageUrlP} alt="" srcset="" />

      </div>
    </div>
 </div>
  )
}
    

   

      <TechStackComponent/>
    </div>
  );
}

export default ProjectsComponent;
