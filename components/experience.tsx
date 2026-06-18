"use client";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";
import Image from "next/image";
const experiences = [
  {
    role: "Software Development Engineer (SDE) Intern",
    company: "Bluestock Fintech",
    duration: "March 2026 – April 2026",
    description:
      "Completed a Software Development Engineer internship at Bluestock Fintech, contributing to web application development, software engineering practices, and modern development workflows under professional mentorship.",
    achievements: [
      "Worked on real-world software development tasks and projects",
      "Collaborated with the development team on application features",
      "Applied modern web development concepts and best practices",
      "Improved problem-solving and debugging skills in a professional environment",
      "Gained hands-on experience with software development lifecycle (SDLC)",
    ],
    technologies: [
      "JavaScript",
      "React.js",
      "Node.js",
      "MongoDB",
      "Git",
      "GitHub",
    ],
  },
];
export default function Experience() {
  return (
    <section id="experience" className="py-20">
      {" "}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {" "}
        <h2 className="text-3xl font-bold mb-6">Experience</h2>{" "}
        <p className="text-muted-foreground mb-10">
          {" "}
          Professional experience and industry exposure gained through
          internships and real-world software development.{" "}
        </p>{" "}
        <div className="relative border-l ml-3">
          {" "}
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="mb-10 ml-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {" "}
              <div className="absolute -left-[14px] flex items-center justify-center w-7 h-7 rounded-full border bg-background">
                {" "}
                <Briefcase className="w-4 h-4" />{" "}
              </div>{" "}
              <div className="border rounded-xl p-6 hover:shadow-md transition-all">
                {" "}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  {" "}
                  <div>
                    {" "}
                    <h3 className="text-xl font-bold">
                      {" "}
                      {experience.role}{" "}
                    </h3>{" "}
                    <p className="text-muted-foreground">
                      {" "}
                      {experience.company}{" "}
                    </p>{" "}
                  </div>{" "}
                  <Badge variant="secondary">
                    {" "}
                    {experience.duration}{" "}
                  </Badge>{" "}
                </div>{" "}
                <p className="mt-4 text-muted-foreground">
                  {" "}
                  {experience.description}{" "}
                </p>{" "}
                <div className="mt-4">
                  {" "}
                  <h4 className="font-semibold mb-2">
                    {" "}
                    Responsibilities & Achievements{" "}
                  </h4>{" "}
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    {" "}
                    {experience.achievements.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}{" "}
                  </ul>{" "}
                </div>{" "}
                <div className="flex flex-wrap gap-2 mt-5">
                  {" "}
                  {experience.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="outline">
                      {" "}
                      {tech}{" "}
                    </Badge>
                  ))}{" "}
                </div>{" "}
                {/* Certificate Section */}{" "}
                <div className="mt-8">
                  {" "}
                  <h4 className="font-semibold mb-4">
                    {" "}
                    Internship Certificate{" "}
                  </h4>{" "}
                  <div className="overflow-hidden rounded-xl border group">
                    {" "}
                    <Image
                      src="/bluestock-certificate.jpg"
                      alt="Bluestock Internship Certificate"
                      width={1200}
                      height={850}
                      className="w-full transition-transform duration-300 group-hover:scale-[1.02]"
                    />{" "}
                  </div>{" "}
                  <p className="text-sm text-muted-foreground mt-3">
                    {" "}
                    Certificate awarded by Bluestock Fintech for successfully
                    completing the Software Development Engineer (SDE)
                    Internship Program.{" "}
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </motion.div>
          ))}{" "}
        </div>{" "}
      </motion.div>{" "}
    </section>
  );
}
