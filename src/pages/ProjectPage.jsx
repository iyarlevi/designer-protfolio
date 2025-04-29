import React, { useState, useRef } from "react";
import Navbar from "../components/Navbar";
import AboutMeCard from "../components/AboutMeCard";
import { useParams, useNavigate } from "react-router-dom";

const mockProjects = {
  "project-1": {
    title: "01 Lifta",
    description:
      "A visual identity for the abandoned village of Lifta, created for a children's summer celebration held on-site. Drawing on the village's distinctive stone architecture, I developed a shape-based graphic language with paper cuts, forming lively creatures that bring the place to life. The project includes a logo, poster and a Animation for social media.",
    tags: ["Visual Identity", "Branding", "Motion", "Print", "2024", "Hebrew"],
    media: [
      {
        type: "image",
        src: "/images/lifta/new_first.gif",
        des: "[Social media animation]",
      },
      {
        type: "image",
        src: "/images/lifta/new_poster.png",
        des: "[100*50 Poster]",
      },
      { type: "image", src: "/images/lifta/new_size_logo.png", des: "[Logo]" },
    ],
  },
  "project-2": {
    title: "02 Princess Diana Tribute",
    description:
      "A booklet that follows Diana's life and the events that followed her death. The project focuses on the less comfortable parts of her story - postpartum depression, bulimia, suicide attempts, and more. Alongside the booklet, I designed a landing page for its launch, continuing the same visual tone and language.",
    tags: ["Typography", "Image Making", "Web", "Print", "2024", "Hebrew"],
    media: [
      {
        type: "video",
        src: "/images/diana/compres.mp4",
        des: "[Landing page navigation]",
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
        type: "image",
        src: "/images/diana/new_book.gif",
        des: "[Booklet browsing]",
      },
    ],
  },
  "project-3": {
    title: "03 Sofa Trip",
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
  "project-4": {
    title: "04 The Dot App",
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
  "project-5": {
    title: "05 Rujum",
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
  "project-6": {
    title: "06 For Now",
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

  // Projects Navigation
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

      {/* >>> changed this wrapper div here <<< */}
      <div className="relative md:fixed top-0 md:top-12 left-0 right-0 bottom-0 flex flex-col overflow-auto border border-black mb-4 md:m-4 mx-5 md:grid md:grid-cols-[minmax(300px,400px)_1fr]">
        {" "}
        {/* Sidebar */}
        <aside className="border-b md:border-b-0 md:border-r md:border-black px-6 py-8 h-full flex flex-col justify-between overflow-hidden">
          <div>
            <h1 className="text-4xl mb-4">{project.title}</h1>
            <p className="text-black text-base mb-6">{project.description}</p>
            {project.collaboration && (
              <p className="mt-2">Collaboration: {project.collaboration}</p>
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
          className="overflow-y-auto p-7 space-y-6 bg-white h-full self-start justify-items-end media-scrollbar"
        >
          {project.media.map((item, idx) => {
            return (
              <div key={idx} className="relative w-fit self-end pb-4">
                {item.type === "image" && (
                  <img
                    src={item.src}
                    alt={`Project ${idx}`}
                    className="w-auto h-auto"
                  />
                )}
                {item.type === "video" && (
                  <video controls autoPlay loop muted className="w-fit h-fit">
                    <source src={item.src} type="video/mp4" />
                  </video>
                )}
                {item.des && (
                  <p className="absolute left-0 top-full mt-[-12px] text-sm text-black ">
                    {item.des}
                  </p>
                )}
              </div>
            );
          })}

          <button
            onClick={handleNextClick}
            className="border border-black text-sm px-2 py-2 cursor-pointer hover:bg-black hover:text-white transition-colors duration-400"
          >
            {id === "project-6"
              ? "Next > 01"
              : `Next > 0${parseInt(id.split("-")[1]) + 1}`}
          </button>
        </main>
      </div>
    </div>
  );
};

export default ProjectPage;
