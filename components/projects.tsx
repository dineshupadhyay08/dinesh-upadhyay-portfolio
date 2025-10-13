"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "E-Commerce-Website",
    description:
      "A responsive front-end e-commerce website that displays a variety of products, categories, and modern shopping UI using HTML, CSS, and JavaScript. It offers a clean design and smooth user experience for exploring online products.",
    image: "/E-Commerce-Website_.png",
     tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    demoUrl: "https://dineshupadhyay08.github.io/E-Commerce-Website/",
    githubUrl: "https://github.com/dineshupadhyay08/E-Commerce-Website",
  features: [
    "Fully responsive design using Bootstrap",
    "Category-based product listing",
    "Interactive UI with smooth transitions",
    "Clean and modern e-commerce layout",
  ]
  },
  {
    title: "Wanderlust | Explore Places",
    description:
      "A full-stack web app to explore, list, and review tourist destinations, with features like user login, category filtering, reviews, and secure CRUD operations.",
    image: "/wanderlust.png",
    tags: ["Node.js", "Express.js", "MongoDB", "EJS", "Bootstrap", "Cloudinary", "Passport.js"],
    demoUrl: "https://wanderlust-npoq.onrender.com/listings",
    githubUrl: "https://github.com/dineshupadhyay08/Wanderlust",
    features: [
      "User authentication using Passport.js (sign-up, login, logout)",
      "Travel listing management with create, edit, and delete functionality",
      "Cloudinary integration for image uploads on each listing",
      "Server-side data validation and centralized error handling",
      "MongoDB Atlas for cloud-hosted, scalable database management",
    ],
  },
  
  {
    title: "Binkeyit (Blinkit Clonr)-In Progress",
    description:
      "An online grocery shopping platform inspired by Blinkit, built using the MERN stack. It features secure authentication, product browsing, admin management, and modern UI with Tailwind CSS.",
    image: "/In_Progress.png",
    tags: ["ReactJS", "Node.js", "Express.js", "MongoDB Atlas", "Tailwind CSS", "JWT", "Nodemailer",],
    demoUrl: "",
    githubUrl: "",
    features: [
      "OTP-based email verification and password recovery",
      "Secure login/signup with role-based access (JWT + refresh tokens)",
      "Admin panel for product/category management",
      "Add to cart, browse by category, and place orders",
      "Clean and responsive UI with Tailwind CSS",
    ],
  },
  
]

export default function Projects() {
  return (
    <section id="projects" className="py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        <div className="grid gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid md:grid-cols-2 gap-6 border rounded-xl overflow-hidden group"
            >
              <div className="overflow-hidden relative h-[300px] md:h-full border-b md:border-b-0 md:border-r">
                <div className="absolute inset-0 overflow-y-auto scrollbar-hide">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={1200}
                    className="w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">Key Features:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3 pt-2">
                  <Button size="sm">
                    <Link
                      href={project.demoUrl}
                      className="flex items-center"
                      target="_blank"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" /> Live
                    </Link>
                  </Button>
                  {
                    project.githubUrl && (
                      <Button size="sm" variant="outline">
                        <Link
                          href={project.githubUrl}
                          className="flex items-center"
                          target="_blank"
                        >
                          <Github className="mr-2 h-4 w-4" /> Code
                        </Link>
                      </Button>
                    )
                  }
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}