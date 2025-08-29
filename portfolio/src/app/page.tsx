"use client"

import type React from "react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Cloud,
  Server,
  Database,
  Shield,
  Code,
  Zap,
  Award,
  CheckCircle,
  Clock,
  Target,
} from "lucide-react"

export default function Portfolio() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const skills = [
    { name: "AWS", icon: Cloud, description: "Amazon Web Services" },
    { name: "Docker", icon: Server, description: "Containerization" },
    { name: "Kubernetes", icon: Database, description: "Container Orchestration" },
    { name: "Terraform", icon: Code, description: "Infrastructure as Code" },
    { name: "Security", icon: Shield, description: "Cloud Security" },
    { name: "DevOps", icon: Zap, description: "CI/CD Pipelines" },
  ]

  const certifications = [
    {
      name: "AWS Cloud Practitioner",
      provider: "AWS",
      status: "completed",
      date: "2024",
      level: "Foundational",
      description: "Cloud fundamentals and AWS services overview",
    },
    {
      name: "AWS Solutions Architect Associate",
      provider: "AWS",
      status: "completed",
      date: "2025",
      level: "Associate",
      description: "Design and deploy scalable systems on AWS",
    },
    {
      name: "Terraform Associate",
      provider: "HashiCorp",
      status: "in-progress",
      date: "2025",
      level: "Associate",
      description: "Infrastructure as Code fundamentals and best practices",
    },
    {
      name: "AWS DevOps Engineer Professional",
      provider: "AWS",
      status: "upcoming",
      date: "2025 - 2026",
      level: "Professional",
      description: "Advanced CI/CD and infrastructure automation",
    },
    {
      name: "AWS Security Speciality",
      provider: "AWS",
      status: "upcoming",
      date: "2026",
      level: "Specialty",
      description: "Advanced security practices and compliance",
    },
  ]

  const projects = [
    {
      title: "From Monolith to Microservices: Modernizing an E-Commerce App",
      description:
        "Modernizing a monolithic e-commerce app into a scalable, serverless microservices architecture using AWS",
      image: "/microservices.webp",
      tech: ["Lambda", "DynamoDB", "API Gateway", "CloudWatch", "CloudFront", "Cognito", "Route 53", "EventBridge"],
      link: "https://medium.com/@CloudRizz/from-monolith-to-microservices-modernizing-an-e-commerce-app-on-aws-6648f4035a73",
    },
    {
      title: "Fitness Tracking Application",
      description: "Transforming a fast-growing tech startup's AWS-powered fitness app.",
      image: "/fitness.webp",
      tech: ["AWS", "CloudFormation", "IAM", "S3"],
      link: "https://medium.com/@CloudRizz/i-was-approached-by-a-startup-company-which-is-a-fast-growing-tech-startup-that-recently-launched-cb6a7265a8a5",
    },
    {
      title: "Container Orchestration Platform",
      description:
        "Developed a comprehensive container orchestration platform with automated deployment and monitoring capabilities.",
      image: "/kubernetes-orchestration.png",
      tech: ["Kubernetes", "Docker", "Helm", "Prometheus"],
      link: "#",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case "in-progress":
        return <Clock className="w-5 h-5 text-yellow-500" />
      case "upcoming":
        return <Target className="w-5 h-5 text-gray-400" />
      default:
        return <Award className="w-5 h-5 text-gray-400" />
    }
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case "foundational":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      case "associate":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "professional":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
      case "speciality":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="opacity-0 animate-fade-in-up">
            <img
              src="/riz1.jpg"
              alt="Rizwan Hussain"
              className="w-40 h-40 rounded-full mx-auto mb-8 border-4 border-accent/20"
            />
          </div>
          <div className="opacity-0 animate-fade-in-up animate-delay-200">
            <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-4 font-[family-name:var(--font-space-grotesk)]">
              Rizwan Hussain
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8">
              Cloud Engineer | Innovating Scalable Solutions
            </p>
          </div>
          <div className="opacity-0 animate-fade-in-up animate-delay-400">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Passionate about building robust, scalable cloud infrastructure that powers the next generation of
              applications.
            </p>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="opacity-0 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-center mb-16 font-[family-name:var(--font-space-grotesk)]">
              About Me
            </h2>
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Hi, I'm Rizwan! I'm an AWS Cloud Engineer who loves designing secure and reliable cloud solutions
                that actually make life easier for businesses. Over the past few years, I've worked on everything from
                building serverless applications and setting up disaster recovery plans, to improving security
                frameworks and cutting deployment times with automation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                I'm AWS certified (Cloud Practitioner and Solutions Architect Associate) and currently diving deeper
                into DevOps and cloud security. What drives me most is solving problems and creating systems that are
                not just technically sound, but also practical for the people using them.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                Before moving into cloud engineering, I worked in leadership and operations roles—so I bring a mix of
                technical skills and real-world business experience to the table. When I'm not working with the cloud,
                you'll probably find me lifting weights, planning my next trip, or exploring new places.
              </p>

              <div className="flex flex-wrap justify-center gap-4 ml-8 md:ml-16">
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  AWS Certified
                </Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  Solutions Architect
                </Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  DevOps Expert
                </Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  Security Focused
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="opacity-0 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-center mb-12 font-[family-name:var(--font-space-grotesk)]">
              Skills & Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <Card
                  key={skill.name}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6 text-center">
                    <skill.icon className="w-12 h-12 mx-auto mb-4 text-accent group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-semibold mb-2 font-[family-name:var(--font-space-grotesk)]">
                      {skill.name}
                    </h3>
                    <p className="text-muted-foreground">{skill.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="opacity-0 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-center mb-12 font-[family-name:var(--font-space-grotesk)]">
              Certification Roadmap
            </h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

              <div className="space-y-8">
                {certifications.map((cert, index) => (
                  <div key={cert.name} className="relative flex items-start gap-6">
                    {/* Timeline dot */}
                    <div className="hidden md:flex absolute left-6 w-4 h-4 bg-background border-2 border-accent rounded-full -translate-x-1/2"></div>

                    <Card
                      className={`flex-1 transition-all duration-300 hover:shadow-lg ${
                        cert.status === "completed"
                          ? "border-green-200 bg-green-50/50 dark:border-green-800 dark:bg-green-950/20"
                          : cert.status === "in-progress"
                            ? "border-yellow-200 bg-yellow-50/50 dark:border-yellow-800 dark:bg-yellow-950/20"
                            : "border-gray-200 bg-gray-50/50 dark:border-gray-800 dark:bg-gray-950/20"
                      }`}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              {getStatusIcon(cert.status)}
                              <h3 className="text-xl font-semibold font-[family-name:var(--font-space-grotesk)]">
                                {cert.name}
                              </h3>
                            </div>
                            <div className="flex items-center gap-3 mb-3">
                              <Badge variant="outline" className="text-xs">
                                {cert.provider}
                              </Badge>
                              <Badge className={`text-xs ${getLevelColor(cert.level)}`}>{cert.level}</Badge>
                              <span className="text-sm text-muted-foreground">{cert.date}</span>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">{cert.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                Continuous learning is key to staying current in cloud technology
              </p>
              <div className="flex justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Completed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-yellow-500" />
                  <span>In Progress</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-gray-400" />
                  <span>Upcoming</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="opacity-0 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-center mb-12 font-[family-name:var(--font-space-grotesk)]">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card
                  key={project.title}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-contain bg-gray-50 dark:bg-gray-900 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 font-[family-name:var(--font-space-grotesk)]">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors bg-transparent"
                      onClick={() => {
                        if (project.link && project.link !== "#") {
                          window.open(project.link, "_blank", "noopener,noreferrer")
                        }
                      }}
                      disabled={!project.link || project.link === "#"}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="opacity-0 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-center mb-12 font-[family-name:var(--font-space-grotesk)]">
              Get In Touch
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-6 font-[family-name:var(--font-space-grotesk)]">
                  Let's Connect
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm always interested in discussing new opportunities, innovative projects, or just connecting with
                  fellow cloud enthusiasts. Feel free to reach out!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-accent" />
                    <span>rizwan.hussain@email.com</span>
                  </div>
                  <div className="flex gap-4 mt-6">
                    <a href="https://github.com/CloudRizz" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon">
                        <Github className="w-5 h-5" />
                      </Button>
                    </a>
                    <a href="https://www.linkedin.com/in/riz-hussain" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon">
                        <Linkedin className="w-5 h-5" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Your Message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground">© 2025 Rizwan Hussain. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
