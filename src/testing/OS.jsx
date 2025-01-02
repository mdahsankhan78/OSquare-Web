import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion"

const heroContent = {
  enterprise: {
    badge: "OSquare for Enterprise",
    title: "Create beautiful experiences",
    description: "Transform your ideas into reality with our powerful platform. Start building something extraordinary today.",
    background: "bg-gradient-to-r from-blue-50 to-indigo-50",
    image: "/Slider1.jpg?height=1080&width=1920&text=Enterprise"
  },
  business: {
    badge: "OSquare for Business",
    title: "Scale your business faster",
    description: "Empower your team with tools designed for modern businesses. Grow with confidence.",
    background: "bg-gradient-to-r from-slate-50 to-gray-50",
    image: "/placeholder.svg?height=1080&width=1920&text=Business"
  },
  education: {
    badge: "OSquare for Education",
    title: "Inspire future innovators",
    description: "Provide your students with cutting-edge tools. Shape the next generation of creators.",
    background: "bg-gradient-to-r from-purple-50 to-pink-50",
    image: "/placeholder.svg?height=1080&width=1920&text=Education"
  },
  individual: {
    badge: "OSquare for Individuals",
    title: "Bring your ideas to life",
    description: "Start your journey with professional tools. Create something amazing today.",
    background: "bg-gradient-to-r from-green-50 to-emerald-50",
    image: "/placeholder.svg?height=1080&width=1920&text=Individual"
  }
}

const tabs = [
  { id: "enterprise", label: "Enterprise" },
  { id: "business", label: "Business" },
  { id: "education", label: "Education" },
  { id: "individual", label: "Individual" },
]

const productMenuItems = [
  {
    title: "Design",
    items: [
      { name: "Wireframing", description: "Create low-fidelity designs" },
      { name: "Prototyping", description: "Build interactive prototypes" },
      { name: "UI Design", description: "Craft beautiful user interfaces" },
    ],
  },
  {
    title: "Development",
    items: [
      { name: "Web Development", description: "Build responsive websites" },
      { name: "Mobile Development", description: "Create native mobile apps" },
      { name: "Backend Services", description: "Develop scalable APIs" },
    ],
  },
  {
    title: "Marketing",
    items: [
      { name: "SEO Tools", description: "Optimize for search engines" },
      { name: "Social Media", description: "Manage your online presence" },
      { name: "Analytics", description: "Track and analyze user behavior" },
    ],
  },
  {
    title: "Collaboration",
    items: [
      { name: "Project Management", description: "Organize and track projects" },
      { name: "Team Chat", description: "Communicate in real-time" },
      { name: "File Sharing", description: "Share and collaborate on files" },
    ],
  },
]

const navItems = [
  { id: "home", label: "Home" },
  { id: "features", label: "Features" },
  { id: "pricing", label: "Pricing" },
  { id: "contact", label: "Contact" },
]

