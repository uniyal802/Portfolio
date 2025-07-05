// src/App.js

import React, { useEffect, useState, useRef } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import {
  SiJavascript, SiReact, SiNodedotjs, SiPython, SiMongodb, SiPostgresql,
  SiTailwindcss, SiTypescript, SiMysql, SiFirebase, SiExpress, SiCplusplus,
  SiRedux, SiClerk, SiPostman, SiHtml5, SiCss3, SiJson, SiRender, SiGit,
  SiNetlify, SiVercel, SiCloud66, SiAmazon
} from 'react-icons/si';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import AOS from 'aos';
import './index.css'; 
import 'aos/dist/aos.css';
import illustration from './assets/illustration.svg';
import './App.css';
import emailjs from '@emailjs/browser';
import FloatingIcons from './components/FloatingIcons';

const projects = [
  {
    name: 'MindKindness',
    desc: 'Full-stack mental wellness web app with AI-powered chat and emotional tracking.',
    link: 'https://github.com/uniyal802/MindKindness',
  },
  {
    name: 'Hyperspectral Image Classification',
    desc: 'Deep learning project using CNN + BiLSTM for remote sensing data analysis.',
    link: 'https://github.com/uniyal802/Hyperspectral-Image-Classification',
  }
];

// हर skill में hoverColor property डाल दी गई है
const skills = [
  { icon: <SiReact />, name: 'React.js', color: "#61DAFB", hoverColor: "#61DAFB" },
  { icon: <SiNodedotjs />, name: 'Node.js', color: "#339933", hoverColor: "#339933" },
  { icon: <SiExpress />, name: 'Express.js', color: "#fff", hoverColor: "#444444" },
  { icon: <SiMongodb />, name: 'MongoDB', color: "#47A248", hoverColor: "#47A248" },
  { icon: <SiPostgresql />, name: 'PostgreSQL', color: "#336791", hoverColor: "#336791" },
  { icon: <SiMysql />, name: 'MySQL', color: "#00758F", hoverColor: "#00758F" },
  { icon: <SiFirebase />, name: 'Firebase', color: "#FFCA28", hoverColor: "#FFCA28" },
  { icon: <SiTypescript />, name: 'TypeScript', color: "#3178C6", hoverColor: "#3178C6" },
  { icon: <SiJavascript />, name: 'JavaScript', color: "#F7DF1E", hoverColor: "#F7DF1E" },
  { icon: <SiPython />, name: 'Python', color: "#3776AB", hoverColor: "#3776AB" },
  { icon: <SiTailwindcss />, name: 'Tailwind CSS', color: "#38BDF8", hoverColor: "#38BDF8" },
  { icon: <SiCplusplus />, name: 'C++', color: "#00599C", hoverColor: "#00599C" },
  { icon: <SiRedux />, name: 'Redux', color: "#764ABC", hoverColor: "#764ABC" },
  { icon: <SiClerk />, name: 'Clerk', color: "#3B82F6", hoverColor: "#3B82F6" },
  { icon: <SiPostman />, name: 'Postman', color: "#FF6C37", hoverColor: "#FF6C37" },
  { icon: <SiHtml5 />, name: 'HTML5', color: "#E34F26", hoverColor: "#E34F26" },
  { icon: <SiCss3 />, name: 'CSS', color: "#1572B6", hoverColor: "#1572B6" },
  { icon: <SiJson />, name: 'JSON', color: "#292929", hoverColor: "#292929" },
  { icon: <SiRender />, name: 'Render', color: "#46E3B7", hoverColor: "#46E3B7" },
  { icon: <SiGit />, name: 'Git', color: "#F05032", hoverColor: "#F05032" },
  { icon: <SiNetlify />, name: 'Netlify', color: "#00C7B7", hoverColor: "#00C7B7" },
  { icon: <SiVercel />, name: 'Vercel', color: "#000", hoverColor: "#000" },
  { icon: <SiCloud66 />, name: 'Cloud66', color: "#E94E77", hoverColor: "#E94E77" },
  { icon: <SiAmazon />, name: 'AWS', color: "#FF9900", hoverColor: "#FF9900" }
];

