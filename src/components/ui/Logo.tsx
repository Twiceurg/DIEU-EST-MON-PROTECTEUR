import { cn } from "../../lib/utils";

interface LogoProps {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  hideTextOnMobile?: boolean;
}

export function Logo({ className, iconClassName, textClassName, hideTextOnMobile = false }: LogoProps) {
  return (
    <div className={cn("flex items-center space-x-3 md:space-x-4", className)}>
      {/* Abstract elegant symbol: A shield/hexagon shape representing 'Protecteur' and woven threads for textiles */}
      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className={cn("h-8 w-8 md:h-10 md:w-10 shrink-0", iconClassName)}
      >
        <path d="M50 5 L90 25 L90 75 L50 95 L10 75 L10 25 Z" stroke="currentColor" strokeWidth="3" />
        <path d="M50 15 L80 50 L50 85 L20 50 Z" stroke="currentColor" strokeWidth="2" opacity="0.8" />
        <path d="M35 35 L65 65 M35 65 L65 35" stroke="currentColor" strokeWidth="2" opacity="0.6" />
        <circle cx="50" cy="50" r="4" fill="currentColor" />
        <path d="M50 5 L50 95" stroke="currentColor" strokeWidth="1" opacity="0.4" />
        <path d="M10 50 L90 50" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      </svg>
      
      <div className={cn("flex flex-col justify-center", hideTextOnMobile && "hidden md:flex")}>
        <span className={cn("font-serif text-[10px] md:text-xs tracking-[0.3em] uppercase leading-none text-accent mb-1", textClassName)}>
          Dieu est mon
        </span>
        <span className={cn("font-serif text-base md:text-xl tracking-[0.15em] uppercase leading-none font-medium", textClassName)}>
          Protecteur
        </span>
      </div>
    </div>
  );
}
