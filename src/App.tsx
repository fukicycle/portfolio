import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { ThemeProvider } from './components/ThemeContext';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { TechStackSection } from './components/TechStackSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';

const App: React.FC = () => {
  const { i18n } = useTranslation();

  const title = i18n.language === 'ja' 
    ? '佐藤 風輝 | ポートフォリオ' 
    : 'Fuki Sato | Portfolio';
  
  const description = i18n.language === 'ja'
    ? 'Fuki Sato portfolio site. 佐藤風輝のポートフォリオサイト。技能五輪国際大会金メダリストの経歴や自作アプリを紹介しています。'
    : 'Fuki Sato portfolio site. Discover the portfolio of Fuki Sato, Worldskills gold medalist and software engineer, showcasing achievements and private software projects.';

  return (
    <ThemeProvider>
      <Helmet>
        <html lang={i18n.language} />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://fukicycle.github.io/portfolio/" />
        
        {/* OpenGraph tags for premium social sharing SEO */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fukicycle.github.io/portfolio/" />
        <meta property="og:site_name" content={title} />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>

      <main className="min-h-screen bg-nature-light-bg dark:bg-nature-dark-bg text-nature-light-text dark:text-nature-dark-text selection:bg-nature-light-green/20 selection:text-nature-light-green dark:selection:bg-nature-dark-green/20 dark:selection:text-nature-dark-green transition-colors duration-300">
        <HeroSection />
        <AboutSection />
        <TechStackSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </ThemeProvider>
  );
};

export default App;