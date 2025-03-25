"use client";
import React from "react";
import "../work.css";
import "../header.css";
import FullpageProviderWork from "@/components/fullpageProviderWork";
import { Cursor } from "@/components/cursor";
import { HeaderNavigation } from "@/components/headerNavigation";
import { WorkSection } from "@/components/workPage/workSection";

const projectsData = [
  {
    title: (
      <>
        Cooler Master
      </>
    ),
    description: "E-Commerce Site",
    link: "https://www.coolermaster.com/en-eu/",
    imageLink: "/img/projects/coolermaster.avif",
  },
  {
    title: (
      <>
        Treccani
      </>
    ),
    description: "E-Commerce Site",
    link: "https://www.treccani.it/",
    imageLink: "/img/projects/treccani.avif",
  },
  {
    title: (
      <>
        Giro  <br /> D'Italia
      </>
    ),
    description: "Web Site",
    link: "https://www.giroditalia.it/",
    imageLink: "/img/projects/giro-italia.avif",
  },
  {
    title: (
      <>
        Smeg
      </>
    ),
    description: "E-Commerce Site",
    link: "https://www.smeg.com/it",
    imageLink: "/img/projects/smeg.avif",
  },

  {
    title: (
      <>
        Inter
      </>
    ),
    description: "Web Site",
    link: "https://www.inter.it/it",
    imageLink: "/img/projects/inter.avif",
  },
  // {
  //   title: (
  //     <>
  //       Therapist <br /> Website
  //     </>
  //   ),
  //   description: "UI Design",
  //   link: "https://www.figma.com/proto/Tzz9bwrjHtSza87b1l3D0i/Inner-Strength-UI-Design?type=design&node-id=37-10&t=pq2KDLjYbMU4LFgA-1&scaling=min-zoom&page-id=0%3A1&mode=design",
  //   imageLink: "/img/projects/6.avif",
  // },
];
//test
export default function WorkPage() {
  return (
    <>
      <Cursor />
      <HeaderNavigation />
      <FullpageProviderWork>
        <div id="fullpage">
          <div className="background">
            PROJECTS
            <br />
            PROJECTS
          </div>

          {projectsData.map((item, index) => (
            <WorkSection
              key={index}
              item={item}
              index={index}
              length={projectsData.length}
              color={index % 2 !== 0 ? "Light" : "Dark"}
            />
          ))}
        </div>
      </FullpageProviderWork>
    </>
  );
}
