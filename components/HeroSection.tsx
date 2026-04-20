"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Star, Award, Users } from "lucide-react";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Star, value: "4.9", label: "Average Rating" },
    { icon: Award, value: "5+", label: "Years Experience" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  if (!mounted) {
    return (
      <section className="relative min-h-screen flex items-center justify-center hero-bg">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-bg overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-primary/30 rounded-full"></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 border border-primary/40 rounded-full"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 border border-primary/20 rounded-full"></div>
      </div>

      {/* Main Content */}
      <motion.div
        className="container mx-auto px-4 py-20 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block text-primary font-medium text-sm tracking-wider uppercase mb-4 border border-primary/30 px-4 py-2 rounded-full">
                Professional Hair Styling
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-cormorant font-bold mb-6 leading-tight"
            >
              <span className="gradient-text">Expert Hair Styling Services</span>
              <br />
              <span className="text-accent">for Men and Women</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Get the perfect look with our expert hair styling services anywhere in the US
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <Link
                href="/booking"
                className="btn-primary flex items-center justify-center space-x-2 text-lg px-8 py-4"
              >
                <Calendar className="w-5 h-5" />
                <span>Schedule Your Appointment</span>
              </Link>
              <Link
                href="/portfolio"
                className="btn-outline flex items-center justify-center space-x-2 text-lg px-8 py-4"
              >
                <span>View Portfolio</span>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-accent">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column - Hero Image/Video */}
          <motion.div
            variants={itemVariants}
            className="relative order-first lg:order-last"
          >
            <div className="relative">
              {/* Hero Video */}
              <div className="aspect-[9/16] max-w-sm mx-auto rounded-2xl overflow-hidden shadow-2xl relative">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/images/enhanced-image-13.png"
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/hero.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent pointer-events-none" />
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Star className="w-8 h-8 text-primary" fill="currentColor" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <Award className="w-6 h-6 text-secondary" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center"
            animate={{
              y: [0, 5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="w-1 h-3 bg-primary rounded-full mt-2"
              animate={{
                y: [0, 12, 0],
                opacity: [1, 0.3, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}