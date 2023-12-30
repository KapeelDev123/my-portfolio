import React from 'react'
import img from '../../assets/img1.webp'
const AboutMe = () => {
  return (
    <div
      id="about"
      className="flex gap-10 max-w-5xl mx-auto py-24 max-sm:flex-wrap"
    >
      <img
        className="w-2/5 rounded-lg mr-7 max-sm:w-4/5 max-sm:mx-auto"
        src={img}
        alt=""
      />
      <ul className="flex flex-col gap-2 p-3">
        <li className="text-blue-600 font-bold text-lg text-center">
          ABOUT ME
        </li>
        <li className="text-2xl font-bold text-zinc-800 text-center">
          A dedicated Front-end Developer based in Karachi, Sindh, Pakistan📍
        </li>
        <li className="text-lg text-neutral-500 text-center">
          As a Junior Front-End Developer, I specialize in HTML, CSS,
          JavaScript, React Js, and React Native. My focus is on designing and
          maintaining responsive websites, ensuring a seamless user experience.
          I excel in crafting dynamic interfaces with clean, optimized code,
          utilizing cutting-edge tools and techniques. A collaborative team
          player, I thrive in cross-functional environments, contributing to the
          creation of outstanding web applications.
        </li>
      </ul>
    </div>
  )
}

export default AboutMe
