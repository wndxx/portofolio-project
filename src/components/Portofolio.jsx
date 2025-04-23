"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Mail, Phone, Github, Linkedin, Download } from "lucide-react"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState("about")

  // Add effect to handle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const projects = [
    {
      title: "Automatic Trash Can",
      description: "Built using Arduino and HCSR04 sensor to automatically open when detecting human presence.",
      technologies: ["Arduino", "C++", "Ultrasonic Sensor"],
    },
    {
      title: "Mountain Climbing Ticket App",
      description:
        "A web application for managing mountain climbing tickets with user authentication and booking system.",
      technologies: ["React.js", "Node.js", "MongoDB"],
    },
    {
      title: "Personal Finance Tracker",
      description: "Application to track income, expenses, and financial goals with data visualization.",
      technologies: ["React.js", "Firebase", "Chart.js"],
    },
  ]

  const skills = [
    { name: "HTML/CSS", level: 80 },
    { name: "JavaScript", level: 75 },
    { name: "React.js", level: 70 },
    { name: "Node.js", level: 65 },
    { name: "SQL", level: 75 },
    { name: "MongoDB", level: 60 },
  ]

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen transition-colors duration-300">
      {/* Header with Navigation */}
      <header className="sticky top-0 z-10 bg-white dark:bg-gray-800 shadow-md transition-colors duration-300">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
            Windi Saputra
          </h1>
          <div className="flex items-center space-x-6">
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                <li>
                  <button
                    onClick={() => setActiveSection("about")}
                    className={`hover:text-primary-500 transition ${activeSection === "about" ? "font-bold text-primary-500" : ""}`}
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveSection("projects")}
                    className={`hover:text-primary-500 transition ${activeSection === "projects" ? "font-bold text-primary-500" : ""}`}
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveSection("skills")}
                    className={`hover:text-primary-500 transition ${activeSection === "skills" ? "font-bold text-primary-500" : ""}`}
                  >
                    Skills
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveSection("contact")}
                    className={`hover:text-primary-500 transition ${activeSection === "contact" ? "font-bold text-primary-500" : ""}`}
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </nav>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-yellow-300 transition-colors duration-300"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-4 md:p-6 lg:p-8">
        {/* Hero Section */}
        <section
          className={`mb-12 py-12 flex flex-col md:flex-row items-center ${activeSection !== "about" ? "hidden" : ""}`}
        >
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hello, I'm Windi Saputra</h2>
            <h3 className="text-xl md:text-2xl text-primary-500 mb-4">Computer Science Graduate</h3>
            <p className="text-lg mb-6">
              I'm passionate about database development and currently enhancing my skills in web application
              development.
            </p>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg font-medium bg-primary-500 hover:bg-primary-600 text-white transition"
              onClick={() => setActiveSection("contact")}
            >
              Contact Me
            </a>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center transition-colors duration-300">
              <span className="text-4xl">👨‍💻</span>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className={`mb-12 ${activeSection !== "about" ? "hidden" : ""}`}>
          <h2 className="text-2xl font-bold mb-6 border-b pb-2">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
                <h4 className="font-bold">Buddhi Dharma University</h4>
                <p>Bachelor of Computer Science</p>
                <p>GPA: 3.61</p>
                <p className="text-sm mt-2">2019 - 2023</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Experience</h3>
              <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
                <h4 className="font-bold">Freelance Developer</h4>
                <p>Developed various web applications and IoT projects</p>
                <p className="text-sm mt-2">2021 - Present</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className={`mb-12 ${activeSection !== "projects" ? "hidden" : ""}`}>
          <h2 className="text-2xl font-bold mb-6 border-b pb-2">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow-lg transition transform hover:scale-105 bg-white dark:bg-gray-800"
              >
                <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center transition-colors duration-300">
                  <span className="text-5xl">📁</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className={`mb-12 ${activeSection !== "skills" ? "hidden" : ""}`}>
          <h2 className="text-2xl font-bold mb-6 border-b pb-2">My Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300">
                      <div className="h-full rounded-full bg-primary-500" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Professional Skills</h3>
              <div className="p-6 rounded-lg bg-gray-100 dark:bg-gray-800 space-y-4 transition-colors duration-300">
                <div>
                  <h4 className="font-bold mb-2">Problem Solving</h4>
                  <p>Ability to analyze complex problems and develop efficient solutions.</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Teamwork</h4>
                  <p>Experience collaborating in team environments to achieve common goals.</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Continuous Learning</h4>
                  <p>Committed to staying updated with the latest technologies and best practices.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={`${activeSection !== "contact" ? "hidden" : ""}`}>
          <h2 className="text-2xl font-bold mb-6 border-b pb-2">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="p-6 rounded-lg bg-gray-100 dark:bg-gray-800 space-y-4 transition-colors duration-300">
                <div className="flex items-center">
                  <Mail className="mr-4" />
                  <span>saputrawindi0@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-4" />
                  <span>+62 896 8930 6127</span>
                </div>
                <div className="flex items-center">
                  <Github className="mr-4" />
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-500 transition"
                  >
                    github.com/yourusername
                  </a>
                </div>
                <div className="flex items-center">
                  <Linkedin className="mr-4" />
                  <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-500 transition"
                  >
                    linkedin.com/in/yourusername
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Download Resume</h3>
              <div className="p-6 rounded-lg bg-gray-100 dark:bg-gray-800 flex flex-col items-center justify-center transition-colors duration-300">
                <Download size={48} className="mb-4 text-primary-500" />
                <button className="px-6 py-3 rounded-lg font-medium bg-primary-500 hover:bg-primary-600 text-white transition">
                  Download CV (PDF)
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 bg-gray-100 dark:bg-gray-800 mt-12 transition-colors duration-300">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} Windi Saputra. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
