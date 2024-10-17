import React from 'react';
import { skills } from '@/components/data';

const SkillsPage = () => {
  return (
    <section className="min-h-screen py-16  bg-pink-400">
      <div className="container mx-auto px-4">
        {/* Page Heading */}
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Skills</h1>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-neutral-10 bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-black mb-2">
                {skill.name}
              </h3>
              <p className="text-neutral-600 dark:text-black">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
