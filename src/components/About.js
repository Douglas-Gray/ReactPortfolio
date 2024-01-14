// src/components/About.js

import React from "react"; 

export default function About() {
    return (
        <section id="about">
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                Hi, I'm Douglas.
                <br className="hidden lg:inline-block" /> This is my portfolio.
              </h1>
              <p className="mb-8 leading-relaxed">
              Computer Science graduate at Newcastle University specified in Software Engineering.
              Experience with website development (React.js, Node.js, HTML, CSS, JavaScript), Arch based Linux distributions
              and general programming experience in Python, Java, C, C++ & C#. 
              </p>
              <div className="flex justify-center">
              <a 
                  href="https://github.com/Douglas-Gray">
                  <img className="ml-4 inline-flex object-contain h-10 w-10 hover:opacity-60" src="gitLogo.png" alt="collection"/>
                </a>
                <a
                  href="https://www.linkedin.com/in/douglas-gray-8b5290261/">
                  <img className="ml-4 inline-flex object-contain h-10 w-10 hover:opacity-60" src="linkedinLogo.png" alt="briefcase"/>  
                </a>
                <a
                  href="#projects"
                  className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 hover:text-white rounded text-lg">
                  See My Past Work
                </a>
              </div>
          
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="./Cloud.png"
              />
            </div>
          </div>
        </section>
      );
}