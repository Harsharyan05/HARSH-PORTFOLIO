import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'

const Hero = () => {
  return (
    <section className="section-container section-padding min-h-screen flex items-center">
      <div className="w-full">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <p className="text-blue-400 text-lg font-medium">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="gradient-text">Harsh Aryan</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Tech Enthusiast & Web Developer passionate about creating innovative digital experiences
            </p>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/harsharyan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/harsharyan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:harsh@example.com"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="pt-8">
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <span>Learn more about me</span>
              <ArrowDown size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero