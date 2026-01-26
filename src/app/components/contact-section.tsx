import { motion } from "motion/react";
import { Mail, Instagram } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Build Your <span className="text-[#007fff]">System</span>
            </h2>

            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              No forms. No friction.  
              Reach out directly and let’s build digital systems that scale.
            </p>

            {/* Direct Contact Links */}
            <div className="space-y-6 mb-10">
              
              {/* Email */}
              <motion.a
                href="mailto:vaxurian@gmail.com"
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-[#007fff] rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-semibold group-hover:underline">
                    vaxurian@gmail.com
                  </p>
                </div>
              </motion.a>

              {/* Instagram DM */}
              <motion.a
                href="https://www.instagram.com/direct/t/vaxurian"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-[#007fff] rounded-lg flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Instagram DM</p>
                  <p className="font-semibold group-hover:underline">
                    @vaxurian
                  </p>
                </div>
              </motion.a>

            </div>

            {/* Authority Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-200">
              <div>
                <p className="text-3xl font-bold text-[#007fff] mb-1">23</p>
                <p className="text-gray-600">Projects Delivered</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-[#007fff] mb-1">91%</p>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Call to Action */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center"
          >
            <div className="w-full bg-gray-50 border border-gray-200 rounded-2xl p-10">
              <h3 className="text-2xl font-bold mb-4">
                Start a Conversation
              </h3>
              <p className="text-gray-600 mb-8">
                Serious builders only.  
                If you value systems over noise, reach out directly.
              </p>

              <div className="space-y-4">
                <a
                  href="https://www.instagram.com/vaxurian"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-[#007fff] hover:bg-[#0066dd] text-white py-4 rounded-xl font-semibold transition"
                >
                  DM on Instagram
                </a>

                <a
                  href="mailto:vaxurian@gmail.com"
                  className="block text-center border border-[#007fff] text-[#007fff] py-4 rounded-xl font-semibold hover:bg-[#007fff] hover:text-white transition"
                >
                  Email Directly
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
