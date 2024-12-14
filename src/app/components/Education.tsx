'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from 'framer-motion'

const education = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering (B.Tech CSE)",
    institution: "Sister Nivedita University, Kolkata"
  },
  {
    degree: "B.S. in Data Science and Applications",
    institution: "Indian Institute of Technology (IIT), Madras"
  }
]

export default function Education() {
  return (
    <section id="education" className="py-16">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">{edu.degree}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{edu.institution}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

