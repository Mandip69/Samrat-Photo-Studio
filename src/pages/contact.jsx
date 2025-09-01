import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Replace with API call
    alert("Thank you! We received your message.");
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const services = [
    "Photography",
    "Photo Printing",
    "Personalized Gifts",
    "Document Services",
    "Other",
  ];

  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-900 py-24 px-6 md:px-16 relative overflow-hidden"
    >
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl"></div>

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-yellow-400 mb-6"
        >
          Contact Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-300 mb-12"
        >
          Have a question or want to book a session? Fill out the form below and
          we’ll get back to you as soon as possible.
        </motion.p>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          onSubmit={handleSubmit}
          className="bg-gray-800 p-10 rounded-3xl shadow-xl space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl bg-gray-900 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl bg-gray-900 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-gray-900 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-gray-900 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <option value="">Select Service</option>
              {services.map((s, i) => (
                <option key={i} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-gray-900 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-yellow-400 text-gray-900 font-semibold py-4 rounded-full shadow-lg hover:bg-yellow-300 transition duration-300 text-lg"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
