"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Database,
  Server,
  Palette,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", updateMousePosition)
    return () => window.removeEventListener("mousemove", updateMousePosition)
  }, [])

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Plataforma completa de e-commerce com Django e PostgreSQL",
      tech: ["Django", "PostgreSQL", "JavaScript", "CSS"],
      image: "/placeholder.svg?height=300&width=500",
      link: "#",
    },
    {
      title: "Task Management App",
      description: "Aplicativo de gerenciamento de tarefas com interface moderna",
      tech: ["Python", "Django", "HTML", "CSS"],
      image: "/placeholder.svg?height=300&width=500",
      link: "#",
    },
    {
      title: "Portfolio Website",
      description: "Site portfólio responsivo com animações avançadas",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "/placeholder.svg?height=300&width=500",
      link: "#",
    },
  ]

  const skills = [
    { name: "HTML", icon: Code, color: "#E34F26" },
    { name: "CSS", icon: Palette, color: "#1572B6" },
    { name: "JavaScript", icon: Code, color: "#F7DF1E" },
    { name: "Python", icon: Server, color: "#3776AB" },
    { name: "PostgreSQL", icon: Database, color: "#336791" },
    { name: "Django", icon: Server, color: "#092E20" },
    { name: "Tailwind", icon: Palette, color: "#06B6D4" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
      {/* Cursor personalizado */}
      <motion.div
        className="fixed w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Partículas de fundo */}
      <motion.div className="fixed inset-0 opacity-20" style={{ y: backgroundY }}>
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1
              className="text-6xl lg:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              ACADL
            </motion.h1>
            <motion.p
              className="text-xl lg:text-2xl text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Web Developer & Digital Innovator
            </motion.p>
            <motion.p
              className="text-lg text-gray-400 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Transformo ideias em experiências digitais únicas. Especializado em desenvolvimento web full-stack com
              foco em inovação e performance.
            </motion.p>
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <Button
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300"
                size="lg"
              >
                Ver Projetos
              </Button>
              <Button
                variant="outline"
                className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transform hover:scale-105 transition-all duration-300 bg-transparent"
                size="lg"
              >
                Fale Comigo
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative w-80 h-80 mx-auto">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-30"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
              <div className="relative w-full h-full bg-gray-800 rounded-full border-4 border-purple-500 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-6xl font-bold text-purple-400">
                  FOTO
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl lg:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Minhas Skills
          </motion.h2>

          <div className="flex justify-center items-center min-h-[600px]">
            <motion.div
              className="relative w-96 h-96"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
            >
              {/* Globo base */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-purple-500/30 bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm"
                animate={{
                  rotateY: [0, 360],
                  rotateX: [0, 15, 0, -15, 0],
                }}
                transition={{
                  rotateY: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                  rotateX: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                }}
              />

              {/* Linhas do globo */}
              <div className="absolute inset-0 rounded-full border border-purple-400/20" />
              <div className="absolute inset-4 rounded-full border border-purple-400/15" />
              <div className="absolute inset-8 rounded-full border border-purple-400/10" />

              {/* Ícones das tecnologias posicionados no globo */}
              {skills.map((skill, index) => {
                const angle = (index * 360) / skills.length
                const radius = 140
                const x = Math.cos((angle * Math.PI) / 180) * radius
                const y = Math.sin((angle * Math.PI) / 180) * radius
                const z = Math.sin((angle * Math.PI) / 90) * 50

                return (
                  <motion.div
                    key={skill.name}
                    className="absolute w-16 h-16 flex items-center justify-center rounded-full border-2 border-gray-700 bg-gray-800/80 backdrop-blur-sm group cursor-pointer"
                    style={{
                      left: `calc(50% + ${x}px - 32px)`,
                      top: `calc(50% + ${y}px - 32px)`,
                      transform: `translateZ(${z}px)`,
                    }}
                    animate={{
                      rotateY: [0, -360],
                      y: [0, -10, 0],
                    }}
                    transition={{
                      rotateY: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                      y: {
                        duration: 2 + index * 0.2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: index * 0.1,
                      },
                    }}
                    whileHover={{
                      scale: 1.3,
                      borderColor: skill.color,
                      boxShadow: `0 0 20px ${skill.color}50`,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <skill.icon
                      className="w-8 h-8 text-gray-300 group-hover:text-white transition-all duration-300"
                      style={{ color: skill.color }}
                    />

                    {/* Tooltip */}
                    <motion.div
                      className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"
                      initial={{ y: 10 }}
                      whileHover={{ y: 0 }}
                    >
                      {skill.name}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
                    </motion.div>
                  </motion.div>
                )
              })}

              {/* Efeito de brilho central */}
              <motion.div
                className="absolute inset-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-sm"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              {/* Partículas orbitando */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-purple-400 rounded-full"
                  style={{
                    left: "50%",
                    top: "50%",
                  }}
                  animate={{
                    rotate: [0, 360],
                    x: [0, Math.cos((i * 45 * Math.PI) / 180) * 200, 0],
                    y: [0, Math.sin((i * 45 * Math.PI) / 180) * 200, 0],
                  }}
                  transition={{
                    duration: 8 + i,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                    delay: i * 0.5,
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Texto descritivo */}
          <motion.div
            className="text-center mt-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-300 mb-6">
              Tecnologias que domino e utilizo para criar experiências digitais incríveis
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill.name}
                  className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-sm font-medium hover:border-purple-500 transition-all duration-300"
                  style={{ color: skill.color }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl lg:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Meus Projetos
          </motion.h2>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, rotateX: 5 }}
                className="group"
              >
                <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500 transition-all duration-300 backdrop-blur-sm overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <motion.div
                      className="absolute top-4 right-4 opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </motion.div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl lg:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Fale Comigo
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Vamos trabalhar juntos!</h3>
                  <p className="text-gray-400 text-lg">
                    Estou sempre aberto a novos desafios e oportunidades. Entre em contato para discutirmos seu próximo
                    projeto.
                  </p>
                </div>
                <div className="space-y-4">
                  <motion.div className="flex items-center space-x-4 group cursor-pointer" whileHover={{ x: 10 }}>
                    <Mail className="w-6 h-6 text-purple-400 group-hover:text-pink-400 transition-colors duration-300" />
                    <span className="group-hover:text-purple-400 transition-colors duration-300">acadl@email.com</span>
                  </motion.div>
                  <motion.div className="flex items-center space-x-4 group cursor-pointer" whileHover={{ x: 10 }}>
                    <Phone className="w-6 h-6 text-purple-400 group-hover:text-pink-400 transition-colors duration-300" />
                    <span className="group-hover:text-purple-400 transition-colors duration-300">
                      +55 (11) 99999-9999
                    </span>
                  </motion.div>
                  <motion.div className="flex items-center space-x-4 group cursor-pointer" whileHover={{ x: 10 }}>
                    <MapPin className="w-6 h-6 text-purple-400 group-hover:text-pink-400 transition-colors duration-300" />
                    <span className="group-hover:text-purple-400 transition-colors duration-300">
                      São Paulo, Brasil
                    </span>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold">Redes Sociais</h3>
                <div className="space-y-4">
                  {[
                    { icon: Github, label: "GitHub", url: "#" },
                    { icon: Linkedin, label: "LinkedIn", url: "#" },
                    { icon: Instagram, label: "Instagram", url: "#" },
                  ].map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-purple-500 transition-all duration-300 group"
                      whileHover={{ scale: 1.02, x: 10 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <social.icon className="w-6 h-6 text-purple-400 group-hover:text-pink-400 transition-colors duration-300" />
                      <span className="group-hover:text-purple-400 transition-colors duration-300">{social.label}</span>
                      <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <motion.p
            className="text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            © 2024 ACADL. Desenvolvido com 💜 e muito código.
          </motion.p>
        </div>
      </footer>
    </div>
  )
}
