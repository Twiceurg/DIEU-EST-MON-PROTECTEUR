import { useState } from "react";
import { company } from "../data/mockData";
import { Button } from "../components/ui/Button";
import { motion } from "motion/react";

export function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    email: "",
    produit: "",
    message: ""
  });
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setFormData({
        nom: "", prenom: "", telephone: "", email: "", produit: "", message: ""
      });
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

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
            Contact
          </motion.h1>
          <div className="mx-auto h-px w-24 bg-accent"></div>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Info */}
          <div className="space-y-12">
            <div>
              <h2 className="font-serif text-3xl text-primary mb-2">{company.name}</h2>
              <p className="text-text-light uppercase tracking-wider text-sm">Responsable: {company.manager}</p>
            </div>
            
            <div className="space-y-6">
               <div>
                  <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-text-light mb-2">Téléphone</h3>
                  <p className="text-lg text-primary">{company.phone}</p>
               </div>
               <div>
                  <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-text-light mb-2">WhatsApp</h3>
                  <p className="text-lg text-primary">{company.whatsapp}</p>
               </div>
               <div>
                  <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-text-light mb-2">Email</h3>
                  <p className="text-lg text-primary">{company.email}</p>
               </div>
               <div>
                  <h3 className="font-sans text-xs font-semibold uppercase tracking-widest text-text-light mb-2">Adresse</h3>
                  <p className="text-lg text-primary">{company.address}</p>
               </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-12 shadow-sm border border-primary/5">
            <h3 className="font-serif text-2xl text-primary mb-8">Envoyez-nous un message</h3>
            
            {status === "success" && (
              <div className="mb-8 bg-green-50 text-green-800 p-4 border border-green-200">
                Votre message a été envoyé avec succès. Nous vous contacterons dans les plus brefs délais.
              </div>
            )}
            
            {status === "error" && (
              <div className="mb-8 bg-red-50 text-red-800 p-4 border border-red-200">
                Une erreur est survenue. Veuillez réessayer ou nous contacter via WhatsApp.
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                 <div className="space-y-2">
                    <label htmlFor="nom" className="text-xs uppercase tracking-wider text-text-light">Nom *</label>
                    <input 
                      required 
                      type="text" 
                      id="nom" 
                      name="nom" 
                      value={formData.nom} 
                      onChange={handleChange}
                      className="w-full border-b border-primary/20 bg-transparent py-2 outline-none transition-colors focus:border-primary" 
                    />
                 </div>
                 <div className="space-y-2">
                    <label htmlFor="prenom" className="text-xs uppercase tracking-wider text-text-light">Prénom *</label>
                    <input 
                      required 
                      type="text" 
                      id="prenom" 
                      name="prenom" 
                      value={formData.prenom} 
                      onChange={handleChange}
                      className="w-full border-b border-primary/20 bg-transparent py-2 outline-none transition-colors focus:border-primary" 
                    />
                 </div>
              </div>
              
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                 <div className="space-y-2">
                    <label htmlFor="telephone" className="text-xs uppercase tracking-wider text-text-light">Téléphone</label>
                    <input 
                      type="tel" 
                      id="telephone" 
                      name="telephone" 
                      value={formData.telephone} 
                      onChange={handleChange}
                      className="w-full border-b border-primary/20 bg-transparent py-2 outline-none transition-colors focus:border-primary" 
                    />
                 </div>
                 <div className="space-y-2">
                    <label htmlFor="email" className="text-xs uppercase tracking-wider text-text-light">Email *</label>
                    <input 
                      required 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange}
                      className="w-full border-b border-primary/20 bg-transparent py-2 outline-none transition-colors focus:border-primary" 
                    />
                 </div>
              </div>
              
              <div className="space-y-2">
                 <label htmlFor="produit" className="text-xs uppercase tracking-wider text-text-light">Produit recherché (optionnel)</label>
                 <input 
                   type="text" 
                   id="produit" 
                   name="produit" 
                   value={formData.produit} 
                   onChange={handleChange}
                   className="w-full border-b border-primary/20 bg-transparent py-2 outline-none transition-colors focus:border-primary" 
                 />
              </div>

              <div className="space-y-2">
                 <label htmlFor="message" className="text-xs uppercase tracking-wider text-text-light">Message *</label>
                 <textarea 
                   required 
                   id="message" 
                   name="message" 
                   rows={4}
                   value={formData.message} 
                   onChange={handleChange}
                   className="w-full border-b border-primary/20 bg-transparent py-2 outline-none transition-colors focus:border-primary resize-none" 
                 ></textarea>
              </div>
              
              <Button 
                type="submit" 
                className="w-full"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Envoi en cours..." : "Envoyer ma demande"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
