import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    'Software Engineer',
    'Full Stack Developer', 
    'React Specialist',
    'Node.js Expert',
    'Problem Solver'
  ];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 120;
    const timeout = setTimeout(() => {
      const currentRoleText = roles[roleIndex];
      
      if (!isDeleting && charIndex < currentRoleText.length) {
        setCurrentRole(currentRoleText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentRole(currentRoleText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentRoleText.length) {
        setTimeout(() => setIsDeleting(true), 3000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex, roles]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-lg text-cyan-400 font-medium tracking-wide">
                  👋 Hello, I'm
                </span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                <span className="bg-gradient-to-r from-white via-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Vivek Kumar
                </span>
              </h1>
              
              <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold h-16 flex items-center justify-center lg:justify-start">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  {currentRole}
                </span>
                <span className="text-cyan-400 animate-pulse ml-1">|</span>
              </div>
            </div>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
              Passionate about crafting exceptional digital experiences with clean, efficient code. 
              Specializing in modern web technologies and scalable architectures that drive business success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Let's Connect</span>
              </button>
              
              <button
                onClick={() => scrollTo({ top: document.getElementById('about')?.offsetTop, behavior: 'smooth' })}
                className="group px-8 py-4 border-2 border-cyan-400/50 rounded-2xl font-semibold text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/25 backdrop-blur-sm"
              >
                Explore Work
              </button>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6">
              {[
                { icon: Github, href: 'https://github.com', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:vivyraiput@gmail.com', label: 'Email' }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group p-4 bg-gray-800/50 backdrop-blur-lg rounded-xl text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:bg-cyan-400/10 hover:scale-110 border border-gray-700/50 hover:border-cyan-400/50"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
          
          {/* 3D Avatar/Visual Element */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Floating Rings */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="w-96 h-96 border-2 border-cyan-400/30 rounded-full"></div>
              </div>
              <div className="absolute inset-8 animate-spin-reverse">
                <div className="w-80 h-80 border-2 border-purple-400/30 rounded-full border-dashed"></div>
              </div>
              
              {/* Central Avatar */}
              <div className="relative w-96 h-96 flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-3xl flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-700 shadow-2xl shadow-cyan-500/25">
                  <div className="w-56 h-56 bg-gray-900 rounded-2xl flex items-center justify-center">
                    <span className="text-6xl font-bold bg-gradient-to-br from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                      VK
                    </span>
                  </div>
                </div>
                
                {/* Floating Icons */}
                <div className="absolute top-12 right-12 w-12 h-12 bg-cyan-400/20 backdrop-blur-lg rounded-xl flex items-center justify-center animate-bounce animation-delay-1000">
                  <span className="text-cyan-400">⚡</span>
                </div>
                <div className="absolute bottom-12 left-12 w-12 h-12 bg-purple-400/20 backdrop-blur-lg rounded-xl flex items-center justify-center animate-bounce animation-delay-2000">
                  <span className="text-purple-400">💻</span>
                </div>
                <div className="absolute top-32 left-8 w-12 h-12 bg-pink-400/20 backdrop-blur-lg rounded-xl flex items-center justify-center animate-bounce animation-delay-3000">
                  <span className="text-pink-400">🚀</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="text-center mt-20">
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="group text-gray-400 hover:text-cyan-400 transition-all duration-300 animate-bounce"
          >
            <div className="flex flex-col items-center space-y-2">
              <span className="text-sm font-medium">Scroll to explore</span>
              <ChevronDown size={28} className="group-hover:transform group-hover:scale-125 transition-transform duration-300" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;