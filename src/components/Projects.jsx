// src/components/Projects.jsx
import React from 'react';

const projects = [
  {
    name: 'MindKindness',
    desc: 'Full-stack mental wellness web app with AI-powered chat.',
    link: 'https://github.com/uniyal802/MindKindness',
  },
  // ...more projects
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-4xl mx-auto py-20">
      <h2 className="text-3xl font-bold text-green-300 mb-8 text-center">Projects</h2>
      <div className="space-y-6">
        {projects.map((proj, i) => (
          <div key={i} className="bg-slate-800 rounded-xl p-6 shadow-md border border-slate-600">
            <h3 className="text-xl text-yellow-300 font-bold">{proj.name}</h3>
            <p className="text-slate-300 text-sm mb-2">{proj.desc}</p>
            <a href={proj.link} className="text-sm text-blue-400 hover:underline" target="_blank" rel="noreferrer">
              🔗 View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
