"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ArrowRight, FileText, ImageIcon, Newspaper, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MediaHubSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const pressReleases = [
    {
      title: "1Play Global Launches Revolutionary AI-Powered Content Management System",
      date: "April 15, 2025",
      excerpt:
        "The new system leverages machine learning to automate content tagging, categorization, and recommendation.",
      link: "/media-hub/press/ai-cms-launch",
    },
    {
      title: "Partnership Announced with Leading Broadcast Network",
      date: "March 22, 2025",
      excerpt: "Strategic collaboration aims to transform live sports production with cutting-edge technology.",
      link: "/media-hub/press/broadcast-partnership",
    },
    {
      title: "1Play Global Expands Operations to Asia-Pacific Region",
      date: "February 10, 2025",
      excerpt: "New Singapore office will serve as headquarters for growing APAC client base.",
      link: "/media-hub/press/apac-expansion",
    },
  ]

  const videos = [
    {
      title: "Next-Gen Media Production Tools Demo",
      thumbnail: "/placeholder.svg?height=400&width=600",
      duration: "4:32",
      link: "/media-hub/videos/production-tools-demo",
    },
    {
      title: "AI in Content Management Webinar",
      thumbnail: "/placeholder.svg?height=400&width=600",
      duration: "28:15",
      link: "/media-hub/videos/ai-webinar",
    },
    {
      title: "Client Success Story: StreamFlex Media",
      thumbnail: "/placeholder.svg?height=400&width=600",
      duration: "6:47",
      link: "/media-hub/videos/streamflex-story",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl text-red-600 md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-slate-300 to-cyan-400"
          >
            Media Hub
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "100px" } : { width: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-red-500 to-cyan-500 mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-slate-500 dark:text-slate-300 max-w-3xl mx-auto"
          >
            Stay updated with the latest news, resources, and media from 1Play Global.
          </motion.p>
        </div>

        <Tabs defaultValue="press" className="mb-12">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="press">Press Releases</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="press">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {pressReleases.map((item) => (
                <motion.div key={item.title} variants={itemVariants}>
                  <Card className="h-full bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/5 group">
                    <CardHeader>
                      <div className="mb-4">
                        <Newspaper className="h-8 w-8 text-purple-400" />
                      </div>
                      <CardTitle className="text-lg group-hover:text-purple-400 transition-colors">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-slate-500 dark:text-slate-400">{item.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-700 dark:text-slate-300 text-sm">{item.excerpt}</p>
                    </CardContent>
                    <CardFooter></CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="videos">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {videos.map((video) => (
                <motion.div key={video.title} variants={itemVariants}>
                  <Link href={video.link}>
                    <Card className="h-full bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/5 group overflow-hidden">
                      <div className="relative">
                        <Image
                          src={video.thumbnail || "/placeholder.svg"}
                          alt={video.title}
                          width={600}
                          height={400}
                          className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-red-500/80 flex items-center justify-center group-hover:bg-red-600/80 transition-colors">
                            <Play className="h-8 w-8 text-white ml-1" fill="white" />
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs">
                          {video.duration}
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg group-hover:text-red-400 transition-colors">
                          {video.title}
                        </CardTitle>
                      </CardHeader>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="resources">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <motion.div variants={itemVariants}>
                <Card className="h-full bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/5 group">
                  <CardHeader>
                    <div className="mb-4">
                      <FileText className="h-8 w-8 text-cyan-400" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-red-400 transition-colors">
                      Whitepapers & Research
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 dark:text-slate-300 text-sm mb-4">
                      In-depth analysis and research on the latest trends in media technology.
                    </p>
                    <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                      <li className="hover:text-red-400 transition-colors">
                        <Link href="/media-hub/resources/ai-in-media">The Future of AI in Media Production</Link>
                      </li>
                      <li className="hover:text-red-400 transition-colors">
                        <Link href="/media-hub/resources/streaming-optimization">Optimizing Streaming Infrastructure</Link>
                      </li>
                      <li className="hover:text-red-400 transition-colors">
                        <Link href="/media-hub/resources/content-monetization">Content Monetization Strategies</Link>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href="/media-hub/resources">
                      <Button variant="ghost" className="group-hover:text-red-400 p-0">
                        View all resources
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Card className="h-full bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/5 group">
                  <CardHeader>
                    <div className="mb-4">
                      <ImageIcon className="h-8 w-8 text-red-400" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-red-400 transition-colors">
                      Brand Assets & Media Kit
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                      Official logos, product images, and brand guidelines for media use.
                    </p>
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="aspect-square bg-slate-200 dark:bg-slate-700 rounded-md overflow-hidden">
                          <Image
                            src={`/placeholder.svg?height=100&width=100`}
                            alt={`Brand asset ${i}`}
                            width={100}
                            height={100}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/media-hub/brand-assets">
                      <Button variant="ghost" className="group-hover:text-red-400 p-0">
                        Download media kit
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            </motion.div>
          </TabsContent>
        </Tabs>

        <div className="text-center">
          <Link href="/media-hub">
            <Button
              size="lg"
             className="text-black bg-gradient-to-r from-red-500 via-slate-300 to-cyan-300 hover:from-red-400 hover:to-cyan-300"
            >
              Visit Media Hub
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
