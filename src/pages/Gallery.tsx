import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "../data/mockData";

export function Gallery() {
  // Extract all images from products for the gallery
  const images = products.flatMap(p => p.images);
  
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen]);

  return (
    <div className="min-h-screen bg-secondary pt-32 pb-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
        <div className="mb-24 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-6xl text-primary mb-6"
          >
            Galerie
          </motion.h1>
          <div className="mx-auto h-px w-24 bg-accent"></div>
        </div>

        {/* Masonry Layout Approximation with Columns */}
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 space-y-6">
           {images.map((img, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
               className="break-inside-avoid cursor-pointer group relative overflow-hidden"
               onClick={() => openLightbox(idx)}
             >
                <img 
                  src={img} 
                  alt={`Galerie ${idx + 1}`} 
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
             </motion.div>
           ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-primary/95 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2"
              onClick={closeLightbox}
            >
              <X className="h-8 w-8" />
            </button>
            
            <button 
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-4"
              onClick={prevImage}
            >
              <ChevronLeft className="h-10 w-10" />
            </button>

            <button 
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-4"
              onClick={nextImage}
            >
              <ChevronRight className="h-10 w-10" />
            </button>

            <div 
              className="relative w-full max-w-5xl max-h-[80vh] px-16 flex justify-center items-center"
              onClick={(e) => e.stopPropagation()}
            >
               <motion.img 
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  src={images[currentIndex]} 
                  alt={`Lightbox ${currentIndex + 1}`}
                  className="max-w-full max-h-[80vh] object-contain shadow-2xl"
               />
            </div>
            
            <div className="absolute bottom-6 text-white/50 text-sm tracking-widest font-sans">
               {currentIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
