import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products, company } from "../data/mockData";
import { Button } from "../components/ui/Button";
import { Heart, Share2, ArrowLeft } from "lucide-react";
import { cn } from "../lib/utils";
import { motion } from "motion/react";

export function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [activeImage, setActiveImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false); // Should hook into the same storage

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-secondary pt-20">
        <h1 className="font-serif text-3xl text-primary mb-6">Produit introuvable</h1>
        <Link to="/pagnes-et-tissus">
          <Button variant="outline">Retour aux collections</Button>
        </Link>
      </div>
    );
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${product.name} - ${company.name}`,
          text: product.description,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Lien copié dans le presse-papier !");
    }
  };

  const whatsappMessage = `Bonjour, je suis intéressé(e) par le produit ${product.name} – Référence ${product.reference}. Je souhaiterais avoir plus d'informations.`;
  const whatsappUrl = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-secondary pt-32 pb-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
        <Link to="/pagnes-et-tissus" className="inline-flex items-center space-x-2 text-sm uppercase tracking-wider text-text-light hover:text-primary transition-colors mb-12">
          <ArrowLeft className="h-4 w-4" />
          <span>Retour aux produits</span>
        </Link>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Gallery */}
          <div className="space-y-6">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted">
              <motion.img 
                key={activeImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                src={product.images[activeImage]} 
                alt={product.name}
                className="h-full w-full object-cover"
              />
              {product.isNew && (
                <span className="absolute top-6 left-6 bg-primary text-secondary px-4 py-2 text-xs uppercase tracking-widest font-medium">
                  Nouveau
                </span>
              )}
            </div>
            
            {product.images.length > 1 && (
              <div className="flex space-x-4 overflow-x-auto hide-scrollbar">
                {product.images.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={cn(
                      "relative aspect-[3/4] w-24 shrink-0 overflow-hidden transition-all",
                      activeImage === idx ? "ring-2 ring-primary ring-offset-2 ring-offset-secondary" : "opacity-60 hover:opacity-100"
                    )}
                  >
                    <img src={img} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col pt-4 lg:pt-10">
            <div className="mb-2 flex flex-wrap items-center gap-3">
              <span className="text-sm uppercase tracking-widest text-text-light">{product.collection}</span>
              <span className="text-text-light/30">•</span>
              <span className="text-sm tracking-wider text-text-light">{product.reference}</span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-5xl text-primary mb-6">{product.name}</h1>
            
            <div className="mb-8 text-sm uppercase tracking-wider">
              {product.available ? (
                <span className="text-accent flex items-center space-x-2">
                  <span className="h-2 w-2 rounded-full bg-accent inline-block"></span>
                  <span>Disponible</span>
                </span>
              ) : (
                <span className="text-text-light flex items-center space-x-2">
                  <span className="h-2 w-2 rounded-full bg-text-light inline-block"></span>
                  <span>Sur demande</span>
                </span>
              )}
            </div>

            <p className="text-lg text-text-main font-light leading-relaxed mb-10 text-balance">
              {product.description}
            </p>

            <div className="mb-10 space-y-4">
              <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-primary border-b border-primary/10 pb-2">Détails</h3>
              <div className="grid grid-cols-2 gap-y-4 text-sm">
                <div className="text-text-light">Couleurs dominantes</div>
                <div className="text-text-main">{product.colors.join(", ")}</div>
                {product.price && (
                  <>
                    <div className="text-text-light">Prix indicatif</div>
                    <div className="text-text-main">{product.price}</div>
                  </>
                )}
              </div>
            </div>

            <div className="mt-auto flex flex-col gap-4">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white">
                  Contacter sur WhatsApp
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="outline" className="w-full">
                  Demander des informations
                </Button>
              </Link>
              
              <div className="mt-6 flex items-center justify-center gap-8 border-t border-primary/10 pt-6">
                <button 
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="flex items-center space-x-2 text-sm uppercase tracking-wider transition-colors hover:text-accent group"
                >
                  <Heart className={cn("h-5 w-5 transition-colors", isFavorite ? "fill-accent text-accent" : "text-text-light group-hover:text-accent")} />
                  <span className={cn(isFavorite ? "text-accent" : "text-text-light group-hover:text-accent")}>Favoris</span>
                </button>
                
                <button 
                  onClick={handleShare}
                  className="flex items-center space-x-2 text-sm uppercase tracking-wider text-text-light transition-colors hover:text-primary group"
                >
                  <Share2 className="h-5 w-5 transition-colors group-hover:text-primary" />
                  <span>Partager</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
