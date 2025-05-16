'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const roles = [
  {
    id: 'developer',
    title: 'Developer',
    questions: [
      {
        question: 'How do you approach debugging a complex issue?',
        answer: 'I follow a systematic approach: 1) Reproduce the issue, 2) Check logs and error messages, 3) Isolate the problem, 4) Test potential solutions, 5) Document the fix.',
      },
      {
        question: 'Explain your experience with version control systems.',
        answer: 'I use Git for version control, following best practices like feature branching, meaningful commit messages, and regular code reviews.',
      },
      {
        question: 'How do you ensure code quality in your projects?',
        answer: 'I implement unit tests, follow coding standards, conduct code reviews, and use static analysis tools to maintain high code quality.',
      },
    ],
  },
  {
    id: 'qa',
    title: 'QA Engineer',
    questions: [
      {
        question: 'Describe your testing methodology.',
        answer: 'I follow a comprehensive approach including unit testing, integration testing, system testing, and user acceptance testing.',
      },
      {
        question: 'How do you handle test automation?',
        answer: 'I use frameworks like Selenium and Jest, focusing on maintainable test scripts and continuous integration.',
      },
      {
        question: 'What tools do you use for bug tracking?',
        answer: 'I use JIRA for bug tracking, with detailed reproduction steps, expected vs actual results, and severity classification.',
      },
    ],
  },
  {
    id: 'data',
    title: 'Data Engineer',
    questions: [
      {
        question: 'Explain your experience with data pipelines.',
        answer: 'I design and implement ETL processes using tools like Apache Airflow, ensuring data quality and reliability.',
      },
      {
        question: 'How do you handle big data processing?',
        answer: 'I use distributed computing frameworks like Spark and Hadoop, optimizing for performance and scalability.',
      },
      {
        question: 'Describe your approach to data modeling.',
        answer: 'I follow dimensional modeling principles, creating efficient schemas that support both operational and analytical needs.',
      },
    ],
  },
  {
    id: 'infra',
    title: 'Infrastructure Engineer',
    questions: [
      {
        question: 'How do you ensure system reliability?',
        answer: 'I implement monitoring, redundancy, and disaster recovery plans, with regular testing and updates.',
      },
      {
        question: 'Describe your experience with cloud platforms.',
        answer: 'I work with AWS/Azure/GCP, implementing infrastructure as code and following cloud best practices.',
      },
      {
        question: 'How do you handle system scaling?',
        answer: 'I design scalable architectures using load balancing, auto-scaling, and distributed systems principles.',
      },
    ],
  },
  {
    id: 'cybersec',
    title: 'Cybersecurity Engineer',
    questions: [
      {
        question: 'How do you approach security assessments?',
        answer: 'I conduct regular vulnerability scans, penetration testing, and security audits, following industry standards.',
      },
      {
        question: 'Describe your experience with security tools.',
        answer: 'I use tools like Wireshark, Metasploit, and SIEM solutions for monitoring and threat detection.',
      },
      {
        question: 'How do you handle security incidents?',
        answer: 'I follow incident response procedures, including containment, investigation, remediation, and documentation.',
      },
    ],
  },
]

export default function RoleSpecificPage() {
  const [selectedRole, setSelectedRole] = useState('')

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
            Role-Specific Questions
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8">
            Access curated questions and answers for different TCS roles. Select your role to view relevant questions.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {roles.map((role) => (
              <button
                key={role.id}
                onClick={() => setSelectedRole(role.id)}
                className={`p-4 rounded-lg text-center transition-colors ${
                  selectedRole === role.id
                    ? 'bg-primary text-white'
                    : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-primary/10'
                }`}
              >
                {role.title}
              </button>
            ))}
          </div>

          {selectedRole && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              {roles
                .find((role) => role.id === selectedRole)
                ?.questions.map((item, index) => (
                  <div key={index} className="card">
                    <h3 className="font-heading text-xl font-semibold mb-3">{item.question}</h3>
                    <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-4">
                      <p className="text-neutral-600 dark:text-neutral-300">{item.answer}</p>
                    </div>
                  </div>
                ))}
            </motion.div>
          )}

          <div className="mt-12">
            <h2 className="font-heading text-2xl font-semibold mb-4">Tips for Role-Specific Interviews</h2>
            <div className="card bg-primary/5 border-primary/20">
              <ul className="space-y-3 text-neutral-600 dark:text-neutral-300">
                <li>• Research the specific role requirements and responsibilities</li>
                <li>• Prepare examples that demonstrate relevant technical skills</li>
                <li>• Show understanding of industry best practices</li>
                <li>• Highlight experience with relevant tools and technologies</li>
                <li>• Be ready to discuss your approach to problem-solving</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
} 