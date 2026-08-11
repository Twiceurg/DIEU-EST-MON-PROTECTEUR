import { Link } from "react-router-dom";
import { collections } from "../data/mockData";
import { motion } from "motion/react";

export function Collections() {
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
            Nos collections
          </motion.h1>
          <div className="mx-auto h-px w-24 bg-accent"></div>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {collections.map((collection, idx) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Link to="/pagnes-et-tissus" className="group flex flex-col items-center">
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-muted mb-8">
                  <img 
                    src={collection.image} 
                    alt={collection.name} 
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/20 transition-colors duration-500 group-hover:bg-primary/10" />
                </div>
                <h2 className="font-serif text-3xl text-primary mb-4">{collection.name}</h2>
                <p className="text-text-light font-light max-w-md text-center text-balance mb-6">{collection.description}</p>
                <span className="text-sm font-semibold uppercase tracking-wider text-accent group-hover:text-primary transition-colors border-b border-accent pb-1">
                  Découvrir
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
