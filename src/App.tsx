import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, ExternalLink, Code2, Brain, Briefcase, GraduationCap, Award, Home, User, Wrench, FolderGit2 } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);
  const navOpacity = useTransform(scrollY, [0, 300], [0.9, 1]);
  const navY = useTransform(scrollY, [0, 300], [0, -20]);

  const sections = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'skills', icon: Wrench, label: 'Skills' },
    { id: 'projects', icon: FolderGit2, label: 'Projects' }
  ];

  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      school: "Your University Name",
      period: "2019-2023",
      description: "Studied core computer science subjects including Data Structures, Algorithms, Database Management, and Web Development."
    },
    {
      degree: "Higher Secondary Education",
      school: "Your School Name",
      period: "2017-2019",
      description: "Completed with focus on Mathematics, Physics, and Computer Science."
    }
  ];

  const skills = [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Node.js",
    "Python",
    "SQL",
    "MongoDB",
    "Git",
    "Docker",
    "AWS",
    "HTML/CSS",
    "REST APIs"
  ];

  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Tech Company Name",
      period: "2023-Present",
      description: "Developing and maintaining web applications using React.js and Node.js. Implementing new features and optimizing application performance."
    },
    {
      role: "Software Developer Intern",
      company: "Startup Name",
      period: "2022-2023",
      description: "Worked on frontend development using React.js. Collaborated with the team to develop new features and fix bugs."
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2023",
      link: "#"
    },
    {
      name: "Full Stack Development",
      issuer: "Udemy",
      date: "2022",
      link: "#"
    },
    {
      name: "React.js Advanced Concepts",
      issuer: "Coursera",
      date: "2022",
      link: "#"
    }
  ];

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Built a full-stack e-commerce platform using MERN stack with features like user authentication, product management, and payment integration.",
      link: "#"
    },
    {
      title: "Task Management App",
      description: "Developed a React-based task management application with real-time updates using Socket.io and MongoDB.",
      link: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Created a weather dashboard using React that displays weather information from multiple cities using a weather API.",
      link: "#"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      }));

      const currentSection = sectionElements.find(section => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white relative">
      {/* Enhanced Floating Navigation Bar */}
      <motion.nav 
        className="fixed left-1/2 -translate-x-1/2 z-50 top-4"
        style={{ opacity: navOpacity, y: navY }}
      >
        <motion.div 
          className="glass-effect rounded-full px-6 py-4 shadow-lg shadow-blue-500/20 backdrop-blur-lg"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
        >
          <ul className="flex space-x-8">
            {sections.map(section => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={`flex flex-col items-center transition-all duration-300 ${
                    activeSection === section.id 
                      ? 'text-blue-400 scale-110' 
                      : 'text-gray-400 hover:text-white hover:scale-105'
                  }`}
                >
                  <section.icon size={20} />
                  <span className="text-xs mt-1">{section.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.nav>

      {/* Social Links Box */}
      <motion.div
        className="fixed right-4 top-1/2 -translate-y-1/2 z-40"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.8, type: "spring" }}
      >
        <div className="glass-effect rounded-2xl p-4 shadow-lg shadow-blue-500/20 backdrop-blur-lg">
          <div className="flex flex-col space-y-4">
            <motion.a
              href="https://github.com/sunilkurthakoti"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-effect rounded-xl hover:text-blue-400 transition-all duration-300 hover:scale-110 group"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={24} />
              <span className="absolute left-full ml-2 px-2 py-1 bg-blue-500 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                More Projects
              </span>
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-effect rounded-xl hover:text-blue-400 transition-all duration-300 hover:scale-110 group"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={24} />
              <span className="absolute left-full ml-2 px-2 py-1 bg-blue-500 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                More Details
              </span>
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <motion.header 
        id="home"
        className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between min-h-screen"
        style={{ opacity, scale }}
      >
        <div className="md:w-1/2 text-center md:text-left">
          <motion.h1 
            className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600"
            {...fadeIn}
          >
            Sunil Kurthakoti
          </motion.h1>
          <motion.p 
            className="text-2xl text-gray-300 mb-8"
            {...fadeIn}
          >
            Full Stack Developer & Tech Enthusiast
          </motion.p>
          <motion.div 
            className="flex justify-center md:justify-start space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {[
              { href: "https://github.com/sunilkurthakoti", icon: Github },
              { href: "https://linkedin.com/in/yourprofile", icon: Linkedin },
              { href: "mailto:your.email@example.com", icon: Mail },
              { href: "https://twitter.com/yourhandle", icon: Twitter }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="p-3 glass-effect rounded-full hover:text-blue-400 transition-all duration-300 hover:scale-110"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </div>
        <motion.div
          className="md:w-1/2 mt-8 md:mt-0"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-20"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <img
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=400&h=400"
              alt="Profile"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full mx-auto object-cover border-4 border-blue-500 shadow-lg relative z-10"
            />
          </div>
        </motion.div>
      </motion.header>

      {/* Education Section */}
      <motion.section 
        id="about"
        className="container mx-auto px-4 py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center mb-8">
          <GraduationCap className="mr-4 text-blue-500" size={32} />
          <h2 className="text-3xl font-bold">Education</h2>
        </div>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="glass-effect rounded-lg p-6 hover-card gradient-border"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
              <p className="text-blue-400 mb-2">{edu.school} | {edu.period}</p>
              <p className="text-gray-300">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        id="skills"
        className="container mx-auto px-4 py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center mb-8">
          <Brain className="mr-4 text-blue-500" size={32} />
          <h2 className="text-3xl font-bold">Skills</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              className="glass-effect rounded-lg p-4 text-center skill-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        className="container mx-auto px-4 py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center mb-8">
          <Briefcase className="mr-4 text-blue-500" size={32} />
          <h2 className="text-3xl font-bold">Experience</h2>
        </div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="glass-effect rounded-lg p-6 hover-card gradient-border"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-2">{exp.role}</h3>
              <p className="text-blue-400 mb-2">{exp.company} | {exp.period}</p>
              <p className="text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Certifications Section */}
      <motion.section 
        className="container mx-auto px-4 py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center mb-8">
          <Award className="mr-4 text-blue-500" size={32} />
          <h2 className="text-3xl font-bold">Certifications</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="glass-effect rounded-lg p-6 hover-card gradient-border"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
              <p className="text-blue-400 mb-1">{cert.issuer}</p>
              <p className="text-gray-300 mb-4">{cert.date}</p>
              <motion.a 
                href={cert.link}
                className="inline-flex items-center text-blue-400 hover:text-blue-300"
                whileHover={{ x: 5 }}
              >
                View Certificate <ExternalLink size={16} className="ml-2" />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        id="projects"
        className="container mx-auto px-4 py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center mb-8">
          <Code2 className="mr-4 text-blue-500" size={32} />
          <h2 className="text-3xl font-bold">Projects</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glass-effect rounded-lg p-6 hover-card gradient-border"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <motion.a 
                href={project.link}
                className="inline-flex items-center text-blue-400 hover:text-blue-300"
                whileHover={{ x: 5 }}
              >
                View Project <ExternalLink size={16} className="ml-2" />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-400">
        <p>© 2024 Sunil Kurthakoti. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;