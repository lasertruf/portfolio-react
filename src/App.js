import "./App.css";
import ProjectsComponent from "./components/projects/projects";
import "./styles/buttons.scss";
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/linkedin'
import 'react-social-icons/github'

import photo from "./assets/jayant-insta.png"
import MeteorContainer from "./components/meteors/meteorContainer";

function App() {
  return (
    <div className="m-8">
      <div className=" w-full">
      <div className="w-full overflow-hidden">

      <MeteorContainer />
      </div>
      </div>
      
      <div className="flex w-auto items-start">

        <div className="flex-1 text-3xl  text-gray-300 p-6 px-12 pt-24">
          I'm{" "}
          <span className="text-3xl font-bold text-primary">
            Jayant Waghmare

          </span>
          <div className="text-xl">
            Full-stack developer, technology enthusiast
          </div>
          {/* <div className="mt-2">
            <button className="btn-pri">Contact me</button>
          </div> */}
        </div>

        <div className="text-white w-1/5">
        {/* <img  src={photo} /> */}
        
        </div>

        {/* <div className="w-1/5 ml-24 mt-10">

              <div className="flex-col text-white">
                <div>LinkedIn</div>
                <div className="mt-4">GitHub</div>
              </div>
        </div> */}

      </div>

      <div className="px-11 gap-2 flex">
      <SocialIcon  target="_blank" style={{width:"40px", height:"40px"}}  bgColor="#2a2828" url="https://github.com/lasertruf" />
      <SocialIcon target="_blank"  style={{width:"40px", height:"40px"}} bgColor="#2a2828" url="https://www.linkedin.com/in/jayant-waghmare-124294169/" />
      </div>

      <ProjectsComponent/>
     
    </div>
  );
}

export default App;
