import React, { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import AboutMeCard from "../components/AboutMeCard";
import { useParams, useNavigate } from "react-router-dom";

const mockProjects = {
  "project-1": {
    title: "01 Neve",
    description:
      "Neve is an innovative gel cube designed for emergency conditions such as shelters. It enables the growth of vegetables, fruits, and herbs without soil, watering, or sunlight - providing everything the plant needs through a unique self-sustaining technology.",
    tags: [
      "Branding",
      "Visual Identity",
      "Web",
      "Typography",
      "Print",
      "2025",
      "English",
    ],
    media: [
      { type: "image", src: "/images/neve/1.png", des: "[The product]" },
      { type: "image", src: "/images/neve/2.png", des: "[The product]" },
      {
        type: "image",
        src: "/images/neve/3.png",
        des: "[Product information leaflet]",
      },
      {
        type: "image",
        src: "/images/neve/4.gif",
        des: "[Product information leaflet]",
      },
      {
        type: "video",
        src: "/images/neve/5.mp4",
        des: "[Landing page]",
      },
      { type: "image", src: "/images/neve/6.png", des: "[Advertising poster]" },
      { type: "image", src: "/images/neve/7.png", des: "[Advertising poster]" },
      { type: "image", src: "/images/neve/8.png", des: "[Advertising poster]" },
      { type: "image", src: "/images/neve/9.png", des: "[Advertising poster]" },
      { type: "image", src: "/images/neve/10.png", des: "[Merchandise]" },
      { type: "image", src: "/images/neve/11.png", des: "[Merchandise]" },
      {
        type: "video",
        src: "/images/neve/12.mp4",
        des: "[Merchandise 3D printing process]",
      },
    ],
  },

  "project-2": {
    title: "02 Wellnest",
    description:
      "An app for family caregivers, developed following a research and conversations with caregivers. Our findings showed that the caregiving burden often falls on a single family member. The app offers a collaborative solution: a shared task pool, centralized medical documents, and a focus on positive feedback and mutual recognition.",
    tags: ["App", "UX/UI", "Web", "2025", "Hebrew"],
    collaboration: "Shir Klein",
    media: [
      { type: "image", src: "/images/wellnest/img1.png" },
      {
        type: "video",
        src: "/images/wellnest/vid2.mp4",
        des: "[App navigation]",
      },
      {
        type: "image",
        src: "/images/wellnest/img3.png",
        des: "[App interactions]",
      },
      {
        type: "video",
        src: "/images/wellnest/vid4.mp4",
        des: "[Landing page navigation]",
      },
    ],
  },

  "project-3": {
    title: "03 Maagalim Event",
    description:
      "An event by ״Hazit HaBayit״, an organization that has been furnishing the homes of evacuees since October 7th. The event invites the public to take part in a cycle of giving, receiving, and reuse. In designing the website, I focused on two main values: respect for objects, treating them as if they were people with their own history and story, and creating an inviting and equal experience, with a design language that avoids any sense of awkwardness ensuring that everyone feels comfortable participating.",
    tags: ["Web", "UX/UI", "Visual Identity", "2025", "Hebrew"],
    media: [
      // {
      //   type: "image",
      //   src: "/images/maagalim/1.gif",
      //   des: "[Home page navigation]",
      // },
      {
        type: "video",
        src: "/images/maagalim/Comp1.mp4",
        des: "[Home page navigation]",
      },
      { type: "image", src: "/images/maagalim/2.png", des: "[Catalog page]" },
      // { type: "image", src: "/images/maagalim/3.png", des: "[Catalog page]" },
      // {
      //   type: "image",
      //   src: "/images/maagalim/4.gif",
      //   des: "[Hangar page navigation]",
      // },
      {
        type: "video",
        src: "/images/maagalim/Comp4.mp4",
        des: "[Hangar page navigation]",
      },
      {
        type: "image",
        src: "/images/maagalim/5.png",
        des: "[Event registration page]",
      },
      // { type: "image", src: "/images/maagalim/6.png", des: "[About page]" },
    ],
  },

  "project-4": {
    title: "04 Lifta",
    description:
      "A visual identity for the abandoned village of Lifta, created for a children's summer celebration held on-site. Drawing on the village's distinctive stone architecture, I developed a shape-based graphic language with paper cuts, forming lively creatures that bring the place to life. The project includes a logo, poster and a Animation for social media.",
    tags: ["Visual Identity", "Branding", "Motion", "Print", "2024", "Hebrew"],
    media: [
      { type: "image", src: "/images/lifta/logo.png", des: "[Logo]" },
      {
        type: "image",
        src: "/images/lifta/new_first.gif",
        des: "[Social media animation]",
      },
      {
        type: "image",
        src: "/images/lifta/poster.png",
        des: "[100*50 Poster]",
      },
    ],
  },
  "project-5": {
    title: "05 Princess Diana Tribute",
    description:
      "A booklet that follows Diana's life and the events that followed her death. The project focuses on the less comfortable parts of her story - postpartum depression, bulimia, suicide attempts, and more. Alongside the booklet, I designed a landing page for its launch, continuing the same visual tone and language.",
    tags: ["Typography", "Image Making", "Web", "Print", "2024", "Hebrew"],
    media: [
      {
        type: "image",
        src: "/images/diana/new_book.gif",
        des: "[Booklet browsing]",
      },

      {
        type: "image",
        src: "/images/diana/new1.png",
        des: "[Booklet page 2-3]",
      },
      {
        type: "image",
        src: "/images/diana/new2.png",
        des: "[Booklet page 6-7]",
      },
      {
        type: "image",
        src: "/images/diana/new3.png",
        des: "[Booklet page 14-15]",
      },
      {
        type: "video",
        src: "/images/diana/new_compres.mp4",
        des: "[Landing page navigation]",
      },
    ],
  },
  "project-6": {
    title: "06 Sofa Trip",
    description:
      "A TV app that brings virtual travel experiences straight to your home, allowing users to explore the world without leaving their comfort zone. Inspired by sofa fabrics, I designed a warm and inviting visual language that blends illustration, image-making, and typography into a cohesive identity.",
    tags: ["App", "Branding", "Motion", "2025", "English"],
    media: [
      {
        type: "video",
        src: "/images/sofaTrip/intro.mp4",
        des: "[Introduction video]",
      },
      {
        type: "image",
        src: "/images/sofaTrip/poster.png",
        des: "[Advertising posters]",
      },
      {
        type: "image",
        src: "/images/sofaTrip/grid.png",
        des: "[Instegram posts grid]",
      },
      {
        type: "image",
        src: "/images/sofaTrip/new1.gif",
        des: "[Social media animation]",
      },
      {
        type: "image",
        src: "/images/sofaTrip/2.gif",
        des: "[Social media animation]",
      },
      {
        type: "video",
        src: "/images/sofaTrip/new_app.mp4",
        des: "[App navigation]",
      },
    ],
  },
  "project-7": {
    title: "07 The Dot App",
    description:
      "An educational app designed to assist children and Hebrew learners by adding vocalization marks (nikkud) to words. We designed the app so users can type, photograph, or record a word, and the app will provide the correct vocalization marks, making reading more accessible and intuitive.",
    collaboration: "Niv Yagur",
    tags: ["App", "Visual Identity", "2024", "Hebrew"],
    media: [
      { type: "image", src: "/images/dotApp/frame1.png" },
      {
        type: "image",
        src: "/images/dotApp/frame2.png",
        des: "[App interaction]",
      },
      { type: "video", src: "/images/dotApp/app.mp4", des: "[App navigation]" },
    ],
  },
  "project-8": {
    title: "08 Rujum",
    description:
      "A strategic board game where players compete to conquer mountain peaks by building “Rujums”- traditional stone piles used for trail and summit marking. The game combines natural elements with tactical thinking. The set includes a game board, dice, stones for building the Rujums, game cards, and instructions.",
    collaboration: "Maya Shamir, Goni Israeli",
    tags: ["Board Game", "2024", "Hebrew"],
    media: [
      { type: "image", src: "/images/rujum/image1.png" },
      { type: "image", src: "/images/rujum/new_frames.png" },
      {
        type: "image",
        src: "/images/rujum/instractions.png",
        des: "[Game instruction page]",
      },
      {
        type: "image",
        src: "/images/rujum/proces.gif",
        des: "[3D printing process]",
      },
    ],
  },
  "project-9": {
    title: "09 For Now",
    description:
      "A poster designed for “Jerusalem Design Week 2022”, under the theme “For Now”. The event explored the temporality of design, so in my design I took inspiration from a hourglass in order to make the viewer feel the essence of time and temporality.",
    tags: ["Typography", "2022", "Hebrew"],
    media: [
      { type: "image", src: "/images/forNow/for_now_poster.jpg" },
      { type: "image", src: "/images/forNow/try1.png" },
    ],
  },
  // Add more projects as needed...
};

const ProjectPage = () => {
  const mainRef = useRef(null);
  const { id } = useParams();
  const project = mockProjects[id];
  const navigate = useNavigate();
  const [showAbout, setShowAbout] = useState(false);

  if (!project) return <div className="p-10">Project not found</div>;

  const projectKeys = Object.keys(mockProjects);
  const currentIndex = projectKeys.indexOf(id);
  const nextIndex = (currentIndex + 1) % projectKeys.length;
  const nextProjectId = projectKeys[nextIndex];

  const handleNextClick = () => {
    navigate(`/project/${nextProjectId}`);
    if (mainRef.current) {
      mainRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="pt-16">
      <Navbar onAboutClick={() => setShowAbout(true)} />
      <AboutMeCard visible={showAbout} onClose={() => setShowAbout(false)} />

      <div className="relative md:fixed top-0 md:top-12 left-0 right-0 bottom-0 flex flex-col overflow-auto border border-black mb-5 mt-4 md:mx-5 mx-5 md:grid md:grid-cols-[minmax(300px,400px)_1fr]">
        {/* Sidebar */}
        <aside className="border-b md:border-b-0 md:border-r md:border-black px-6 py-8 h-full flex flex-col justify-between overflow-hidden">
          <div>
            <h1 className="text-4xl mb-4">{project.title}</h1>
            <p className="text-black text-base mb-6">{project.description}</p>
            {project.collaboration && (
              <p className="mt-2">
                Collaboration with <b>{project.collaboration}</b>{" "}
              </p>
            )}
          </div>

          <div className="flex gap-2 flex-wrap mt-auto">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="border border-black text-base px-2 py-2"
              >
                {tag}
              </span>
            ))}
          </div>
        </aside>

        {/* Media content */}
        <main
          ref={mainRef}
          className="overflow-y-auto p-7 space-y-6 bg-white h-full media-scrollbar"
        >
          {project.media.map((item, idx) => {
            const isHiddenOnMobile = item.src === "/images/forNow/try1.png";

            return (
              <div
                key={idx}
                className={`w-full flex justify-end pb-4 ${
                  isHiddenOnMobile ? "hidden md:flex" : ""
                }`}
              >
                <div className="relative w-fit">
                  {item.type === "image" && (
                    <img
                      src={item.src}
                      alt={`Project ${idx}`}
                      className="w-auto h-auto"
                    />
                  )}
                  {item.type === "video" && (
                    <video
                      controls
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-fit h-fit"
                    >
                      <source src={item.src} type="video/mp4" />
                    </video>
                  )}
                  {item.des && (
                    <p className="absolute left-0 top-full  text-base text-black">
                      {item.des}
                    </p>
                  )}
                </div>
              </div>
            );
          })}

          <div className="flex justify-end">
            <button
              onClick={handleNextClick}
              className="border border-black text-base px-2 py-2 cursor-pointer hover:bg-black hover:text-white transition-colors duration-400"
            >
              {id === "project-6"
                ? "Next > 01"
                : `Next > 0${parseInt(id.split("-")[1]) + 1}`}
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProjectPage;
