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
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-neutral-900 mb-4">
              PurpleDrive <span className="bg-yellow-200 rounded-xl px-3 py-1 text-teal-700">India's #1 AI Interview Coach for Tech Jobs</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6">
              Land Your Dream IT Job. <span className="bg-white rounded px-2">Faster. Smarter. Stronger.</span>
            </h2>
            <p className="text-xl text-neutral-800 mb-8 max-w-xl mx-auto md:mx-0">
              From freshers to seasoned pros, PurpleDrive gives you everything you need to ace technical, behavioral, and HR interviews — with role-specific mock interviews, instant AI feedback, and real-time simulations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/practice" className="rounded-full bg-yellow-300 hover:bg-yellow-400 text-teal-900 font-bold px-8 py-3 shadow-lg transition text-lg">
                Get Started Free
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why PurpleDrive Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Why <span className="bg-yellow-200 rounded-xl px-3 py-1 text-teal-700">PurpleDrive?</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              <div className="card bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6 flex flex-col items-center text-center">
                <p className="font-bold">20,000+ curated questions</p>
              </div>
              <div className="card bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6 flex flex-col items-center text-center">
                <p className="font-bold">Role & company-specific interview paths</p>
              </div>
              <div className="card bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6 flex flex-col items-center text-center">
               
                <p className="font-bold">Smart feedback on your speech, delivery, and body language</p>
              </div>
              <div className="card bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6 flex flex-col items-center text-center">
                
                <p className="font-bold">Prepare from real job listings on Naukri, LinkedIn, and more</p>
              </div>
            </div>
            <div className="mt-8 text-xl text-neutral-700 font-semibold">
              🎯 "Get 4x more interview call-backs with just 2 weeks of practice."
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3 Steps Section */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
              🎬 Start Interview Prep in <span className="bg-yellow-200 rounded-xl px-3 py-1 text-teal-700">3 Simple Steps</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card bg-white border-2 border-yellow-200 rounded-2xl p-6 flex flex-col items-center text-center">
                <span className="font-bold text-2xl mb-2">1.</span>
                <h3 className="font-heading text-xl font-semibold mb-2">Choose Your Role or Job Posting</h3>
                <p className="text-neutral-700">Select your path: Developer, QA, Data, Infra, CyberSec, and more — or paste any job description from LinkedIn/Naukri to generate tailor-made interview questions.</p>
              </div>
              <div className="card bg-white border-2 border-yellow-200 rounded-2xl p-6 flex flex-col items-center text-center">
                <span className="font-bold text-2xl mb-2">2.</span>
                <h3 className="font-heading text-xl font-semibold mb-2">Simulate the Real Interview</h3>
                <p className="text-neutral-700">Practice with realistic timed interviews — video, audio, and coding environments — built to match top company hiring rounds.</p>
              </div>
              <div className="card bg-white border-2 border-yellow-200 rounded-2xl p-6 flex flex-col items-center text-center">
                <span className="font-bold text-2xl mb-2">3.</span>
                <h3 className="font-heading text-xl font-semibold mb-2">Get Instant AI Feedback</h3>
                <p className="text-neutral-700">Our AI coach reviews your responses across content, tone, clarity, confidence, and delivery — and tells you exactly how to improve.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Role-Specific Tracks Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
              👨‍💻 Role-Specific Tracks <span className="bg-yellow-200 rounded-xl px-3 py-1 text-teal-700">Curated by Experts</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="card bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6 flex flex-col items-center text-center">
                <h3 className="font-heading text-lg font-semibold mb-2">Software Developer</h3>
                <p className="text-neutral-700">Data Structures, Algorithms, System Design, DBMS, Coding rounds</p>
              </div>
              <div className="card bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6 flex flex-col items-center text-center">
                <h3 className="font-heading text-lg font-semibold mb-2">QA Engineer</h3>
                <p className="text-neutral-700">Manual & Automation Testing, Test Cases, Selenium, JIRA</p>
              </div>
              <div className="card bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6 flex flex-col items-center text-center">
                <h3 className="font-heading text-lg font-semibold mb-2">Data Roles</h3>
                <p className="text-neutral-700">SQL, ETL, Data Analysis, Statistics, Visualization, ML basics</p>
              </div>
              <div className="card bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6 flex flex-col items-center text-center">
                <h3 className="font-heading text-lg font-semibold mb-2">DevOps & Infra</h3>
                <p className="text-neutral-700">CI/CD, Docker, Linux, Networking, Cloud Infrastructure (AWS/Azure)</p>
              </div>
              <div className="card bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6 flex flex-col items-center text-center">
                <h3 className="font-heading text-lg font-semibold mb-2">Cybersecurity</h3>
                <p className="text-neutral-700">Risk Analysis, Vulnerability Assessment, Network Security, OWASP</p>
              </div>
            </div>
            <div className="mt-8 text-lg text-neutral-700 font-semibold">
              📌 Get ready for the exact rounds you'll face at TCS, Infosys, Wipro, HCL, Capgemini, Accenture, and more.
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Feedback Section */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
               Personalized <span className="bg-yellow-200 rounded-xl px-3 py-1 text-teal-700">AI Feedback</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="card bg-white border-2 border-yellow-200 rounded-2xl p-6 flex flex-col items-center text-center">
                <p className="text-neutral-700">Content accuracy & clarity</p>
              </div>
              <div className="card bg-white border-2 border-yellow-200 rounded-2xl p-6 flex flex-col items-center text-center">
                <p className="text-neutral-700">Confidence scoring</p>
              </div>
              <div className="card bg-white border-2 border-yellow-200 rounded-2xl p-6 flex flex-col items-center text-center">
                <p className="text-neutral-700">Tone modulation & pace</p>
              </div>
              <div className="card bg-white border-2 border-yellow-200 rounded-2xl p-6 flex flex-col items-center text-center">
                <p className="text-neutral-700">Filler word reduction</p>
              </div>
              <div className="card bg-white border-2 border-yellow-200 rounded-2xl p-6 flex flex-col items-center text-center">
                <p className="text-neutral-700">Vocabulary enhancement</p>
              </div>
            </div>
            <div className="mt-8 text-lg text-neutral-700 font-semibold">
              ✨ Every attempt gives you actionable, personalized tips — not generic advice.
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
               <span className="bg-yellow-200 rounded-xl px-3 py-1 text-teal-700">Unlock Advanced Features</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              <div className="card bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6 flex flex-col items-center text-center">
                <h3 className="font-heading text-lg font-semibold mb-2">Free Plan</h3>
                <ul className="text-neutral-700 list-disc list-inside">
                  <li>Unlimited role-based mock interviews</li>
                  <li>Basic AI feedback</li>
                  <li>Resume building tools</li>
                </ul>
              </div>
              <div className="card bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6 flex flex-col items-center text-center">
                <h3 className="font-heading text-lg font-semibold mb-2">Pro Features</h3>
                <ul className="text-neutral-700 list-disc list-inside">
                  <li>Interview generation from any job post</li>
                  <li>Chrome Extension for LinkedIn/Naukri</li>
                  <li>Detailed performance analytics</li>
                  <li>Multi-language support (EN, HI, TE, TA coming soon)</li>
                  <li>Soft skill drills & Elevator pitch builder</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Job Description Integration Section */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
              Powered by <span className="bg-yellow-200 rounded-xl px-3 py-1 text-teal-700">Real Job Descriptions</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card bg-white border-2 border-yellow-200 rounded-2xl p-6 flex flex-col items-center text-center">
                <p className="text-neutral-700">Find any job on Naukri or LinkedIn</p>
              </div>
              <div className="card bg-white border-2 border-yellow-200 rounded-2xl p-6 flex flex-col items-center text-center">
                <p className="text-neutral-700">Click the PurpleDrive extension</p>
              </div>
              <div className="card bg-white border-2 border-yellow-200 rounded-2xl p-6 flex flex-col items-center text-center">
                <p className="text-neutral-700">Auto-generate mock questions from the JD</p>
              </div>
              <div className="card bg-white border-2 border-yellow-200 rounded-2xl p-6 flex flex-col items-center text-center">
                <p className="text-neutral-700">Practice and get real-time AI feedback</p>
              </div>
            </div>
            <div className="mt-8 text-lg text-neutral-700 font-semibold">
              💡 Bonus: Our system tracks patterns in your answers and shows long-term progress.
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
              <span className="bg-yellow-200 rounded-xl px-3 py-1 text-teal-700">Success Stories</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6 flex flex-col items-center text-center">
                <p className="text-neutral-700 italic">"I cracked my Infosys role after 3 weeks of daily practice. The AI feedback was scary accurate!"</p>
                <span className="mt-4 font-bold text-teal-700">— Sneha R., Software Engineer</span>
              </div>
              <div className="card bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6 flex flex-col items-center text-center">
                <p className="text-neutral-700 italic">"It mimicked my TCS interview so closely I felt like I'd already been there."</p>
                <span className="mt-4 font-bold text-teal-700">— Amit M., QA Analyst</span>
              </div>
              <div className="card bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-6 flex flex-col items-center text-center">
                <p className="text-neutral-700 italic">"PurpleDrive helped me reduce my 'umms' and speak more confidently. It made a huge difference in HR rounds."</p>
                <span className="mt-4 font-bold text-teal-700">— Vinay S., DevOps Engineer</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Practice Anytime Section */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
              💻 Practice <span className="bg-yellow-200 rounded-xl px-3 py-1 text-teal-700">Anytime. Anywhere.</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card bg-white border-2 border-yellow-200 rounded-2xl p-6 flex flex-col items-center text-center">
                <p className="text-neutral-700">Web app: Access from your laptop</p>
              </div>
              <div className="card bg-white border-2 border-yellow-200 rounded-2xl p-6 flex flex-col items-center text-center">
                <p className="text-neutral-700">Mobile: iOS & Android apps coming soon</p>
              </div>
              <div className="card bg-white border-2 border-yellow-200 rounded-2xl p-6 flex flex-col items-center text-center">
                <p className="text-neutral-700">Languages: English (Hindi, Telugu, Tamil coming soon)</p>
              </div>
            </div>
            <div className="mt-8 text-lg text-neutral-700 font-semibold">
              Practice on your schedule — morning, lunch break, or midnight. The AI coach is always ready.
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-teal-400">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              ✨ Join Thousands Already on PurpleDrive
            </h2>
            <p className="text-xl text-white mb-8">
              100,000+ mock interviews completed<br />
              4.9/5 average feedback score<br />
              Users from 300+ colleges and 50+ IT companies
            </p>
            <Link href="/practice" className="rounded-full bg-yellow-300 hover:bg-yellow-400 text-teal-900 font-bold px-10 py-4 shadow-lg transition text-2xl">
              Start Your Interview Journey Now →
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 