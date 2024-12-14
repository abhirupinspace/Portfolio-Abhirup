'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from 'framer-motion'

const skills = [
  { category: "Blockchain", items: ["Smart Contract Development", "Rust (Solana)", "Solidity (EVM)", "Zero Knowledge Proofs"] },
  { category: "Web Development", items: ["Javascript", "Typescript", "NodeJs", "ExpressJs", "MongoDB"] },
  { category: "Programming Languages", items: ["Golang", "C++", "Java", "Python"] },
  { category: "Soft Skills", items: ["Excellent communication", "Proactive and self-motivated", "Exceptional organisational skills"] },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">{skill.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside">
                    {skill.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-300">{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

