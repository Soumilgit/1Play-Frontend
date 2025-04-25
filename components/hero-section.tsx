"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

export default function HeroSection() {
  const isMobile = useMobile()
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10" />
        <video ref={videoRef} autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-city-11748-large.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-block mb-4">
              <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-purple-500/20 text-purple-400 ring-1 ring-inset ring-purple-500/30">
                Redefining Media Technology
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-black via-purple-600 to-cyan-600 dark:from-white dark:via-purple-300 dark:to-cyan-300">
              Transforming Media <br className="hidden md:block" />
              <span className="relative">
                Production
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-purple-500 to-cyan-500"
                />
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0">
              Cutting-edge solutions for broadcast, film, and entertainment industries. Elevate your media production
              with our innovative technology.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
              >
                Request Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                <Play className="mr-2 h-4 w-4" fill="currentColor" />
                Watch Showreel
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={isMobile ? "hidden" : ""}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur opacity-75" />
              <div className="relative bg-black rounded-2xl overflow-hidden border border-slate-800">
                <div className="p-1">
                  <div className="flex items-center gap-2 px-3 py-2 border-b border-slate-800">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="text-xs text-slate-400 flex-1 text-center">1Play Media Suite</div>
                  </div>
                  <div className="p-4 h-[300px] flex items-center justify-center">
                    <div className="w-full h-full bg-gradient-to-br from-purple-900/30 to-cyan-900/30 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 mb-4">
                          <Play className="h-8 w-8 text-white" fill="white" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-slate-100">Media Production Tools</h3>
                        <p className="text-sm text-slate-400 max-w-xs">
                          Professional-grade tools for content creation, editing, and distribution.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
