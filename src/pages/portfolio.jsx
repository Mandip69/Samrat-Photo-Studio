import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Categories
const categories = ["All", "Weddings", "Portraits", "Events"];

// Sample images (replace with real studio photos)
const portfolioItems = [
  { id: 1, category: "Weddings", img: "https://picsum.photos/500/700?random=1" },
  { id: 2, category: "Portraits", img: "https://picsum.photos/500/600?random=2" },
  { id: 3, category: "Events", img: "https://picsum.photos/500/650?random=3" },
  { id: 4, category: "Weddings", img: "https://picsum.photos/500/550?random=4" },
  { id: 5, category: "Portraits", img: "https://picsum.photos/500/680?random=5" },
  { id: 6, category: "Events", img: "https://picsum.photos/500/640?random=6" },
  { id: 7, category: "Weddings", img: "https://picsum.photos/500/670?random=7" },
  { id: 8, category: "Portraits", img: "https://picsum.photos/500/660?random=8" },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  // Filtered items
  const filteredItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-yellow-400 text-center mb-12">
          Our Portfolio
        </h2>

        {/* Category Filters */}
        <div className="flex justify-center space-x-6 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                selectedCategory === cat
                  ? "bg-yellow-400 text-gray-900"
                  : "bg-gray-800 hover:bg-yellow-400 hover:text-gray-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg group"
                onClick={() => setSelectedImage(item.img)}
              >
                <img
                  src={item.img}
                  alt={item.category}
                  className="w-full object-cover rounded-lg group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <span className="text-yellow-400 font-semibold text-lg">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.img
                src={selectedImage}
                alt="Preview"
                className="max-w-4xl max-h-[80vh] rounded-lg shadow-lg"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
