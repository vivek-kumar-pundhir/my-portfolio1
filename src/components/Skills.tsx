import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      gradient: 'from-cyan-400 to-blue-500',
      skills: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 95 },
        { name: 'JavaScript', level: 92 },
        { name: 'TypeScript', level: 88 },
        { name: 'React', level: 93 },
        { name: 'Vue.js', level: 85 },
        { name: 'Tailwind CSS', level: 90 }
      ]
    },
    {
      title: 'Backend',
      gradient: 'from-purple-400 to-pink-500',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 88 },
        { name: 'Python', level: 82 },
        { name: 'Java', level: 78 },
        { name: 'REST APIs', level: 92 },
        { name: 'GraphQL', level: 85 },
        { name: 'Microservices', level: 80 }
      ]
    },
    {
      title: 'Database',
      gradient: 'from-green-400 to-teal-500',
      skills: [
        { name: 'MongoDB', level: 88 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MySQL', level: 82 },
        { name: 'Redis', level: 80 },
        { name: 'Firebase', level: 85 },
        { name: 'SQLite', level: 78 }
      ]
    },
    {
      title: 'DevOps & Tools',
      gradient: 'from-orange-400 to-red-500',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'Docker', level: 85 },
        { name: 'AWS', level: 80 },
        { name: 'Linux', level: 82 },
        { name: 'CI/CD', level: 78 },
        { name: 'Jest', level: 88 },
        { name: 'Webpack', level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2306b6d4' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Technical Arsenal
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks for building next-generation applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-gray-800/50 backdrop-blur-2xl rounded-3xl p-8 border border-gray-700/50 hover:border-cyan-400/30 transition-all duration-500 group"
            >
              <div className="flex items-center mb-8">
                <div className={`w-4 h-4 bg-gradient-to-r ${category.gradient} rounded-full mr-4`}></div>
                <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group/skill">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium group-hover/skill:text-white transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span className={`text-sm font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${skillIndex * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Additional Competencies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Agile/Scrum', 'Project Management', 'Code Review', 'Team Leadership', 
              'System Design', 'Performance Optimization', 'Security Best Practices', 
              'Mobile Development', 'UI/UX Design', 'Technical Writing'
            ].map((skill, index) => (
              <div 
                key={index}
                className="group bg-gray-800/30 backdrop-blur-xl border border-gray-700/50 hover:border-cyan-400/50 px-6 py-3 rounded-2xl transition-all duration-300 hover:transform hover:scale-105"
              >
                <span className="text-gray-300 group-hover:text-cyan-400 font-medium transition-colors duration-300">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;