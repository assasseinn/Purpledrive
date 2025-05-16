'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ElevatorPitchPage() {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    experience: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="font-heading text-4xl font-bold text-neutral-900 dark:text-white mb-6">
            Elevator Pitch Coach
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8">
            Create a compelling 30-second introduction that highlights your strengths and aligns with your target role.
          </p>

          <div className="card mb-8">
            <h2 className="font-heading text-2xl font-semibold mb-4">Tips for a Great Elevator Pitch</h2>
            <ul className="space-y-3 text-neutral-600 dark:text-neutral-300">
              <li>• Start with your name and current role</li>
              <li>• Highlight your key strengths and achievements</li>
              <li>• Connect your experience to the target role</li>
              <li>• End with your career goals</li>
              <li>• Keep it concise and engaging</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="input w-full"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label htmlFor="role" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Target Role
              </label>
              <select
                id="role"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="input w-full"
                required
              >
                <option value="">Select a role</option>
                <option value="developer">Developer</option>
                <option value="qa">QA Engineer</option>
                <option value="data">Data Engineer</option>
                <option value="infra">Infrastructure Engineer</option>
                <option value="cybersec">Cybersecurity Engineer</option>
              </select>
            </div>

            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Years of Experience
              </label>
              <select
                id="experience"
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                className="input w-full"
                required
              >
                <option value="">Select experience level</option>
                <option value="0-1">0-1 years</option>
                <option value="1-3">1-3 years</option>
                <option value="3-5">3-5 years</option>
                <option value="5+">5+ years</option>
              </select>
            </div>

            <button type="submit" className="btn-primary w-full">
              Generate Elevator Pitch
            </button>
          </form>

          <div className="mt-12">
            <h2 className="font-heading text-2xl font-semibold mb-4">Example Elevator Pitch</h2>
            <div className="card bg-primary/5 border-primary/20">
              <p className="text-neutral-600 dark:text-neutral-300">
                "Hi, I'm [Name], a passionate software developer with [X] years of experience in building scalable applications. 
                I specialize in [relevant skills] and have successfully delivered projects that [achievement]. 
                I'm excited about the opportunity to bring my expertise in [specific area] to your team and contribute to [company goals]."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
} 