import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Sun, Moon, Languages, Code, Rocket, ArrowDown } from 'lucide-react';
import { useTheme } from './ThemeContext';
import { FloatingLeaves } from './FloatingLeaves';

export const HeroSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'ja' ? 'en' : 'ja';
    i18n.changeLanguage(nextLang);
    localStorage.setItem('language', nextLang);
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between bg-nature-light-bg dark:bg-nature-dark-bg text-nature-light-text dark:text-nature-dark-text overflow-hidden transition-colors duration-300">
      {/* Background Leaves animation */}
      <FloatingLeaves />

      {/* Gentle organic lighting/glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-nature-light-green/10 dark:bg-nature-dark-green/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-nature-light-brown/10 dark:bg-nature-dark-brown/5 blur-3xl pointer-events-none" />

      {/* Glassmorphic Sticky Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/20 dark:bg-nature-dark-bg/30 border-b border-white/30 dark:border-white/5 px-4 py-3 sm:px-6 sm:py-4 transition-colors">
        <div className="max-w-5xl mx-auto flex items-center justify-end">
          <div className="flex items-center gap-3 sm:gap-6">
            <a
              href="#projects"
              className="text-sm sm:text-lg font-semibold hover:text-nature-light-green dark:hover:text-nature-dark-green transition-colors cursor-pointer"
            >
              {t('nav.projects')}
            </a>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="p-1.5 sm:p-2 rounded-full hover:bg-white/40 dark:hover:bg-white/5 transition-colors flex items-center gap-0.5 sm:gap-1 text-xs sm:text-sm font-semibold border border-white/25 dark:border-white/5"
              title="Change Language"
            >
              <Languages size={15} />
              <span>{i18n.language === 'ja' ? 'EN' : 'JP'}</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-1.5 sm:p-2 rounded-full hover:bg-white/40 dark:hover:bg-white/5 transition-colors border border-white/25 dark:border-white/5"
              title="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <div className="flex-1 flex flex-col justify-center items-center px-4 sm:px-6 text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="text-4xl sm:text-6xl font-bold tracking-tight leading-tight">
            <span>{t('hero.greeting')}</span>
            <span className="block mt-2 text-nature-light-green dark:text-nature-dark-green">
              {t('hero.name')}
            </span>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-base sm:text-xl font-medium opacity-90 mt-8"
          >
            <div className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white/30 dark:bg-nature-dark-card/30 border border-white/40 dark:border-white/5 backdrop-blur-md shadow-sm">
              <Code size={18} className="text-nature-light-brown dark:text-nature-brown" />
              <span>{t('hero.sub_coding')}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white/30 dark:bg-nature-dark-card/30 border border-white/40 dark:border-white/5 backdrop-blur-md shadow-sm">
              <Rocket size={18} className="text-nature-light-green dark:text-nature-dark-green" />
              <span>{t('hero.sub_useful')}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Down Arrow Indicator */}
      <div className="flex justify-center pb-16 z-10">
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-2 text-sm font-semibold opacity-75 hover:opacity-100 transition-opacity cursor-pointer text-nature-light-green dark:text-nature-dark-green"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span>{t('hero.scroll_down')}</span>
          <ArrowDown size={24} />
        </motion.a>
      </div>

      {/* Organic Hill-like Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0] z-10 pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] text-nature-light-card/25 dark:text-nature-dark-card/10 fill-current">
          <path d="M0,0 C150,90 350,120 600,60 C850,0 1050,30 1200,90 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
};