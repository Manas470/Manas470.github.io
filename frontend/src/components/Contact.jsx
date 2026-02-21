import React, { useState } from 'react';
import { Mail, MapPin, Send, Linkedin, Github, FileText } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';
import { profileData } from '../mock/mockData';
import { contactAPI } from '../services/api';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await contactAPI.sendMessage(formData);
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
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
            <div className="space-y-6">
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-emerald-500/10 rounded-lg">
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
                      <div className="p-3 bg-emerald-500/10 rounded-lg">
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
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Connect With Me</h3>
                  <div className="space-y-3">
                    <a 
                      href={profileData.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-slate-900 rounded-lg hover:bg-slate-700 transition-colors group"
                    >
                      <Linkedin className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                      <span className="text-gray-300 group-hover:text-white">LinkedIn Profile</span>
                    </a>
                    <a 
                      href={profileData.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-slate-900 rounded-lg hover:bg-slate-700 transition-colors group"
                    >
                      <Github className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                      <span className="text-gray-300 group-hover:text-white">GitHub Profile</span>
                    </a>
                    <a 
                      href={profileData.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 bg-slate-900 rounded-lg hover:bg-slate-700 transition-colors group"
                    >
                      <FileText className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                      <span className="text-gray-300 group-hover:text-white">Download Resume</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-slate-900 border-slate-700 text-white focus:border-emerald-400"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-slate-900 border-slate-700 text-white focus:border-emerald-400"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-slate-900 border-slate-700 text-white focus:border-emerald-400"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-slate-900 border-slate-700 text-white focus:border-emerald-400 resize-none"
                      placeholder="Your message here..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;