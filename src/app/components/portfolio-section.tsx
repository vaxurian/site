import { motion } from "motion/react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { useState } from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Website + Backend",
    description: "Complete e-commerce solution with automated inventory management and customer analytics",
    image: "https://images.unsplash.com/photo-1505209487757-5114235191e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwd29ya3NwYWNlJTIwZGVza3xlbnwxfHx8fDE3NjkyNDY3MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    results: "300% increase in conversion rate",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "Analytics Dashboard",
    category: "Digital Product",
    description: "Real-time business intelligence platform with custom KPI tracking and reporting",
    image: "https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzY5MzM1NjYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    results: "Real-time insights for 10,000+ users",
    tags: ["TypeScript", "GraphQL", "Redis"],
  },
  {
    title: "Automation Pipeline",
    category: "Automation",
    description: "Multi-channel marketing automation system with CRM integration and email workflows",
    image: "https://images.unsplash.com/photo-1664526937033-fe2c11f1be25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0aW9uJTIwd29ya2Zsb3clMjBkaWFncmFtfGVufDF8fHx8MTc2OTMzNTY2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    results: "80% reduction in manual tasks",
    tags: ["Python", "Zapier", "AWS"],
  },
  {
    title: "Backend Architecture",
    category: "Backend Systems",
    description: "Microservices architecture with API gateway, load balancing, and auto-scaling",
    image: "https://images.unsplash.com/photo-1641156803026-0b819059b04d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrZW5kJTIwc2VydmVyJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjkzMzU2NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    results: "99.99% uptime achieved",
    tags: ["Docker", "Kubernetes", "MongoDB"],
  },
];

const categories = ["All", "Website", "Backend Systems", "Automation", "Digital Product"];

export function PortfolioSection() {
  const [filter, setFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category.includes(filter));

  return (
    <section id="portfolio" className="py-24 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Portfolio</h2>
          <p className="text-xl text-gray-600">
            Systems that deliver measurable results
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                filter === category
                  ? "bg-[#007fff] text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                  animate={{
                    opacity: hoveredProject === index ? 1 : 0.5,
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredProject === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer"
                  >
                    <ExternalLink className="w-8 h-8 text-[#007fff]" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-[#007fff]">{project.category}</span>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#007fff] group-hover:translate-x-2 transition-all duration-300" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                {/* Results */}
                <div className="mb-4 p-3 bg-[#007fff]/5 rounded-lg">
                  <p className="text-sm font-semibold text-[#007fff]">
                    📈 {project.results}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
