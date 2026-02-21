import React from 'react';
import { Card, CardContent } from './ui/card';
import { skills } from '../mock/mockData';
import { Code, Cloud, Database, LineChart, Layers, Wrench } from 'lucide-react';

const Skills = () => {
  const categoryIcons = {
    "Programming Languages": Code,
    "ML/AI Frameworks": Layers,
    "Data Analysis & Visualization": LineChart,
    "Cloud & DevOps": Cloud,
    "Databases": Database,
    "Big Data & Tools": Wrench
  };

  return (
    <section id="skills" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A comprehensive toolkit for building end-to-end ML solutions
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => {
              const IconComponent = categoryIcons[skillGroup.category];
              return (
                <Card 
                  key={index}
                  className="bg-slate-900 border-slate-700 hover:border-emerald-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      {IconComponent && <IconComponent className="w-6 h-6 text-emerald-400" />}
                      <h3 className="text-lg font-bold text-white">
                        {skillGroup.category}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-slate-800 text-gray-300 rounded-md text-sm border border-slate-700 hover:border-emerald-400/50 hover:text-emerald-400 transition-all duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Expertise Highlights */}
          <div className="mt-12 grid md:grid-cols-4 gap-6">
            {[
              { label: 'Python', level: 95 },
              { label: 'Machine Learning', level: 90 },
              { label: 'Cloud Deployment', level: 85 },
              { label: 'Data Visualization', level: 88 }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-3">
                  <svg className="transform -rotate-90 w-24 h-24">
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      className="text-slate-700"
                    />
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray={`${2 * Math.PI * 40}`}
                      strokeDashoffset={`${2 * Math.PI * 40 * (1 - item.level / 100)}`}
                      className="text-emerald-400 transition-all duration-1000"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold text-white">{item.level}%</span>
                  </div>
                </div>
                <p className="text-gray-300 font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;