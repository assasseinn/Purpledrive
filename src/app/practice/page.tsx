'use client'

import { motion } from 'framer-motion'
import { CodeBracketIcon, ChatBubbleLeftRightIcon, PresentationChartLineIcon } from '@heroicons/react/24/outline'

const practiceCategories = [
  {
    title: 'Technical Challenges',
    description: 'Practice coding problems, algorithms, and data structures',
    icon: CodeBracketIcon,
    topics: ['Algorithms', 'Data Structures', 'System Design', 'Database Design'],
  },
  {
    title: 'Behavioral Questions',
    description: 'Master the STAR method and common behavioral scenarios',
    icon: ChatBubbleLeftRightIcon,
    topics: ['Leadership', 'Problem Solving', 'Teamwork', 'Conflict Resolution'],
  },
  {
    title: 'System Design',
    description: 'Learn to design scalable and efficient systems',
    icon: PresentationChartLineIcon,
    topics: ['Architecture', 'Scalability', 'Performance', 'Security'],
  },
]

export default function PracticePage() {
  return (
    <main className="min-h-screen bg-yellow-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Practice <span className="bg-yellow-200 rounded-xl px-3 py-1 text-teal-700">Makes Perfect</span>
          </h1>
          <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
            Choose your focus area and start practicing with our <span className="bg-yellow-100 rounded px-2">curated collection</span> of interview questions and challenges.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="card bg-white border-2 border-yellow-200 hover:border-teal-400 h-full transition-all duration-300 hover:shadow-xl rounded-2xl p-6 flex flex-col items-center text-center">
                <category.icon className="w-12 h-12 text-teal-500 mb-4" />
                <h2 className="font-heading text-2xl font-semibold mb-3 text-neutral-900">{category.title}</h2>
                <p className="text-neutral-700 mb-6">{category.description}</p>
                <div className="space-y-2">
                  {category.topics.map((topic) => (
                    <div
                      key={topic}
                      className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm mr-2 mb-2"
                    >
                      {topic}
                    </div>
                  ))}
                </div>
                <button className="rounded-full bg-yellow-300 hover:bg-yellow-400 text-teal-900 font-bold px-8 py-3 shadow-lg transition text-lg mt-6 w-full">
                  Start Practicing
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-neutral-900 mb-6">
            Track Your <span className="bg-yellow-200 rounded-xl px-3 py-1 text-teal-700">Progress</span>
          </h2>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">0</div>
                <div className="text-neutral-700">Problems Solved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">0</div>
                <div className="text-neutral-700">Mock Interviews</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">0</div>
                <div className="text-neutral-700">Hours Practiced</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
} 