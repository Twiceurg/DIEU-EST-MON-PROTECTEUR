import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Search, X } from "lucide-react";
import { cn } from "../../lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { Logo } from "../ui/Logo";

const navLinks = [
  { name: "Accueil", href: "/" },
  { name: "Collections", href: "/collections" },
  { name: "Pagnes & Tissus", href: "/pagnes-et-tissus" },
  { name: "À-propos", href: "/a-propos" },
  { name: "Galerie", href: "/galerie" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === "/";
  const isTransparentOnDark = isHome && !isScrolled && !isMobileMenuOpen;
  const textColorClass = isTransparentOnDark ? "text-secondary" : "text-primary";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-40 w-full transition-all duration-500",
          isScrolled
            ? "bg-secondary/95 py-4 shadow-sm backdrop-blur-md"
            : "bg-transparent py-6"
        )}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 lg:px-12">
          <Link to="/" className="z-50 outline-none">
            <Logo 
              iconClassName="text-accent" 
              textClassName={textColorClass} 
              hideTextOnMobile={true} 
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-sm uppercase tracking-wider transition-colors hover:text-accent",
                  location.pathname === link.href ? "text-accent" : textColorClass
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden items-center space-x-6 md:flex">
            <button aria-label="Recherche" className={cn("transition-colors hover:text-accent", textColorClass)}>
              <Search className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className={cn("z-50 flex md:hidden transition-colors", textColorClass)}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 flex flex-col justify-center bg-secondary px-6 pt-24 pb-12 md:hidden"
          >
            <nav className="flex flex-col space-y-6 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "font-serif text-2xl tracking-wide",
                    location.pathname === link.href ? "text-accent" : "text-primary"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
