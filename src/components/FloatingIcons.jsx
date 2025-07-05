// src/FloatingIcons.js
import React from "react";
import {
  SiReact, SiJavascript, SiPython, SiNodedotjs, SiTailwindcss, SiMongodb,
  SiTypescript, SiPostgresql, SiMysql, SiFirebase, SiExpress
} from "react-icons/si";

const iconList = [
  <SiReact color="#61DAFB" />,
  <SiJavascript color="#F7DF1E" />,
  <SiPython color="#3776AB" />,
  <SiNodedotjs color="#339933" />,
  <SiTailwindcss color="#38BDF8" />,
  <SiMongodb color="#47A248" />,
  <SiTypescript color="#3178C6" />,
  <SiPostgresql color="#336791" />,
  <SiMysql color="#00758F" />,
  <SiFirebase color="#FFCA28" />,
  <SiExpress color="#fff" />,
];

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

export default function FloatingIcons() {
  return (
    <ul className="floating-icons pointer-events-none absolute inset-0 z-0">
      {Array.from({ length: 18 }).map((_, i) => {
        const left = randomBetween(5, 90);
        const top = randomBetween(5, 90);
        const duration = randomBetween(8, 18);
        const size = randomBetween(32, 56);
        const icon = iconList[i % iconList.length];

        return (
          <li
            key={i}
            style={{
              position: "absolute",
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
              opacity: 0.13,
              animation: `floatIcon${i} ${duration}s ease-in-out infinite alternate`,
              filter: "drop-shadow(0 0 6px #fff5)"
            }}
          >
            <span style={{ fontSize: size }}>{icon}</span>
            <style>
              {`
                @keyframes floatIcon${i} {
                  0% { transform: translateY(0px) scale(1) rotate(0deg);}
                  100% { transform: translateY(-60px) scale(1.13) rotate(20deg);}
                }
              `}
            </style>
          </li>
        );
      })}
    </ul>
  );s
}
