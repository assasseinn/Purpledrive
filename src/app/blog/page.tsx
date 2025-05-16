'use client'

import { motion } from 'framer-motion'
import { CalendarIcon, UserIcon, ClockIcon } from '@heroicons/react/24/outline'

const blogPosts = [
  {
    title: 'How to Ace Your Technical Interview: A Complete Guide',
    excerpt: 'Learn the essential strategies and techniques to succeed in technical interviews, from preparation to execution.',
    author: 'Sarah Chen',
    date: 'March 15, 2024',
    readTime: '10 min read',
    category: 'Interview Tips',
  },
  {
    title: 'Mastering System Design Interviews: A Step-by-Step Approach',
    excerpt: 'A comprehensive guide to tackling system design questions, with real-world examples and best practices.',
    author: 'Michael Rodriguez',
    date: 'March 12, 2024',
    readTime: '15 min read',
    category: 'System Design',
  },
  {
    title: 'Behavioral Interview Questions: How to Use the STAR Method Effectively',
    excerpt: 'Learn how to structure your responses using the STAR method and impress your interviewers.',
    author: 'Emily Thompson',
    date: 'March 10, 2024',
    readTime: '8 min read',
    category: 'Behavioral',
  },
  {
    title: 'Top 10 Data Structures Every Developer Should Know',
    excerpt: 'Essential data structures and their applications in technical interviews and real-world scenarios.',
    author: 'David Kim',
    date: 'March 8, 2024',
    readTime: '12 min read',
    category: 'Data Structures',
  },
]

export default function BlogPage() {
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
            Interview <span className="bg-yellow-200 rounded-xl px-3 py-1 text-teal-700">Preparation Blog</span>
          </h1>
          <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
            Expert insights, tips, and strategies to help you prepare for your <span className="bg-yellow-100 rounded px-2">next interview</span>.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="card bg-white border-2 border-yellow-200 hover:border-teal-400 h-full transition-all duration-300 hover:shadow-xl rounded-2xl p-6 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </span>
                </div>
                <h2 className="font-heading text-2xl font-semibold mb-3 text-neutral-900">{post.title}</h2>
                <p className="text-neutral-700 mb-6">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-neutral-500">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <UserIcon className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <CalendarIcon className="w-4 h-4" />
                      {post.date}
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <ClockIcon className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
                <button className="rounded-full bg-yellow-300 hover:bg-yellow-400 text-teal-900 font-bold px-8 py-3 shadow-lg transition text-lg mt-6 w-full">
                  Read Article
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-neutral-900 mb-6">
            Stay <span className="bg-yellow-200 rounded-xl px-3 py-1 text-teal-700">Updated</span>
          </h2>
          <p className="text-lg text-neutral-800 mb-8">
            Subscribe to our newsletter for the latest interview preparation tips and resources.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="input flex-1"
              />
              <button className="rounded-full bg-teal-400 hover:bg-teal-500 text-white font-bold px-8 py-3 shadow-lg transition text-lg whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
} 