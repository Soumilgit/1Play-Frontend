"use client"

import type React from "react"
import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Briefcase, Upload, CheckCircle, Search, MapPin, ArrowRight, FileText, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import Image from "next/image"

export default function CareersSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])
  const [selectedLocations, setSelectedLocations] = useState<string[]>([])

  const [formState, setFormState] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    currentLocation: "",
    experience: "",
    education: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0])
    }
  }

  const handleSkillSelect = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill))
    } else if (selectedSkills.length < 5) {
      setSelectedSkills([...selectedSkills, skill])
    }
  }

  const handleLocationSelect = (location: string) => {
    if (selectedLocations.includes(location)) {
      setSelectedLocations(selectedLocations.filter((l) => l !== location))
    } else if (selectedLocations.length < 3) {
      setSelectedLocations([...selectedLocations, location])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", {
      ...formState,
      skills: selectedSkills,
      locations: selectedLocations,
      resumeFile,
    })
  }

  const skills = [
    "JavaScript",
    "React.js",
    "Node.js",
    "Python",
    "Java",
    "C#",
    "TypeScript",
    "AWS",
    "Azure",
    "DevOps",
    "Docker",
    "Kubernetes",
    "Machine Learning",
    "Data Science",
    "UI/UX",
  ]

  const locations = [
    "New York",
    "San Francisco",
    "London",
    "Singapore",
    "Tokyo",
    "Berlin",
    "Sydney",
    "Toronto",
    "Mumbai",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Pune",
    "Delhi",
    "Kolkata",
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://collectionperformance.com/wp-content/uploads/2023/01/digitization-transformation-earth-5231610.jpg"
            alt="Careers at 1Play Global"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Build a future you believe in</h1>
            <p className="text-xl text-white/90 mb-8">
              Join our team and be part of a global technology leader shaping the future of innovation.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white"
              onClick={() => {
                const form = document.getElementById("application-form")
                if (form) {
                  form.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Apply now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section ref={ref} className="py-16 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-red-500 to-red-700 dark:from-red-500 dark:via-red-400 dark:to-red-600"
            >
              Careers at 1Play Global
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100px" } : { width: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-700 mx-auto"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto mt-4"
            >
              Discover exciting career opportunities and join our global team of innovators shaping the future of
              technology.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Card id="application-form" className="bg-white dark:bg-slate-900/50 border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <CardTitle className="text-2xl dark:text-white">Application Form</CardTitle>
                  <CardDescription className="text-slate-700 dark:text-slate-300">
                    Submit your application and we'll reach out if there's a match
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="personal" className="w-full">
                    <TabsList className="grid grid-cols-3 mb-8">
                      <TabsTrigger value="personal">Personal Info</TabsTrigger>
                      <TabsTrigger value="professional">Professional Info</TabsTrigger>
                      <TabsTrigger value="preferences">Preferences</TabsTrigger>
                    </TabsList>

                    <form onSubmit={handleSubmit}>
                      <TabsContent value="personal" className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="firstName" className="dark:text-white">
                              First Name *
                            </Label>
                            <Input
                              id="firstName"
                              name="firstName"
                              placeholder="John"
                              value={formState.firstName}
                              onChange={handleInputChange}
                              required
                              className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="middleName" className="dark:text-white">
                              Middle Name
                            </Label>
                            <Input
                              id="middleName"
                              name="middleName"
                              placeholder="David"
                              value={formState.middleName}
                              onChange={handleInputChange}
                              className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName" className="dark:text-white">
                              Last Name *
                            </Label>
                            <Input
                              id="lastName"
                              name="lastName"
                              placeholder="Doe"
                              value={formState.lastName}
                              onChange={handleInputChange}
                              required
                              className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="email" className="dark:text-white">
                              Email Address *
                            </Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="john.doe@example.com"
                              value={formState.email}
                              onChange={handleInputChange}
                              required
                              className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone" className="dark:text-white">
                              Phone Number *
                            </Label>
                            <Input
                              id="phone"
                              name="phone"
                              placeholder="+1 (555) 123-4567"
                              value={formState.phone}
                              onChange={handleInputChange}
                              required
                              className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="dob" className="dark:text-white">
                            Date of Birth *
                          </Label>
                          <Input
                            id="dob"
                            name="dob"
                            type="date"
                            value={formState.dob}
                            onChange={handleInputChange}
                            required
                            className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                          />
                        </div>

                        
                      </TabsContent>

                      <TabsContent value="professional" className="space-y-6">
                        <div className="space-y-2">
                          <Label className="dark:text-white">Resume/CV *</Label>
                          <div className="border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-lg p-6 text-center">
                            {resumeFile ? (
                              <div className="flex items-center justify-between bg-slate-50 dark:bg-slate-800 p-3 rounded">
                                <div className="flex items-center">
                                  <FileText className="h-5 w-5 text-red-500 mr-2" />
                                  <span className="dark:text-white">{resumeFile.name}</span>
                                </div>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => setResumeFile(null)}
                                  className="text-slate-500 hover:text-red-500"
                                >
                                  <X className="h-4 w-4" />
                                </Button>
                              </div>
                            ) : (
                              <div>
                                <Upload className="h-10 w-10 text-slate-400 mx-auto mb-2" />
                                <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                                  Drag and drop your resume here, or click to browse
                                </p>
                                <Input
                                  id="resume"
                                  type="file"
                                  accept=".pdf,.doc,.docx"
                                  onChange={handleFileChange}
                                  className="hidden"
                                />
                                <Button
                                  type="button"
                                  variant="outline"
                                  onClick={() => document.getElementById("resume")?.click()}
                                  className="bg-white dark:bg-slate-800"
                                >
                                  Browse Files
                                </Button>
                              </div>
                            )}
                          </div>
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            Accepted formats: PDF, DOC, DOCX. Maximum size: 5MB
                          </p>
                        </div>

                        <div className="space-y-2">
                          <Label className="dark:text-white">Skills (Select up to 5) *</Label>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {skills.map((skill, index) => (
                              <Badge
                                key={index}
                                variant={selectedSkills.includes(skill) ? "default" : "outline"}
                                className={`cursor-pointer ${
                                  selectedSkills.includes(skill)
                                    ? "bg-red-500 hover:bg-red-600"
                                    : "bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700"
                                }`}
                                onClick={() => handleSkillSelect(skill)}
                              >
                                {skill}
                                {selectedSkills.includes(skill) && <CheckCircle className="ml-1 h-3 w-3" />}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="experience" className="dark:text-white">
                              Years of Experience *
                            </Label>
                            <Select
                              value={formState.experience}
                              onValueChange={(value) => setFormState((prev) => ({ ...prev, experience: value }))}
                            >
                              <SelectTrigger className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                                <SelectValue placeholder="Select experience" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="0-1">0-1 years</SelectItem>
                                <SelectItem value="1-3">1-3 years</SelectItem>
                                <SelectItem value="3-5">3-5 years</SelectItem>
                                <SelectItem value="5-10">5-10 years</SelectItem>
                                <SelectItem value="10+">10+ years</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="education" className="dark:text-white">
                              Highest Education *
                            </Label>
                            <Select
                              value={formState.education}
                              onValueChange={(value) => setFormState((prev) => ({ ...prev, education: value }))}
                            >
                              <SelectTrigger className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                                <SelectValue placeholder="Select education" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="high-school">High School</SelectItem>
                                <SelectItem value="associate">Associate Degree</SelectItem>
                                <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                                <SelectItem value="master">Master's Degree</SelectItem>
                                <SelectItem value="phd">PhD or Doctorate</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        
                      </TabsContent>

                      <TabsContent value="preferences" className="space-y-6">
                        <div className="space-y-2">
                          <Label className="dark:text-white">Preferred Locations (Select up to 3) *</Label>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {locations.map((location, index) => (
                              <Badge
                                key={index}
                                variant={selectedLocations.includes(location) ? "default" : "outline"}
                                className={`cursor-pointer ${
                                  selectedLocations.includes(location)
                                    ? "bg-red-500 hover:bg-red-600"
                                    : "bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700"
                                }`}
                                onClick={() => handleLocationSelect(location)}
                              >
                                {location}
                                {selectedLocations.includes(location) && <CheckCircle className="ml-1 h-3 w-3" />}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="currentLocation" className="dark:text-white">
                            Current Location *
                          </Label>
                          <Input
                            id="currentLocation"
                            name="currentLocation"
                            placeholder="City, Country"
                            value={formState.currentLocation}
                            onChange={handleInputChange}
                            required
                            className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message" className="dark:text-white">
                            Additional Information
                          </Label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="Tell us anything else that might be relevant to your application..."
                            value={formState.message}
                            onChange={handleInputChange}
                            className="min-h-[120px] bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700"
                          />
                        </div>

                        <div className="flex justify-between">
                          <Button
                            type="submit"
                            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
                          >
                            Submit Application
                          </Button>
                        </div>
                      </TabsContent>
                    </form>
                  </Tabs>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Why Join Us</h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
              Discover the benefits of building your career with a global technology leader
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Briefcase className="h-10 w-10 text-red-500" />,
                title: "Career Growth",
                description: "Continuous learning and development opportunities to advance your career",
              },
              {
                icon: <MapPin className="h-10 w-10 text-red-500" />,
                title: "Global Opportunities",
                description: "Work with clients and teams across the globe",
              },
              {
                icon: <CheckCircle className="h-10 w-10 text-red-500" />,
                title: "Work-Life Balance",
                description: "Flexible work arrangements to support your personal and professional life",
              },
              {
                icon: <Search className="h-10 w-10 text-red-500" />,
                title: "Innovation Culture",
                description: "Be part of cutting-edge projects and innovative solutions",
              },
            ].map((item, index) => (
              <Card key={index} className="bg-slate-50 dark:bg-slate-900 border-none">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 rounded-full">{item.icon}</div>
                    <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-white">{item.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Frequently Asked Questions</h2>
            <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
              Find answers to common questions about our application process
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "What happens after I submit my application?",
                answer:
                  "Our recruitment team will review your application and match it with open positions. If there's a potential fit, we'll contact you for the next steps in the interview process.",
              },
              {
                question: "How long does the application process take?",
                answer:
                  "The timeline varies depending on the position and number of applicants. Typically, you can expect to hear from us within 2-3 weeks after submission.",
              },
              {
                question: "Can I apply for multiple positions?",
                answer:
                  "Yes, you can apply for multiple positions that match your skills and experience. Our system will track your applications and consider you for all relevant roles.",
              },
              {
                question: "Do you offer relocation assistance?",
                answer:
                  "Yes, for certain positions we offer relocation assistance. This will be discussed during the interview process if applicable to your situation.",
              },
              {
                question: "What if I need accommodations during the application process?",
                answer:
                  "We're committed to providing equal opportunities. If you need any accommodations during the application or interview process, please let us know in your application.",
              },
            ].map((item, index) => (
              <div key={index} className="mb-4">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-medium mb-2 text-slate-900 dark:text-white">{item.question}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}