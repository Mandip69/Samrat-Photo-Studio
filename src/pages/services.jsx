import React from "react";
import { motion } from "framer-motion";
import { Camera, Image, Gift, Users, Printer, Monitor, Heart, Frame, FileText, CheckCircle, File } from "lucide-react";

export default function Services() {
  const services = [
    // Photography Services
    { icon: <Camera className="w-10 h-10 text-yellow-400" />, title: "Passport & ID Photos", desc: "Instant passport, visa, and ID card photos with proper sizing and background." },
    { icon: <Users className="w-10 h-10 text-yellow-400" />, title: "Wedding & Event Photography", desc: "Capture weddings, birthdays, and all special occasions professionally." },
    { icon: <Image className="w-10 h-10 text-yellow-400" />, title: "Portrait & Studio Shoots", desc: "Personal, couple, and family portraits in our modern studio setup." },
    { icon: <Heart className="w-10 h-10 text-yellow-400" />, title: "Baby & Kids Shoots", desc: "Special setups for baby milestones, kids, and family moments." },
    { icon: <Gift className="w-10 h-10 text-yellow-400" />, title: "Personalized Gifts", desc: "Custom print on T-shirts, mugs, cushions, keyrings, and more." },

    // Printing & Shop Services
    { icon: <Printer className="w-10 h-10 text-yellow-400" />, title: "Photo Printing", desc: "Instant printing for passport, large size posters, albums, and professional prints." },
    { icon: <Frame className="w-10 h-10 text-yellow-400" />, title: "Framing & Lamination", desc: "High-quality frames and lamination to preserve your photos beautifully." },
    { icon: <Monitor className="w-10 h-10 text-yellow-400" />, title: "Digital Services", desc: "Photo restoration, editing, scanning, and photocopy services." },

    // Document / Form Filling Services
    { icon: <FileText className="w-10 h-10 text-yellow-400" />, title: "Passport Form Filling", desc: "Assistance with filling passport application forms correctly." },
    { icon: <File className="w-10 h-10 text-yellow-400" />, title: "NID Form Filling", desc: "We help you complete your NID application forms easily." },
    { icon: <CheckCircle className="w-10 h-10 text-yellow-400" />, title: "Police Report Form Filling", desc: "FIR or other police-related forms filled professionally." },
    { icon: <FileText className="w-10 h-10 text-yellow-400" />, title: "Visa / Other Government Forms", desc: "Guidance & form filling assistance for visas and other official documents." },
  ];

  return (
    <section className="min-h-screen bg-gray-900 py-24 px-6 md:px-16 relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-5xl font-bold text-yellow-400 mb-6">Our Services</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          At <span className="font-semibold text-yellow-400">Samrat Photo Studio</span>, we offer a wide range of services including professional photography, printing, personalized gifts, and assistance with official document forms.
        </p>

        {/* Grid of Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-gradient-to-tr from-gray-800 to-gray-700 rounded-3xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-yellow-400/40 transform hover:-translate-y-3 transition duration-500 cursor-pointer"
            >
              <div className="bg-gray-900 p-5 rounded-full mb-5 shadow-lg">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-yellow-400 mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
