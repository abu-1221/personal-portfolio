"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// Fixed particle positions to avoid hydration mismatch
const PARTICLE_POSITIONS = [
  { left: 10, top: 20, delay: 0.2, duration: 4 },
  { left: 25, top: 45, delay: 0.8, duration: 3.5 },
  { left: 40, top: 15, delay: 1.2, duration: 4.5 },
  { left: 55, top: 70, delay: 0.5, duration: 3.8 },
  { left: 70, top: 35, delay: 1.5, duration: 4.2 },
  { left: 85, top: 60, delay: 0.3, duration: 3.2 },
  { left: 15, top: 80, delay: 1.0, duration: 4.8 },
  { left: 30, top: 55, delay: 0.7, duration: 3.6 },
  { left: 45, top: 25, delay: 1.3, duration: 4.3 },
  { left: 60, top: 85, delay: 0.4, duration: 3.4 },
  { left: 75, top: 10, delay: 1.1, duration: 4.1 },
  { left: 90, top: 40, delay: 0.6, duration: 3.9 },
  { left: 5, top: 65, delay: 1.4, duration: 4.6 },
  { left: 20, top: 30, delay: 0.9, duration: 3.3 },
  { left: 35, top: 90, delay: 1.6, duration: 4.4 },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { damping: 30, stiffness: 200 });
  
  // Parallax effects
  const imageY = useTransform(smoothProgress, [0, 1], ["0%", "30%"]);
  const imageScale = useTransform(smoothProgress, [0, 1], [1, 1.2]);
  const imageOpacity = useTransform(smoothProgress, [0, 0.8], [1, 0]);
  
  // Text animations
  const titleY = useTransform(smoothProgress, [0, 0.5], ["0%", "-50%"]);
  const titleOpacity = useTransform(smoothProgress, [0, 0.3], [1, 0]);
  
  const subtitleY = useTransform(smoothProgress, [0, 0.5], ["0%", "-30%"]);
  const subtitleOpacity = useTransform(smoothProgress, [0.1, 0.4], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-[110vh] md:h-[180vh]" id="home">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#0a0a0a]">
        
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-[#0a0a0a] z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-purple-900/10 z-10 pointer-events-none" />
        
        {/* Animated Background Orbs - Reduced size/blur for performance */}
        <motion.div
          className="absolute top-[-20%] right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-600/15 rounded-full blur-[60px] md:blur-[120px]"
          style={{ willChange: "transform" }}
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-[-20%] left-[-10%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-blue-600/15 rounded-full blur-[50px] md:blur-[100px]"
          style={{ willChange: "transform" }}
          animate={{
            scale: [1, 1.2, 1],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Main Content Container */}
        <div className="relative h-full w-full flex items-center justify-center z-20">
          <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* Left Side - Text Content */}
            <motion.div 
              className="flex-1 text-center lg:text-left"
              style={{ y: titleY, opacity: titleOpacity }}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.span 
                  className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-400 text-sm font-mono mb-6 backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  👋 Welcome to my portfolio
                </motion.span>
              </motion.div>

              <motion.h1 
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Abu Backer
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  Siddique M
                </span>
              </motion.h1>

              <motion.p 
                className="text-xl md:text-2xl text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0"
                style={{ y: subtitleY, opacity: subtitleOpacity }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Designer • Developer • Innovator
              </motion.p>

              <motion.div 
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <motion.a
                  href="#projects"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-bold hover:opacity-90 transition-opacity flex items-center gap-2 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
                <motion.a
                  href="#contact"
                  className="px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white font-bold hover:bg-white/10 transition-colors backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Side - Profile Image */}
            <motion.div 
              className="flex-1 flex justify-center lg:justify-end"
              style={{ y: imageY, scale: imageScale, opacity: imageOpacity }}
            >
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.4, type: "spring" }}
              >
                {/* Glow Effect Behind Image */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-3xl opacity-30 scale-110" />
                
                {/* Rotating Border */}
                <motion.div
                  className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{ filter: "blur(20px)" }}
                />
                
                {/* Image Container */}
                <motion.div 
                  className="relative w-[300px] h-[400px] md:w-[350px] md:h-[470px] lg:w-[400px] lg:h-[530px] rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image */}
                  <motion.img
                    src="/personal-portfolio/profile.jpg"
                    alt="Abu Backer Siddique M"
                    className="w-full h-full object-cover object-[center_20%]"
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
                  
                  {/* Glass Card at Bottom */}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 p-6 bg-black/40 backdrop-blur-md border-t border-white/10"
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-white text-sm font-medium">Available for opportunities</span>
                    </div>
                  </motion.div>
                </motion.div>
                
                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white text-sm font-bold shadow-lg"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  whileHover={{ scale: 1.1 }}
                >
                  B.Sc. CS
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-4 -left-4 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-bold shadow-lg"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                  whileHover={{ scale: 1.1 }}
                >
                  🎨 Designer
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="text-gray-500 text-sm font-mono">Scroll to explore</span>
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-gray-500 flex items-start justify-center p-2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div 
              className="w-1.5 h-1.5 bg-gray-500 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>

        {/* Particle Effect - Only render on client to avoid hydration issues */}
        {isMounted && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {PARTICLE_POSITIONS.map((particle, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full"
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  delay: particle.delay,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
