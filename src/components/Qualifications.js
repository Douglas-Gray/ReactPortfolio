// src/components/Qualifications.js

import { AcademicCapIcon } from "@heroicons/react/solid";
import React from "react";
import { qualifications } from "../data";

export default function Qualifications() {
  return (
    <section id="qualifications" className="text-gray-400 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <AcademicCapIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Qualifications I've Earned
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Listed below are the main qualifications I've earned surrounding Programming, Software and Digital Technologies.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {qualifications.map((qualification) => (
            <a
              href={qualification.link}
              key={qualification.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute opacity-70 rounded-lg shadow-xl dark:shadow-gray-900 inset-0 w-full h-full object-cover object-center"
                  src={qualification.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 rounded-lg border-gray-800  bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-400 mb-1">
                    {qualification.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {qualification.title}
                  </h1>
                  <p className="leading-relaxed">{qualification.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}