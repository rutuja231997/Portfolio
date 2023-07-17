import React, { useState } from "react";
import { motion } from "framer-motion";
import { Skill } from "../typings";
import { urlFor } from "../sanity";
import { Tooltip } from "@nextui-org/react";

type Props = { directionLeft?: boolean; skill: Skill };

function Skill({ directionLeft, skill }: Props) {
  return (
    <Tooltip content={skill.title} rounded>
      <div className="group relative flex cursor-pointer">
        <motion.img
          initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          src={urlFor(skill?.image).url()}
          key={skill._id}
          className="rounded-full border border-gray-500 object-cover  w-22 h-22 md:w-24 md:h-24 xl:w-26 xl:h-26  filter group-even-hover:grayscale transition duration-300 ease-out"
        ></motion.img>

        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-22 h-22 md:w-24 md:h-24 xl:w-26 xl:h-26 rounded-full z-0">
          <div className="flex items-center justify-center h-full">
            <p className="text-3xl font-bold text-black opacity-100">
              {" "}
              {skill.progress}%
            </p>
          </div>
        </div>
      </div>
    </Tooltip>
  );
}

export default Skill;
