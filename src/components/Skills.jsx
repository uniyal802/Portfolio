// src/components/Skills.jsx
import React from 'react';
import {
  SiReact, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiMysql,
  SiFirebase, SiTypescript, SiJavascript, SiPython, SiTailwindcss
} from 'react-icons/si';

const skills = [
  { icon: <SiReact color="#61DAFB" />, name: 'React.js' },
  { icon: <SiNodedotjs color="#339933" />, name: 'Node.js' },
  { icon: <SiExpress color="#fff" />, name: 'Express.js' },
  { icon: <SiMongodb color="#47A248" />, name: 'MongoDB' },
  { icon: <SiPostgresql color="#336791" />, name: 'PostgreSQL' },
  { icon: <SiMysql color="#00758F" />, name: 'MySQL' },
  { icon: <SiFirebase color="#FFCA28" />, name: 'Firebase' },
  { icon: <SiTypescript color="#3178C6" />, name: 'TypeScript' },
  { icon: <SiJavascript color="#F7DF1E" />, name: 'JavaScript' },
  { icon: <SiPython color="#3776AB" />, name: 'Python' },
  { icon: <SiTailwindcss color="#38BDF8" />, name: 'Tailwind CSS' }
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto py-20 px-4">
      <h2 className="text-4xl font-extrabold text-pink-400 mb-12 text-center">🚀 My Tech Stack</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="group bg-slate-800/80 hover:bg-pink-400/10 transition-all duration-300 px-6 py-8 rounded-2xl border border-pink-400/30 text-center font-semibold shadow-lg flex flex-col items-center gap-3 min-w-[120px] cursor-pointer"
          >
            <span className="text-5xl group-hover:scale-125 transition-transform duration-200 drop-shadow-[0_0_10px_#ec4899]">
              {skill.icon}
            </span>
            <span className="text-pink-300 group-hover:text-pink-400 transition-colors duration-200 text-lg">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
