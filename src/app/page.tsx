'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  UserCircleIcon,
  BookOpenIcon,
  ChartBarIcon,
  StarIcon,
  QuestionMarkCircleIcon,
  UserGroupIcon,
  VideoCameraIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    title: 'Elevator Pitch Coach',
    description: 'Craft your perfect 30-second introduction that highlights your technical expertise and career goals.',
    icon: UserCircleIcon,
    href: '/practice/elevator-pitch',
  },
  {
    title: 'Origin Story Builder',
    description: 'Create compelling stories about your tech journey using the 3S Method (Success, Strength, Situation).',
    icon: BookOpenIcon,
    href: '/practice/origin-story',
  },
  {
    title: 'Strengths & Weaknesses Planner',
    description: 'Learn how to present your technical strengths and address skill gaps effectively.',
    icon: ChartBarIcon,
    href: '/practice/strengths-weaknesses',
  },
  {
    title: 'STAR Answer Generator',
    description: 'Master the Situation-Task-Action-Result format for technical and behavioral questions.',
    icon: StarIcon,
    href: '/practice/star-answers',
  },
  {
    title: 'Role-Specific Questions',
    description: 'Access curated questions and answers for Developer, QA, Data, Infrastructure, and Security roles.',
    icon: QuestionMarkCircleIcon,
    href: '/practice/role-specific',
  },
  {
    title: 'Behavioral Toolkit',
    description: 'Master technical communication, problem-solving presentation, and team collaboration skills.',
    icon: UserGroupIcon,
    href: '/practice/behavioral-toolkit',
  },
  {
    title: 'Mock Interview Practice',
    description: 'Practice with timed technical and behavioral questions in a realistic interview setting.',
    icon: VideoCameraIcon,
    href: '/practice/mock-interview',
  },
  {
    title: 'Resource Hub',
    description: 'Download technical checklists, coding guides, and pre-interview preparation materials.',
    icon: DocumentTextIcon,
    href: '/resources',
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-yellow-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-teal-400">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          {/* Illustration Placeholder */}
          <div className="hidden md:block flex-1">
            <div className="w-full h-64 flex items-center justify-center">
              {/* Replace with SVG or illustration */}
              <div className="rounded-full bg-yellow-200 w-48 h-48 flex items-center justify-center shadow-lg">
                <span className="text-6xl">💡</span>
              </div>
            </div>
          </div>
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left flex-1"
          >
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-neutral-900 mb-6">
              Ace Your Next <span className="inline-block bg-yellow-200 rounded-xl px-3 py-1 text-teal-700">IT Interview</span>
            </h1>
            <p className="text-xl text-neutral-800 mb-8 max-w-xl mx-auto md:mx-0">
              Your all-in-one toolkit for interview success — from <span className="bg-white rounded px-2">elevator pitches</span> to <span className="bg-white rounded px-2">mock interviews</span>, role-specific questions, and behavioral prep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/practice" className="rounded-full bg-yellow-300 hover:bg-yellow-400 text-teal-900 font-bold px-8 py-3 shadow-lg transition text-lg">
                Start Practicing
              </Link>
              <Link href="/guides" className="rounded-full border-2 border-yellow-300 text-yellow-900 font-bold px-8 py-3 bg-white hover:bg-yellow-100 transition text-lg">
                View Guides
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Everything You Need to <span className="bg-yellow-200 rounded-xl px-3 py-1 text-teal-700">Succeed</span>
            </h2>
            <p className="text-lg text-neutral-700">
              Level up your interview game with expert-crafted tools and resources — <span className="bg-yellow-100 rounded px-2">completely free</span>.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={feature.href} className="block">
                  <div className="card bg-yellow-50 border-2 border-yellow-200 hover:border-teal-400 h-full transition-all duration-300 hover:shadow-xl rounded-2xl p-6 flex flex-col items-center text-center">
                    <feature.icon className="w-12 h-12 text-teal-500 mb-4" />
                    <h3 className="font-heading text-xl font-semibold mb-2 text-neutral-900">{feature.title}</h3>
                    <p className="text-neutral-700">{feature.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-yellow-200">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              {/* Community illustration placeholder */}
              <div className="rounded-full bg-white w-24 h-24 flex items-center justify-center shadow-lg">
                <span className="text-4xl">🤝</span>
              </div>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Join Our <span className="bg-white rounded-xl px-3 py-1 text-teal-700">Tech Community</span>
            </h2>
            <p className="text-lg text-neutral-800 mb-8">
              Connect with fellow developers, share interview experiences, and get support from the community.
            </p>
            <Link href="/community" className="rounded-full bg-teal-400 hover:bg-teal-500 text-white font-bold px-8 py-3 shadow-lg transition text-lg">
              Join Community
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 