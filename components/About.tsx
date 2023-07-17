/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";
import { AcademicCapIcon, HomeModernIcon } from "@heroicons/react/24/solid";

type Props = { pageInfo: PageInfo };

function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-12 sm:top-12 md:top-12 lg:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={urlFor(pageInfo?.profilePic).url()}
        className="-mb-20 md:mb-0 flex-shrink-0 w-40 h-40 rounded-full object-cover md:rounded-full md:w-56 md:h-56 xl:w-[350px] xl:h-[350px] "
      />

      <div className="space-y-4 px-0 sm:px-8 md:px-10">
        <h4 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-sm xl:text-base">
          {pageInfo?.backgroundInformation}
        </p>
        <ul className="list-none flex flex-row items-center space-x-1.5">
          <li>
            {" "}
            <AcademicCapIcon className="h-7 w-7 text-[#F7AB0A]" />
          </li>
          <li className="text-white">Education:</li>
        </ul>

        <ul className="space-x-8">
          <li></li>
          <li className="text-white">
            2021-2022 ⇢ Thakur Institute of Management Studies and Research
            (Mumbai University).
          </li>
          <li className="text-white"> MCA Degree</li>
        </ul>

        <ul className="list-none flex flex-row items-center space-x-1.5 mt-5">
          <li>
            <HomeModernIcon className="h-7 w-7 text-[#F7AB0A]" />
          </li>
          <li className="text-white">Hometown:</li>
          <li className="text-white">Mumbai</li>
        </ul>
      </div>
    </motion.div>
  );
}

export default About;
