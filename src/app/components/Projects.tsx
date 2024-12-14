'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from 'framer-motion'

const projects = [
  {
    title: "Corosuke Protocol",
    description: "Developed a seamless and efficient payment gateway supporting multiple tokens (CORE, coreBTC, stCORE, native BTC) using Core DAO's infrastructure. Built during HH Goa 2k23.",
    duration: "2023-2027"
  },
  {
    title: "KOFTA",
    description: "Created an AI-driven system for generating secure and optimized smart contracts, integrated with Ethereum, Polygon, and Avalanche. Implemented a decentralized smart contract marketplace and automated security audit tools.",
    duration: "2023-2028"
  },
  {
    title: "Lasagna Finance",
    description: "Optimized Liquid Staking Token (LST) restaking strategies and designed a standardized performance tracking protocol for staking yields, improving user experience and decision-making.",
    duration: "Oct 2024 - Present"
  },
  {
    title: "Project Management Assistant",
    description: "Solo project focused on enhancing project management efficiency through blockchain technology.",
    duration: "May 2024 - Present"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="text-gray-400">{project.duration}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{project.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

