'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const commonQuestions = [
  'Tell me about a time you faced a difficult challenge at work.',
  'Describe a situation where you had to work with a difficult team member.',
  'Share an example of when you had to meet a tight deadline.',
  'Tell me about a time you had to make a difficult decision.',
  'Describe a situation where you had to adapt to change.',
]

export default function StarAnswersPage() {
  const [formData, setFormData] = useState({
    question: '',
    situation: '',
    task: '',
    action: '',
    result: '',
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
            STAR Answer Generator
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8">
            Create compelling answers to behavioral questions using the STAR method: Situation, Task, Action, and Result.
          </p>

          <div className="card mb-8">
            <h2 className="font-heading text-2xl font-semibold mb-4">The STAR Method</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-xl font-semibold mb-2">Situation</h3>
                <p className="text-neutral-600 dark:text-neutral-300">
                  Set the scene and context. What was the challenge or opportunity?
                </p>
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold mb-2">Task</h3>
                <p className="text-neutral-600 dark:text-neutral-300">
                  What was your responsibility or goal in this situation?
                </p>
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold mb-2">Action</h3>
                <p className="text-neutral-600 dark:text-neutral-300">
                  What specific steps did you take? Focus on your contributions.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold mb-2">Result</h3>
                <p className="text-neutral-600 dark:text-neutral-300">
                  What was the outcome? Include quantifiable results if possible.
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="question" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Select a Question
              </label>
              <select
                id="question"
                value={formData.question}
                onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                className="input w-full"
                required
              >
                <option value="">Choose a question</option>
                {commonQuestions.map((question) => (
                  <option key={question} value={question}>
                    {question}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="situation" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Situation
              </label>
              <textarea
                id="situation"
                value={formData.situation}
                onChange={(e) => setFormData({ ...formData, situation: e.target.value })}
                className="input w-full h-32"
                placeholder="Describe the context and challenge..."
                required
              />
            </div>

            <div>
              <label htmlFor="task" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Task
              </label>
              <textarea
                id="task"
                value={formData.task}
                onChange={(e) => setFormData({ ...formData, task: e.target.value })}
                className="input w-full h-32"
                placeholder="What was your responsibility or goal?"
                required
              />
            </div>

            <div>
              <label htmlFor="action" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Action
              </label>
              <textarea
                id="action"
                value={formData.action}
                onChange={(e) => setFormData({ ...formData, action: e.target.value })}
                className="input w-full h-32"
                placeholder="What specific steps did you take?"
                required
              />
            </div>

            <div>
              <label htmlFor="result" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Result
              </label>
              <textarea
                id="result"
                value={formData.result}
                onChange={(e) => setFormData({ ...formData, result: e.target.value })}
                className="input w-full h-32"
                placeholder="What was the outcome? Include measurable results if possible."
                required
              />
            </div>

            <button type="submit" className="btn-primary w-full">
              Generate Answer
            </button>
          </form>

          <div className="mt-12">
            <h2 className="font-heading text-2xl font-semibold mb-4">Example STAR Answer</h2>
            <div className="card bg-primary/5 border-primary/20">
              <p className="text-neutral-600 dark:text-neutral-300">
                "In my previous role, our team was struggling with a critical project deadline (Situation). 
                I was responsible for coordinating the development team and ensuring timely delivery (Task). 
                I implemented a daily stand-up meeting, created a detailed project timeline, and established clear communication channels (Action). 
                As a result, we delivered the project two weeks ahead of schedule and received positive feedback from stakeholders (Result)."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
} 