"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Code2,
  Music,
  Zap,
  Globe,
  Smartphone,
  Palette,
  Mail,
  Phone,
  MapPin,
  Check,
  Star,
  ArrowRight,
  Menu,
  X,
  Github,
  Linkedin,
  Twitter,
  Sparkles,
  Shield,
  Rocket,
} from "lucide-react"
import Image from "next/image"

export default function UltiplexProductions() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    package: "",
  })

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
      setIsMenuOpen(false)
    }
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Create mailto link
    const subject = `Website Inquiry - ${formData.package ? formData.package + " Package" : "General"}`
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APackage: ${formData.package}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`
    const mailtoLink = `mailto:brendynmitchell18@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`

    window.location.href = mailtoLink

    // Reset form
    setFormData({ name: "", email: "", message: "", package: "" })
  }

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "pricing", "contact", "sponsor"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const packages = [
    {
      name: "Basic",
      price: "£550",
      delivery: "7 days",
      features: [
        "Responsive design",
        "Up to 5 pages",
        "Contact form",
        "Basic SEO",
        "Mobile optimization",
        "Social media integration",
      ],
      maintenance: "£50/month",
      maintenanceFeatures: ["Security updates", "Content updates", "Basic support", "Monthly backups"],
    },
    {
      name: "Advanced",
      price: "£800",
      delivery: "7 days (4 days express)",
      features: [
        "Everything in Basic",
        "Up to 10 pages",
        "Advanced animations",
        "CMS integration",
        "E-commerce ready",
        "Advanced SEO",
        "Analytics setup",
      ],
      maintenance: "£150/month",
      maintenanceFeatures: [
        "Everything in Basic",
        "Performance monitoring",
        "Advanced support",
        "Weekly backups",
        "Content management",
      ],
    },
    {
      name: "Premium",
      price: "£950",
      delivery: "5 days",
      features: [
        "Everything in Advanced",
        "Unlimited pages",
        "Custom functionality",
        "Advanced integrations",
        "Priority support",
        "Performance optimization",
        "30% off maintenance",
      ],
      maintenance: "£300/month (£210 with discount)",
      maintenanceFeatures: [
        "Everything in Advanced",
        "Daily backups",
        "Priority support",
        "Custom features",
        "Performance optimization",
        "Security monitoring",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground selection-blue">
      {/* Navigation */}
      <nav className="fixed top-0 w-full glass-effect z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Image
                  src="/images/ultiplex-logo.png"
                  alt="Ultiplex Productions Logo"
                  width={40}
                  height={40}
                  className="rounded-full logo-glow"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Code2 className="h-6 w-6 text-primary animate-pulse-glow" />
                <Music className="h-5 w-5 text-accent" />
              </div>
              <span className="text-xl font-bold gradient-text">Ultiplex Productions</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {["home", "about", "services", "pricing", "contact", "sponsor"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 px-3 py-2 rounded-lg ${
                    activeSection === item
                      ? "text-primary bg-primary/10 glass-effect"
                      : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} className="hover-glow">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border glass-effect">
              <div className="flex flex-col space-y-2">
                {["home", "about", "services", "pricing", "contact", "sponsor"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize text-left py-3 px-4 rounded-lg transition-all duration-300 ${
                      activeSection === item
                        ? "text-primary bg-primary/10 glass-effect"
                        : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float"></div>
          <div
            className="absolute top-40 right-20 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/4 w-24 h-24 bg-primary/5 rounded-full blur-xl animate-float"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center animate-fade-in-up">
            <div className="flex justify-center items-center space-x-6 mb-8">
              <div className="relative">
                <Image
                  src="/images/ultiplex-logo.png"
                  alt="Ultiplex Productions"
                  width={80}
                  height={80}
                  className="rounded-full logo-glow animate-pulse-glow"
                />
              </div>
              <Code2 className="h-16 w-16 text-primary animate-pulse-glow" />
              <Music className="h-12 w-12 text-accent animate-float" />
              <Zap className="h-14 w-14 text-primary animate-pulse-glow" style={{ animationDelay: "1s" }} />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Ultiplex Productions</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto text-balance leading-relaxed">
              Helping businesses get online exposure and boost sales with quality websites that satisfy and deliver
              exceptional results
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={() => scrollToSection("pricing")}
                className="btn-primary hover-glow animate-pulse-glow"
              >
                View Packages <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="glass-effect hover-glow"
              >
                Get In Touch <Sparkles className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="absolute inset-0 glass-effect"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">About Ultiplex Productions</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-balance leading-relaxed">
              Led by CEO Brendyn Mitchell, we specialize in freelance website building with a commitment to quality that
              satisfies businesses and drives exponential growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h3 className="text-3xl font-bold mb-6 gradient-text">Our Mission</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                We believe every business deserves a professional online presence that not only looks spectacular but
                drives real, measurable results. Our focus on quality ensures that every website we create exceeds the
                highest standards and surpasses client expectations.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <Card className="text-center p-6 card-hover glass-effect">
                  <Globe className="h-10 w-10 text-primary mx-auto mb-3 animate-pulse-glow" />
                  <div className="text-3xl font-bold text-primary gradient-text">100+</div>
                  <div className="text-sm text-muted-foreground">Websites Built</div>
                </Card>
                <Card className="text-center p-6 card-hover glass-effect">
                  <Star className="h-10 w-10 text-accent mx-auto mb-3 animate-float" />
                  <div className="text-3xl font-bold text-accent">5.0</div>
                  <div className="text-sm text-muted-foreground">Client Rating</div>
                </Card>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <Card className="p-8 card-hover glass-effect">
                <CardHeader className="text-center pb-6">
                  <div className="relative w-24 h-24 mx-auto mb-6">
                    <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center glass-effect">
                      <Code2 className="h-12 w-12 text-primary animate-pulse-glow" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl gradient-text">Brendyn Mitchell</CardTitle>
                  <CardDescription className="text-lg">CEO & Lead Developer</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground text-lg leading-relaxed">
                    "Quality is not just our standard—it's our promise. Every website we create is built to help
                    businesses thrive and dominate in the digital world."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-balance leading-relaxed">
              Comprehensive web development solutions designed to boost your online presence and drive exceptional sales
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="h-12 w-12 text-primary" />,
                title: "Website Development",
                description: "Custom websites built from scratch with cutting-edge technologies and responsive design",
              },
              {
                icon: <Smartphone className="h-12 w-12 text-accent" />,
                title: "Mobile Optimization",
                description: "Ensure your website looks perfect and functions flawlessly on all devices and platforms",
              },
              {
                icon: <Rocket className="h-12 w-12 text-primary" />,
                title: "Performance Optimization",
                description: "Lightning-fast loading speeds and optimized user experience for superior conversions",
              },
              {
                icon: <Palette className="h-12 w-12 text-accent" />,
                title: "Custom Design",
                description: "Unique, brand-focused designs that set your business apart from the competition",
              },
              {
                icon: <Code2 className="h-12 w-12 text-primary" />,
                title: "Technical Integration",
                description: "Advanced functionality including e-commerce, CMS, and seamless third-party integrations",
              },
              {
                icon: <Shield className="h-12 w-12 text-accent" />,
                title: "Maintenance & Support",
                description: "Ongoing support and maintenance to keep your website secure, updated, and performing",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="p-6 card-hover glass-effect animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mb-4 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl gradient-text">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 relative">
        <div className="absolute inset-0 glass-effect"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Website Packages</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-balance leading-relaxed">
              Choose the perfect package for your business needs. All packages include professional design and
              development with exceptional quality.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`p-6 relative card-hover ${pkg.name === "Premium" ? "border-primary shadow-2xl glass-effect" : "glass-effect"} animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {pkg.name === "Premium" && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary animate-pulse-glow">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                )}

                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl gradient-text">{pkg.name}</CardTitle>
                  <div className="text-5xl font-bold text-primary mb-2 gradient-text">{pkg.price}</div>
                  <CardDescription className="text-lg">Delivery: {pkg.delivery}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Website Features:</h4>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm">
                          <Check className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-border pt-4">
                    <h4 className="font-semibold mb-2 text-lg">Maintenance Plan:</h4>
                    <div className="text-lg font-bold text-primary mb-2 gradient-text">{pkg.maintenance}</div>
                    <ul className="space-y-1">
                      {pkg.maintenanceFeatures.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-muted-foreground">
                          <Check className="h-3 w-3 text-accent mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    className={`w-full ${pkg.name === "Premium" ? "btn-primary" : "glass-effect"} hover-glow`}
                    variant={pkg.name === "Premium" ? "default" : "outline"}
                    onClick={() => {
                      setFormData((prev) => ({ ...prev, package: pkg.name }))
                      scrollToSection("contact")
                    }}
                  >
                    Choose {pkg.name} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="p-8 max-w-3xl mx-auto glass-effect card-hover">
              <CardHeader>
                <CardTitle className="text-2xl gradient-text">Premium Maintenance Discount</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Premium package clients receive 30% off our premium maintenance plan (normally £300/month). Additional
                  website purchases require full-price maintenance plans.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-balance leading-relaxed">
              Ready to boost your online presence? Contact us today for a free consultation and transform your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-slide-in-left">
              <h3 className="text-3xl font-bold mb-6 gradient-text">Contact Information</h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4 p-4 glass-effect rounded-lg hover-glow">
                  <Mail className="h-6 w-6 text-primary" />
                  <span className="text-lg">brendynmitchell18@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4 p-4 glass-effect rounded-lg hover-glow">
                  <Phone className="h-6 w-6 text-primary" />
                  <span className="text-lg">Available via email</span>
                </div>
                <div className="flex items-center space-x-4 p-4 glass-effect rounded-lg hover-glow">
                  <MapPin className="h-6 w-6 text-primary" />
                  <span className="text-lg">Remote Services Worldwide</span>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-xl">Follow Us</h4>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm" className="glass-effect hover-glow bg-transparent">
                    <Github className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="sm" className="glass-effect hover-glow bg-transparent">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="sm" className="glass-effect hover-glow bg-transparent">
                    <Twitter className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>

            <Card className="p-8 animate-slide-in-right glass-effect card-hover">
              <CardHeader>
                <CardTitle className="text-2xl gradient-text">Send us a message</CardTitle>
                <CardDescription className="text-lg">
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                      required
                      className="glass-effect text-lg p-4"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      required
                      className="glass-effect text-lg p-4"
                    />
                  </div>
                  <div>
                    <select
                      className="w-full p-4 bg-background border border-border rounded-md glass-effect text-lg"
                      value={formData.package}
                      onChange={(e) => setFormData((prev) => ({ ...prev, package: e.target.value }))}
                    >
                      <option value="">Select a package (optional)</option>
                      <option value="Basic">Basic Package - £550</option>
                      <option value="Advanced">Advanced Package - £800</option>
                      <option value="Premium">Premium Package - £950</option>
                    </select>
                  </div>
                  <div>
                    <Textarea
                      placeholder="Tell us about your project..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                      required
                      className="glass-effect text-lg p-4"
                    />
                  </div>
                  <Button type="submit" className="w-full btn-primary hover-glow text-lg py-4">
                    Send Message <Mail className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sponsor Section */}
      <section id="sponsor" className="py-20 relative">
        <div className="absolute inset-0 glass-effect"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Become a Sponsor</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-balance leading-relaxed">
              Partner with Ultiplex Productions and support quality web development while gaining exposure to our
              rapidly growing client base.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h3 className="text-3xl font-bold mb-6 gradient-text">Sponsorship Benefits</h3>
              <ul className="space-y-4">
                {[
                  "Logo placement on all client websites",
                  "Featured mention in project portfolios",
                  "Social media promotion and recognition",
                  "Priority partnership opportunities",
                  "Exclusive access to client referrals",
                  "Custom sponsorship packages available",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center p-3 glass-effect rounded-lg hover-glow">
                    <Check className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Card className="p-8 animate-slide-in-right glass-effect card-hover">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl gradient-text">Ready to Partner?</CardTitle>
                <CardDescription className="text-lg">
                  Join our network of sponsors and help us deliver quality websites to businesses worldwide.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  <div className="text-5xl font-bold text-primary mb-2 gradient-text">Custom Packages</div>
                  <p className="text-muted-foreground text-lg">Tailored to your budget and goals</p>
                </div>
                <Button
                  size="lg"
                  onClick={() => {
                    setFormData((prev) => ({
                      ...prev,
                      message:
                        "I am interested in becoming a sponsor. Please send me more information about sponsorship packages and opportunities.",
                    }))
                    scrollToSection("contact")
                  }}
                  className="w-full btn-primary hover-glow text-lg py-4"
                >
                  Become a Sponsor <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/images/ultiplex-logo.png"
                  alt="Ultiplex Productions"
                  width={32}
                  height={32}
                  className="rounded-full logo-glow"
                />
                <Code2 className="h-6 w-6 text-primary" />
                <Music className="h-5 w-5 text-accent" />
                <span className="font-bold gradient-text">Ultiplex Productions</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Quality websites that help businesses thrive and dominate online.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 gradient-text">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Website Development</li>
                <li>Mobile Optimization</li>
                <li>E-commerce Solutions</li>
                <li>Maintenance & Support</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 gradient-text">Packages</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Basic - £550</li>
                <li>Advanced - £800</li>
                <li>Premium - £950</li>
                <li>Maintenance Plans</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 gradient-text">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>brendynmitchell18@gmail.com</li>
                <li>Remote Services</li>
                <li>Worldwide Availability</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Ultiplex Productions. All rights reserved. | CEO: Brendyn Mitchell</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
