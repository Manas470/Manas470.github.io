import React from 'react';
import { Mail, MapPin, Linkedin, Github, FileText } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { profileData } from '../mock/mockData';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Let's discuss data science, ML projects, or potential collaborations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-emerald-500/10 rounded-lg shrink-0">
                      <Mail className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Email</div>
                      <a
                        href={`mailto:${profileData.email}`}
                        className="text-white hover:text-emerald-400 transition-colors break-all"
                      >
                        {profileData.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-emerald-500/10 rounded-lg shrink-0">
                      <MapPin className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Location</div>
                      <div className="text-white">{profileData.location}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
                <div className="space-y-4">
                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-slate-900 rounded-lg hover:bg-slate-700 transition-colors group"
                  >
                    <Linkedin className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform shrink-0" />
                    <span className="text-gray-300 group-hover:text-white font-medium">LinkedIn Profile</span>
                  </a>
                  <a
                    href={profileData.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-slate-900 rounded-lg hover:bg-slate-700 transition-colors group"
                  >
                    <Github className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform shrink-0" />
                    <span className="text-gray-300 group-hover:text-white font-medium">GitHub Profile</span>
                  </a>
                  <a
                    href={profileData.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-slate-900 rounded-lg hover:bg-slate-700 transition-colors group"
                  >
                    <FileText className="w-6 h-6 text-emerald-400 group-hover:scale-110 transition-transform shrink-0" />
                    <span className="text-gray-300 group-hover:text-white font-medium">Download Resume</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;