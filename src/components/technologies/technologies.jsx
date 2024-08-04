import React from 'react';
import "./technologies.scss"
import wordCloudSvg from "../../assets/wordcloud.svg"

function Technologies() {
 
  return (
     <div>
        <div className="flex  items-center gap-4 text-3xl text-primary font-bold">
          <div className="h-0.5 bg-primary w-8"> </div>
          <span className='text-primary'>Technologies</span>
          <div className="h-0.5 bg-primary flex-auto"> </div>
        </div>

        <div className='text-gray-300 flex items-center justify-center '>
            <img className=' w-2/4 mt-10' src={wordCloudSvg} alt="" srcset="" />

        </div>
  
      </div>
  );
}

export default Technologies;
