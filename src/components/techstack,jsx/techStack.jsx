import React from 'react';
import "./techStack.scss"

function TechStackComponent() {
  return (
     <div>
        <div className="flex  items-center gap-4 text-3xl text-primary font-bold">
          <div className="h-0.5 bg-primary w-8"> </div>
          <span className='text-primary'>Tech stack</span>
          <div className="h-0.5 bg-primary flex-auto"> </div>
        </div>
  
        <div className="flex justify-start items-star mx-4">
          <div className="progress-bar-container">
            <div className="progress-bar" data-label="Angular">
              <div className="progress-bar-inner" style={{width:"95%"}}></div>
              <div className="progress-bar-label">Angular</div>
            </div>
  
            <div className="progress-bar" data-label="React">
              <div className="progress-bar-inner" style={{width:"90%"}}></div>
              <div className="progress-bar-label">React</div>
            </div>
  
            <div className="progress-bar" data-label="Node JS">
              <div className="progress-bar-inner" style={{width:"85%"}}></div>
              <div className="progress-bar-label">Node JS</div>
            </div>
  
            <div className="progress-bar" data-label="JAVA">
              <div className="progress-bar-inner" style={{width:"80%"}}></div>
              <div className="progress-bar-label">JAVA</div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default TechStackComponent;
