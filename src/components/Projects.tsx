import React from 'react';
import { ExternalLink, Github, Code, Database, Smartphone, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React frontend and Node.js backend. Features include user authentication, payment integration, real-time inventory, and comprehensive admin dashboard.',
      image: '/api/placeholder/600/400',
      icon: Globe,
      category: 'Full Stack',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Express.js', 'JWT', 'Redis'],
      features: ['Real-time inventory', 'Payment processing', 'Admin dashboard', 'User authentication'],
      gradient: 'from-cyan-400 to-blue-500',
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      title: 'Analytics Dashboard',
      description: 'Real-time analytics dashboard with interactive charts and data visualization. Built with React and D3.js for dynamic data representation with WebSocket integration.',
      image: '/api/placeholder/600/400',
      icon: Database,
      category: 'Data Visualization',
      technologies: ['React', 'D3.js', 'Express', 'PostgreSQL', 'Chart.js', 'WebSockets', 'Redis'],
      features: ['Real-time updates', 'Interactive charts', 'Data export', 'Custom filters'],
      gradient: 'from-purple-400 to-pink-500',
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      title: 'Task Management App',
      description: 'Cross-platform task management application with offline sync capability. Built using React Native with Redux for state management and Firebase integration.',
      image: '/api/placeholder/600/400',
      icon: Smartphone,
      category: 'Mobile App',
      technologies: ['React Native', 'Redux', 'SQLite', 'Firebase', 'Expo', 'AsyncStorage'],
      features: ['Offline sync', 'Push notifications', 'Team collaboration', 'Cross-platform'],
      gradient: 'from-green-400 to-teal-500',
      links: {
        demo: '#',
        github: '#'
      }
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A showcase of innovative solutions demonstrating expertise in modern web development and cutting-edge technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative bg-gray-800/30 backdrop-blur-2xl rounded-3xl overflow-hidden border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-500 hover:transform hover:scale-105"
            >
              {/* Project Image/Icon Area */}
              <div className={`relative h-64 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <project.icon className="w-20 h-20 text-white group-hover:scale-110 transition-transform duration-500" />
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-medium px-3 py-1 bg-white/20 backdrop-blur-lg rounded-full text-white border border-white/30">
                    {project.category}
                  </span>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-4 right-4 opacity-70">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-lg rounded-lg flex items-center justify-center animate-bounce animation-delay-1000">
                    <Code size={16} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className={`w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full`}></div>
                        <span className="text-xs text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-400 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="text-xs px-3 py-1 bg-gray-700/50 backdrop-blur-lg text-gray-300 rounded-full border border-gray-600/50 hover:border-cyan-400/50 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  <a 
                    href={project.links.demo}
                    className={`group/link flex items-center gap-2 bg-gradient-to-r ${project.gradient} text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 flex-1 justify-center`}
                  >
                    <ExternalLink size={16} className="group-hover/link:rotate-45 transition-transform duration-300" />
                    <span>Live Demo</span>
                  </a>
                  <a 
                    href={project.links.github}
                    className="group/link flex items-center justify-center gap-2 bg-gray-700/50 backdrop-blur-lg text-gray-300 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-gray-600/50 hover:text-white border border-gray-600/50 hover:border-gray-500/50"
                  >
                    <Github size={16} className="group-hover/link:rotate-12 transition-transform duration-300" />
                  </a>
                </div>
              </div>

              {/* Hover Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* View More Projects Button */}
        <div className="text-center mt-16">
          <button className="group bg-gray-800/50 backdrop-blur-2xl border border-gray-700/50 hover:border-cyan-400/50 text-gray-300 hover:text-cyan-400 px-8 py-4 rounded-2xl font-medium transition-all duration-300 hover:transform hover:scale-105">
            <span className="flex items-center gap-2">
              View More Projects
              <ExternalLink size={16} className="group-hover:rotate-45 transition-transform duration-300" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;