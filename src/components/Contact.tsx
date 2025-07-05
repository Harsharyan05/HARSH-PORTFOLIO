import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate form submission - in a real application, this would send to a backend
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // For now, we'll just show success message
      // In a real app, replace this with actual email sending logic
      console.log('Form submitted:', formData)
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="section-container section-padding">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Have a project in mind? Let's work together to create something amazing.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
            <p className="text-gray-300 mb-8">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology and innovation.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-lg bg-blue-600/20">
                <Mail className="text-blue-400" size={24} />
              </div>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-300">harsh.aryan.dev@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-lg bg-green-600/20">
                <Phone className="text-green-400" size={24} />
              </div>
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-gray-300">+91 12345 67890</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-lg bg-purple-600/20">
                <MapPin className="text-purple-400" size={24} />
              </div>
              <div>
                <p className="font-medium">Location</p>
                <p className="text-gray-300">Chennai, Tamil Nadu, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-800/50 rounded-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 text-white resize-none"
                placeholder="Tell me about your project or just say hello!"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              <Send size={18} />
            </button>

            {submitStatus === 'success' && (
              <div className="mt-4 p-4 bg-green-600/20 border border-green-600/30 rounded-lg">
                <p className="text-green-400 text-sm">
                  Thank you for your message! I'll get back to you soon.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mt-4 p-4 bg-red-600/20 border border-red-600/30 rounded-lg">
                <p className="text-red-400 text-sm">
                  Sorry, there was an error sending your message. Please try again or contact me directly.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-gray-800 text-center">
        <p className="text-gray-400">
          © 2024 Harsh Aryan. Built with React, TypeScript, and Tailwind CSS.
        </p>
      </div>
    </section>
  )
}

export default Contact