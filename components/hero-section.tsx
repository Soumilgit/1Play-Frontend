"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"
import Image from "next/image"

export default function HeroSection() {
  const isMobile = useMobile()
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Simplified video playback with permanent mute
    const playVideo = () => {
      video.muted = true // Ensure video is muted
      const playPromise = video.play()
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            video.playbackRate = 0.7
          })
          .catch(error => {
            console.log("Video play failed:", error)
          })
      }
    }

    // Immediate play attempt
    playVideo()

    // Add interaction listeners for playback only
    const handleUserInteraction = () => {
      playVideo()
    }

    document.addEventListener('click', handleUserInteraction, { once: true })
    document.addEventListener('touchstart', handleUserInteraction, { once: true })
    document.addEventListener('keydown', handleUserInteraction, { once: true })

    return () => {
      document.removeEventListener('click', handleUserInteraction)
      document.removeEventListener('touchstart', handleUserInteraction)
      document.removeEventListener('keydown', handleUserInteraction)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background with stronger overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 bg-black/60 dark:bg-black/70" />
        <video 
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          preload="auto"
        >
          <source src="./playmersiv.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content with improved contrast */}
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-block mb-6">
              <Image 
                src="/logo.png" 
                alt="1Play Global Logo"
                width={200}
                height={80}
                className="w-48 md:w-64 h-auto dark:brightness-125"
                priority
              />
            </div>
            <div className="inline-block mb-4">
              <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-white/20 text-white ring-1 ring-inset ring-white/30 dark:bg-black/20 dark:text-white dark:ring-white/20">
                Empowering the Creator Economy
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-red-200 dark:text-white/95">
              Take Back Control <br className="hidden md:block" />
              <span className="relative text-blue-300">
                Of Your Content
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="absolute -bottom-2 left-0 h-1 bg-white dark:bg-white/90"
                />
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 dark:text-white/80 mb-8 max-w-xl mx-auto lg:mx-0 drop-shadow-lg">
              Our AI-first platform gives creators full ownership and monetization control. 
              Break free from platform lock-in with white-label apps in minutes - no code required.
            </p>
            
          </motion.div>

      
        </div>
      </div>
    </section>
  )
}