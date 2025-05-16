'use client'

import { motion } from 'framer-motion'
import { DocumentTextIcon, ClipboardDocumentCheckIcon, CloudArrowDownIcon } from '@heroicons/react/24/outline'

const resources = [
  {
    title: 'Interview Checklist',
    description: 'A step-by-step checklist to help you prepare for your next interview.',
    icon: ClipboardDocumentCheckIcon,
    link: '#',
    cta: 'Download PDF',
  },
  {
    title: 'Coding Guide',
    description: 'Essential coding concepts and sample problems for technical interviews.',
    icon: DocumentTextIcon,
    link: '#',
    cta: 'Download Guide',
  },
  {
    title: 'System Design Templates',
    description: 'Reusable templates for structuring your system design answers.',
    icon: CloudArrowDownIcon,
    link: '#',
    cta: 'Download Templates',
  },
]

export default function ResourcesPage() {
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
            Resource <span className="bg-yellow-200 rounded-xl px-3 py-1 text-teal-700">Hub</span>
          </h1>
          <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
            Download <span className="bg-yellow-100 rounded px-2">checklists, guides, and templates</span> to help you ace your interview preparation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="card bg-white border-2 border-yellow-200 hover:border-teal-400 h-full transition-all duration-300 hover:shadow-xl rounded-2xl p-6 flex flex-col items-center text-center">
                <resource.icon className="w-12 h-12 text-teal-500 mb-4" />
                <h2 className="font-heading text-2xl font-semibold mb-3 text-neutral-900">{resource.title}</h2>
                <p className="text-neutral-700 mb-6">{resource.description}</p>
                <a href={resource.link} className="rounded-full bg-yellow-300 hover:bg-yellow-400 text-teal-900 font-bold px-8 py-3 shadow-lg transition text-lg mt-6 w-full block">
                  {resource.cta}
                </a>
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
              Have a <span className="bg-white rounded-xl px-3 py-1 text-teal-700">Resource to Share?</span>
            </h2>
            <p className="text-lg text-neutral-800 mb-6">
              Contribute your own checklists, guides, or templates to help the community!
            </p>
            <button className="rounded-full bg-teal-400 hover:bg-teal-500 text-white font-bold px-8 py-3 shadow-lg transition text-lg">
              Submit a Resource
            </button>
          </div>
        </motion.div>
      </div>
    </main>
  )
} 