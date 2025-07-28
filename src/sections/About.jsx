import { useRef } from "react";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";

const About = () => {
  const grid2Container = useRef();

  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        
        {/* Grid 1 - Intro */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10 bg-black/60 p-4 rounded-md backdrop-blur-sm">
            <p className="headtext text-white">Hi, I'm Bhagyashri Balaji Rasal</p>
            <p className="subtext text-white !text-white">
              I’m a final-year Electrical and Electronics Engineering student with a minor in AI, passionate about solving real-world problems through technology. I have experience in embedded systems, IoT, and full-stack development using tools like ESP32, React, Node.js, and Python. With a strong blend of hardware and software skills, I enjoy building smart, efficient, and user-focused solutions.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        {/* Grid 2 - Software Skills */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex flex-col items-start justify-center w-full h-full p-6"
          >
            <p className="headtext mb-4">Software Skills</p>
            <ul className="list-disc pl-6 text-neutral-300 space-y-2 text-sm">
              <li>
                <span className="font-semibold text-white">Programming & Systems:</span> C, C++, Python, Data Structures, Algorithms, OOP, Operating Systems
              </li>
              <li>
                <span className="font-semibold text-white">Full Stack:</span> HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, SQL, REST APIs
              </li>
              <li>
                <span className="font-semibold text-white">ML & Data:</span> scikit-learn, pandas, NumPy, Flask, FastAPI, Git, TensorFlow, Jupyter Notebooks
              </li>
              <li>
                <span className="font-semibold text-white">Dev Tools:</span> Docker (intro), Linux, Shell Scripting, Firebase, GitHub, VS Code
              </li>
            </ul>
          </div>
        </div>

        {/* Grid 3 - Hardware Skills */}
        <div className="grid-special-color grid-3">
          <div className="flex flex-col items-start justify-center w-full h-full p-6">
            <p className="headtext mb-4">Hardware Skills</p>
            <ul className="list-disc pl-6 text-neutral-300 space-y-2 text-sm">
              <li>
                <span className="font-semibold text-white">Embedded Systems:</span> Hands-on with 8051, ESP32, Embedded C, and RTOS
              </li>
              <li>
                <span className="font-semibold text-white">Electronics & Power:</span> Digital/analog circuits, power electronics, and AC machines
              </li>
              <li>
                <span className="font-semibold text-white">VLSI Devices:</span> CMOS fabrication flow, short channel effects, and scaling
              </li>
              <li>
                <span className="font-semibold text-white">Automation Tools:</span> PLC basics, sensor interfacing, UART, ADC/DAC, Keil, Proteus, Twidosuite
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Grid Row: Certifications + Contact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        
        {/* Certifications */}
        <div className="grid-default-color p-6 flex flex-col justify-center">
          <p className="headtext mb-4 text-lg sm:text-xl">Certifications</p>
          <ul className="list-disc pl-6 text-neutral-300 space-y-2 text-base sm:text-lg">
            <li>
              Generative AI and ChatGPT{" "}
              <a
                href="https://media.geeksforgeeks.org/courses/certificates/bab1a44fa9c388aa33e856f8ce98c4ba.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                (Verify)
              </a>
            </li>
            <li>
              The Complete MySQL Bootcamp{" "}
              <a
                href="http://ude.my/UC-cb8b2b28-0a68-43d5-b4fc-cba550b4066b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                (Verify)
              </a>
            </li>
            <li>
              React Course With Hands-On Projects{" "}
              <a
                href="http://ude.my/certificate/UC-cb8b2b28-0a68-43d5-b4fc-cba550b4066b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                (Verify)
              </a>
            </li>
          </ul>
        </div>

        {/* Contact - Email Button */}
        <div className="grid-default-color p-6 flex flex-col justify-center items-center">
          <p className="text-center headtext mb-6 text-lg sm:text-xl">
            Want to work together or reach out?
          </p>
          <CopyEmailButton />
        </div>
      </div>
    </section>
  );
};

export default About;
