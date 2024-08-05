import Image from "next/image";
import Header from "./components/header"
 import Homepage from "./components/homepage.jsx"
import About from "./components/about"
import Conact from "./components/contact"
import Project from "./components/project"

export default function Home() {
  return (
  <div className="bg-[#a67cfe] h-screen w-screen flex flex-col items-center overflow-x-hidden relative scrollbar scrollbar-thin  scrollbar-thumb-[#a67cfe] scrollbar-track-[#764fa4]  overflow-y-scroll">

    <Header></Header>
<Homepage></Homepage>
<Project></Project>
<About></About>
<Conact></Conact>
  </div>
  );
}
