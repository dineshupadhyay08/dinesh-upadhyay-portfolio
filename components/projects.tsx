"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Signalist — AI Powered Stock Analysis Platform",
    description:
      "A modern fintech platform built with Next.js 16, TypeScript, MongoDB, Finnhub API, and TradingView Widgets. It provides real-time market insights, stock research tools, personalized watchlists, secure authentication, and AI-powered user onboarding.",

    image: "/stock_Analysis.png",

    tags: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Finnhub API",
      "TradingView",
      "Better Auth",
      "Tailwind CSS",
      "Inngest",
    ],

    demoUrl: "https://stock-analysis-app-ten.vercel.app/",

    githubUrl: "https://github.com/dineshupadhyay08/Stock_Analysis_App",

    features: [
      "Real-time market dashboard with TradingView widgets",
      "Stock analysis pages with charts, news, and company insights",
      "Personalized watchlists for tracking favorite stocks",
      "Secure authentication and protected user sessions",
      "AI-powered onboarding based on investor preferences",
      "Automated email workflows using Inngest and Nodemailer",
    ],
  },
  {
    title: "Wanderlust | Explore Places",
    description:
      "A full-stack web app to explore, list, and review tourist destinations, with features like user login, category filtering, reviews, and secure CRUD operations.",
    image: "/wanderlust.png",
    tags: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "EJS",
      "Bootstrap",
      "Cloudinary",
      "Passport.js",
    ],
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
    title: "GymFlow — Gym Management & Membership Platform",
    description:
      "A full-stack gym management platform developed for managing memberships, subscriptions, payments, and member operations. Designed with separate user and admin experiences to help fitness businesses streamline daily operations and track growth efficiently.",
    image: "/Gym_Preview.png",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
      "Admin Dashboard",
      "SaaS",
    ],
    demoUrl: "https://front-end-alpha-pearl-78.vercel.app",
    githubUrl: "https://github.com/dineshupadhyay08/fitflow-mobile",
    features: [
      "Comprehensive member and membership management system",
      "Subscription tracking with payment history and due-date monitoring",
      "Business analytics dashboard with revenue and membership insights",
      "Secure JWT authentication with role-based access control",
      "Responsive admin panel for managing gym operations",
      "Member profiles, membership plans, and renewal workflows",
    ],
  },
];

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
                  {project.githubUrl && (
                    <Button size="sm" variant="outline">
                      <Link
                        href={project.githubUrl}
                        className="flex items-center"
                        target="_blank"
                      >
                        <Github className="mr-2 h-4 w-4" /> Code
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
