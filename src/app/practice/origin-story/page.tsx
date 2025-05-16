'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function OriginStoryPage() {
  const [formData, setFormData] = useState({
    success: '',
    strength: '',
    situation: '',
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
            Origin Story Builder
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8">
            Create a compelling origin story using the 3S Method: Success, Strength, and Situation.
          </p>

          <div className="card mb-8">
            <h2 className="font-heading text-2xl font-semibold mb-4">The 3S Method Explained</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-xl font-semibold mb-2">Success</h3>
                <p className="text-neutral-600 dark:text-neutral-300">
                  Share a specific achievement or milestone that demonstrates your capabilities.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold mb-2">Strength</h3>
                <p className="text-neutral-600 dark:text-neutral-300">
                  Identify the key strength or skill that helped you achieve this success.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold mb-2">Situation</h3>
                <p className="text-neutral-600 dark:text-neutral-300">
                  Describe the context or challenge that led to this achievement.
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="situation" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Situation
              </label>
              <textarea
                id="situation"
                value={formData.situation}
                onChange={(e) => setFormData({ ...formData, situation: e.target.value })}
                className="input w-full h-32"
                placeholder="Describe the context or challenge you faced..."
                required
              />
            </div>

            <div>
              <label htmlFor="strength" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Strength
              </label>
              <textarea
                id="strength"
                value={formData.strength}
                onChange={(e) => setFormData({ ...formData, strength: e.target.value })}
                className="input w-full h-32"
                placeholder="What strength or skill did you use to overcome this challenge?"
                required
              />
            </div>

            <div>
              <label htmlFor="success" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Success
              </label>
              <textarea
                id="success"
                value={formData.success}
                onChange={(e) => setFormData({ ...formData, success: e.target.value })}
                className="input w-full h-32"
                placeholder="What was the outcome or achievement?"
                required
              />
            </div>

            <button type="submit" className="btn-primary w-full">
              Generate Story
            </button>
          </form>

          <div className="mt-12">
            <h2 className="font-heading text-2xl font-semibold mb-4">Example Story</h2>
            <div className="card bg-primary/5 border-primary/20">
              <p className="text-neutral-600 dark:text-neutral-300">
                "When I joined my previous team, we were struggling with a critical project deadline. 
                My analytical skills and attention to detail helped me identify bottlenecks in our process. 
                By implementing a new workflow, we not only met the deadline but also improved our team's efficiency by 40%."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
} 