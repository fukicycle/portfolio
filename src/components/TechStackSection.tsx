import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Code2, Globe, Database, Network, CheckCircle2 } from 'lucide-react';

interface TechItem {
  nameKey: string;
}

interface TechCategory {
  titleKey: string;
  icon: React.ReactNode;
  items: TechItem[];
  colorClass: string;
}

export const TechStackSection: React.FC = () => {
  const { t } = useTranslation();

  const categories: TechCategory[] = [
    {
      titleKey: 'tech_stack.categories.languages',
      icon: <Code2 className="text-nature-light-brown dark:text-nature-dark-brown" size={24} />,
      colorClass: 'border-nature-light-brown/30 dark:border-nature-dark-brown/20',
      items: [
        { nameKey: 'tech_stack.items.csharp' },
        { nameKey: 'tech_stack.items.kotlin' },
        { nameKey: 'tech_stack.items.java' },
        { nameKey: 'tech_stack.items.typescript' },
        { nameKey: 'tech_stack.items.javascript' },
      ],
    },
    {
      titleKey: 'tech_stack.categories.frameworks',
      icon: <Globe className="text-nature-light-green dark:text-nature-dark-green" size={24} />,
      colorClass: 'border-nature-light-green/30 dark:border-nature-dark-green/20',
      items: [
        { nameKey: 'tech_stack.items.blazor' },
        { nameKey: 'tech_stack.items.react' },
        { nameKey: 'tech_stack.items.wpf' },
        { nameKey: 'tech_stack.items.aspnet' },
        { nameKey: 'tech_stack.items.android' },
      ],
    },
    {
      titleKey: 'tech_stack.categories.backend_db',
      icon: <Database className="text-amber-600 dark:text-amber-400" size={24} />,
      colorClass: 'border-amber-500/20 dark:border-amber-500/10',
      items: [
        { nameKey: 'tech_stack.items.firebase' },
        { nameKey: 'tech_stack.items.sql_server' },
      ],
    },
    {
      titleKey: 'tech_stack.categories.infrastructure',
      icon: <Network className="text-blue-600 dark:text-blue-400" size={24} />,
      colorClass: 'border-blue-500/20 dark:border-blue-500/10',
      items: [
        { nameKey: 'tech_stack.items.linux' },
        { nameKey: 'tech_stack.items.cisco' },
        { nameKey: 'tech_stack.items.windows_server' },
        { nameKey: 'tech_stack.items.aws' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-24 px-6 bg-nature-light-bg dark:bg-nature-dark-bg text-nature-light-text dark:text-nature-dark-text relative overflow-hidden">
      
      {/* Background soft leaves decoration */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[35%] h-[35%] rounded-full bg-nature-light-green/5 dark:bg-nature-dark-green/3 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-16 relative z-10">
        
        {/* Section Title */}
        <div className="text-center space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold border-b-2 border-nature-light-green dark:border-nature-dark-green pb-3 inline-block"
          >
            {t('tech_stack.title')}
          </motion.h2>
          <p className="text-lg max-w-2xl mx-auto opacity-80 leading-relaxed font-medium">
            {t('tech_stack.subtitle')}
          </p>
        </div>

        {/* Glassmorphic Categories Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 400, damping: 19 }}
              className="p-8 rounded-3xl bg-white/40 dark:bg-white/[0.02] backdrop-blur-md border border-white/50 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Category Header */}
                <h3 className="text-xl font-bold flex items-center gap-3 pb-3 border-b border-nature-light-card/80 dark:border-nature-dark-card/5">
                  {category.icon}
                  <span>{t(category.titleKey)}</span>
                </h3>

                {/* Tech List */}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {category.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-center gap-2.5">
                      <CheckCircle2 size={18} className="text-nature-light-green dark:text-nature-dark-green shrink-0" />
                      <span className="font-semibold text-base leading-tight">
                        {t(item.nameKey)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};