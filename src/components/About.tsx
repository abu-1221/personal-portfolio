"use client";

import { motion } from "framer-motion";

export default function About() {
  const interests = [
    { name: "Designing", icon: "🎨", description: "Creating visual experiences" },
    { name: "Trading", icon: "📈", description: "Market analysis & strategy" },
    { name: "Vibe Coding", icon: "💻", description: "Creative development" },
    { name: "Sports", icon: "⚽", description: "Active lifestyle" },
  ];

  return (
    <section className="relative z-20 bg-[#0a0a0a] py-32 px-4 md:px-12 overflow-hidden" id="about">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600/10 rounded-full blur-[60px] md:blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-purple-600/10 rounded-full blur-[50px] md:blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Career Objective */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
              Career <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">Objective</span>
            </h2>
            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm">
              <p className="text-gray-300 text-lg leading-relaxed">
                To pursue a challenging career that supports my professional growth through 
                <span className="text-blue-400 font-semibold"> continuous learning</span>, 
                <span className="text-purple-400 font-semibold"> skill enhancement</span>, and 
                <span className="text-cyan-400 font-semibold"> meaningful contribution</span> to organizational development.
              </p>
            </div>
          </motion.div>

          {/* Areas of Interest */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-white mb-8 tracking-tight">
              Areas of <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-400">Interest</span>
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all cursor-default"
                >
                  <div className="text-4xl mb-3">{interest.icon}</div>
                  <h4 className="text-white font-bold text-lg mb-1 group-hover:text-blue-400 transition-colors">
                    {interest.name}
                  </h4>
                  <p className="text-gray-500 text-sm">{interest.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <StatCard number="75.56%" label="B.Sc. CS (IV Sem)" color="blue" />
          <StatCard number="85%" label="HSC Score" color="purple" />
          <StatCard number="89.8%" label="SSLC Score" color="cyan" />
          <StatCard number="5+" label="Languages Known" color="pink" />
        </motion.div>
      </div>
    </section>
  );
}

function StatCard({ number, label, color }: { number: string; label: string; color: string }) {
  const colorClasses: { [key: string]: string } = {
    blue: "from-blue-500 to-blue-600",
    purple: "from-purple-500 to-purple-600",
    cyan: "from-cyan-500 to-cyan-600",
    pink: "from-pink-500 to-pink-600",
  };

  return (
    <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm text-center hover:bg-white/10 transition-colors">
      <div className={`text-4xl md:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-linear-to-r ${colorClasses[color]}`}>
        {number}
      </div>
      <p className="text-gray-400 text-sm">{label}</p>
    </div>
  );
}
