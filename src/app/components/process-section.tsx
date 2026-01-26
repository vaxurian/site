import { motion } from "motion/react";
import { MessageCircle, PenTool, Zap, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Consultation",
    description: "Understanding your business goals, challenges, and vision for growth",
  },
  {
    number: "02",
    icon: PenTool,
    title: "System Design",
    description: "Crafting high-performance websites and robust backend architecture",
  },
  {
    number: "03",
    icon: Zap,
    title: "Automation",
    description: "Implementing streamlined workflows to optimize business operations",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Scale",
    description: "Deploying long-lasting digital systems that grow with your business",
  },
];

export function ProcessSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How We Help</h2>
          <p className="text-xl text-gray-600">
            Our proven process for delivering exceptional results
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#007fff] to-transparent opacity-30" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  {/* Step Card */}
                  <div className="relative z-10 text-center">
                    {/* Number Badge */}
                    <motion.div
                      className="inline-block mb-6"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative">
                        <div className="w-20 h-20 bg-white border-4 border-[#007fff] rounded-full flex items-center justify-center">
                          <span className="text-2xl font-bold text-[#007fff]">{step.number}</span>
                        </div>
                        <motion.div
                          className="absolute inset-0 bg-[#007fff] rounded-full -z-10"
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 0.1 }}
                          transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>

                    {/* Icon */}
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="inline-flex items-center justify-center w-16 h-16 bg-[#007fff] rounded-lg mb-4"
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-[#007fff]/5 to-transparent rounded-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Ready to transform your digital presence?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
