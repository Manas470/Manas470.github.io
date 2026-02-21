import React, { useState, useEffect } from 'react';
import { Heart, Code, Eye } from 'lucide-react';
import { analyticsAPI } from '../services/api';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [visitorCount, setVisitorCount] = useState(null);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const stats = await analyticsAPI.getStats();
        setVisitorCount(stats.total_visits);
      } catch (error) {
        console.error('Failed to fetch visitor count:', error);
      }
    };

    fetchAnalytics();
  }, []);

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Brand */}
            <div className="text-center md:text-left">
              <div className="text-xl font-bold text-white mb-2">
                <span className="text-emerald-400">&lt;</span>
                Manas
                <span className="text-emerald-400">/&gt;</span>
              </div>
              <p className="text-gray-400 text-sm">
                Data Scientist & ML Engineer
              </p>
            </div>

            {/* Copyright */}
            <div className="text-center">
              <p className="text-gray-400 text-sm flex items-center gap-2 justify-center">
                Made with <Heart className="w-4 h-4 text-emerald-400 fill-emerald-400" /> and <Code className="w-4 h-4 text-emerald-400" />
              </p>
              <p className="text-gray-500 text-xs mt-1">
                © {currentYear} Venkatamanas Raghupatruni. All rights reserved.
              </p>
              {visitorCount && (
                <p className="text-gray-500 text-xs mt-2 flex items-center gap-1 justify-center">
                  <Eye className="w-3 h-3" />
                  {visitorCount.toLocaleString()} visitors
                </p>
              )}
            </div>

            {/* Quick Links */}
            <div className="flex gap-4">
              <a 
                href="https://github.com/Manas470" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
              >
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/venkatamanas/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
              >
                LinkedIn
              </a>
              <a 
                href="mailto:raghupatrunivenkatamanas@gmail.com"
                className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;