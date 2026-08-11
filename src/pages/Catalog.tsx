import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { Search, Filter, X } from "lucide-react";
import { products, collections } from "../data/mockData";
import { ProductCard } from "../components/products/ProductCard";
import { Button } from "../components/ui/Button";

export function Catalog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCollection, setSelectedCollection] = useState<string>("Toutes");
  const [selectedColor, setSelectedColor] = useState<string>("Toutes");
  const [selectedAvailability, setSelectedAvailability] = useState<string>("Toutes");
  const [sortBy, setSortBy] = useState<string>("Nouveautés");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Extract all unique colors
  const allColors = useMemo(() => {
    const colors = new Set<string>();
    products.forEach(p => p.colors.forEach(c => colors.add(c)));
    return ["Toutes", ...Array.from(colors)];
  }, []);

  const collectionOptions = ["Toutes", ...collections.map(c => c.name)];
  const availabilityOptions = ["Toutes", "Disponible", "Sur demande"];
  const sortOptions = ["Nouveautés", "Populaires", "Alphabétique"];

  // Filter and Sort Logic
  const filteredProducts = useMemo(() => {
    let result = products;

    // Search
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        p => p.name.toLowerCase().includes(q) || 
             p.reference.toLowerCase().includes(q) ||
             p.collection.toLowerCase().includes(q) ||
             p.colors.some(c => c.toLowerCase().includes(q))
      );
    }

    // Filters
    if (selectedCollection !== "Toutes") {
      result = result.filter(p => p.collection === selectedCollection);
    }
    if (selectedColor !== "Toutes") {
      result = result.filter(p => p.colors.includes(selectedColor));
    }
    if (selectedAvailability !== "Toutes") {
      const isAvailable = selectedAvailability === "Disponible";
      result = result.filter(p => p.available === isAvailable);
    }

    // Sort
    result = [...result].sort((a, b) => {
      if (sortBy === "Alphabétique") return a.name.localeCompare(b.name);
      if (sortBy === "Nouveautés") return (a.isNew === b.isNew) ? 0 : a.isNew ? -1 : 1;
      if (sortBy === "Populaires") return b.popularity - a.popularity;
      return 0;
    });

    return result;
  }, [searchQuery, selectedCollection, selectedColor, selectedAvailability, sortBy]);

  const FilterPanel = () => (
    <div className="space-y-8">
      <div className="space-y-3">
        <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-primary">Collection</h3>
        <div className="flex flex-col space-y-2">
          {collectionOptions.map(option => (
            <label key={option} className="flex items-center space-x-3 cursor-pointer">
              <input 
                type="radio" 
                name="collection"
                checked={selectedCollection === option}
                onChange={() => setSelectedCollection(option)}
                className="form-radio text-accent focus:ring-accent h-4 w-4"
              />
              <span className="text-sm text-text-main">{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-primary">Couleur</h3>
        <div className="flex flex-col space-y-2">
          {allColors.map(option => (
            <label key={option} className="flex items-center space-x-3 cursor-pointer">
              <input 
                type="radio" 
                name="color"
                checked={selectedColor === option}
                onChange={() => setSelectedColor(option)}
                className="form-radio text-accent focus:ring-accent h-4 w-4"
              />
              <span className="text-sm text-text-main">{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-primary">Disponibilité</h3>
        <div className="flex flex-col space-y-2">
          {availabilityOptions.map(option => (
            <label key={option} className="flex items-center space-x-3 cursor-pointer">
              <input 
                type="radio" 
                name="availability"
                checked={selectedAvailability === option}
                onChange={() => setSelectedAvailability(option)}
                className="form-radio text-accent focus:ring-accent h-4 w-4"
              />
              <span className="text-sm text-text-main">{option}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-secondary pt-32 pb-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-primary mb-6">Pagnes & Tissus</h1>
          
          {/* Search Bar */}
          <div className="relative max-w-xl">
            <input 
              type="text" 
              placeholder="Rechercher par nom, référence, collection..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border-b border-primary/20 bg-transparent py-4 pl-10 pr-4 font-sans outline-none transition-colors focus:border-primary"
            />
            <Search className="absolute left-0 top-1/2 h-5 w-5 -translate-y-1/2 text-text-light" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-16">
          {/* Mobile Filter Toggle */}
          <div className="mb-6 flex items-center justify-between lg:hidden">
            <Button 
              variant="outline" 
              onClick={() => setIsMobileFilterOpen(true)}
              className="flex items-center space-x-2"
            >
              <Filter className="h-4 w-4" />
              <span>Filtres</span>
            </Button>
            
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent text-sm uppercase tracking-wider outline-none"
            >
              {sortOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>

          {/* Desktop Filters */}
          <div className="hidden w-64 shrink-0 lg:block">
            <div className="sticky top-32">
              <div className="mb-8 flex items-center justify-between">
                <span className="font-serif text-xl">Filtres</span>
                <span className="text-sm text-text-light">{filteredProducts.length} produits</span>
              </div>
              <FilterPanel />
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="hidden lg:flex items-center justify-end mb-8">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-text-light uppercase tracking-wider">Trier par:</span>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent font-medium border-b border-primary/20 pb-1 outline-none focus:border-primary"
                >
                  {sortOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <p className="font-serif text-2xl text-primary mb-4">Aucun tissu ne correspond à votre recherche.</p>
                <Button 
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCollection("Toutes");
                    setSelectedColor("Toutes");
                    setSelectedAvailability("Toutes");
                  }}
                  variant="outline"
                >
                  Réinitialiser les filtres
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex bg-black/50 lg:hidden">
          <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="w-4/5 max-w-sm bg-secondary h-full overflow-y-auto p-6 shadow-xl"
          >
            <div className="flex items-center justify-between mb-8">
              <span className="font-serif text-2xl">Filtres</span>
              <button onClick={() => setIsMobileFilterOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>
            <FilterPanel />
            <div className="mt-12">
               <Button className="w-full" onClick={() => setIsMobileFilterOpen(false)}>Afficher {filteredProducts.length} résultats</Button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
