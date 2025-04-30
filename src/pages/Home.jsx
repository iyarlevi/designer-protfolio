import React, { useState } from "react";
import Navbar from "../components/Navbar";
import AboutMeCard from "../components/AboutMeCard";
import ProjectCard from "../components/ProjectCard";

const Home = () => {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div className="px-3 pb-3 h-screen ">
      <Navbar onAboutClick={() => setShowAbout(true)} />

      {/* Responsive layout */}
      <div className="pt-16 h-full p-2">
        <div className="hidden md:grid grid-cols-12 grid-rows-6 gap-0  h-full border border-black">
          <div className="col-start-1 col-end-6 row-start-1 row-end-4 ">
            <ProjectCard
              title="01 Lifta"
              image="images/lifta1.gif"
              id="project-1"
            />
          </div>
          <div className="col-start-6 col-end-10 row-start-1 row-end-4">
            <ProjectCard
              title="02 Princess Diana Tribute"
              image="images/new_diana_autograph.png"
              id="project-2"
            />
          </div>
          <div className="col-start-10 col-end-13 row-start-1 row-end-4">
            <ProjectCard
              title="03 Sofa Trip"
              image="images/sofa_trip_gig.gif"
              id="project-3"
            />
          </div>
          <div className="col-start-1 col-end-7 row-start-4 row-end-7">
            <ProjectCard
              title="04 The Dot App"
              image="images/dot_app.png"
              id="project-4"
            />
          </div>
          <div className="col-start-7 col-end-9 row-start-4 row-end-7">
            <ProjectCard
              title="05 Rujum"
              image="images/rojum.gif"
              id="project-5"
            />
          </div>
          <div className="col-start-9 col-end-13 row-start-4 row-end-7">
            <ProjectCard
              title="06 For Now"
              image="images/for_now.png"
              id="project-6"
            />
          </div>
        </div>

        {/* Mobile layout */}
        <div className="flex flex-col gap-6 md:hidden px-1 pb-4">
          <ProjectCard
            title="01 Lifta"
            image="images/lifta1.gif"
            id="project-1"
          />
          <ProjectCard
            title="02 Princess Diana Tribute"
            image="images/new_diana_autograph.png"
            id="project-2"
          />
          <ProjectCard
            title="03 Sofa Trip"
            image="images/sofa_trip_gig.gif"
            id="project-3"
          />
          <ProjectCard
            title="04 The Dot App"
            image="images/dot_app.png"
            id="project-4"
          />
          <ProjectCard
            title="05 Rujum"
            image="images/rojum.gif"
            id="project-5"
          />
          <ProjectCard
            title="06 For Now"
            image="images/for_now.png"
            id="project-6"
          />
        </div>
      </div>

      <AboutMeCard visible={showAbout} onClose={() => setShowAbout(false)} />
    </div>
  );
};

export default Home;
