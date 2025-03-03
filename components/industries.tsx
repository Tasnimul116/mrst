"use client"

import { motion } from "framer-motion"
import {
  MonitorIcon,
  FactoryIcon,
  ShoppingBagIcon,
  GraduationCapIcon,
  HeartPulseIcon,
  BuildingIcon,
  LandmarkIcon,
  LeafIcon,
} from "lucide-react"

export default function Industries() {
  const industries = [
    {
      icon: <MonitorIcon className="h-6 w-6" />,
      name: "Technology & Innovation",
    },
    {
      icon: <FactoryIcon className="h-6 w-6" />,
      name: "Manufacturing & Industrial",
    },
    {
      icon: <ShoppingBagIcon className="h-6 w-6" />,
      name: "Retail & Consumer Goods",
    },
    {
      icon: <GraduationCapIcon className="h-6 w-6" />,
      name: "Education & Training",
    },
    {
      icon: <HeartPulseIcon className="h-6 w-6" />,
      name: "Healthcare & Life Sciences",
    },
    {
      icon: <BuildingIcon className="h-6 w-6" />,
      name: "Real Estate & Construction",
    },
    // {
    //   icon: <LandmarkIcon className="h-6 w-6" />,
    //   name: "Financial Services",
    // },
    // {
    //   icon: <LeafIcon className="h-6 w-6" />,
    //   name: "Agriculture & Food Processing",
    // },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
  }

  return (
    <section className="relative bg-[url('/p5.png')] bg-cover bg-center bg-no-repeat py-24">
    {/* Background Overlay for Opacity */}
    <div className="absolute inset-0 bg-primary/30"></div>
  
    {/* Content Wrapper */}
    <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl text-center"
      >
        <h2 className="font-bold  text-secondary">Industries We Serve</h2>
        <p className="mt-4 text-secondary/90">Our consultancy expertise spans diverse sectors</p>
      </motion.div>
  
      {/* Animated Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4"
      >
        {industries.map((industry, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative flex flex-col items-center rounded-lg bg-black/40 backdrop-blur-xl p-6 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            {/* Icon */}
            <div className="flex h-12 w-12 items-center justify-center rounded-full text-secondary">
              {industry.icon}
            </div>
            {/* Industry Name */}
            <h3 className="mt-4 font-semibold text-secondary">{industry.name}</h3>
  
            {/* Hover Glow Effect */}
            <div className="absolute -bottom-4 left-1/2 w-24 h-24 bg-primary/30 opacity-20 rounded-full blur-3xl group-hover:opacity-50 transition duration-500"></div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
  
  )
}

