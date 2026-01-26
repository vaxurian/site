import { motion } from "motion/react";
import { Globe, Database, Workflow, BarChart3, Code, Cloud, Lock, Sparkles } from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: Globe,
    title: "Websites",
    subtitle: "High-Performance & Responsive",
    features: [
      "Modern UX/UI design",
      "Mobile-first responsive",
      "SEO optimized",
      "Lightning-fast performance",
    ],
    color: "#007fff",
  },
  {
    icon: Database,
    title: "Backend & Systems",
    subtitle: "Scalable Architecture",
    features: [
      "Custom API development",
      "Database optimization",
      "Third-party integrations",
      "Microservices architecture",
    ],
    color: "#007fff",
  },
  {
    icon: Workflow,
    title: "Automation",
    subtitle: "Streamlined Operations",
    features: [
      "Email workflow automation",
      "CRM system integration",
      "E-commerce backend automation",
      "Data synchronization",
    ],
    color: "#007fff",
  },
  {
    icon: BarChart3,
    title: "Digital Products",
    subtitle: "Complete Solutions",
    features: [
      "Social media management",
      "Custom analytics dashboards",
      "Email marketing systems",
      "Client reporting tools",
    ],
    color: "#007fff",
  },
];

export function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="relative bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Hover Background Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#007fff] to-[#0066dd] opacity-0 group-hover:opacity-5"
                  animate={{
                    opacity: hoveredCard === index ? 0.05 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10">
                  <motion.div
                    animate={{
                      scale: hoveredCard === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 bg-[#007fff] rounded-lg flex items-center justify-center mb-6"
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-[#007fff] text-sm font-semibold mb-6">{service.subtitle}</p>

                  <motion.div
                    initial={{ opacity: 0.8 }}
                    animate={{
                      opacity: hoveredCard === index ? 1 : 0.8,
                      x: hoveredCard === index ? 8 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="w-1.5 h-1.5 bg-[#007fff] rounded-full mt-2 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Corner Accent */}
                <motion.div
                  className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#007fff] opacity-5 rounded-full"
                  animate={{
                    scale: hoveredCard === index ? 1.5 : 1,
                    opacity: hoveredCard === index ? 0.1 : 0.05,
                  }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
