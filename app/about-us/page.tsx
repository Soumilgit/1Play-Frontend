"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ArrowLeft, ArrowRight, Users, Lightbulb, Cpu, Globe, Award, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AboutUsPage() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const teamMembers = [
    {
      name: "Mohit Lalvani",
      position: "Founder & Chief Executive Officer",
      bio: "With over 20 years of experience in media technology, Mohit has led the company from startup to industry leader.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Michael Chen",
      position: "Chief Technology Officer",
      bio: "Former Netflix executive with expertise in streaming technology and infrastructure scaling.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "James Rodriguez",
      position: "VP of Product",
      bio: "Product visionary with a background in UX design and media production workflows.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Emily Patel",
      position: "Director of Engineering",
      bio: "Expert in cloud architecture and distributed systems with a focus on high-performance media applications.",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  const milestones = [
    {
      year: "2015",
      title: "Company Founded",
      description: "1Play Global was established with a vision to transform media technology.",
    },
    {
      year: "2017",
      title: "First Major Client",
      description: "Secured partnership with a leading broadcast network, launching our growth trajectory.",
    },
    {
      year: "2019",
      title: "Series A Funding",
      description: "Raised $15M to accelerate product development and market expansion.",
    },
    {
      year: "2021",
      title: "International Expansion",
      description: "Opened offices in Europe and Asia to serve our growing global client base.",
    },
    {
      year: "2023",
      title: "Technology Innovation Award",
      description: "Recognized for breakthrough advancements in AI-powered media solutions.",
    },
    {
      year: "2025",
      title: "Series C Funding",
      description: "Secured $50M to further accelerate growth and innovation.",
    },
  ]

  const values = [
    {
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible in media technology.",
      icon: <Lightbulb className="h-10 w-10 text-purple-400" />,
    },
    {
      title: "Excellence",
      description: "We are committed to delivering the highest quality solutions and services.",
      icon: <Award className="h-10 w-10 text-cyan-400" />,
    },
    {
      title: "Collaboration",
      description: "We work closely with our clients to understand and address their unique challenges.",
      icon: <Users className="h-10 w-10 text-purple-400" />,
    },
    {
      title: "Integrity",
      description: "We operate with transparency, honesty, and ethical business practices.",
      icon: <Briefcase className="h-10 w-10 text-cyan-400" />,
    },
    {
      title: "Global Perspective",
      description: "We embrace diversity and think globally in everything we do.",
      icon: <Globe className="h-10 w-10 text-purple-400" />,
    },
    {
      title: "Forward Thinking",
      description: "We anticipate future trends and prepare our clients for what's next.",
      icon: <Cpu className="h-10 w-10 text-cyan-400" />,
    },
  ]

  return (
    <div className="min-h-screen pt-24 pb-16 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <Link
          href="/#about"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-purple-400 transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            About 1Play Global
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are pioneers in media technology, dedicated to transforming how content is created, managed, and
            distributed across the globe.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur-lg opacity-20" />
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-border">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="1Play Global Headquarters"
                width={800}
                height={600}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Our Global Headquarters</h3>
                  <p className="text-sm text-muted-foreground">San Francisco, California</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-muted-foreground mb-6">
              Founded in 2015, 1Play Global emerged from a vision to revolutionize media technology. Our founders, with
              backgrounds in broadcasting, software development, and cloud infrastructure, recognized the need for more
              innovative, flexible, and scalable solutions in the rapidly evolving media landscape.
            </p>
            <p className="text-muted-foreground mb-6">
              What began as a small team working with local broadcasters has grown into a global company serving major
              media organizations across six continents. Throughout our journey, we've remained committed to our core
              mission: empowering content creators with cutting-edge technology that simplifies complexity and enhances
              creativity.
            </p>
            <p className="text-muted-foreground mb-6">
              Today, 1Play Global is at the forefront of media technology innovation, continuously pushing the
              boundaries of what's possible in content creation, management, and distribution.
            </p>
          </motion.div>
        </div>

        <div ref={ref} className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-8 text-center"
          >
            Our Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              >
                <Card className="h-full hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/5">
                  <CardHeader>
                    <div className="mb-4">{value.icon}</div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{value.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Journey</h2>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="relative">
                  <div
                    className={`flex items-center ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    } md:flex-row-reverse md:even:flex-row`}
                  >
                    <div className="md:w-1/2 flex justify-center md:justify-end md:even:justify-start">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center z-10">
                        <span className="font-bold text-white">{milestone.year}</span>
                      </div>
                    </div>
                    <div className="md:w-1/2 pl-6 md:pl-0 md:pr-6 md:even:pl-6 md:even:pr-0">
                      <Card>
                        <CardHeader>
                          <CardTitle>{milestone.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Leadership Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className="overflow-hidden">
                  <div className="relative h-64">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription>{member.position}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Global Presence</h2>

          <Tabs defaultValue="offices" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="offices">Offices</TabsTrigger>
              <TabsTrigger value="clients">Client Regions</TabsTrigger>
            </TabsList>
            <TabsContent value="offices">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-slate-800">
                <Image
                  src="/placeholder.svg?height=600&width=1200"
                  alt="Global Office Map"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gray flex items-center justify-center">
                  <div className="text-center max-w-2xl p-6">
                    <h3 className="text-2xl font-bold mb-4 text-black">Our Global Offices</h3>
                    <p className="text-black mb-6">
                      With headquarters in San Francisco and offices in London, Singapore, and Sydney, we provide
                      localized support to clients worldwide.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <h4 className="font-bold text-black">San Francisco</h4>
                        <p className="text-sm text-slate-700">Headquarters</p>
                      </div>
                      <div className="text-center text-black">
                        <h4 className="font-bold">London</h4>
                        <p className="text-sm text-slate-700">EMEA Office</p>
                      </div>
                      <div className="text-center text-black">
                        <h4 className="font-bold">Singapore</h4>
                        <p className="text-sm text-slate-700">APAC Office</p>
                      </div>
                      <div className="text-center text-black">
                        <h4 className="font-bold">Sydney</h4>
                        <p className="text-sm text-slate-700">ANZ Office</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="clients">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-slate-800">
                <Image
                  src="/placeholder.svg?height=600&width=1200"
                  alt="Global Client Map"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gray flex items-center justify-center">
                  <div className="text-center max-w-2xl p-6">
                    <h3 className="text-2xl font-bold mb-4 text-black">Our Global Clients</h3>
                    <p className="text-black">
                      We serve clients in over 40 countries across six continents, from major broadcasters to
                      independent content creators.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <h4 className="font-bold text-black">North America</h4>
                        <p className="text-sm text-slate-700">35% of clients</p>
                      </div>
                      <div className="text-center">
                        <h4 className="font-bold text-black">Europe</h4>
                        <p className="text-sm text-slate-700">30% of clients</p>
                      </div>
                      <div className="text-center">
                        <h4 className="font-bold text-black">Asia Pacific</h4>
                        <p className="text-sm text-slate-700">25% of clients</p>
                      </div>
                      <div className="text-center">
                        <h4 className="font-bold text-black">Latin America</h4>
                        <p className="text-sm text-slate-700">5% of clients</p>
                      </div>
                      <div className="text-center">
                        <h4 className="font-bold text-black">Middle East</h4>
                        <p className="text-sm text-slate-700">3% of clients</p>
                      </div>
                      <div className="text-center">
                        <h4 className="font-bold text-black">Africa</h4>
                        <p className="text-sm text-slate-700">2% of clients</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals who are passionate about media technology and innovation.
          </p>
          <Link href="/careers">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white"
            >
              View Career Opportunities
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}