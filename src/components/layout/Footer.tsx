import { Link } from "react-router-dom";
import { company } from "../../data/mockData";
import { useVisitorCounter } from "../../hooks/useVisitorCounter";
import { Logo } from "../ui/Logo";

export function Footer() {
  const visitorCount = useVisitorCounter();

  return (
    <footer className="bg-primary text-secondary pt-20 pb-10">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div className="space-y-6 md:col-span-1">
            <Logo 
              iconClassName="text-accent" 
              textClassName="text-secondary" 
            />
            <p className="text-sm text-secondary/70 font-serif italic">
              L'élégance dans chaque détail.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-accent-light">
              Navigation
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Accueil", href: "/" },
                { name: "Collections", href: "/collections" },
                { name: "Pagnes & Tissus", href: "/pagnes-et-tissus" },
                { name: "À-propos", href: "/a-propos" },
                { name: "Galerie", href: "/galerie" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-secondary/80 transition-colors hover:text-accent-light"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-accent-light">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-secondary/80">
              <li>{company.phone}</li>
              <li>{company.email}</li>
              <li>{company.address}</li>
            </ul>
          </div>

          {/* Social & Meta */}
          <div className="space-y-4">
            <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-accent-light">
              Suivez-nous
            </h3>
            <ul className="space-y-3">
              <li>
                <a href={company.socialLinks.facebook} className="text-sm text-secondary/80 transition-colors hover:text-accent-light" target="_blank" rel="noreferrer">Facebook</a>
              </li>
              <li>
                <a href={company.socialLinks.instagram} className="text-sm text-secondary/80 transition-colors hover:text-accent-light" target="_blank" rel="noreferrer">Instagram</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 border-t border-secondary/20 pt-8 flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0 text-sm text-secondary/60">
          <p>© {new Date().getFullYear()} {company.name}. Tous droits réservés.</p>
          <div className="flex space-x-6">
            <Link to="/mentions-legales" className="hover:text-secondary">Mentions légales</Link>
            <Link to="/confidentialite" className="hover:text-secondary">Politique de confidentialité</Link>
          </div>
          <p>Visiteurs : {visitorCount.toLocaleString('fr-FR')}</p>
        </div>
      </div>
    </footer>
  );
}
