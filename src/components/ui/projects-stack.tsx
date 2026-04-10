"use client";
import React from "react";
import { projects } from "../../data/projects";
import { ContainerScroll, CardSticky } from "./cards-stack";
import { ExternalLink, ArrowUpRight } from "lucide-react";

export function ProjectsStack() {
  return (
    <div className="w-ful px-2 sm:px-4 md:px-0">
      <ContainerScroll className="max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <CardSticky
            key={project.id}
            index={index}
            total={projects.length}
            incrementY={30}
            incrementZ={0.04}
          >
            {/*
              CARD ROOT
              - NO fixed height — let content define height naturally
              - overflow-hidden clips children to rounded corners
              - flex-col on mobile, flex-row on md+
            */}
            <div className="group relative w-full h-fit bg-white dark:bg-neutral-900 rounded-2xl sm:rounded-3xl border border-black/5 dark:border-white/5 overflow-hidden shadow-2xl flex flex-col md:flex-row">
              {/* ── IMAGE ──
                  Mobile : fixed 220px tall, full width
                  Desktop: half width, full height of card
              */}
              <div className="relative w-full md:w-1/2 shrink-0 h-[220px] sm:h-[260px] md:h-auto">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                {/* Gradient only on mobile */}
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent md:hidden pointer-events-none" />
              </div>

              {/* ── CONTENT ──
                  flex-col so inner sections stack
                  justify-between pushes buttons to bottom
                  All padding uniform per breakpoint
              */}
              <div className="flex flex-col justify-between w-full md:w-1/2 p-5 sm:p-6 md:p-8 lg:p-10">
                {/* Top section: meta + title + description + tags */}
                <div className="flex flex-col gap-3 sm:gap-4">
                  {/* ID + Year */}
                  <div className="flex items-center justify-between">
                    <span className="text-orange-500 font-bold tracking-widest uppercase text-sm sm:text-base">
                      {project.id}
                    </span>
                    <span className="bg-black/5 dark:bg-white/10 text-black dark:text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                      {project.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="font-display font-black uppercase tracking-normal leading-[0.9] text-black dark:text-white
                    text-[2rem] sm:text-[2.5rem] md:text-[2rem] lg:text-[2.75rem] xl:text-[3.5rem]"
                  >
                    {project.title}
                  </h3>

                  {/* Description — strictly clamped so it never pushes buttons off */}
                  <p
                    className="text-gray-500 dark:text-gray-400 leading-relaxed
                    text-sm sm:text-base md:text-sm lg:text-base
                    line-clamp-3 sm:line-clamp-4 md:line-clamp-5"
                  >
                    {project.about}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-black dark:bg-white text-white dark:text-black px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-wider whitespace-nowrap"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom section: buttons always visible, never cut */}
                <div className="flex flex-col sm:flex-row gap-2.5 pt-5 sm:pt-6">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex-1 flex items-center justify-center gap-2
                      bg-orange-500 hover:bg-orange-600
                      text-white font-black uppercase tracking-widest
                      text-[10px] sm:text-[11px]
                      px-4 py-3.5 sm:py-4
                      rounded-xl sm:rounded-2xl
                      transition-all duration-200 hover:-translate-y-0.5 active:scale-95
                    "
                  >
                    View Project{" "}
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  </a>

                  <a
                    href={`/project/${project.slug}`}
                    className="
                      flex-1 flex items-center justify-center gap-2
                      border border-black/15 dark:border-white/20
                      text-black dark:text-white
                      hover:bg-black hover:text-white
                      dark:hover:bg-white dark:hover:text-black
                      font-black uppercase tracking-widest
                      text-[10px] sm:text-[11px]
                      px-4 py-3.5 sm:py-4
                      rounded-xl sm:rounded-2xl
                      transition-all duration-200 hover:-translate-y-0.5 active:scale-95
                    "
                  >
                    Details <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
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
