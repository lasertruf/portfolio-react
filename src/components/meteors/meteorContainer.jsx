import React, { useEffect, useState } from 'react';
import Meteor from './meteor';
import './meteorContainer.scss';

const MeteorContainer = () => {
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    const numberOfMeteors = 20; // Adjust the number of meteors
    const maxMeteors = 40; // Adjust the number of meteors
    const urls = [
      "www.linkedin.com",
      "www.github.com",
      "www.instagram.com",
      "www.linkedin.com",
      "www.youtube.com",
      "www.github.com",
    ]
    const addMeteor = () => {
      setMeteors((prevMeteors) => [
        ...prevMeteors,
        {
          id: prevMeteors.length,
          left: Math.random() * window.innerWidth + 350, // Random starting position
          delay: 0, // No delay needed for the new meteor
          duration: Math.random() * 3 + 5, // Random duration for each meteor
          url : urls[Math.floor(Math.random() * 5) + 1]
        },
      ]);
    };

    // Initially add the meteors
    for (let i = 0; i < numberOfMeteors; i++) {
      addMeteor();
    }

    // Add new meteors at random intervals
    const intervalId = setInterval(() => {
      addMeteor();
      setMeteors((prevMeteors)=>[...prevMeteors.slice(0,maxMeteors)])
     
      
    }, 500); // Adjust the interval time as needed

    // Cleanup on unmount
    return () => clearInterval(intervalId);

  }, []);

  return (
    <div className="meteor-container">
      {meteors.map((meteor) => (
        <Meteor key={meteor.id} left={meteor.left} delay={meteor.delay} duration={meteor.duration} url={meteor.url} />
      ))}

    </div>
  );
};

export default MeteorContainer;
