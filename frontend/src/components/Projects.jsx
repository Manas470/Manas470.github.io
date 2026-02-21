import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { projects } from '../mock/mockData';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'NLP', 'Time Series', 'Analytics', 'ML Application', 'Data Engineering'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A showcase of data science and machine learning projects solving real-world problems
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <Filter className="w-5 h-5 text-emerald-400 self-center" />
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setFilter(category)}
                variant={filter === category ? 'default' : 'outline'}
                className={filter === category 
                  ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white'
                  : 'border-slate-600 text-gray-300 hover:border-emerald-400 hover:text-emerald-400'
                }
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <Card 
                key={project.id}
                className="bg-slate-800 border-slate-700 hover:border-emerald-400/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <CardContent className="p-6">
                  {/* Project Header */}
                  <div className="mb-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {project.title}
                      </h3>
                      <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-400/30">
                        {project.category}
                      </Badge>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-slate-900 text-gray-300 rounded-md text-xs border border-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button 
                        variant="outline" 
                        className="w-full border-emerald-400/50 text-emerald-400 hover:bg-emerald-400/10 group/btn"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                        <ExternalLink className="w-3 h-3 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* GitHub CTA */}
          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border-emerald-400/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Want to see more?
                </h3>
                <p className="text-gray-300 mb-6">
                  Check out my GitHub for additional projects and contributions
                </p>
                <a href="https://github.com/Manas470" target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Visit My GitHub
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;