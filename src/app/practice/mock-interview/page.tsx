'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const questions = [
  {
    question: 'Tell me about yourself.',
    category: 'Introduction',
    timeLimit: 120, // 2 minutes
  },
  {
    question: 'Why do you want to work at TCS?',
    category: 'Motivation',
    timeLimit: 90, // 1.5 minutes
  },
  {
    question: 'Describe a challenging project you worked on.',
    category: 'Experience',
    timeLimit: 180, // 3 minutes
  },
  {
    question: 'How do you handle tight deadlines?',
    category: 'Problem Solving',
    timeLimit: 120, // 2 minutes
  },
  {
    question: 'What are your strengths and weaknesses?',
    category: 'Self Assessment',
    timeLimit: 150, // 2.5 minutes
  },
]

export default function MockInterviewPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [timeLeft, setTimeLeft] = useState(0)
  const [isRecording, setIsRecording] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [score, setScore] = useState(0)

  useEffect(() => {
    if (isRecording && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1)
      }, 1000)
      return () => clearInterval(timer)
    } else if (timeLeft === 0 && isRecording) {
      handleNextQuestion()
    }
  }, [isRecording, timeLeft])

  const startRecording = () => {
    setIsRecording(true)
    setTimeLeft(questions[currentQuestion].timeLimit)
  }

  const handleNextQuestion = () => {
    setIsRecording(false)
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
    } else {
      setIsComplete(true)
    }
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
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
            Mock Interview Practice
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8">
            Practice your interview skills with timed questions and get instant feedback.
          </p>

          {!isComplete ? (
            <div className="card">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <span className="text-sm text-neutral-500 dark:text-neutral-400">
                    Question {currentQuestion + 1} of {questions.length}
                  </span>
                  <h2 className="font-heading text-2xl font-semibold mt-1">
                    {questions[currentQuestion].category}
                  </h2>
                </div>
                {isRecording && (
                  <div className="text-2xl font-mono">
                    {formatTime(timeLeft)}
                  </div>
                )}
              </div>

              <div className="mb-8">
                <p className="text-lg text-neutral-600 dark:text-neutral-300">
                  {questions[currentQuestion].question}
                </p>
              </div>

              {!isRecording ? (
                <button onClick={startRecording} className="btn-primary w-full">
                  Start Recording
                </button>
              ) : (
                <div className="space-y-4">
                  <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-4">
                    <p className="text-neutral-600 dark:text-neutral-300">
                      Recording in progress... Speak clearly and confidently.
                    </p>
                  </div>
                  <button onClick={handleNextQuestion} className="btn-secondary w-full">
                    Next Question
                  </button>
                </div>
              )}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="card text-center"
            >
              <h2 className="font-heading text-2xl font-semibold mb-4">
                Practice Complete!
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8">
                Great job completing the mock interview. Here are some tips for improvement:
              </p>
              <ul className="space-y-3 text-neutral-600 dark:text-neutral-300 text-left">
                <li>• Practice your answers to common questions</li>
                <li>• Work on your timing and pace</li>
                <li>• Record yourself and review your performance</li>
                <li>• Get feedback from peers or mentors</li>
                <li>• Focus on clear communication and confidence</li>
              </ul>
              <button
                onClick={() => {
                  setCurrentQuestion(0)
                  setIsComplete(false)
                  setScore(0)
                }}
                className="btn-primary mt-8"
              >
                Start Over
              </button>
            </motion.div>
          )}

          <div className="mt-12">
            <h2 className="font-heading text-2xl font-semibold mb-4">Tips for Success</h2>
            <div className="card bg-primary/5 border-primary/20">
              <ul className="space-y-3 text-neutral-600 dark:text-neutral-300">
                <li>• Take a moment to think before answering</li>
                <li>• Structure your responses clearly</li>
                <li>• Use specific examples from your experience</li>
                <li>• Stay within the time limit</li>
                <li>• Practice regularly to improve</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
} 