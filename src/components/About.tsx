import React from 'react';
import { Code2, Users, TrendingUp, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Clean Architecture',
      description: 'Building scalable applications with maintainable, well-structured code'
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'Mentoring developers and driving collaborative innovation'
    },
    {
      icon: TrendingUp,
      title: 'Performance Focus',
      description: 'Optimizing applications for speed, scalability, and user experience'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Leveraging cutting-edge technologies to solve complex problems'
    }
  ];

  const stats = [
    { number: '3+', label: 'Years Experience', color: 'from-cyan-400 to-blue-500' },
    { number: '25+', label: 'Projects Delivered', color: 'from-purple-400 to-pink-500' },
    { number: '12+', label: 'Technologies', color: 'from-green-400 to-teal-500' },
    { number: '100%', label: 'Client Satisfaction', color: 'from-orange-400 to-red-500' }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 items-start mb-20">
          {/* Main Content */}
          <div className="xl:col-span-2 space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-2xl rounded-3xl p-8 border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-500">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Professional Objective</h3>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  Dedicated software engineer with a passion for developing innovative programs that expedite 
                  the efficiency and effectiveness of organizational success. Well-versed in technology and 
                  writing code to create systems that are reliable and user-friendly.
                </p>
                <p className="text-lg">
                  With over 3 years of experience in full-stack development, I specialize in creating modern, 
                  scalable web applications using cutting-edge technologies. My expertise spans across frontend 
                  frameworks, backend architectures, and cloud infrastructure.
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="group bg-gray-800/30 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-105"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-xl group-hover:from-cyan-400/30 group-hover:to-purple-500/30 transition-all duration-300">
                      <highlight.icon className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {highlight.title}
                      </h4>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="space-y-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 backdrop-blur-2xl rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-500 hover:transform hover:scale-105 group"
              >
                <div className="text-center">
                  <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
            
            {/* Additional Info Card */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-purple-600/10 backdrop-blur-2xl rounded-2xl p-6 border border-cyan-400/20">
              <h4 className="font-semibold text-cyan-400 mb-3">Core Philosophy</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                "Code is poetry in motion. Every line should tell a story, solve a problem, 
                and contribute to something greater than the sum of its parts."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;