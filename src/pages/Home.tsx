import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { collections, products } from "../data/mockData";
import { cn } from "../lib/utils";
import heroImage from "../assets/images/nigerian_velvet_pagne_1786449827540.jpg";
import ghanaKente from "../assets/images/ghana_kente_cloth_1786450001089.jpg";
import { Logo } from "../components/ui/Logo";

export function Home() {
  const featuredProducts = products.filter(p => p.featured).slice(0, 4);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Pagne velours motifs nigérians"
            className="h-full w-full object-cover opacity-60"
          />
          {/* Subtle gradient to ensure header text readability */}
          <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black/70 to-transparent"></div>
        </div>
        
        <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-center px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-3xl"
          >
            <h1 className="font-serif text-5xl text-secondary sm:text-6xl md:text-7xl lg:text-8xl leading-tight">
              L'élégance <br />
              <span className="italic text-accent-light">commence</span> par le tissu.
            </h1>
            
            <p className="mt-8 max-w-xl text-lg text-secondary/90 font-light leading-relaxed">
              Découvrez notre sélection de pagnes et tissus soigneusement choisis pour révéler votre style, votre personnalité et votre élégance.
            </p>
            
            <div className="mt-12 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
              <Link to="/collections">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Découvrir nos collections
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-secondary text-secondary hover:bg-secondary hover:text-primary">
                  Nous contacter
                </Button>
              </Link>
            </div>
            
            <div className="mt-24">
              <Logo 
                iconClassName="text-accent" 
                textClassName="text-secondary" 
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="bg-secondary py-24 md:py-32">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-3xl md:text-5xl text-primary leading-tight">
                Bienvenue chez <br/>
                <span className="italic text-accent">Dieu est mon protecteur</span>
              </h2>
              <div className="mt-8 space-y-6 text-text-light font-light leading-relaxed text-balance">
                <p>
                  Nous sommes heureux de vous accueillir dans l'univers de Dieu est mon protecteur, une maison dédiée à la découverte et à la valorisation de pagnes et tissus sélectionnés avec soin.
                </p>
                <p>
                  Notre ambition est de proposer à chacune et à chacun des matières et motifs qui associent élégance, qualité et authenticité.
                </p>
                <p>
                  À travers notre showroom digital, nous vous invitons à découvrir nos collections, nos inspirations et nos nouveautés. Parce que chaque tissu raconte une histoire, laissez-nous vous aider à raconter la vôtre.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] w-full overflow-hidden bg-muted"
            >
              <img 
                src={ghanaKente} 
                alt="Nos tissus" 
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="bg-primary text-secondary py-24 md:py-32">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
          <div className="mb-16 flex flex-col items-start justify-between md:flex-row md:items-end">
            <h2 className="font-serif text-4xl md:text-5xl">Nos collections</h2>
            <Link to="/collections" className="mt-6 md:mt-0 group flex items-center space-x-2 text-accent-light hover:text-white transition-colors uppercase tracking-wider text-sm">
              <span>Voir tout</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {collections.map((collection, idx) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative cursor-pointer overflow-hidden aspect-[3/4]"
              >
                <img 
                  src={collection.image} 
                  alt={collection.name} 
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:bg-black/60" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <h3 className="font-serif text-3xl tracking-wide text-white">{collection.name}</h3>
                  <p className="mt-4 max-w-[200px] text-sm text-white/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 font-light">
                    {collection.description}
                  </p>
                  <div className="mt-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-primary">
                      Découvrir
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Nouveautés */}
      <section className="bg-secondary py-24 md:py-32">
         <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
            <div className="mb-16 text-center">
              <h2 className="font-serif text-4xl md:text-5xl text-primary">Les nouveautés</h2>
              <div className="mt-4 flex justify-center">
                <div className="h-px w-16 bg-accent"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
               {featuredProducts.map((product) => (
                 <Link to={`/produits/${product.id}`} key={product.id} className="group flex flex-col">
                   <div className="relative aspect-[3/4] overflow-hidden bg-muted mb-4">
                     <img 
                        src={product.images[0]} 
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                     />
                     {product.isNew && (
                       <span className="absolute top-4 left-4 bg-primary text-secondary px-3 py-1 text-xs uppercase tracking-widest font-medium">
                         Nouveau
                       </span>
                     )}
                   </div>
                   <div className="flex flex-col flex-1 space-y-1">
                     <span className="text-xs text-text-light uppercase tracking-wider">{product.collection}</span>
                     <h3 className="font-serif text-xl text-primary">{product.name}</h3>
                     <span className="text-sm text-text-light">{product.reference}</span>
                   </div>
                 </Link>
               ))}
            </div>
            
            <div className="mt-16 flex justify-center">
              <Link to="/pagnes-et-tissus">
                <Button variant="outline">Voir toutes les nouveautés</Button>
              </Link>
            </div>
         </div>
      </section>
    </div>
  );
}