const achievements = [
  "Machine Learning Certificate - Udemy",
  "Frontend Development with React - Coursera",
  "Data Analysis with Python - IBM Skills Network",
  "Full Stack Developer Capstone - Project Based"
];

const softSkills = [
  "Team Collaboration 🤝",
  "Creative Problem Solving 💡",
  "Empathetic Communication 🗣️",
  "Growth Mindset 🚀",
  "Time Alchemist ⏳",
  "Tech Storyteller 📚",
  "Debugging Mindset 🐞",
  "System Thinking 🧩",
  "Technical Empathy 💬"
];

const experiences = [
  {
    title: "Data Science & Analytics @ Zidio Development",
    period: "Aug 2024 – Oct 2024",
    points: [
      "Worked with tools like Excel, Python (Pandas, NumPy), and SQL to clean, transform, and analyze data.",
      "Created interactive dashboards and visualizations using Power BI / Tableau / Matplotlib / Seaborn.",
      "Understood the importance of data cleaning and preprocessing for accurate results.",
      "Learned how to apply EDA (Exploratory Data Analysis) to identify trends and patterns.",
      "Worked on preparing reports and presentations to communicate data-driven insights effectively.",
      "Gained exposure to basic statistical analysis and hypothesis testing."
    ]
  },
  {
    title: "C++ Developer @ CodSoft",
    period: "Jun 2024 – Jul 2024",
    points: [
      "Refactored legacy C++ code, reducing complexity by 50%, which improved maintainability and reduced onboarding time for new developers by 30%.",
      "Conducted unit testing and debugging to enhance code robustness.",
      "Proposed and implemented design patterns, cutting development time by 20%.",
      "Engaged in code reviews and knowledge sharing to drive team growth."
    ]
  },
  {
    title: "Software Engineer Intern @ ZetaPass",
    period: "Jan 2023 – May 2024",
    points: [
      "Developed and optimized React.js-based web apps, improving load speed by 35% and handling 2x more concurrent users without performance drops.",
      "Conducted testing, debugging, and code reviews to ensure software quality.",
      "Proposed and implemented design patterns, cutting development time by 40%.",
      "Collaborated in an Agile team to deliver efficient and maintainable solutions."
    ]
  },
  {
    title: "Web Developer @ Skill Vertex",
    period: "Dec 2021 – Apr 2022",
    points: [
      "Built responsive web apps with HTML/CSS/React.js, improving page speed by 30% and ensuring 100% cross-browser compatibility through manual and automated testing.",
      "Reduced UI bugs by 25% through consistent testing and peer code reviews, improving cross-browser compatibility and user satisfaction."
    ]
  }
];

