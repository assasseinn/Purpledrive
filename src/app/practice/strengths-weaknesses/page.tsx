'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const commonStrengths = [
  'Problem Solving',
  'Communication',
  'Teamwork',
  'Adaptability',
  'Technical Skills',
  'Leadership',
  'Time Management',
  'Attention to Detail',
  'Creativity',
  'Analytical Thinking',
]

const skillBasedWeaknesses = [
  'Public Speaking',
  'Project Management',
  'Advanced Technical Skills',
  'Data Analysis',
  'System Design',
  'Cloud Technologies',
  'Agile Methodologies',
  'UI/UX Design',
  'DevOps',
  'Machine Learning',
]

export default function StrengthsWeaknessesPage() {
  const [selectedStrengths, setSelectedStrengths] = useState<string[]>([])
  const [selectedWeaknesses, setSelectedWeaknesses] = useState<string[]>([])
  const [improvementPlan, setImprovementPlan] = useState('')

  const handleStrengthToggle = (strength: string) => {
    setSelectedStrengths(prev =>
      prev.includes(strength)
        ? prev.filter(s => s !== strength)
        : [...prev, strength]
    )
  }

  const handleWeaknessToggle = (weakness: string) => {
    setSelectedWeaknesses(prev =>
      prev.includes(weakness)
        ? prev.filter(w => w !== weakness)
        : [...prev, weakness]
    )
  }

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
            Strengths & Weaknesses Planner
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8">
            Select your key strengths and skill-based weaknesses to create a balanced self-assessment.
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <h2 className="font-heading text-2xl font-semibold mb-4">Your Strengths</h2>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Select 3-5 key strengths that best represent your capabilities.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {commonStrengths.map((strength) => (
                  <button
                    key={strength}
                    type="button"
                    onClick={() => handleStrengthToggle(strength)}
                    className={`p-3 rounded-lg text-left transition-colors ${
                      selectedStrengths.includes(strength)
                        ? 'bg-primary text-white'
                        : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-primary/10'
                    }`}
                  >
                    {strength}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-semibold mb-4">Skill-Based Weaknesses</h2>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Select 1-2 areas for improvement that are skill-based, not personality traits.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {skillBasedWeaknesses.map((weakness) => (
                  <button
                    key={weakness}
                    type="button"
                    onClick={() => handleWeaknessToggle(weakness)}
                    className={`p-3 rounded-lg text-left transition-colors ${
                      selectedWeaknesses.includes(weakness)
                        ? 'bg-secondary text-white'
                        : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-secondary/10'
                    }`}
                  >
                    {weakness}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="improvementPlan" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Improvement Plan
              </label>
              <textarea
                id="improvementPlan"
                value={improvementPlan}
                onChange={(e) => setImprovementPlan(e.target.value)}
                className="input w-full h-32"
                placeholder="Describe how you're working to improve your selected areas..."
                required
              />
            </div>

            <button type="submit" className="btn-primary w-full">
              Generate Response
            </button>
          </form>

          <div className="mt-12">
            <h2 className="font-heading text-2xl font-semibold mb-4">Tips for Discussing Weaknesses</h2>
            <div className="card bg-primary/5 border-primary/20">
              <ul className="space-y-3 text-neutral-600 dark:text-neutral-300">
                <li>• Focus on skill-based areas, not personality traits</li>
                <li>• Show self-awareness and growth mindset</li>
                <li>• Provide specific examples of improvement</li>
                <li>• Connect weaknesses to learning opportunities</li>
                <li>• Demonstrate proactive steps taken to improve</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
} 