import { GraduationCap, Code, Zap } from 'lucide-react'

const About = () => {
  return (
    <section className="section-container section-padding bg-gray-800/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Electronics & Communication Engineering student at SRM Institute of Science and Technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate tech enthusiast and web developer currently pursuing my degree in 
              Electronics & Communication Engineering at SRM Institute of Science and Technology. 
              I love creating innovative digital solutions and exploring the latest technologies.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey in technology spans web development, electronics, and everything in between. 
              I'm always eager to learn new skills and take on challenging projects that push the 
              boundaries of what's possible.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-lg bg-blue-600/20">
                <GraduationCap className="text-blue-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p className="text-gray-300">B.Tech in Electronics & Communication Engineering</p>
                <p className="text-gray-400">SRM Institute of Science and Technology</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-lg bg-purple-600/20">
                <Code className="text-purple-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Development</h3>
                <p className="text-gray-300">Full-Stack Web Development</p>
                <p className="text-gray-400">React, TypeScript, Node.js, and more</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-lg bg-green-600/20">
                <Zap className="text-green-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Passion</h3>
                <p className="text-gray-300">Technology Innovation</p>
                <p className="text-gray-400">Creating solutions that make a difference</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About