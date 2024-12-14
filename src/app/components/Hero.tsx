'use client'

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-1 text-center">
        <motion.h1 
          className="py-10 text-9xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Abhirup Banerjee
        </motion.h1>
        <motion.p 
          className="text-4xl text-white mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Web3 Researcher & Developer | Bringing India Onchain
        </motion.p>
        <motion.p 
          className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Specializing in zero-knowledge proofs, cryptography, and scalable blockchain solutions. 
          Focused on building innovative, privacy-preserving decentralized applications and advancing DeFi through cutting-edge research and smart contract development.
        </motion.p>
        <motion.div 
          className="flex justify-center space-x-4 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button asChild variant="outline">
            <a href="https://github.com/abhirupinspace" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="https://twitter.com/AbhirupTweetOn" target="_blank" rel="noopener noreferrer">
              <Twitter className="mr-2 h-4 w-4" /> Twitter
            </a>
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
        </motion.div>
      </div>
    </section>
  )
}

