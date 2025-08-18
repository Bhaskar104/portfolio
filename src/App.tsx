"use client";

import { useState, useEffect } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects-section");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Bhaskar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skills = [
    { name: "Java", level: 95 },
    { name: "Spring Boot", level: 95 },
    { name: "Angular", level: 90 },
    { name: "React", level: 95 },
    { name: "NestJS", level: 85 },
    { name: "GraphQL", level: 80 },
    { name: "SQL", level: 90 },
  ];

  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing my skills and projects built with modern technologies",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      link: "#",
    },
    {
      title: "Real-Time Chat Application",
      description:
        "A real-time messaging platform with user authentication, live chat, and group functionality.",
      tech: ["React", "Node.js", "Socket.io"],
      link: "https://github.com/Bhaskar104/chat-app",
    },
    {
      title: "E-commerce Platform",
      description:
        "Full-featured e-commerce site including product management, user profiles, and secure payment processing.",
      tech: ["React", "Express", "MongoDB"],
      link: "https://github.com/Bhaskar104/e-commerce-platform",
    },
  ];

  const certifications = [
    {
      title: "GitHub Copilot",
      issuer: "Microsoft",
      date: "2025",
      credential: "GH-300",
      icon: <Github />,
    },
    {
      title: "GitHub Actions",
      issuer: "Microsoft",
      date: "In Progress",
      credential: "GH-400",
      icon: <Github />,
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "In Progress",
      credential: "CLF-C02",
      icon: <Mail />,
    },
  ];

  const experiences = [
    {
      title: "Senior Software Developer",
      company: "Accenture",
      period: "2023 - Present",
      description:
        "Leading development of scalable web applications using modern frameworks. Focused on performance optimization and team leadership.",
      skills: [
        "Java",
        "Spring Boot",
        "Angular",
        "React",
        "PostgreSQL",
        "SQL",
        "NestJS",
        "GraphQL",
        "Kafka",
        "Docker",
      ],
    },
    {
      title: "Technology Analyst",
      company: "Infosys",
      period: "2019 - 2023",
      description:
        "Developed enterprise applications with a focus on user experience and scalability. Collaborated with cross-functional teams to deliver high-quality software.",
      skills: ["Java", "Spring Boot", "AngularJS", "SQL", "Jenkins"],
    },
  ];

  return (
    <div className="min-h-screen text-white relative overflow-hidden bg-gradient-to-br from-gray-800 via-gray-900 to-black">
      <Button
        onClick={downloadResume}
        className="fixed top-6 right-6 z-50 bg-teal-600 hover:bg-teal-500 text-white shadow-lg"
        size="sm"
      >
        Resume
      </Button>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-teal-500 rounded-full opacity-20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div
          className={`text-center z-10 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Bhaskar Hegde
            <span className="text-teal-400 block">Full Stack Developer</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Crafting digital experiences that blend innovation with
            functionality
          </p>
          <Button
            onClick={scrollToProjects}
            size="lg"
            className="bg-teal-600 hover:bg-teal-500 text-white"
          >
            Explore My Work
          </Button>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 z-10 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Skills</h2>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Skills Visualization */}
            <div className="relative">
              <div className="relative w-96 h-96 mx-auto mb-8">
                {skills.map((skill, index) => {
                  const angle = index * 50 - 90;
                  const radius = 160;
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;

                  return (
                    <div
                      key={skill.name}
                      className="absolute w-24 h-24 rounded-full flex flex-col items-center justify-center transition-all duration-700 border-2 bg-gradient-to-br from-teal-600 to-teal-800 hover:from-teal-500 hover:to-teal-700 border-gray-600 hover:scale-110"
                      style={{
                        left: `calc(50% + ${x}px - 3rem)`,
                        top: `calc(50% + ${y}px - 3rem)`,
                      }}
                    >
                      <span className="text-sm font-bold text-center leading-tight text-white">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}

                {/* Center hub */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-teal-700 to-teal-900 rounded-full flex items-center justify-center shadow-2xl">
                    <span className="text-white font-bold text-lg text-center">
                      Core
                      <br />
                      Skills
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Expertise Areas */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold mb-8">Expertise Areas</h3>

              {/* Frontend Development */}
              <div className="bg-gray-800 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500">
                <h4 className="text-2xl font-bold text-teal-400 mb-4">
                  Frontend Development
                </h4>
                <p className="text-gray-400 mb-6">
                  Modern UI/UX Implementation
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    "React",
                    "TypeScript",
                    "Next.js",
                    "Tailwind CSS",
                    "Angular",
                  ].map((skill, index) => (
                    <div
                      key={skill}
                      className="bg-gray-700 hover:bg-gray-600 rounded-xl p-4 text-center transition-all duration-300"
                    >
                      <span className="text-sm text-teal-400 font-medium">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Backend & Database */}
              <div className="bg-gray-800 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500">
                <h4 className="text-2xl font-bold text-teal-400 mb-4">
                  Backend & Database
                </h4>
                <p className="text-gray-400 mb-6">Server-side Architecture</p>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    "Java",
                    "Spring Boot",
                    "PostgreSQL",
                    "SQL",
                    "NestJS",
                    "GraphQL",
                  ].map((skill, index) => (
                    <div
                      key={skill}
                      className="bg-gray-700 hover:bg-gray-600 rounded-xl p-4 text-center transition-all duration-300"
                    >
                      <span className="text-sm text-teal-400 font-medium">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* DevOps */}
              <div className="bg-gray-800 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500">
                <h4 className="text-2xl font-bold text-teal-400 mb-4">
                  DevOps & Tools
                </h4>
                <p className="text-gray-400 mb-6">
                  Deployment & Development Tools
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {["Jenkins", "Docker", "Git", "CI/CD", "Kubernetes"].map(
                    (skill, index) => (
                      <div
                        key={skill}
                        className="bg-gray-700 hover:bg-gray-600 rounded-xl p-4 text-center transition-all duration-300"
                      >
                        <span className="text-sm text-teal-400 font-medium">
                          {skill}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects-section"
        className="py-20 px-6 max-w-7xl mx-auto z-10 relative"
      >
        <h2 className="text-4xl font-bold text-center mb-16">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-gray-800 border-gray-700 hover:scale-105 transition-all duration-300 cursor-pointer hover:shadow-xl"
              onClick={() => window.open(project.link, "_blank")}
            >
              <CardContent className="p-6">
                <div className="w-full h-48 bg-gradient-to-br from-teal-600 to-teal-800 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">
                    Portfolio
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-teal-600 text-white rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-6 z-10 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Certifications
          </h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="bg-gray-800 border-gray-700 hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl">{cert.icon}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-white">
                      {cert.title}
                    </h3>
                    <p className="text-gray-400 mb-2">{cert.issuer}</p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-400">{cert.date}</span>
                      <span className="bg-teal-600 text-white px-2 py-1 rounded text-xs">
                        {cert.credential}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6 z-10 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Professional Experience
          </h2>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-500 to-teal-800 transform md:-translate-x-px rounded-full"></div>

            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <div key={index} className="relative group">
                  <div className="absolute left-6 md:left-1/2 w-6 h-6 bg-teal-400 rounded-full border-4 border-gray-900 transform md:-translate-x-3 z-10"></div>

                  <div
                    className={`ml-20 md:ml-0 md:w-5/12 ${
                      index % 2 === 0
                        ? "md:mr-auto md:pr-12"
                        : "md:ml-auto md:pl-12"
                    }`}
                  >
                    <Card className="bg-gray-800 border-gray-700 hover:shadow-2xl transition-all duration-500">
                      <CardContent className="p-8">
                        <div className="flex items-start justify-between mb-6">
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-1">
                              {exp.title}
                            </h3>
                            <p className="text-xl font-semibold text-teal-400 mb-2">
                              {exp.company}
                            </p>
                          </div>
                          <div className="bg-teal-600 px-4 py-2 rounded-full text-sm text-white">
                            {exp.period}
                          </div>
                        </div>

                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {exp.description}
                        </p>

                        <div className="pt-6 border-t border-gray-700">
                          <h5 className="text-sm font-semibold text-white mb-4">
                            Technologies Used
                          </h5>
                          <div className="flex flex-wrap gap-3">
                            {exp.skills.map((skill) => (
                              <div
                                key={skill}
                                className="px-4 py-2 bg-gray-700 text-teal-400 rounded-full text-sm border border-gray-600 hover:border-teal-400 transition-all duration-300"
                              >
                                {skill}
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 z-10 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Get In Touch</h2>
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-lg text-gray-300">
                Ready to bring your ideas to life? I'm always excited to work on
                new projects and collaborate with amazing people.
              </p>
            </div>
            <div className="flex justify-center flex-wrap gap-6">
              {/* Email */}
              <a
                href="mailto:189bkh@gmail.com"
                className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110"
              >
                <Mail className="text-white w-7 h-7" />
              </a>

              {/* Phone */}
              <a
                href="tel:+919380278094"
                className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110"
              >
                <Phone className="text-white w-7 h-7" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/bhaskar-hegde-a24359159"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110"
              >
                <Linkedin className="text-white w-7 h-7" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Bhaskar104"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110"
              >
                <Github className="text-white w-7 h-7" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
