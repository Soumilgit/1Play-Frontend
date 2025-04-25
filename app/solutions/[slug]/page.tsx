"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Mock data for solutions
const solutionsData = {
  "media-production": {
    title: "Media Production Tools",
    description: "Professional-grade tools for content creation, editing, and distribution.",
    longDescription:
      "Our media production tools are designed to streamline your workflow from concept to delivery. With intuitive interfaces and powerful features, our solutions enable content creators to focus on creativity while we handle the technical complexities.",
    features: [
      "Advanced video editing with AI-assisted tools",
      "Real-time collaboration for distributed teams",
      "Automated quality control and error detection",
      "Seamless integration with existing workflows",
      "Cloud-based rendering and processing",
      "Comprehensive asset management",
    ],
    benefits: [
      "Reduce production time by up to 40%",
      "Improve collaboration across teams",
      "Ensure consistent quality across all content",
      "Scale resources based on project demands",
      "Access your projects from anywhere",
    ],
    image: "/placeholder.svg?height=600&width=800",
    caseStudy: {
      title: "Global News Network Transforms Production Workflow",
      excerpt: "Learn how a leading news network reduced their production time by 50% while improving content quality.",
      link: "/case-studies/news-network",
    },
  },
  streaming: {
    title: "Streaming & Broadcasting Platforms",
    description: "End-to-end solutions for live and on-demand content delivery.",
    longDescription:
      "Our streaming and broadcasting platforms provide robust, scalable infrastructure for delivering high-quality content to audiences worldwide. From live events to on-demand libraries, our solutions ensure reliable performance and exceptional viewer experiences.",
    features: [
      "Low-latency live streaming with adaptive bitrate",
      "Multi-platform content delivery",
      "Advanced analytics and viewer insights",
      "Content protection and DRM integration",
      "Monetization tools including AVOD, SVOD, and TVOD",
      "Personalized viewer experiences",
    ],
    benefits: [
      "Reach global audiences with minimal buffering",
      "Optimize content delivery for any device",
      "Gain insights into viewer behavior",
      "Protect your content from unauthorized access",
      "Maximize revenue through flexible monetization",
    ],
    image: "/placeholder.svg?height=600&width=800",
    caseStudy: {
      title: "Sports League Launches Direct-to-Consumer Platform",
      excerpt:
        "Discover how a major sports league built a streaming service that handles millions of concurrent viewers.",
      link: "/case-studies/sports-streaming",
    },
  },
  "content-management": {
    title: "Content Management Systems",
    description: "Organize, store, and distribute your media assets efficiently.",
    longDescription:
      "Our content management systems provide a centralized hub for all your media assets, making it easy to organize, search, and distribute content across multiple platforms. With powerful metadata tools and automated workflows, our solutions streamline content operations and maximize the value of your media library.",
    features: [
      "Centralized media asset management",
      "Advanced metadata tagging and search",
      "Automated content categorization with AI",
      "Version control and approval workflows",
      "Distribution to multiple platforms with one click",
      "Rights management and licensing tracking",
    ],
    benefits: [
      "Find the right content in seconds, not hours",
      "Eliminate redundant storage and duplicate assets",
      "Automate repetitive tasks in content workflows",
      "Ensure compliance with rights and licensing",
      "Maximize content reuse and monetization",
    ],
    image: "/placeholder.svg?height=600&width=800",
    caseStudy: {
      title: "Media Conglomerate Unifies Content Operations",
      excerpt: "See how a global media company consolidated 15 separate libraries into one powerful system.",
      link: "/case-studies/media-conglomerate",
    },
  },
  "ai-data": {
    title: "AI & Data Solutions for Media",
    description: "Leverage AI to extract insights and automate workflows.",
    longDescription:
      "Our AI and data solutions harness the power of machine learning and analytics to transform how media organizations operate. From content analysis to predictive insights, our technologies help you make data-driven decisions and automate complex processes.",
    features: [
      "Automated content tagging and categorization",
      "Speech-to-text and transcription services",
      "Sentiment analysis and content moderation",
      "Viewer behavior prediction and recommendation engines",
      "Automated quality control and compliance checking",
      "Performance analytics and business intelligence",
    ],
    benefits: [
      "Reduce manual effort in content processing",
      "Improve content discovery and recommendations",
      "Gain deeper insights into audience preferences",
      "Automate compliance and moderation workflows",
      "Make data-driven decisions across your organization",
    ],
    image: "/placeholder.svg?height=600&width=800",
    caseStudy: {
      title: "Streaming Service Boosts Engagement with AI",
      excerpt: "Learn how an AI-powered recommendation engine increased viewer watch time by 35%.",
      link: "/case-studies/streaming-ai",
    },
  },
  "custom-software": {
    title: "Custom Software Development",
    description: "Tailored solutions designed for your specific requirements.",
    longDescription:
      "Our custom software development services deliver bespoke solutions tailored to your unique challenges and opportunities. With deep expertise in media technology and a collaborative approach, we build innovative applications that drive your business forward.",
    features: [
      "End-to-end development from concept to deployment",
      "User-centered design and experience",
      "Agile development methodology",
      "Integration with existing systems and workflows",
      "Comprehensive testing and quality assurance",
      "Ongoing support and maintenance",
    ],
    benefits: [
      "Address your specific business challenges",
      "Create competitive advantages through technology",
      "Streamline operations with purpose-built tools",
      "Improve user satisfaction with intuitive interfaces",
      "Future-proof your technology investments",
    ],
    image: "/placeholder.svg?height=600&width=800",
    caseStudy: {
      title: "Production Studio Revolutionizes Workflow",
      excerpt: "Discover how a custom production management system reduced overhead by 30%.",
      link: "/case-studies/production-studio",
    },
  },
  "system-integration": {
    title: "System Integration Services",
    description: "Seamlessly connect your existing systems and workflows.",
    longDescription:
      "Our system integration services connect disparate technologies into cohesive, efficient workflows. We specialize in bridging legacy systems with modern solutions, ensuring smooth data flow and process automation across your entire media operation.",
    features: [
      "API development and integration",
      "Workflow automation and orchestration",
      "Legacy system modernization",
      "Cloud migration and hybrid solutions",
      "Custom middleware and connectors",
      "Comprehensive documentation and training",
    ],
    benefits: [
      "Eliminate data silos and manual transfers",
      "Create end-to-end automated workflows",
      "Extend the life of existing technology investments",
      "Reduce operational errors and inconsistencies",
      "Improve cross-departmental collaboration",
    ],
    image: "/placeholder.svg?height=600&width=800",
    caseStudy: {
      title: "Broadcaster Unifies Production and Distribution",
      excerpt: "See how we connected 12 separate systems into one seamless workflow.",
      link: "/case-studies/broadcaster-integration",
    },
  },
}

