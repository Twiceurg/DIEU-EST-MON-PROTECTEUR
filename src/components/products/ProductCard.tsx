import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Product } from "../../types";
import { cn } from "../../lib/utils";
import { useState, useEffect } from "react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('demp_favorites') || '[]');
    setIsFavorite(favorites.includes(product.id));
  }, [product.id]);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    const favorites = JSON.parse(localStorage.getItem('demp_favorites') || '[]');
    let newFavorites;
    if (isFavorite) {
      newFavorites = favorites.filter((id: string) => id !== product.id);
    } else {
      newFavorites = [...favorites, product.id];
    }
    localStorage.setItem('demp_favorites', JSON.stringify(newFavorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <Link to={`/produits/${product.id}`} className="group flex flex-col h-full">
      <div className="relative aspect-[3/4] overflow-hidden bg-muted mb-4">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-primary text-secondary px-3 py-1 text-xs uppercase tracking-widest font-medium">
              Nouveau
            </span>
          )}
          {product.featured && (
            <span className="bg-accent text-white px-3 py-1 text-xs uppercase tracking-widest font-medium">
              Coup de cœur
            </span>
          )}
        </div>

        {/* Favorite Button */}
        <button 
          onClick={toggleFavorite}
          className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full transition-transform hover:scale-110 z-10"
          aria-label="Ajouter aux favoris"
        >
          <Heart 
            className={cn("h-5 w-5 transition-colors", isFavorite ? "fill-accent text-accent" : "text-primary")} 
          />
        </button>

        {/* Quick View CTA (visible on hover) */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
          <div className="bg-primary/90 py-3 text-center text-sm font-medium tracking-wider text-white uppercase backdrop-blur-sm">
            Voir le détail
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1 space-y-1">
        <div className="flex items-center justify-between">
          <span className="text-xs text-text-light uppercase tracking-wider">{product.collection}</span>
          <div className="flex gap-1">
            {product.colors.slice(0, 3).map((color) => (
              <span key={color} className="text-[10px] text-text-light uppercase border border-text-light/20 px-1">
                {color}
              </span>
            ))}
          </div>
        </div>
        <h3 className="font-serif text-xl text-primary">{product.name}</h3>
        <div className="flex items-center justify-between mt-auto pt-2">
          <span className="text-sm text-text-light">{product.reference}</span>
          <span className={cn("text-xs uppercase tracking-wider", product.available ? "text-accent" : "text-text-light")}>
            {product.available ? "Disponible" : "Sur demande"}
          </span>
        </div>
      </div>
    </Link>
  );
}
