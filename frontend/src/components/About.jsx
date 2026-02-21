import React from 'react';
import { Briefcase, GraduationCap, MapPin, Coffee } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { profileData, learning } from '../mock/mockData';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Bio Card */}
            <Card className="bg-slate-800 border-slate-700 hover:border-emerald-400/50 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Briefcase className="w-6 h-6 text-emerald-400" />
                  Professional Journey
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {profileData.bio}
                </p>
              </CardContent>
            </Card>

            {/* Current Status */}
            <div className="space-y-6">
              <Card className="bg-slate-800 border-slate-700 hover:border-emerald-400/50 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-emerald-400" />
                    Current Focus
                  </h3>
                  <p className="text-gray-300">
                    Working on forecasting, churn prediction, and NLP at <span className="text-emerald-400 font-semibold">Crunch Fitness</span>
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700 hover:border-emerald-400/50 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Coffee className="w-5 h-5 text-emerald-400" />
                    Fun Fact
                  </h3>
                  <p className="text-gray-300 italic">
                    "I can turn data into stories as easily as I turn coffee into code"
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Currently Learning */}
          <Card className="bg-slate-800 border-slate-700 hover:border-emerald-400/50 transition-all duration-300">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-emerald-400" />
                Currently Learning
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {learning.map((item, index) => (
                  <div 
                    key={index}
                    className="bg-slate-700/50 px-4 py-3 rounded-lg border border-slate-600 hover:border-emerald-400/50 transition-all duration-300 text-gray-200"
                  >
                    <span className="text-emerald-400 mr-2">▸</span>
                    {item}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Collaboration CTA */}
          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border-emerald-400/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Open to Collaboration
                </h3>
                <p className="text-gray-300 mb-4">
                  Looking to collaborate on open-source ML/AI projects in NLP, time-series forecasting, and cloud-based MLOps
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {['NLP', 'Time-Series Forecasting', 'MLOps', 'LLM Fine-tuning', 'Data Visualization'].map((tag) => (
                    <span 
                      key={tag}
                      className="px-4 py-2 bg-slate-800 rounded-full text-sm text-emerald-400 border border-emerald-400/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;