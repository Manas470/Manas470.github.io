import React, { useState, useEffect } from 'react';
import { Github, Linkedin, FileText, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-xl font-bold text-white hover:text-emerald-400 transition-colors"
          >
            <span className="text-emerald-400">&lt;</span>
            Manas
            <span className="text-emerald-400">/&gt;</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-300 hover:text-emerald-400 transition-colors text-sm font-medium"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/Manas470" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-emerald-400">
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/venkatamanas/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-emerald-400">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://drive.google.com/file/d/1JtaSwL0OAwsA9q8F4JeHSn3qgwTh-3-K/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-emerald-400">
                <FileText className="h-5 w-5" />
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-slate-900/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-gray-300 hover:text-emerald-400 transition-colors text-left px-2"
                >
                  {link.name}
                </button>
              ))}
              <div className="flex space-x-4 px-2 pt-2">
                <a href="https://github.com/Manas470" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="text-gray-300 hover:text-emerald-400">
                    <Github className="h-5 w-5" />
                  </Button>
                </a>
                <a href="https://www.linkedin.com/in/venkatamanas/" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="text-gray-300 hover:text-emerald-400">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </a>
                <a href="https://drive.google.com/file/d/1JtaSwL0OAwsA9q8F4JeHSn3qgwTh-3-K/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="text-gray-300 hover:text-emerald-400">
                    <FileText className="h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;