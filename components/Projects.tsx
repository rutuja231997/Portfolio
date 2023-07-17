/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";
import Link from "next/link";
import { LinkIcon } from "@heroicons/react/24/solid";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type Props = { projects: Project[] };
function Projects({ projects }: Props) {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
      >
        <h3 className="absolute top-10 xl:top-14  uppercase tracking-[20px] text-gray-500 text-2xl">
          Projects
        </h3>
        <div className="relative w-full snap-x snap-mandatory z-20 ">
          <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
          <Carousel
            selectedItem={activeSlide} // Set the active slide based on the state
            onChange={(index) => setActiveSlide(index)} // Update activeSlide state when the slide changes
            showThumbs={false} // Hide the thumbnails
            showStatus={false} // Hide the status bar
            showIndicators={true} // Hide the slide indicators
            infiniteLoop={true} // Enable infinite loop
            autoPlay={true} // Enable auto-play
            interval={5000} // Set auto-play interval to 5 seconds
            stopOnHover={false} // Disable auto-play pause on hover
            className="bg-[rgb(36,36,36)] "
          >
            {projects?.map((project, i) => (
              <div
                key={project._id}
                className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200"
              >
                <Link href={project?.linkToBuild}>
                  <motion.img
                    initial={{ y: -300, opacity: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    src={urlFor(project?.image).url()}
                    alt=""
                    className="flex-shrink-0 h-52 w-80 xl:h-56 xl:w-96"
                  />
                </Link>

                <div className="space-y-6 px-0 md:px-10 max-w-6xl">
                  <h4 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-semibold text-center  text-white">
                    <span>
                      Project {i + 1} of {projects.length} :
                    </span>{" "}
                    <span className="underline decoration-[#F7AB0A]/50">
                      {project?.title}
                    </span>
                  </h4>

                  <div className="flex justify-center items-center w-auto space-x-10">
                    <div className="flex float-right space-x-5">
                      {project?.technologies.map((technology) => (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          className="object-contain h-10 w-10"
                          alt=""
                          key={technology._id}
                          src={urlFor(technology.image).url()}
                        />
                      ))}
                    </div>
                    <div className="flex float-left">
                      <Link href={project?.linkToBuild}>
                        <LinkIcon className="h-7 w-7 text-[gray] " />
                      </Link>
                    </div>
                  </div>

                  <p className="text-base xl:text-lg text-center md:text-left text-white">
                    {project?.summary}
                  </p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </motion.div>
    </div>
  );
}

export default Projects;
