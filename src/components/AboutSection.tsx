import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Trophy, Briefcase, GraduationCap, Award, Calendar } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { t } = useTranslation();

  const timelinePhases = ['phase1', 'phase2', 'phase3', 'phase4', 'phase5', 'phase6'];

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="relative pt-24 pb-32 px-6 bg-nature-light-card/25 dark:bg-nature-dark-card/10 text-nature-light-text dark:text-nature-dark-text overflow-hidden">
      
      {/* Ambient background decoration */}
      <div className="absolute top-1/2 left-[-10%] w-[40%] h-[40%] rounded-full bg-nature-light-green/5 dark:bg-nature-dark-green/3 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-16 relative z-10">
        
        {/* About Me Paragraphs */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-8"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold border-b-2 border-nature-light-green dark:border-nature-dark-green pb-3 inline-block"
          >
            {t('about.title')}
          </motion.h2>

          <div className="space-y-6 text-lg sm:text-xl leading-relaxed text-justify">
            <motion.p variants={itemVariants}>{t('about.p1')}</motion.p>
            <motion.p variants={itemVariants}>{t('about.p2')}</motion.p>
            <motion.p variants={itemVariants}>{t('about.p3')}</motion.p>
          </div>
        </motion.div>

        {/* Career & Achievements Layout (Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8">
          
          {/* Column 1: Detailed Timeline (lg:span-7) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="lg:col-span-7 space-y-8"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold flex items-center gap-3 border-b border-white/40 dark:border-white/5 pb-2"
            >
              <Briefcase className="text-nature-light-brown dark:text-nature-dark-brown" />
              <span>{t('about.timeline_title')}</span>
            </motion.h3>

            {/* Vertical timeline line */}
            <div className="relative border-l-2 border-nature-light-green/30 dark:border-nature-dark-green/20 pl-6 sm:pl-8 ml-3 space-y-8">
              
              {timelinePhases.map((phase) => (
                <motion.div 
                  key={phase}
                  variants={itemVariants} 
                  className="relative space-y-2 group"
                >
                  {/* Timeline dot marker */}
                  <span className="absolute left-[-31px] sm:left-[-39px] top-1 bg-nature-light-bg dark:bg-nature-dark-bg border-2 border-nature-light-green dark:border-nature-dark-green rounded-full p-1 z-10 transition-transform duration-300 group-hover:scale-125">
                    <Calendar size={12} className="text-nature-light-green dark:text-nature-dark-green" />
                  </span>

                  {/* Date Badge */}
                  <span className="inline-block px-3 py-1 text-xs font-bold rounded-full bg-nature-light-green/10 dark:bg-nature-dark-green/20 text-nature-light-green dark:text-nature-dark-green border border-nature-light-green/20 dark:border-nature-dark-green/20">
                    {t(`about.timeline.${phase}.date`)}
                  </span>

                  {/* Glassmorphic Timeline Item Box */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-white/30 dark:bg-white/[0.01] backdrop-blur-md border border-white/40 dark:border-white/5 shadow-sm space-y-2">
                    <h4 className="text-lg font-bold text-nature-light-green dark:text-nature-dark-green leading-tight">
                      {t(`about.timeline.${phase}.title`)}
                    </h4>
                    <p className="text-sm sm:text-base opacity-85 leading-relaxed text-justify">
                      {t(`about.timeline.${phase}.desc`)}
                    </p>
                  </div>
                </motion.div>
              ))}

            </div>
          </motion.div>

          {/* Column 2: Education & Accomplishments (lg:span-5) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="lg:col-span-5 space-y-12"
          >
            {/* Education Box */}
            <div className="space-y-6">
              <motion.h3 
                variants={itemVariants}
                className="text-2xl font-bold flex items-center gap-3 border-b border-white/40 dark:border-white/5 pb-2"
              >
                <GraduationCap className="text-nature-light-brown dark:text-nature-dark-brown" />
                <span>{t('about.education_title')}</span>
              </motion.h3>

              <motion.div 
                variants={itemVariants}
                className="p-5 rounded-2xl bg-white/30 dark:bg-white/[0.01] backdrop-blur-md border border-white/40 dark:border-white/5 shadow-sm space-y-2"
              >
                <span className="text-xs uppercase font-extrabold tracking-wider text-nature-light-brown dark:text-nature-dark-brown">
                  High School Education
                </span>
                <p className="font-bold text-lg leading-snug">
                  {t('about.education_school')}
                </p>
              </motion.div>
            </div>

            {/* Achievements Box */}
            <div className="space-y-6">
              <motion.h3 
                variants={itemVariants}
                className="text-2xl font-bold flex items-center gap-3 border-b border-white/40 dark:border-white/5 pb-2"
              >
                <Trophy className="text-nature-light-green dark:text-nature-dark-green" />
                <span>{t('about.achievements_title')}</span>
              </motion.h3>

              <div className="space-y-6">
                
                {/* Worldskills Gold (World Champion) */}
                <motion.div 
                  variants={itemVariants}
                  className="flex gap-4 p-5 rounded-2xl bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/30 shadow-lg shadow-amber-500/5 relative overflow-hidden backdrop-blur-sm"
                >
                  <div className="bg-amber-500/20 text-amber-600 dark:text-amber-400 p-3 rounded-xl h-fit">
                    <Trophy size={24} />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-extrabold tracking-wider text-amber-600 dark:text-amber-400">Worldskills Gold Medalist</span>
                    <p className="font-bold text-base sm:text-lg leading-snug mt-1">
                      {t('about.achievement_3')}
                    </p>
                  </div>
                </motion.div>

                {/* National Gold */}
                <motion.div 
                  variants={itemVariants}
                  className="flex gap-4 p-4 rounded-2xl bg-white/30 dark:bg-white/[0.01] border border-white/40 dark:border-white/5 relative backdrop-blur-sm"
                >
                  <div className="bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 p-3 rounded-lg h-fit">
                    <Award size={24} />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-semibold text-yellow-600 dark:text-yellow-400">National Gold Medalist</span>
                    <p className="font-bold text-sm sm:text-base leading-snug mt-1">
                      {t('about.achievement_2')}
                    </p>
                  </div>
                </motion.div>

                {/* National Bronze */}
                <motion.div 
                  variants={itemVariants}
                  className="flex gap-4 p-4 rounded-2xl bg-white/30 dark:bg-white/[0.01] border border-white/40 dark:border-white/5 relative backdrop-blur-sm"
                >
                  <div className="bg-orange-600/10 text-orange-600 dark:text-orange-400 p-3 rounded-lg h-fit">
                    <Award size={24} />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-semibold text-orange-600 dark:text-orange-400">National Bronze Medalist</span>
                    <p className="font-bold text-sm sm:text-base leading-snug mt-1">
                      {t('about.achievement_1')}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>

      {/* Wave Transition at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0] pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[50px] text-nature-light-bg dark:text-nature-dark-bg fill-current">
          <path d="M0,0 C150,90 350,120 600,60 C850,0 1050,30 1200,90 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
};