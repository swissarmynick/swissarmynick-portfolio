"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Github, ExternalLink, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"

const tools = [
  { name: "ChatGPT", logo: "/logos/chatgpt-logo.png" },
  { name: "Claude", logo: "/logos/claude-logo-transparent.png" },
  { name: "Make", logo: "/logos/make-logo-transparent.png" },
  { name: "n8n", logo: "/logos/n8n-logo-transparent.png" },
  { name: "Vapi", logo: "/logos/vapi-logo-transparent.png" },
  { name: "ElevenLabs", logo: "/logos/elevenlabs-logo-transparent.png" },
]

const projects = [
  {
    id: 1,
    title: "Voice Agent Playground",
    description:
      "An experimental platform for testing and comparing different voice agent frameworks, with detailed analytics on response quality and user engagement.",
    tags: ["AI Voice", "ElevenLabs", "Vapi", "Analytics"],
    image: "/placeholder.svg?height=400&width=600",
    gradient: "from-rose-200 to-rose-300",
    link: "#",
  },
  {
    id: 2,
    title: "AI Workflow Automator",
    description:
      "A no-code tool that connects various AI services together, allowing non-technical users to build powerful automation workflows with voice and text AI.",
    tags: ["Automation", "Make", "n8n", "LangChain"],
    image: "/placeholder.svg?height=400&width=600",
    gradient: "from-purple-200 to-blue-200",
    link: "#",
  },
  {
    id: 3,
    title: "YouTube Content Generator",
    description:
      "A toolkit that helps create engaging educational content by generating script outlines, visuals, and practice questions from technical documentation.",
    tags: ["Content Creation", "GPT-4", "ElevenLabs", "YouTube"],
    image: "/placeholder.svg?height=400&width=600",
    gradient: "from-green-200 to-emerald-200",
    link: "#",
  },
  {
    id: 4,
    title: "Voice Agent Comparison",
    description:
      "A comprehensive analysis of different voice agent platforms, comparing their capabilities, limitations, and ideal use cases with practical examples.",
    tags: ["Research", "Voice AI", "Technical Writing"],
    image: "/placeholder.svg?height=400&width=600",
    gradient: "from-orange-200 to-yellow-200",
    link: "#",
  },
]

