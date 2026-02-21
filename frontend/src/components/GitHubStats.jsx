import React, { useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card';
import { githubAPI } from '../services/api';
import { Github, Star, GitCommit, Code } from 'lucide-react';

const GitHubStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const data = await githubAPI.getStats('Manas470');
        setStats(data);
      } catch (error) {
        console.error('Failed to fetch GitHub stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">Loading GitHub stats...</div>
        </div>
      </section>
    );
  }

  if (!stats) {
    return null;
  }

  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              GitHub <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Activity</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Continuous learning and contribution to open-source projects
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-slate-900 border-slate-700 hover:border-emerald-400/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Github className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stats.total_repos}</div>
                <div className="text-sm text-gray-400">Public Repositories</div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-700 hover:border-emerald-400/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Star className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stats.total_stars}</div>
                <div className="text-sm text-gray-400">Total Stars</div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-700 hover:border-emerald-400/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <GitCommit className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stats.total_forks}</div>
                <div className="text-sm text-gray-400">Total Forks</div>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-700 hover:border-emerald-400/50 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Code className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">
                  {stats.top_languages.length > 0 ? stats.top_languages[0].name.substring(0, 2) : '--'}
                </div>
                <div className="text-sm text-gray-400">
                  {stats.top_languages.length > 0 ? stats.top_languages[0].name : 'Languages'}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Top Languages */}
          <Card className="bg-slate-900 border-slate-700">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-white mb-6 text-center">
                Most Used Languages
              </h3>
              <div className="space-y-4">
                {stats.top_languages.map((lang, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{lang.name}</span>
                      <span className="text-emerald-400 font-bold">{lang.percentage}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full transition-all duration-1000"
                        style={{ width: `${lang.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* GitHub Profile Link */}
          <div className="mt-8 text-center">
            <a 
              href="https://github.com/Manas470" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              <Github className="w-5 h-5 mr-2" />
              View Full Profile on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;