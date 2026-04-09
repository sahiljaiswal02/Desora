"use client";
import React from "react";
import { projects } from "../../data/projects";
import { ContainerScroll, CardSticky } from "./cards-stack";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export function ProjectsStack() {
  return (
    <div className="w-full py-2 px-4 md:px-0">
      <ContainerScroll className="max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <CardSticky
            key={project.id}
            index={index}
            total={projects.length}
            incrementY={30}
            incrementZ={0.04}
          >
            {/* Solid white background — no transparency */}
            <div className="group relative w-full h-full bg-gray-200 dark:bg-neutral-900 rounded-[2.5rem] border border-black/5 dark:border-white/5 overflow-hidden shadow-2xl flex flex-col md:flex-row">
              {/* Project Image Section */}
              <div className="w-full md:w-1/2 h-64 md:h-full relative overflow-hidden bg-white dark:bg-neutral-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent md:hidden" />
              </div>

              {/* Project Content Section */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between bg-white dark:bg-neutral-900">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-orange-500 font-display text-lg font-bold tracking-widest uppercase">
                      {project.id}
                    </span>
                    <span className="bg-black/5 dark:bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="text-4xl md:text-6xl font-display uppercase tracking-tighter leading-none mb-6 text-black dark:text-white">
                    {project.title}
                  </h3>

                  <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
                    {project.about}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-black dark:bg-white text-white dark:text-black px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 md:flex-none bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
                  >
                    View Project <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={`/project/${project.slug}`}
                    className="flex-1 md:flex-none border border-black/10 dark:border-white/10 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
                  >
                    Details <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </CardSticky>
        ))}
      </ContainerScroll>
    </div>
  );
}
