import "./App.css";
import ProjectsComponent from "./components/projects/projects";
import "./styles/buttons.scss";

import photo from "./assets/jayant-insta.png"

function App() {
  return (
    <div className="m-8">
      <div className="h-12"></div>
      <div className="flex w-auto items-start">

        <div className="flex-1 text-3xl  text-gray-300 p-6 px-24 py-24">
          I'm{" "}
          <span className="text-3xl font-bold" style={{ color: "#ffc86b" }}>
            Jayant Waghmare

          </span>
          <div className="text-xl">
            Full-stack developer, technology enthusiast
          </div>
          <div className="mt-2">
            <button className="btn-pri">Contact me</button>
          </div>
        </div>

        <div className="text-white w-1/5">
        <img  src={photo} />
        
        </div>

        <div className="w-1/5 ml-24 mt-10">

              <div className="flex-col text-white">
                <div>LinkedIn</div>
                <div className="mt-4">GitHub</div>
              </div>
        </div>

      </div>

      <ProjectsComponent/>
     
    </div>
  );
}

export default App;
