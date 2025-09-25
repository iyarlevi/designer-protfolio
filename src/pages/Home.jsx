import React, { useState } from "react";
import Navbar from "../components/Navbar";
import AboutMeCard from "../components/AboutMeCard";
import ProjectCard from "../components/ProjectCard";

const Home = () => {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div className="px-3 h-screen ">
      <Navbar onAboutClick={() => setShowAbout(true)} />

      {/* Responsive layout */}
      <div className="pt-16  h-full p-2">
        {/* Make the container scrollable */}
        <div className="hidden md:block h-full overflow-y-auto scrollbar-hidden border-t border-x border-black">
          <div className="grid grid-cols-12 auto-rows-[95px] gap-0">
            {/* New top row */}
            <div className="col-start-1 col-end-4 row-span-3">
              <ProjectCard
                title="01 Neve"
                image="images/neve.png"
                id="project-1"
              />
            </div>
            <div className="col-start-4 col-end-8 row-span-3">
              <ProjectCard
                title="02 Wellnest App"
                image="images/wellnest.gif"
                id="project-2"
              />
            </div>
            <div className="col-start-8 col-end-13 row-span-3">
              <ProjectCard
                title="03 Maagalim Event"
                image="images/maagalim_new.png"
                id="project-3"
              />
            </div>

            {/* Original first row */}
            <div className="col-start-1 col-end-6 row-span-3">
              <ProjectCard
                title="04 Lifta"
                image="images/lifta1.gif"
                id="project-4"
              />
            </div>
            <div className="col-start-6 col-end-10 row-span-3">
              <ProjectCard
                title="05 Princess Diana Tribute"
                image="images/new_diana_autograph.png"
                id="project-5"
              />
            </div>
            <div className="col-start-10 col-end-13 row-span-3">
              <ProjectCard
                title="06 Sofa Trip"
                image="images/sofa_trip_gig.gif"
                id="project-6"
              />
            </div>

            {/* Original second row */}
            <div className="col-start-1 col-end-7 row-span-3">
              <ProjectCard
                title="07 Dot App"
                image="images/dot_app.png"
                id="project-7"
              />
            </div>
            <div className="col-start-7 col-end-9 row-span-3">
              <ProjectCard
                title="08 Rujum"
                image="images/rojum.gif"
                id="project-8"
              />
            </div>
            <div className="col-start-9 col-end-13 row-span-3">
              <ProjectCard
                title="09 For Now"
                image="images/for_now.png"
                id="project-9"
              />
            </div>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="flex flex-col gap-6 md:hidden px-1 pb-4">
          {/* New row for mobile */}
          <ProjectCard title="01 Neve" image="images/neve.png" id="project-1" />
          <ProjectCard
            title="02 Wellnest"
            image="images/wellnest.gif"
            id="project-2"
          />
          <ProjectCard
            title="03 Maagalim"
            image="images/maagalim_new.png"
            id="project-3"
          />

          {/* Existing mobile list */}
          <ProjectCard
            title="04 Lifta"
            image="images/lifta1.gif"
            id="project-4"
          />
          <ProjectCard
            title="05 Princess Diana Tribute"
            image="images/new_diana_autograph.png"
            id="project-5"
          />
          <ProjectCard
            title="06 Sofa Trip"
            image="images/sofa_trip_gig.gif"
            id="project-6"
          />
          <ProjectCard
            title="07 The Dot App"
            image="images/dot_app.png"
            id="project-7"
          />
          <ProjectCard
            title="08 Rujum"
            image="images/rojum.gif"
            id="project-8"
          />
          <ProjectCard
            title="09 For Now"
            image="images/for_now.png"
            id="project-9"
          />
        </div>
      </div>

      <AboutMeCard visible={showAbout} onClose={() => setShowAbout(false)} />
    </div>
  );
};

export default Home;
