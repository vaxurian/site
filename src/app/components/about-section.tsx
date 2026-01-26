import { motion } from "motion/react";
import { Globe, Server, Zap, Package } from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: Globe,
    title: "Websites",
    description: "High-performance, responsive websites with modern UX and lightning-fast load times",
  },
  {
    icon: Server,
    title: "Backend Systems",
    description: "Scalable architecture, optimized databases, APIs, and seamless integrations",
  },
  {
    icon: Zap,
    title: "Automation",
    description: "Streamlined workflows, email automation, CRM systems, and e-commerce backends",
  },
  {
    icon: Package,
    title: "Digital Products",
    description: "Social media management, analytics dashboards, and comprehensive email systems",
  },
];

export function AboutSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Vaxurian</h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            We design high-performance websites & build digital systems to remove friction from 
            online businesses. From backend architecture to automation, everything is built for 
            clarity, scale, and longevity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative p-6 bg-white border-2 border-gray-200 rounded-lg cursor-pointer transition-all duration-300 hover:border-[#007fff] hover:shadow-lg"
              >
                <motion.div
                  animate={{
                    scale: hoveredIndex === index ? 1.1 : 1,
                    rotate: hoveredIndex === index ? 360 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 bg-[#007fff] rounded-lg flex items-center justify-center mb-4"
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <motion.p
                  className="text-gray-600"
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0.8,
                  }}
                >
                  {service.description}
                </motion.p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
