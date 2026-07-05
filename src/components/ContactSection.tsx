import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, Github } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-nature-light-card/45 dark:bg-nature-dark-card/20 text-nature-light-text dark:text-nature-dark-text pt-24 pb-16 px-6 relative overflow-hidden">
      
      {/* Wave Divider at the top of the footer */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-[0] transform rotate-180 pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[40px] text-nature-light-bg dark:text-nature-dark-bg fill-current">
          <path d="M0,0 C150,90 350,120 600,60 C850,0 1050,30 1200,90 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

      <div className="max-w-3xl mx-auto text-center space-y-8 relative z-10">
        
        {/* Contact Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-bold tracking-wide">
            {t('contact.title')}
          </h2>
          <p className="text-lg max-w-xl mx-auto leading-relaxed opacity-95">
            {t('contact.p1')}
          </p>
        </motion.div>

        {/* Contact Icons */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center items-center gap-8 text-4xl pt-4"
        >
          <a 
            href="mailto:lego.sato.4135@gmail.com"
            className="p-3 rounded-full bg-nature-light-bg dark:bg-nature-dark-bg border border-nature-light-card dark:border-nature-dark-card/10 text-nature-light-brown dark:text-nature-dark-brown hover:text-nature-light-green dark:hover:text-nature-dark-green hover:scale-110 shadow-md hover:shadow-lg dark:shadow-none transition-all"
            title="Email"
          >
            <Mail size={32} />
          </a>
          <a 
            href="https://github.com/fukicycle" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-nature-light-bg dark:bg-nature-dark-bg border border-nature-light-card dark:border-nature-dark-card/10 text-nature-light-brown dark:text-nature-dark-brown hover:text-nature-light-green dark:hover:text-nature-dark-green hover:scale-110 shadow-md hover:shadow-lg dark:shadow-none transition-all"
            title="GitHub"
          >
            <Github size={32} />
          </a>
        </motion.div>

        {/* Copyright */}
        <div className="pt-12 text-sm opacity-60 font-semibold tracking-wider">
          {t('contact.footer')}
        </div>
      </div>
    </footer>
  );
};