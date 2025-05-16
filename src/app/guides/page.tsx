'use client'

import { motion } from 'framer-motion'
import { BookOpenIcon, AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/outline'

const guides = [
  {
    title: 'Interview Preparation Roadmap',
    description: 'A comprehensive guide to prepare for technical interviews',
    icon: BookOpenIcon,
    sections: [
      'Understanding the Interview Process',
      'Essential Data Structures',
      'Common Algorithms',
      'System Design Fundamentals',
    ],
  },
  {
    title: 'Behavioral Interview Guide',
    description: 'Master the art of answering behavioral questions',
    icon: AcademicCapIcon,
    sections: [
      'STAR Method Explained',
      'Common Behavioral Questions',
      'Leadership Scenarios',
      'Problem-Solving Examples',
    ],
  },
  {
    title: 'Company-Specific Guides',
    description: 'Tailored preparation for top tech companies',
    icon: BriefcaseIcon,
    sections: [
      'Google Interview Process',
      'Amazon Leadership Principles',
      'Microsoft Technical Focus',
      'Meta System Design',
    ],
  },
]

export default function GuidesPage() {
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
            Interview <span className="bg-yellow-200 rounded-xl px-3 py-1 text-teal-700">Preparation Guides</span>
          </h1>
          <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
            Comprehensive guides to help you prepare for <span className="bg-yellow-100 rounded px-2">technical and behavioral interviews</span>.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide, index) => (
            <motion.div
              key={guide.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="card bg-white border-2 border-yellow-200 hover:border-teal-400 h-full transition-all duration-300 hover:shadow-xl rounded-2xl p-6 flex flex-col items-center text-center">
                <guide.icon className="w-12 h-12 text-teal-500 mb-4" />
                <h2 className="font-heading text-2xl font-semibold mb-3 text-neutral-900">{guide.title}</h2>
                <p className="text-neutral-700 mb-6">{guide.description}</p>
                <ul className="space-y-3 mb-6">
                  {guide.sections.map((section) => (
                    <li key={section} className="flex items-center text-neutral-700">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                      {section}
                    </li>
                  ))}
                </ul>
                <button className="rounded-full bg-yellow-300 hover:bg-yellow-400 text-teal-900 font-bold px-8 py-3 shadow-lg transition text-lg w-full">
                  Read Guide
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 bg-yellow-200 rounded-2xl p-8"
        >
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold text-neutral-900 mb-4">
              Need <span className="bg-white rounded-xl px-3 py-1 text-teal-700">Personalized Guidance?</span>
            </h2>
            <p className="text-lg text-neutral-800 mb-6">
              Join our community to get feedback and tips from experienced developers.
            </p>
            <button className="rounded-full bg-teal-400 hover:bg-teal-500 text-white font-bold px-8 py-3 shadow-lg transition text-lg">
              Join Community
            </button>
          </div>
        </motion.div>
      </div>
    </main>
  )
} 