import React, { useState } from "react";
import { FiGithub } from "react-icons/fi";
import { TbExternalLink } from "react-icons/tb";
import img from "../../assets/img1.webp";


const ProjectCard = ({ data }) => {
  const [position] = useState(data.position);
  const flex1 = position == "right" ? "flex-wrap" : "flex-wrap-reverse";
  return (
    <div
      className={
        `flex flex-wrap max-w-[75vw] mx-auto py-5 rounded-2xl shadow-xl justify-evenly max-sm:max-w-[90vw] ` +
        flex1
      }
    >
      {position == "right" ? (
        data?.link?.isVideo ? (
            <video src={data.link.source} muted controls type="video/mp4" className="max-w-[30%] "></video>
        ):(
          <img
            className="shadow-md object-cover rounded-xl my-3"
            src={data.link.source}
            alt="image of car"
          />
        )
      ) : null}

      <ul className="flex flex-col flex-wrap gap-2 items-center w-96 justify-center">
        <li className="text-lg font-bold text-center px-2">
          {data.title}
          <span className="mx-1">{data.date}</span>
        </li>
        <li className="text-lg font-medium  text-zinc-500 mt-2 text-center px-12">
          {data.desc}
        </li>
        <li className="mt-3 flex flex-wrap justify-center">
          {data.tags.map((item, i) => (
            <span
              key={Math.random() + 100}
              className="px-3 py-2 shadow-lg text-xl font-semibold m-2 bg-gray-600 text-white rounded-md max-sm:text-lg "
            >
              {item}
            </span>
          ))}
          {/* <span className='px-3 py-2 shadow-lg text-xl font-semibold m-2'>React</span>
                <span className='px-3 py-2 shadow-lg text-xl font-semibold m-2'>Tailwind</span> */}
        </li>
        <li className="mt-3 text-xl font-bold flex gap-5 max-sm:text-lg max-sm:font-semibold">
          <a
            href={data?.github}
            target="_blank"
            className="flex hover:text-blue-500"
          >
            <span className="mr-1">Code</span>
            <FiGithub size="1.5rem" />
          </a>
          {/* <a
            href={data?.live}
            target="_blank"
            className="flex hover:text-blue-500"
          >
            <span>Live Demo</span>
            <TbExternalLink size="1.5rem" />
          </a> */}
        </li>
      </ul>
      {/* {position == "left" ? (
        <a href={data.live} className="max-w-[55%] max-md:max-w-[95%]">
          <img
            className=" shadow-md rounded-xl "
            src={data.link}
            alt="image of car"
          />
        </a>
      ) : null} */}
      
      {position == "left" ? (
        data?.link?.isVideo ? (
            <video src={data.link.source} muted controls type="video/mp4" className={data?.link?.isWidthFull ? "my-3" : "max-w-[30%]" }></video>
        ):(
          <img
            className="shadow-md object-cover rounded-xl my-3"
            src={data.link.source}
            alt="image of car"
          />
        )
      ) : null}
    </div>
  );
};

export default ProjectCard;
