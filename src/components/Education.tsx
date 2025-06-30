import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      type: 'degree',
      title: 'Bachelor of Technology',
      subtitle: 'Computer Science Engineering',
      institution: 'XYZ University',
      location: 'India',
      period: '2016 - 2020',
      description: 'Comprehensive study of computer science fundamentals, software engineering principles, and practical application development.',
      highlights: ['Data Structures & Algorithms', 'Software Engineering', 'Database Systems', 'Web Development'],
      grade: 'First Class with Distinction',
      gradient: 'from-cyan-400 to-blue-500'
    }
  ];

  const certifications = [
    {
      title: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      level: 'Associate Level',
      period: '2023',
      description: 'Comprehensive certification covering AWS cloud services, serverless architecture, and deployment strategies.',
      skills: ['AWS Lambda', 'DynamoDB', 'API Gateway', 'CloudFormation'],
      gradient: 'from-orange-400 to-red-500',
      verified: true
    },
    {
      title: 'React Developer Certification',
      issuer: 'Meta (Facebook)',
      level: 'Advanced Level',
      period: '2022',
      description: 'Advanced React development certification covering hooks, context, performance optimization, and testing.',
      skills: ['React Hooks', 'Context API', 'Testing', 'Performance'],
      gradient: 'from-purple-400 to-pink-500',
      verified: true
    },
    {
      title: 'Node.js Professional',
      issuer: 'Node.js Foundation',
      level: 'Professional Level',
      period: '2022',
      description: 'Professional certification in Node.js development, including Express.js, MongoDB integration, and API development.',
      skills: ['Express.js', 'MongoDB', 'REST APIs', 'Authentication'],
      gradient: 'from-green-400 to-teal-500',
      verified: true
    }
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full filter blur-3xl animate-pulse animation-delay-3000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Education & Certifications
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Academic foundation and professional certifications that drive continuous learning and expertise
          </p>
        </div>

        {/* Education Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-12 text-center">Academic Background</h3>
          <div className="max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="group bg-gray-800/50 backdrop-blur-2xl rounded-3xl p-8 border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-500 hover:transform hover:scale-105"
              >
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${edu.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div>
                        <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                          {edu.title}
                        </h4>
                        <h5 className={`text-lg font-semibold bg-gradient-to-r ${edu.gradient} bg-clip-text text-transparent mb-3`}>
                          {edu.subtitle}
                        </h5>
                        <p className="text-gray-300 mb-4">{edu.institution}</p>
                      </div>

                      <div className="text-right">
                        <div className="flex items-center gap-2 text-gray-400 mb-2">
                          <Calendar size={16} />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 mb-2">
                          <MapPin size={16} />
                          <span>{edu.location}</span>
                        </div>
                        <div className={`text-sm font-medium bg-gradient-to-r ${edu.gradient} bg-clip-text text-transparent`}>
                          {edu.grade}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Highlights */}
                    <div>
                      <h6 className="text-sm font-semibold text-cyan-400 mb-3">Key Subjects:</h6>
                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map((highlight, highlightIndex) => (
                          <span 
                            key={highlightIndex}
                            className={`text-xs px-3 py-1 bg-gradient-to-r ${edu.gradient} bg-opacity-20 rounded-full text-white border border-opacity-30`}
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-12 text-center">Professional Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="group bg-gray-800/50 backdrop-blur-2xl rounded-3xl p-8 border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-500 hover:transform hover:scale-105"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${cert.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  {cert.verified && (
                    <div className="flex items-center gap-1 text-green-400 text-xs font-medium">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      Verified
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {cert.title}
                  </h4>
                  <h5 className={`text-sm font-semibold bg-gradient-to-r ${cert.gradient} bg-clip-text text-transparent mb-2`}>
                    {cert.issuer}
                  </h5>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <span>{cert.level}</span>
                    <span>•</span>
                    <span>{cert.period}</span>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills */}
                <div>
                  <h6 className="text-xs font-semibold text-gray-400 mb-3">Skills Covered:</h6>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="text-xs px-2 py-1 bg-gray-700/50 text-gray-300 rounded-lg border border-gray-600/50"
                      >
                        {skill}
                      </span>
                    ))}
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

export default Education;