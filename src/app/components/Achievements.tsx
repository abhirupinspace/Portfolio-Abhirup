'use client'

import { Card, CardContent } from "@/components/ui/card"
import { motion } from 'framer-motion'

const achievements = [
  "Active Superteam India Member",
  "CoinDCX Maxi",
  "2X Hackathon winner including Bitcoin Talent Olympics by Bitcoin startup labs and EthIndia 2k24",
  "Global Top 100 in GDSC Solution Challenge 2023",
  "President, Web3 Wizards SNU for the 2024-2025 tenure"
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-16">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Achievements
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="pt-6">
              <ul className="list-disc list-inside space-y-2">
                {achievements.map((achievement, index) => (
                  <motion.li 
                    key={index} 
                    className="text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {achievement}
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

