import React from "react";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";

export default function HomePage() {
  return (
    <div className="bg-gray-900 text-gray-300">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 bg-[url('https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <Camera className="text-yellow-400 w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Samrat Photo Studio
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-6 max-w-2xl mx-auto">
            Capturing timeless moments with creativity and passion. From weddings to portraits, we turn memories into art.
          </p>
          <a
            href="#book"
            className="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-300 transition duration-300"
          >
            Book a Session
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <img
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
            alt="Studio"
            className="rounded-lg shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              About Us
            </h2>
            <p className="text-gray-400 leading-relaxed">
              At Samrat Photo Studio, we specialize in capturing life's most
              precious moments. With years of experience, our team blends art
              and technology to deliver stunning photos and unforgettable
              experiences.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-yellow-400 mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Wedding Photography", desc: "Capturing the joy of your big day." },
              { title: "Portraits", desc: "Professional portraits with character." },
              { title: "Events", desc: "Documenting special events in style." },
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-yellow-400/30 transition"
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-yellow-400 text-center mb-12">
          Our Portfolio
        </h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {[1, 2, 3, 4, 5, 6].map((img) => (
            <motion.img
              key={img}
              whileHover={{ scale: 1.05 }}
              src={`https://picsum.photos/600/400?random=${img}`}
              alt={`Portfolio ${img}`}
              className="rounded-lg shadow-lg"
            />
          ))}
        </motion.div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-800 text-center">
        <h2 className="text-3xl font-bold text-yellow-400 mb-12">Happy Clients</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            { name: "Anjali", text: "The pictures were breathtaking. Truly the best photography experience." },
            { name: "Ramesh", text: "Professional, creative, and friendly team. Highly recommended!" },
          ].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-6 rounded-lg shadow-md"
            >
              <p className="italic text-gray-400 mb-4">“{t.text}”</p>
              <h4 className="text-yellow-400 font-semibold">- {t.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="book" className="py-20 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">Book a Session</h2>
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-800 p-8 rounded-lg shadow-lg space-y-4"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded bg-gray-900 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded bg-gray-900 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 rounded bg-gray-900 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          ></textarea>
          <button
            type="submit"
            className="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-300 transition duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </section>
    </div>
  );
}
