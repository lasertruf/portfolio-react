// src/Card.js
import React from 'react';
import "./projects.scss"
import dune from "../../assets/dune.png"

const Card = ({ title, description, imageUrl, link }) => {

      
      
        document.addEventListener('scroll', function() {
            const parallaxElements = document.querySelectorAll('.card-image');
        
            parallaxElements.forEach(function(element) {
              element.dataset.initialTop = element.getBoundingClientRect().top + window.scrollY;
            });

          parallaxElements.forEach(function(element,key) {
            const speed = 0.05; // Adjust this value to control the speed of the parallax effect
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const initialTop = parseFloat(element.dataset.initialTop);
            // element.style.transform = `translateY(${yPos}px)`;

            if (rect.top <= windowHeight && rect.bottom >= 0) {
                const initialTop = parseFloat(element.dataset.initialTop);
                const yPos = (-700 + rect.top) * speed;
                element.style.transform = `translateY(${yPos}px)`;
              } else {
                element.style.transform = 'translateY(0)';
              }

            if(key==0)
            console.log(rect);
           
          });
        });
      
  return (
    <div className="card">
      <div className="card-image-area">
        <img className="card-image" src={imageUrl} alt={title} />
        <div className='top-frame'></div>
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="card-link">View App</a>
      </div>
    </div>
  );
};

export default Card;
