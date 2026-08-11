import { company } from "../data/mockData";
import { motion } from "motion/react";
import { UserRound } from "lucide-react";
import africanScarf from "../assets/images/african_headwrap_scarf_1786450028137.jpg";

export function About() {
  return (
    <div className="min-h-screen bg-secondary pt-32 pb-24">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="mb-24 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-6xl text-primary mb-6"
          >
            Notre histoire
          </motion.h1>
          <div className="mx-auto h-px w-24 bg-accent"></div>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center mb-32">
          <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="space-y-6 text-lg text-text-main font-light leading-relaxed text-balance"
          >
            <p>
              <strong className="font-serif text-2xl font-normal text-primary">Dieu est mon protecteur</strong> est une entreprise fondée autour d'une conviction simple : la beauté, l'élégance et l'authenticité peuvent s'exprimer à travers chaque tissu.
            </p>
            <p>
              Notre activité repose sur la sélection et la mise en valeur de pagnes et tissus destinés à accompagner les moments importants de la vie.
            </p>
            <p>
              Nous accordons une attention particulière à la qualité des motifs, à l'harmonie des couleurs et à la diversité des styles afin de proposer à notre clientèle des produits qui répondent à différentes envies et occasions.
            </p>
            <p>
              Notre showroom digital constitue une porte d'entrée vers notre univers et permet à nos clients de découvrir nos collections avant de prendre contact avec nous.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-square bg-muted relative"
          >
            <img 
              src={africanScarf} 
              alt="Notre atelier" 
              className="absolute inset-0 h-full w-full object-cover"
            />
          </motion.div>
        </div>

        {/* Manager Section */}
        <div className="bg-primary text-secondary -mx-6 lg:-mx-12 px-6 lg:px-12 py-24 mb-32">
           <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
              <div className="order-2 lg:order-1 relative aspect-[3/4] flex items-center justify-center">
                 <UserRound
                   aria-label={company.manager}
                   className="h-32 w-32 text-accent/80"
                   strokeWidth={1}
                 />
              </div>
              <div className="order-1 lg:order-2 space-y-8">
                <div>
                  <h2 className="font-serif text-4xl md:text-5xl text-accent mb-2">{company.manager}</h2>
                  <p className="text-sm uppercase tracking-widest text-secondary/60">Une vision portée par la passion.</p>
                </div>
                
                <div className="space-y-6 text-lg font-light leading-relaxed text-secondary/90">
                  <p>
                    KPODZO Akossiwa, responsable de Dieu est mon protecteur, porte une vision fondée sur la qualité, l'élégance et la satisfaction de la clientèle.
                  </p>
                  <p>
                    À travers son engagement, elle veille à proposer une sélection de pagnes et tissus répondant aux attentes d'une clientèle à la recherche de produits authentiques, élégants et adaptés à différentes occasions.
                  </p>
                  <p>
                    Sa démarche repose sur une relation de proximité avec les clients, une écoute attentive de leurs besoins et une volonté constante de valoriser le textile dans toute sa richesse.
                  </p>
                </div>

                <blockquote className="border-l-2 border-accent pl-6 py-2 mt-8">
                  <p className="font-serif text-2xl italic text-secondary">
                    « Chaque tissu possède son caractère. Notre rôle est de vous aider à trouver celui qui vous correspond. »
                  </p>
                </blockquote>
              </div>
           </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-primary">Pourquoi nous choisir</h2>
        </div>
        
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-3 lg:grid-cols-5 text-center">
           {[
             { title: "Qualité", desc: "Des tissus sélectionnés avec attention." },
             { title: "Élégance", desc: "Des motifs et couleurs pour révéler votre style." },
             { title: "Authenticité", desc: "Une sélection qui valorise la richesse du textile." },
             { title: "Conseil", desc: "Une écoute et un accompagnement personnalisés." },
             { title: "Proximité", desc: "Une relation directe avec notre clientèle." },
           ].map((item, idx) => (
             <motion.div 
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: idx * 0.1 }}
               className="flex flex-col items-center"
             >
                <div className="h-12 w-12 border border-primary/20 rounded-full flex items-center justify-center mb-6">
                   <div className="h-2 w-2 bg-accent rounded-full"></div>
                </div>
                <h3 className="font-serif text-xl text-primary mb-3">{item.title}</h3>
                <p className="text-sm text-text-light font-light text-balance">{item.desc}</p>
             </motion.div>
           ))}
        </div>
      </div>
    </div>
  );
}