export default function SolutionPage() {
  const params = useParams()
  const slug = params.slug as string
  const [solution, setSolution] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (slug && solutionsData[slug as keyof typeof solutionsData]) {
      setSolution(solutionsData[slug as keyof typeof solutionsData])
    }
    setLoading(false)
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    )
  }

  if (!solution) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Solution Not Found</h1>
        <p className="text-muted-foreground mb-6">The solution you're looking for doesn't exist or has been moved.</p>
        <Link href="/#solutions">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Solutions
          </Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <Link
          href="/#solutions"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-purple-400 transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Solutions
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
              {solution.title}
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-cyan-500 mb-6" />
            <p className="text-xl text-foreground mb-6">{solution.description}</p>
            <p className="text-foreground mb-8">{solution.longDescription}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white"
              >
                Request Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Download Brochure
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur-lg opacity-20" />
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-border">
              <Image
                src={solution.image || "/placeholder.svg"}
                alt={solution.title}
                width={800}
                height={600}
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-purple-400">Key Features</CardTitle>
              <CardDescription>
                What makes our {solution.title.toLowerCase()} stand out from the competition
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {solution.features.map((feature: string, index: number) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="flex items-start"
                  >
                    <div className="mr-3 mt-1">
                      <div className="bg-purple-500/20 p-1 rounded-full">
                        <Check className="h-4 w-4 text-purple-400" />
                      </div>
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-cyan-400">Benefits</CardTitle>
              <CardDescription>
                How our {solution.title.toLowerCase()} can transform your business
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {solution.benefits.map((benefit: string, index: number) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    className="flex items-start"
                  >
                    <div className="mr-3 mt-1">
                      <div className="bg-cyan-500/20 p-1 rounded-full">
                        <Check className="h-4 w-4 text-cyan-400" />
                      </div>
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Related Case Study</h2>
          <div className="max-w-3xl mx-auto">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=1200"
                  alt={solution.caseStudy.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{solution.caseStudy.title}</h3>
                </div>
              </div>
              <CardContent className="pt-6">
                <p className="text-foreground mb-4">{solution.caseStudy.excerpt}</p>
                <Link href={solution.caseStudy.link}>
                  <Button variant="ghost" className="hover:text-purple-400 p-0">
                    Read the full case study
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-900/20 to-cyan-900/20 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to transform your media workflow?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Contact our team today to discuss how our {solution.title.toLowerCase()} can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white"
            >
              Request Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}