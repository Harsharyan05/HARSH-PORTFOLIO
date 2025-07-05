import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and TypeScript. Features smooth animations, dark theme, and optimized performance.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      github: "https://github.com/harsharyan/portfolio",
      live: "https://harsharyan.dev",
      icon: "🌐"
    },
    {
      title: "Task Management App",
      description: "A full-stack task management application with real-time updates, user authentication, and collaborative features.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      github: "https://github.com/harsharyan/task-manager",
      live: "https://taskmanager.harsharyan.dev",
      icon: "📋"
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather dashboard that provides real-time weather information with interactive maps and forecasts.",
      technologies: ["JavaScript", "Weather API", "Chart.js", "CSS3"],
      github: "https://github.com/harsharyan/weather-dashboard",
      live: "https://weather.harsharyan.dev",
      icon: "🌤️"
    }
  ]

  return (
    <section className="section-container section-padding">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          My <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Here are some of the projects I've worked on. Each one represents a step in my journey as a developer.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800/50 rounded-xl overflow-hidden card-hover"
          >
            <div className="h-48 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
              <div className="text-6xl opacity-80">{project.icon}</div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                  aria-label={`View ${project.title} source code on GitHub`}
                >
                  <Github size={16} />
                  <span className="text-sm">Code</span>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                  aria-label={`View ${project.title} live demo`}
                >
                  <ExternalLink size={16} />
                  <span className="text-sm">Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects