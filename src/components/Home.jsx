import React from "react";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";
const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0A192F]">
      {/*Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        {/*<p className="text-pink-600 ">Hi, My Name is</p> */}
        <h1 className="text-4xl sm:text-7xl font-bold text-[#CCD6f6]">
          Amit Sapkota
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          Full Stack Developer.{" "}
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a Full Stack Developer specializing in building exceptional
          digital experiences.Currently I'm focused on building responsive full
          stack web applications
        </p>
        <div>
          <Link to="projects" smooth={true} duration={500}>
            <button className="text-white border-2 px-6 py-3 my-2 group flex items-center hover:bg-pink-600 hover:border-pink-600">
              View My Projects
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