export default function App() {
  const [blogs, setBlogs] = useState([]);
  const formRef = useRef();

  useEffect(() => {
    AOS.init({ duration: 1000 });
    fetch('https://dev.to/api/articles?username=thepracticaldev&per_page=3')
      .then(res => res.json())
      .then(data => setBlogs(data))
      .catch(err => console.error(err));
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_vey6z7t",
      "template_a4rooqm",
      formRef.current,
      { publicKey: "tFsDYbMSuG8w_p4Xq" }
    ).then(
      () => {
        alert('Message sent successfully ✅');
      },
      (error) => {
        alert('Failed to send message ❌');
        console.error(error);
      }
    );
  };

  return (
    <>
      {/* Fixed White Navbar/Header with Green Logo */}
      <nav className="flex justify-between items-center fixed top-0 left-0 w-full bg-white z-50 shadow-lg px-4 py-4 border-b border-gray-200">
        <h1 className="text-2xl font-semibold text-green-600">&lt;Gaurav Uniyal/&gt;</h1>
        <ul className="flex gap-6 text-sm text-gray-800">
          <li><a href="#about" className="hover:text-yellow-500">ABOUT</a></li>
          <li><a href="#skills" className="hover:text-yellow-500">SKILLS</a></li>
          <li><a href="#softskills" className="hover:text-yellow-500">SOFT SKILLS</a></li>
          <li><a href="#projects" className="hover:text-yellow-500">PROJECTS</a></li>
          <li><a href="#experience" className="hover:text-yellow-500">EXPERIENCE</a></li>
          <li><a href="#achievements" className="hover:text-yellow-500">ACHIEVEMENTS</a></li>
          <li><a href="#blog" className="hover:text-yellow-500">BLOG</a></li>
          <li><a href="#contact" className="hover:text-yellow-500">CONTACT</a></li>
          <li>
            <a
              href="/Gaurav_Uniyal_FullStack_Resume.pdf"
              download
              className="bg-green-500 text-black px-3 py-1 rounded hover:bg-green-400"
            >
              RESUME
            </a>
          </li>
        </ul>
      </nav>

      <main className="min-h-screen bg-[#121212] text-white font-sans px-2 py-10 overflow-x-hidden relative pt-28">
        <FloatingIcons />

        {/* Hero/About */}
        <section className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-20 relative z-10" data-aos="fade-up" id="about">
          <div className="max-w-xl space-y-4 text-left">
            <p className="text-slate-300">Hi 👋 I’m</p>
            <h2 className="text-5xl font-bold text-white">
              <Typewriter
                words={["Gaurav Uniyal", "Full Stack Developer", "Data Analyst", "Software Developer"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={40}
                delaySpeed={1500}
              />
            </h2>
            <p className="text-sm text-slate-400">1.5 Years Experience | Based in India</p>
            <div className="flex gap-4 mt-4 text-2xl">
              <a href="https://www.linkedin.com/in/gauravuniyal/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
              <a href="https://github.com/uniyal802" target="_blank" rel="noreferrer"><FaGithub /></a>
              <a href="mailto:gauravuniyal123@gmail.com"><FaEnvelope /></a>
            </div>
            <div className="pt-6 text-base text-slate-300 leading-relaxed">
              <p>
                I’m <span className="text-white font-semibold">Gaurav Uniyal</span>, a dedicated full stack developer and software engineer with <span className="text-white font-semibold">1.5+ years</span> of experience. I specialize in building robust backend APIs, intuitive frontend interfaces, and even AI-powered systems.
              </p>
              <p className="mt-3">
                With strong expertise in <span className="text-white">JavaScript, React, Node.js, Algorithms</span> and a passion for problem-solving, I’ve delivered scalable solutions across various domains.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img src={illustration} alt="illustration" className="w-full max-w-md mx-auto" />
          </div>
        </section>

        {/* Wide Tech Stack Section */}
        <section
          id="skills"
          className="w-full max-w-full mx-auto py-20 px-2 relative z-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl shadow-2xl border border-pink-400/20"
          data-aos="fade-up"
        >
          <h2 className="text-4xl font-extrabold text-pink-400 mb-12 text-center tracking-wide drop-shadow-lg">
            🚀 My Tech Stack
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 gap-5 justify-items-center">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                whileHover={{
                  scale: 1.09,
                  rotateY: 12,
                  boxShadow: `0 8px 40px 0 ${skill.hoverColor}99`
                }}
                transition={{ type: "spring", stiffness: 350, damping: 18 }}
                className="group transition-all duration-300 px-4 py-8 rounded-2xl border text-center font-semibold shadow-lg flex flex-col items-center gap-3 min-w-[90px] cursor-pointer"
                style={{
                  background: "rgba(30,41,59,0.8)",
                  borderColor: "#444",
                  perspective: 700,
                  willChange: "transform"
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = `${skill.hoverColor}22`;
                  e.currentTarget.style.borderColor = skill.hoverColor;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "rgba(30,41,59,0.8)";
                  e.currentTarget.style.borderColor = "#444";
                }}
              >
                <span
                  className="text-4xl group-hover:scale-125 transition-transform duration-200 drop-shadow"
                  style={{
                    color: skill.hoverColor
                  }}
                >
                  {React.cloneElement(skill.icon, { color: skill.hoverColor })}
                </span>
                <span
                  className="transition-colors duration-200 text-base font-bold tracking-wide"
                  style={{
                    color: skill.hoverColor
                  }}
                >
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Unique Soft Skills */}
        <section id="softskills" className="max-w-6xl mx-auto py-20 px-4 relative z-10" data-aos="fade-up">
          <h2 className="text-4xl font-extrabold text-purple-400 mb-12 text-center tracking-wide drop-shadow-lg">🧠 Unique Soft Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
            {softSkills.map((skill, idx) => (
              <motion.div
                key={idx}
                whileHover={{
                  scale: 1.08,
                  rotateY: 10,
                  boxShadow: "0 8px 32px 0 #a78bfa55"
                }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-slate-800/80 px-8 py-6 rounded-2xl border border-purple-400/30 text-center text-base font-semibold shadow-lg flex flex-col items-center justify-center gap-3 min-w-[170px] cursor-pointer group"
                style={{
                  perspective: 700,
                  willChange: "transform"
                }}
              >
                <span className="text-purple-300 group-hover:text-purple-400 transition-colors duration-200 text-lg">{skill}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="max-w-5xl mx-auto py-16 relative z-10" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-green-300 mb-8 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((proj, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.07, rotateY: 6, boxShadow: "0 8px 32px 0 #34d39955" }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-600 flex flex-col"
                style={{ perspective: 700, willChange: "transform" }}
              >
                <h3 className="text-xl text-yellow-300 font-bold mb-2">{proj.name}</h3>
                <p className="text-slate-300 text-sm mb-4">{proj.desc}</p>
                <a href={proj.link} className="text-sm text-blue-400 hover:underline mt-auto" target="_blank" rel="noreferrer">🔗 View Project</a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Work Experience */}
        <section id="experience" className="max-w-5xl mx-auto py-16 relative z-10" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-yellow-300 mb-8 text-center">Work Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.04, rotateY: 8, boxShadow: "0 8px 28px 0 #fde68a55" }}
                transition={{ type: 'spring', stiffness: 250 }}
                className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-600"
                style={{ perspective: 700, willChange: "transform" }}
              >
                <h3 className="text-xl font-bold text-green-400">{exp.title}</h3>
                <p className="text-sm text-slate-400 mb-2">{exp.period}</p>
                <ul className="list-disc list-inside text-slate-300 text-sm space-y-1">
                  {exp.points.map((pt, i) => <li key={i}>{pt}</li>)}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section id="achievements" className="max-w-5xl mx-auto py-16 relative z-10" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-amber-300 mb-8 text-center">Achievements & Certifications</h2>
          <ul className="list-disc list-inside text-slate-300 space-y-2">
            {achievements.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </section>

        {/* Blogs */}
        <section id="blog" className="max-w-5xl mx-auto py-16 relative z-10" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-cyan-300 mb-8 text-center">Latest Tech Blogs</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {blogs.map((blog, idx) => (
              <a key={idx} href={blog.url} target="_blank" rel="noreferrer" className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 border border-slate-600">
                <h3 className="text-lg text-pink-300 font-semibold">{blog.title}</h3>
                <p className="text-slate-400 text-sm mt-2">{blog.description?.slice(0, 100)}...</p>
              </a>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="max-w-5xl mx-auto py-16 relative z-10" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-indigo-300 mb-8 text-center">Connect with Me</h2>
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="bg-slate-800 p-6 rounded-xl space-y-4 max-w-lg mx-auto"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded bg-slate-700 text-white"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded bg-slate-700 text-white"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full px-4 py-2 rounded bg-slate-700 text-white"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-green-500 text-black px-4 py-2 rounded hover:bg-green-400"
            >
              Send Message
            </button>
          </form>
        </section>

        {/* Footer */}
        <footer className="w-full py-8 mt-10 bg-gradient-to-t from-slate-900 via-slate-800 to-transparent flex flex-col items-center justify-center relative z-20">
          <motion.div
            initial={{ scale: 0.9, opacity: 0.4 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="flex gap-6 text-2xl mb-2"
          >
            <a href="https://www.linkedin.com/in/gauravuniyal/" target="_blank" rel="noreferrer" className="hover:text-pink-400 transition"><FaLinkedin /></a>
            <a href="https://github.com/uniyal802" target="_blank" rel="noreferrer" className="hover:text-pink-400 transition"><FaGithub /></a>
            <a href="mailto:gauravuniyal123@gmail.com" className="hover:text-pink-400 transition"><FaEnvelope /></a>
          </motion.div>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            className="text-slate-400 text-sm"
          >
            © {new Date().getFullYear()} Gaurav Uniyal. All Rights Reserved.
          </motion.p>
        </footer>
      </main>
    </>
  );
}
