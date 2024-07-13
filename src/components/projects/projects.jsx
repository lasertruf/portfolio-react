import React from 'react';
import "./projects.scss"

function ProjectsComponent() {
  return (
    <div className="mt-10 w-3/4">
      <div className="flex  items-center gap-4 text-3xl text-primary font-bold">
        <div className="h-0.5 bg-primary w-8"> </div>
        About me
        <div className="h-0.5 bg-primary flex-auto"> </div>
      </div>

      <div className="text-white text-lg mx-8 p-4">
        I'm a passionate and dedicated software developer with over 3 years of
        professional experience. My expertise spans across a variety of modern
        technologies including Angular, React, Node.js, and Java. I thrive on
        creating robust and scalable web applications, and I am committed to
        continuous learning and staying updated with the latest industry trends.
        My strong problem-solving skills and collaborative mindset enable me to
        deliver high-quality solutions that meet both user and business needs.
      </div>

      <div className="flex  items-center gap-4 text-3xl text-primary font-bold">
        <div className="h-0.5 bg-primary w-8"> </div>
        Projects
        <div className="h-0.5 bg-primary flex-auto"> </div>
      </div>

      <div className="text-white text-lg mx-8 p-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore natus
        ad possimus ex odit eos quidem commodi obcaecati ut. Maxime temporibus
        neque expedita delectus maiores cumque nulla deserunt inventore
        dignissimos!
      </div>

      <div className="flex  items-center gap-4 text-3xl text-primary font-bold">
        <div className="h-0.5 bg-primary w-8"> </div>
        Tech stack
        <div className="h-0.5 bg-primary flex-auto"> </div>
      </div>

      <div className="flex justify-start items-star mx-4">
        <div className="progress-bar-container">
          <div className="progress-bar" data-label="Angular">
            <div className="progress-bar-inner" style={{width:"95%"}}></div>
            <div className="progress-bar-label">Angular</div>
          </div>

          <div className="progress-bar" data-label="Angular">
            <div className="progress-bar-inner" style={{width:"90%"}}></div>
            <div className="progress-bar-label">React</div>
          </div>

          <div className="progress-bar" data-label="Angular">
            <div className="progress-bar-inner" style={{width:"85%"}}></div>
            <div className="progress-bar-label">Node JS</div>
          </div>

          <div className="progress-bar" data-label="Angular">
            <div className="progress-bar-inner" style={{width:"80%"}}></div>
            <div className="progress-bar-label">JAVA</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsComponent;