export default function Hero() {
  const [activeTab, setActiveTab] = useState("enterprise")
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isNavFixed, setIsNavFixed] = useState(false)
  const content = heroContent[activeTab]
  const navRef = useRef(null)
  const navOffsetRef = useRef(null)

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY

      // Check if navbar should be fixed
      if (navOffsetRef.current && navRef.current) {
        if (scrollPosition >= navOffsetRef.current.offsetTop && !isNavFixed) {
          setIsNavFixed(true)
        } else if (scrollPosition < navOffsetRef.current.offsetTop && isNavFixed) {
          setIsNavFixed(false)
        }
      }

      // Update active section
      const sections = navItems.map(item => document.getElementById(item.id))
      sections.forEach((section, index) => {
        if (section && scrollPosition >= section.offsetTop - 100 && (!sections[index + 1] || scrollPosition < sections[index + 1].offsetTop - 100)) {
          setActiveSection(navItems[index].id)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isNavFixed])

  const scrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const navHeight = navRef.current ? navRef.current.offsetHeight : 0
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="relative min-h-screen">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 z-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${content.image})` }}
          />
          <div className={`absolute inset-0 ${content.background} opacity-80`} />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10" ref={navOffsetRef}>
        <header className="container mx-auto flex items-center justify-between p-4">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-bold text-[#172554]">
              <img src="/Logo.svg" alt="OSquare" className="h-8 ml-2" />
            </Link>
            <nav className="hidden md:flex gap-8">
              <div className="relative">
                <button
                  onMouseEnter={() => setIsProductMenuOpen(true)}
                  onMouseLeave={() => setIsProductMenuOpen(false)}
                  className="text-[#172554] hover:text-[#172554]/80"
                >
                  Products
                </button>
                <AnimatePresence>
                  {isProductMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      onMouseEnter={() => setIsProductMenuOpen(true)}
                      onMouseLeave={() => setIsProductMenuOpen(false)}
                      className="absolute left-0 mt-2 w-screen max-w-7xl -translate-x-1/2 px-4"
                    >
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-[#172554] ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-4">
                          {productMenuItems.map((section) => (
                            <div key={section.title}>
                              <h3 className="text-sm font-medium text-[#172554] uppercase tracking-wider">
                                {section.title}
                              </h3>
                              <ul className="mt-4 space-y-4">
                                {section.items.map((item) => (
                                  <li key={item.name} className="flow-root">
                                    <Link href="#" className="block p-3 -m-3 transition duration-150 ease-in-out rounded-md hover:bg-[#172554]/5">
                                      <p className="text-base font-medium text-[#172554]">
                                        {item.name}
                                      </p>
                                      <p className="mt-1 text-sm text-[#172554]/70">
                                        {item.description}
                                      </p>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Link href="#" className="text-[#172554] hover:text-[#172554]/80">Solutions</Link>
              <Link href="#" className="text-[#172554] hover:text-[#172554]/80">Pricing</Link>
              <Link href="#" className="text-[#172554] hover:text-[#172554]/80">Resources</Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/signin" className="text-[#172554] hover:text-[#172554]/80">
              Sign in
            </Link>
            <Link
              href="/get-started"
              className="rounded-md bg-[#172554] px-4 py-2 text-sm font-medium text-white hover:bg-[#172554]/90"
            >
              Get Started
            </Link>
          </div>
        </header>

        <main>
          <section id="home" className="container mx-auto px-4 py-20">
            <div className="mx-auto max-w-3xl text-center">
              <motion.span
                key={content.badge}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="inline-block rounded-full bg-[#172554]/10 px-4 py-1.5 text-sm font-medium text-[#172554] mb-8"
              >
                {content.badge}
              </motion.span>
              <AnimatePresence mode="wait">
                <motion.h1
                  key={content.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="mb-6 text-5xl font-bold tracking-tight text-[#172554]"
                >
                  {content.title}
                </motion.h1>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.p
                  key={content.description}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="mb-12 text-lg text-[#172554]/80"
                >
                  {content.description}
                </motion.p>
              </AnimatePresence>
              <Link
                href="/try-now"
                className="inline-flex items-center rounded-md bg-[#172554] px-6 py-3 text-base font-medium text-white hover:bg-[#172554]/90"
              >
                Try Now
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="mt-20">
              <div className="flex justify-center">
                <div className="inline-flex p-1 bg-[#172554]/10 rounded-full">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`${
                        activeTab === tab.id
                          ? "bg-white text-[#172554] shadow-sm"
                          : "text-[#172554]/70 hover:text-[#172554]"
                      } relative rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#172554]`}
                      style={{
                        WebkitTapHighlightColor: "transparent",
                      }}
                    >
                      {activeTab === tab.id && (
                        <motion.span
                          layoutId="activeTab"
                          className="absolute inset-0 bg-white rounded-full"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      <span className="relative z-10">{tab.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <motion.nav
              className={`bg-white bg-opacity-90 backdrop-blur-sm shadow-md mt-8 ${
                isNavFixed ? 'fixed top-0 left-0 right-0 z-50' : ''
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              ref={navRef}
            >
              <div className="container mx-auto px-4 pt-2">
                <div className="flex items-center justify-between h-16">
                  <div className="flex-1">
                  <div className="hidden md:flex space-x-4">
                    {navItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollTo(item.id)}
                        className={`text-[#172554] hover:text-[#172554]/80 px-3 py-2 rounded-md text-sm font-medium ${
                          activeSection === item.id ? 'bg-[#172554]/10' : ''
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                  </div>
                  <button className="bg-[#172554] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#172554]/90 transition-colors">
                    Get Started
                  </button>
                </div>
              </div>
              <motion.div
                className="h-[2px] bg-[#172554] origin-left"
                style={{ scaleX }}
              />
            </motion.nav>
          </section>

          <section id="features" className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-[#172554] mb-8 text-center">Features</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="bg-[#172554]/5 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-[#172554] mb-4">Feature {item}</h3>
                    <p className="text-[#172554]/80">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="pricing" className="py-20 bg-[#172554]/5">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-[#172554] mb-8 text-center">Pricing Plans</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {['Basic', 'Pro', 'Enterprise'].map((plan) => (
                  <div key={plan} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-[#172554] mb-4">{plan}</h3>
                    <p className="text-[#172554]/80 mb-4">Perfect for {plan.toLowerCase()} users</p>
                    <p className="text-2xl font-bold text-[#172554] mb-6">${plan === 'Basic' ? '9.99' : plan === 'Pro' ? '19.99' : '49.99'}<span className="text-sm font-normal">/month</span></p>
                    <button className="w-full bg-[#172554] text-white py-2 px-4 rounded-md hover:bg-[#172554]/90 transition-colors">
                      Choose Plan
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-[#172554] mb-8 text-center">Contact Us</h2>
              <form className="max-w-lg mx-auto">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-[#172554] mb-2">Name</label>
                  <input type="text" id="name" className="w-full px-3 py-2 border border-[#172554]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#172554]/50" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-[#172554] mb-2">Email</label>
                  <input type="email" id="email" className="w-full px-3 py-2 border border-[#172554]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#172554]/50" />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-[#172554] mb-2">Message</label>
                  <textarea id="message" rows={4} className="w-full px-3 py-2 border border-[#172554]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#172554]/50"></textarea>
                </div>
                <button type="submit" className="w-full bg-[#172554] text-white py-2 px-4 rounded-md hover:bg-[#172554]/90 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

