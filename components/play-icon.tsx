"use client"

import { motion } from "framer-motion"
import { Play } from "lucide-react"

export default function PlayIcon() {
  return (
    <motion.div
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      className="relative w-8 h-8"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-400 rounded-full opacity-70 blur-sm" />
      <div className="absolute inset-0 flex items-center justify-center">
        <Play className="h-5 w-5 text-white" fill="white" />
      </div>
    </motion.div>
  )
}
