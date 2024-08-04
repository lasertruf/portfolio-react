import "./App.css";
import ProjectsComponent from "./components/projects/projects";
import "./styles/buttons.scss";
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/linkedin'
import 'react-social-icons/github'
import 'react-social-icons/email'

import photo from "./assets/jayant-insta.png"
import MeteorContainer from "./components/meteors/meteorContainer";

function App() {
  return (
    <div className="m-8  flex flex-col   ">
      <div className=" w-full ">
      <div className="w-full overflow-hidden">

      {/* <MeteorContainer /> */}
      </div>
      </div>
      
      <div className="flex px-11 ">

        <div className=" flex  flex-col  text-3xl text-gray-300  pt-24 pb-0 ">
          <span>
            <span>I'm{" "}</span>
            <span className="text-3xl font-bold text-primary">
              Jayant Waghmare
  
            </span>
          </span>
          <div className="text-xl">
            Full-stack developer, technology enthusiast from India
          </div>
         
        </div>

      </div>

      <div className="text-gray-300 px-11 my-4 ">
           <div className="flex gap-4">jayantwaghmare9@gmail.com<span className="text-base material-symbols-outlined cursor-pointer" onClick={()=>navigator.clipboard.writeText("jayantwaghmare9@gmail.com")}>content_copy</span></div>
           <div className="flex gap-4">+91 9953889259<span className="text-base material-symbols-outlined cursor-pointer" onClick={()=>navigator.clipboard.writeText("+919953889259")}>content_copy</span></div>
        </div>

      <div className="px-11 gap-2 flex mt-2">
    
      <SocialIcon  target="_blank" style={{width:"40px", height:"40px"}} bgColor="#2a2828" url="https://github.com/lasertruf" />
      <SocialIcon target="_blank"  style={{width:"40px", height:"40px"}} bgColor="#2a2828" url="https://www.linkedin.com/in/jayant-waghmare-124294169/" />
      </div>

      <ProjectsComponent/>
     
    </div>
  );
}

export default App;
