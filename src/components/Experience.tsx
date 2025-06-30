import React from 'react';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'Tech Innovations Inc.',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      type: 'Full-time',
      description: 'Leading development of scalable web applications using React and Node.js. Architected microservices resulting in 40% performance improvement.',
      achievements: [
        'Developed high-traffic applications serving 100K+ users daily',
        'Mentored 5 junior developers and established code review standards',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Led migration to cloud infrastructure saving $50K annually'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'MongoDB'],
      color: 'from-cyan-400 to-blue-500'
    },
    {
      title: 'Software Developer',
      company: 'Digital Solutions Ltd.',
      location: 'Austin, TX',
      period: '2021 - 2022',
      type: 'Full-time',
      description: 'Built full-stack applications using modern frameworks. Optimized database performance and improved user experience significantly.',
      achievements: [
        'Created responsive web applications with React and Vue.js',
        'Designed RESTful APIs serving multiple client applications',
        'Reduced page load times by 45% through optimization',
        'Collaborated with designers to improve UI/UX workflows'
      ],
      technologies: ['React', 'Vue.js', 'Express.js', 'PostgreSQL', 'Redis'],
      color: 'from-purple-400 to-pink-500'
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Ventures',
      location: 'Denver, CO',
      period: '2020 - 2021',
      type: 'Full-time',
      description: 'Started career developing web applications and learning industry best practices. Contributed to multiple projects and gained hands-on experience.',
      achievements: [
        'Implemented frontend features using HTML, CSS, and JavaScript',
        'Assisted in backend development with Node.js and Express',
        'Participated in code reviews and testing processes',
        'Contributed to team knowledge sharing and documentation'
      ],
      technologies: ['JavaScript', 'HTML/CSS', 'Node.js', 'Git', 'Agile'],
      color: 'from-green-400 to-teal-500'
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Professional Journey
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A progression of growth, innovation, and impactful contributions to cutting-edge technology projects
          </p>
        </div>

        <div className="relative">
          {/* Floating Timeline */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-8 bottom-8 w-px bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500"></div>

          <div className="space-y-16">
            {experiences.map((experience, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 -translate-y-2">
                  <div className={`w-6 h-6 bg-gradient-to-r ${experience.color} rounded-full border-4 border-gray-900 shadow-lg`}>
                    <div className={`absolute inset-0 bg-gradient-to-r ${experience.color} rounded-full animate-ping opacity-75`}></div>
                  </div>
                </div>

                {/* Content Card */}
                <div className={`ml-20 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'
                }`}>
                  <div className="group bg-gray-800/50 backdrop-blur-2xl rounded-3xl p-8 border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-500 hover:transform hover:scale-105">
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className={`text-sm font-medium px-3 py-1 bg-gradient-to-r ${experience.color} bg-opacity-20 rounded-full text-white border border-opacity-30`}>
                          {experience.type}
                        </span>
                        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                        {experience.title}
                      </h3>
                      
                      <h4 className={`text-lg font-semibold bg-gradient-to-r ${experience.color} bg-clip-text text-transparent mb-4`}>
                        {experience.company}
                      </h4>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{experience.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{experience.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h5 className="text-sm font-semibold text-gray-400 mb-3">Technologies Used:</h5>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className={`text-xs px-3 py-1 bg-gradient-to-r ${experience.color} bg-opacity-20 rounded-full text-white border border-opacity-30`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h5 className="text-sm font-semibold text-cyan-400 mb-3">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li 
                            key={achievementIndex}
                            className="flex items-start gap-3 text-gray-300"
                          >
                            <div className={`w-2 h-2 bg-gradient-to-r ${experience.color} rounded-full mt-2 flex-shrink-0`}></div>
                            <span className="text-sm leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;