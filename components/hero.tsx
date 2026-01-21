"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download, Mail, MapPin } from "lucide-react";
import { FaNode } from "react-icons/fa";
import {
  RiReactjsFill,
  RiTailwindCssFill,
  RiTwitterXLine,
} from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-6 md:py-10">
      <div className="grid md:grid-cols-3 gap-10 items-center max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 md:col-span-2"
        >
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Dinesh Upadhyay
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              MERN Stack Developer
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              <a href="mailto:dineshupadhyay666@gmail.com">
                dineshupadhyay666@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>Rajasthan, India</span>
            </div>
          </div>

          <p className="text-muted-foreground text-sm sm:text-base">
            A passionate MERN stack developer with hands-on experience in
            building web applications using React, Node.js, and MongoDB. Focused
            on creating clean UI and delivering smooth user experiences with
            modern web technologies.
          </p>

          {/* BUTTONS SECTION */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <Link
              href="/Dinesh_Upadhyay_MERN_Stack_Developer.pdf"
              target="_blank"
              download
            >
              <Button size="sm" className="text-xs sm:text-sm">
                <Download className="mr-2 h-3 w-3 sm:h-4 sm:w-4" /> Resume
              </Button>
            </Link>

            <Link href="https://github.com/dineshupadhyay08" target="_blank">
              <Button
                variant="outline"
                size="sm"
                className="text-xs sm:text-sm"
              >
                <Github className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </Link>

            <Link href="mailto:dineshupadhyay666@gmail.com" target="_blank">
              <Button
                variant="outline"
                size="sm"
                className="text-xs sm:text-sm"
              >
                <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </Link>

            <Link href="#" target="_blank">
              <Button
                variant="outline"
                size="sm"
                className="text-xs sm:text-sm"
              >
                <RiTwitterXLine className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </Link>

            <Link
              href="https://www.linkedin.com/in/dinesh-upadhyay-030487247/"
              target="_blank"
            >
              <Button
                variant="outline"
                size="sm"
                className="text-xs sm:text-sm"
              >
                <Linkedin className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* RIGHT SIDE ANIMATED GRID */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center h-48 md:h-auto"
        >
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md aspect-square">
            {/* Rotating Border */}
            <motion.div
              className="absolute inset-0 rounded-lg"
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.02, 1.02, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* GRID BLOCKS */}
            <div className="absolute inset-0 grid grid-cols-2 gap-2 sm:gap-4 p-2 sm:p-4">
              {/* React Logo */}
              <motion.div
                className="bg-muted rounded-lg p-2 sm:p-4 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="text-4xl text-[#087ea4]"
                >
                  <RiReactjsFill />
                </motion.div>
              </motion.div>

              {/* NodeJS */}
              <motion.div
                className="bg-muted rounded-lg p-2 sm:p-4 flex items-center justify-center"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                <FaNode className="text-4xl text-green-700" />
              </motion.div>

              {/* MongoDB */}
              <motion.div className="bg-muted rounded-lg p-2 sm:p-4 flex items-center justify-center">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-4xl text-green-600"
                >
                  <SiMongodb />
                </motion.div>
              </motion.div>

              {/* Tailwind */}
              <motion.div
                className="bg-muted rounded-lg p-2 sm:p-4 flex items-center justify-center"
                animate={{
                  boxShadow: [
                    "0 0 0 0px rgba(49,130,206,0.1)",
                    "0 0 0 10px rgba(49,130,206,0.1)",
                    "0 0 0 0px rgba(49,130,206,0.1)",
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <RiTailwindCssFill className="text-4xl text-sky-500" />
              </motion.div>
            </div>

            {/* FLOATING BADGES */}
            <motion.div
              className="absolute -top-4 -left-4 bg-background px-3 py-1 rounded-full shadow-md border text-xs"
              animate={{
                y: [0, -5, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              ReactJs
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -right-4 bg-background px-3 py-1 rounded-full shadow-md border text-xs"
              animate={{
                y: [0, 5, 0],
                rotate: [0, -5, 5, 0],
              }}
              transition={{ duration: 6, repeat: Infinity, delay: 1 }}
            >
              Tailwind CSS
            </motion.div>

            <motion.div
              className="absolute -top-4 -right-4 bg-background px-3 py-1 rounded-full shadow-md border text-xs"
              animate={{
                x: [0, 5, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
            >
              Node.js
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 bg-background px-3 py-1 rounded-full shadow-md border text-xs"
              animate={{
                x: [0, -5, 0],
                rotate: [0, -5, 5, 0],
              }}
              transition={{ duration: 5, repeat: Infinity, delay: 1.5 }}
            >
              MongoDB
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
