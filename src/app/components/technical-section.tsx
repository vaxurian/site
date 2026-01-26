import { motion } from "motion/react";
import { Network, LineChart, Cpu, Database } from "lucide-react";

const expertise = [
  {
    icon: Network,
    title: "API Integrations",
    description: "Seamless connections between your systems and third-party services",
  },
  {
    icon: LineChart,
    title: "Custom Dashboards",
    description: "Real-time data visualization and business intelligence tools",
  },
  {
    icon: Cpu,
    title: "Automation Pipelines",
    description: "Intelligent workflows that reduce manual work and increase efficiency",
  },
  {
    icon: Database,
    title: "Scalable Architecture",
    description: "Future-proof database design that grows with your business",
  },
];

export function TechnicalSection() {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #007fff 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-xl text-gray-400">
            Backend solutions that power modern businesses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {expertise.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex items-start gap-6 p-6 bg-white/5 rounded-xl border border-white/10 hover:border-[#007fff]/50 transition-all duration-300 hover:bg-white/10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="flex-shrink-0 w-14 h-14 bg-[#007fff] rounded-lg flex items-center justify-center"
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Flow Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">System Optimization Flow</h3>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {[
              { label: "Your Business", icon: "🏢" },
              { label: "Vaxurian Systems", icon: "⚡" },
              { label: "Optimized Output", icon: "🚀" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex-1"
              >
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="text-6xl mb-4"
                  >
                    {item.icon}
                  </motion.div>
                  <p className="text-lg font-semibold">{item.label}</p>
                </div>
                
                {index < 2 && (
                  <motion.div
                    className="hidden md:block text-4xl text-[#007fff] text-center mt-4"
                    animate={{ x: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
