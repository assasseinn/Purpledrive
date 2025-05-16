'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const communicationTips = [
  {
    title: 'Body Language',
    tips: [
      'Maintain good posture',
      'Make appropriate eye contact',
      'Use natural hand gestures',
      'Smile genuinely',
      'Nod to show understanding',
    ],
  },
  {
    title: 'Voice & Tone',
    tips: [
      'Speak clearly and at a moderate pace',
      'Vary your tone to show enthusiasm',
      'Use appropriate volume',
      'Pause for emphasis',
      'Avoid filler words',
    ],
  },
  {
    title: 'Active Listening',
    tips: [
      'Focus on the interviewer',
      'Ask clarifying questions',
      'Paraphrase to confirm understanding',
      'Show interest through body language',
      'Take notes if appropriate',
    ],
  },
]

const rapportBuilding = [
  {
    title: 'Before the Interview',
    tips: [
      'Research the company and role',
      'Prepare thoughtful questions',
      'Practice your introduction',
      'Plan your route and timing',
      'Dress appropriately',
    ],
  },
  {
    title: 'During the Interview',
    tips: [
      'Find common ground',
      'Share relevant experiences',
      'Show enthusiasm for the role',
      'Be authentic and genuine',
      'Express gratitude for the opportunity',
    ],
  },
  {
    title: 'After the Interview',
    tips: [
      'Send a thank-you note',
      'Follow up professionally',
      'Reflect on the experience',
      'Prepare for next steps',
      'Stay positive and patient',
    ],
  },
]

export default function BehavioralToolkitPage() {
  const [activeTab, setActiveTab] = useState('communication')

  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="font-heading text-4xl font-bold text-neutral-900 dark:text-white mb-6">
            Behavioral Toolkit
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8">
            Master the art of communication and build rapport during your interview.
          </p>

          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setActiveTab('communication')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'communication'
                  ? 'bg-primary text-white'
                  : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-primary/10'
              }`}
            >
              Communication Skills
            </button>
            <button
              onClick={() => setActiveTab('rapport')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'rapport'
                  ? 'bg-primary text-white'
                  : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-primary/10'
              }`}
            >
              Rapport Building
            </button>
          </div>

          {activeTab === 'communication' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-3 gap-6"
            >
              {communicationTips.map((section) => (
                <div key={section.title} className="card">
                  <h2 className="font-heading text-xl font-semibold mb-4">{section.title}</h2>
                  <ul className="space-y-3">
                    {section.tips.map((tip) => (
                      <li key={tip} className="flex items-start gap-2 text-neutral-600 dark:text-neutral-300">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'rapport' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-3 gap-6"
            >
              {rapportBuilding.map((section) => (
                <div key={section.title} className="card">
                  <h2 className="font-heading text-xl font-semibold mb-4">{section.title}</h2>
                  <ul className="space-y-3">
                    {section.tips.map((tip) => (
                      <li key={tip} className="flex items-start gap-2 text-neutral-600 dark:text-neutral-300">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          )}

          <div className="mt-12">
            <h2 className="font-heading text-2xl font-semibold mb-4">Practice Makes Perfect</h2>
            <div className="card bg-primary/5 border-primary/20">
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Record yourself practicing these techniques and review your performance. Focus on:
              </p>
              <ul className="space-y-3 text-neutral-600 dark:text-neutral-300">
                <li>• Body language and posture</li>
                <li>• Voice clarity and tone</li>
                <li>• Eye contact and facial expressions</li>
                <li>• Response timing and flow</li>
                <li>• Overall confidence and presence</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
} 