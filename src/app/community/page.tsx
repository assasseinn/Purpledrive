'use client'

import { motion } from 'framer-motion'
import { UserGroupIcon, ChatBubbleLeftRightIcon, VideoCameraIcon } from '@heroicons/react/24/outline'

const communityFeatures = [
  {
    title: 'Discussion Forums',
    description: 'Join topic-specific discussions and get help from the community',
    icon: ChatBubbleLeftRightIcon,
    topics: ['Technical Questions', 'Interview Experiences', 'Career Advice', 'Study Groups'],
  },
  {
    title: 'Peer Practice',
    description: 'Find study partners and practice interviews together',
    icon: UserGroupIcon,
    features: ['Mock Interviews', 'Code Reviews', 'System Design Practice', 'Behavioral Prep'],
  },
  {
    title: 'Live Sessions',
    description: 'Participate in live coding sessions and workshops',
    icon: VideoCameraIcon,
    features: ['Weekly Coding Challenges', 'Expert Q&A', 'Interview Tips', 'Success Stories'],
  },
]

export default function CommunityPage() {
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
            Join Our <span className="bg-yellow-200 rounded-xl px-3 py-1 text-teal-700">Community</span>
          </h1>
          <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
            Connect with fellow developers, share experiences, and <span className="bg-yellow-100 rounded px-2">grow together</span>.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="card bg-white border-2 border-yellow-200 hover:border-teal-400 h-full transition-all duration-300 hover:shadow-xl rounded-2xl p-6 flex flex-col items-center text-center">
                <feature.icon className="w-12 h-12 text-teal-500 mb-4" />
                <h2 className="font-heading text-2xl font-semibold mb-3 text-neutral-900">{feature.title}</h2>
                <p className="text-neutral-700 mb-6">{feature.description}</p>
                <div className="space-y-2">
                  {(feature.topics || feature.features).map((item) => (
                    <div
                      key={item}
                      className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm mr-2 mb-2"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <button className="rounded-full bg-yellow-300 hover:bg-yellow-400 text-teal-900 font-bold px-8 py-3 shadow-lg transition text-lg mt-6 w-full">
                  Get Started
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
            Community <span className="bg-yellow-200 rounded-xl px-3 py-1 text-teal-700">Guidelines</span>
          </h2>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <ul className="space-y-3 text-neutral-700">
              <li>• Be respectful and supportive</li>
              <li>• Stay on topic and keep discussions focused</li>
              <li>• Share resources and help others grow</li>
              <li>• No spam or self-promotion</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </main>
  )
} 