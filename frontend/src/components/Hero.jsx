import React from 'react';
import { ArrowRight, Code2, Database, Brain } from 'lucide-react';
import { Button } from './ui/button';
import { profileData } from '../mock/mockData';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #10b981 1px, transparent 1px),
                           linear-gradient(to bottom, #10b981 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Code2 className="absolute top-20 left-10 text-emerald-400/20 w-16 h-16 animate-float" style={{ animationDelay: '0s' }} />
        <Database className="absolute top-40 right-20 text-cyan-400/20 w-20 h-20 animate-float" style={{ animationDelay: '2s' }} />
        <Brain className="absolute bottom-32 left-20 text-emerald-400/20 w-24 h-24 animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 inline-block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full blur-xl opacity-50 animate-pulse"></div>
              <img 
                src={profileData.profileImage} 
                alt="Manas" 
                className="relative w-32 h-32 rounded-full border-4 border-emerald-400/50 shadow-2xl mx-auto"
              />
            </div>
          </div>

          {/* Text Content */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
            {profileData.name.split(' ')[0]}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              {' '}{profileData.name.split(' ').slice(1).join(' ')}
            </span>
          </h1>
          
          <h2 className="text-2xl sm:text-3xl font-semibold text-emerald-400 mb-4">
            {profileData.title}
          </h2>
          
          <p className="text-xl text-gray-300 mb-2 font-light italic">
            {profileData.tagline}
          </p>
          
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            4+ years of experience in ML/AI • Cloud Deployment • NLP • Time-Series Forecasting
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold px-8 py-6 text-lg group"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400/10 font-semibold px-8 py-6 text-lg"
            >
              Get In Touch
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                4+
              </div>
              <div className="text-sm text-gray-400 mt-1">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                6+
              </div>
              <div className="text-sm text-gray-400 mt-1">Major Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                10+
              </div>
              <div className="text-sm text-gray-400 mt-1">Technologies</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-emerald-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-emerald-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;