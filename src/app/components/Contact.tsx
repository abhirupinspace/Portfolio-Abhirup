'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-8">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-white">Get in Touch</h3>
            <p className="text-gray-300 mb-4">Feel free to reach out for collaborations or just a friendly hello</p>
            <div className="flex items-center mb-2">
              <Mail className="mr-2 text-blue-400" />
              <a href="mailto:abkenway2003@gmail.com" className="text-blue-400 hover:underline">abkenway2003@gmail.com</a>
            </div>
            <div className="flex items-center">
              <Phone className="mr-2 text-blue-400" />
              <a href="tel:+918637054674" className="text-blue-400 hover:underline">+91 8637054674</a>
            </div>
          </motion.div>
          <motion.form 
            className="md:w-1/2 space-y-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Input type="text" placeholder="Your Name" required className="bg-gray-700 text-white border-gray-600" />
            <Input type="email" placeholder="Your Email" required className="bg-gray-700 text-white border-gray-600" />
            <Textarea placeholder="Your Message" required className="bg-gray-700 text-white border-gray-600" />
            <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600">Send Message</Button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