const testimonials = [
  {
    id: 1,
    content:
      "Nick's YouTube tutorials on voice agents saved me weeks of trial and error. He explains complex concepts so clearly that even my non-technical team could follow along!",
    author: "Alex Thompson",
    role: "Head of Innovation",
    company: "Noodle (definitely not Google)",
    avatar: "/placeholder.svg?height=48&width=48",
    platform: "Twitter",
  },
  {
    id: 2,
    content:
      "The way SwissArmyNick breaks down AI tools is incredible. His 'build in public' approach is refreshing in an industry full of gatekeepers. Can't wait to see what he creates next!",
    author: "Maya Patel",
    role: "Founder & CEO",
    company: "Macrohard Industries",
    avatar: "/placeholder.svg?height=48&width=48",
    platform: "LinkedIn",
  },
  {
    id: 3,
    content:
      "I've been following Nick's journey since he left corporate life. His systematic approach to learning and sharing voice AI knowledge is exactly what this rapidly evolving field needs.",
    author: "Jordan Kim",
    role: "CTO",
    company: "Amazin' (the other one)",
    avatar: "/placeholder.svg?height=48&width=48",
    platform: "Twitter",
  },
  {
    id: 4,
    content:
      "Nick's automation workflows saved our small business countless hours. The best part? He shared exactly how he built them in his YouTube series. True generosity!",
    author: "Sam Rodriguez",
    role: "Product Lead",
    company: "Metaverse & Beyond Co.",
    avatar: "/placeholder.svg?height=48&width=48",
    platform: "LinkedIn",
  },
]

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center">
          <Image
            src="/swissarmynick-logo-transparent.png"
            alt="SwissArmyNick Logo"
            width={350}
            height={70}
            className="h-16 w-auto mx-auto mb-4"
            priority
          />
          <nav className="flex items-center justify-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              About
            </a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Projects
            </a>
            <a href="#tools" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Tools
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Testimonials
            </a>
            <Button size="sm" className="bg-red-500 hover:bg-red-600 text-white">
              Let's Chat
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="pt-48 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Learn. Build. <span className="text-red-500">Share.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              I'm obsessively exploring AI Voice Agents, building useful tools, and teaching what I learn through
              YouTube.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-red-500 hover:bg-red-600">
                Watch My Videos <Youtube className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                See My Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8 mt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">My Journey</h2>
              <p className="text-gray-600 mb-4">
                After 20+ years in the semiconductor industry, I quit my corporate job in May 2025 to fully embrace what
                I've always loved: exploring systems, mastering tools, and explaining complex concepts in digestible
                ways.
              </p>
              <p className="text-gray-600 mb-6">
                I'm not rushing to monetize. I'm focused on showing up regularly, building tools that solve real
                problems, and teaching generously. The opportunities will follow.
              </p>

              {/* Visual Loop */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">The Creator's Cycle</h3>
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold mb-2">
                      1
                    </div>
                    <p className="text-sm font-medium text-gray-700">Learn</p>
                  </div>
                  <div className="flex-1 h-0.5 bg-red-200 mx-2"></div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold mb-2">
                      2
                    </div>
                    <p className="text-sm font-medium text-gray-700">Build</p>
                  </div>
                  <div className="flex-1 h-0.5 bg-red-200 mx-2"></div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold mb-2">
                      3
                    </div>
                    <p className="text-sm font-medium text-gray-700">Share</p>
                  </div>
                  <div className="flex-1 h-0.5 bg-red-200 mx-2"></div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold mb-2">
                      ∞
                    </div>
                    <p className="text-sm font-medium text-gray-700">Repeat</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What I'm About</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-red-500 text-sm">✓</span>
                  </div>
                  <p className="text-gray-600">Obsessively learning about AI Voice Agents</p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-red-500 text-sm">✓</span>
                  </div>
                  <p className="text-gray-600">Building cool tools on my own schedule</p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-red-500 text-sm">✓</span>
                  </div>
                  <p className="text-gray-600">Teaching technical concepts through YouTube</p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-red-500 text-sm">✓</span>
                  </div>
                  <p className="text-gray-600">Attracting opportunities by sharing knowledge</p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-red-500 text-sm">✓</span>
                  </div>
                  <p className="text-gray-600">Creating a flexible, personal brand for a curious creator</p>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tools which I use on a daily basis.</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These are the technologies I'm exploring, mastering, and teaching about in my content
            </p>
          </div>

          <div className="relative overflow-hidden">
            <motion.div
              className="flex space-x-8"
              animate={{ x: [0, -1000] }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {[...tools, ...tools, ...tools].map((tool, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center overflow-hidden"
                >
                  <Image
                    src={tool.logo || "/placeholder.svg"}
                    alt={tool.name}
                    width={32}
                    height={32}
                    className="rounded object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50" ref={containerRef}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explore My Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These are the tools and experiments I'm building as I explore the world of AI voice agents and automation
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} scrollYProgress={scrollYProgress} />
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Learn With Me On YouTube</h2>
              <p className="text-gray-600 mb-6">
                I break down complex technical concepts into digestible tutorials, sharing everything I learn about AI
                voice agents, automation, and tool mastery.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-red-500 flex items-center justify-center mr-3 mt-0.5 text-white text-xs">
                    1
                  </div>
                  <p className="text-gray-700">Step-by-step tutorials on building voice agents</p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-red-500 flex items-center justify-center mr-3 mt-0.5 text-white text-xs">
                    2
                  </div>
                  <p className="text-gray-700">Tool comparisons and honest reviews</p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-red-500 flex items-center justify-center mr-3 mt-0.5 text-white text-xs">
                    3
                  </div>
                  <p className="text-gray-700">Behind-the-scenes of my learning process</p>
                </li>
              </ul>
              <Button className="bg-red-500 hover:bg-red-600">
                Subscribe to My Channel <Youtube className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-md">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-16 w-16 rounded-full bg-red-500 flex items-center justify-center cursor-pointer">
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="YouTube Video Thumbnail"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by Professionals</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Most of my client work is locked behind NDAs (apparently "revolutionary AI voice agent that will change
              everything" is still top secret 🤫), but here are some genuine reactions from people who've experienced
              the SwissArmyNick magic firsthand.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Star Rating */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ⭐
                    </span>
                  ))}
                </div>

                {/* Testimonial Content */}
                <p className="text-gray-700 text-sm leading-relaxed mb-6">{testimonial.content}</p>

                {/* Author Info */}
                <div className="flex items-center space-x-3">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{testimonial.author}</p>
                    <p className="text-gray-500 text-xs">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Join Me On This Journey</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm not focused on monetization right now. I just want to show up regularly, build useful tools, and teach
            what I learn. Eventually, people will ask:
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-50 p-6 rounded-2xl">
              <p className="text-lg font-medium text-gray-900 mb-2">"Can I pay you for this?"</p>
              <p className="text-gray-600 text-sm">When the value becomes obvious</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl">
              <p className="text-lg font-medium text-gray-900 mb-2">"Can I use this tool?"</p>
              <p className="text-gray-600 text-sm">When the utility is undeniable</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl">
              <p className="text-lg font-medium text-gray-900 mb-2">"Can you help my business?"</p>
              <p className="text-gray-600 text-sm">When the expertise is proven</p>
            </div>
          </div>

          <Button size="lg" className="bg-red-500 hover:bg-red-600">
            Subscribe to My YouTube <Youtube className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="mb-4"></div>
              <p className="text-gray-400 mb-6 max-w-md">
                Creative developer and explorer crafting digital experiences and sharing knowledge about AI voice agents
                and automation tools.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://youtube.com/@swissarmynick"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-700 p-3 rounded-full transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="https://x.com/swissarmynick"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/swissarmynick"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="mailto:nick@swissarmynick.com"
                  className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.91L12 10.09l9.455-6.269h.909c.904 0 1.636.732 1.636 1.636z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Email CTA Section */}
            <div className="bg-gray-800 rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-2">Let's Connect</h3>
              <p className="text-gray-400 text-sm mb-4">Have a question or just want to chat about AI voice agents?</p>
              <a href="mailto:nick@swissarmynick.com">
                <Button className="w-full bg-red-600 hover:bg-red-700">Send me an email</Button>
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 SwissArmyNick. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ProjectCard({
  project,
  index,
  scrollYProgress,
}: {
  project: (typeof projects)[0]
  index: number
  scrollYProgress: any
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: false, margin: "-20%" })

  const y = useTransform(scrollYProgress, [index * 0.25, (index + 1) * 0.25], [50, -50])

  const scale = useTransform(scrollYProgress, [index * 0.25, (index + 1) * 0.25], [0.98, 1])

  return (
    <motion.div
      ref={cardRef}
      style={{ y, scale }}
      className={`sticky top-20 bg-gradient-to-br ${project.gradient} rounded-3xl p-8 md:p-12 shadow-xl`}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{project.title}</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-3 mb-8">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="bg-white/50 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-gray-800"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" className="bg-white/50 backdrop-blur-sm hover:bg-white/70">
              View Project <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Github className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="relative">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            width={600}
            height={400}
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </motion.div>
  )
}
