import React from "react";
import { motion } from "framer-motion";
// import { Camera, Award, Heart, Star } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-900 text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-yellow-400 mb-12"
        >
          About Us
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white">
              Welcome to <span className="text-yellow-400">Samrat Photo Studio</span>
            </h3>
            <p className="text-gray-300 leading-relaxed">
              At Samrat Photo Studio, we don’t just capture photos – we capture
              your emotions, your joy, and your most cherished memories. Located
              in the heart of <b>Samakhusi, Kathmandu</b>, we have been serving
              our valued clients with professional photography and photo studio
              services since our beginning.
            </p>
            <p className="text-gray-300 leading-relaxed">
              From wedding ceremonies to passport-sized photos, we cover it all
              with creativity and passion. Over the years, we’ve grown from a
              small local studio into a trusted name, providing everything from
              high-end portraits to quick form-fill services for your daily
              needs.
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80"
              alt="Samrat Studio"
              className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-12 mt-20"
        >
          <h3 className="text-3xl font-semibold text-yellow-400 text-center">
            Our Journey
          </h3>

          <div className="relative border-l-2 border-yellow-400/40 max-w-3xl mx-auto">
            {/* Step 1 */}
            <div className="ml-10 mb-12 relative">
              {/* <span className="absolute -left-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <Star size={20} className="text-gray-900" />
              </span> */}
              <h4 className="text-xl font-semibold text-yellow-400">
                2015 – The Beginning
              </h4>
              <p className="text-gray-300">
                Samrat Photo Studio was founded in Samakhusi, Kathmandu with a
                simple dream – to bring professional and creative photography
                services to everyone.
              </p>
            </div>

            {/* Step 2 */}
            <div className="ml-10 mb-12 relative">
              {/* <span className="absolute -left-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <Camera size={20} className="text-gray-900" />
              </span> */}
              <h4 className="text-xl font-semibold text-yellow-400">
                2018 – Expanding Services
              </h4>
              <p className="text-gray-300">
                Introduced wedding photography, portraits, and event coverage
                with a growing team of talented photographers.
              </p>
            </div>

            {/* Step 3 */}
            <div className="ml-10 mb-12 relative">
              {/* <span className="absolute -left-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <Award size={20} className="text-gray-900" />
              </span> */}
              <h4 className="text-xl font-semibold text-yellow-400">
                2021 – Recognition
              </h4>
              <p className="text-gray-300">
                Recognized among the top photography studios in Kathmandu,
                trusted by hundreds of clients for our creativity and
                professionalism.
              </p>
            </div>

            {/* Step 4 */}
            <div className="ml-10 relative">
              {/* <span className="absolute -left-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <Heart size={20} className="text-gray-900" />
              </span> */}
              <h4 className="text-xl font-semibold text-yellow-400">
                2025 – Looking Ahead
              </h4>
              <p className="text-gray-300">
                With continuous innovation, we aim to expand our services, adopt
                modern technologies, and capture countless more beautiful
                moments for our clients.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
