import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Sprout, BookOpen, Monitor, ArrowRight } from 'lucide-react';
import { ProjectModal } from './ProjectModal';

interface Project {
  id: string;
  titleKey: string;
  summaryKey: string;
  descKey: string;
  image?: string;
  techs: string[];
  gradient: string;
  icon: React.ReactNode;
}

export const ProjectsSection: React.FC = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'english_master',
      titleKey: 'projects.english_master.title',
      summaryKey: 'projects.english_master.summary',
      descKey: 'projects.english_master.description',
      image: 'imgs/kotli-english.png',
      techs: ['Blazor WASM', 'Firebase RTDB', 'C#'],
      gradient: 'from-amber-500 to-orange-600',
      icon: <BookOpen size={36} />,
    },
    {
      id: 'vegelog',
      titleKey: 'projects.vegelog.title',
      summaryKey: 'projects.vegelog.summary',
      descKey: 'projects.vegelog.description',
      techs: ['Blazor WASM', 'ASP.NET Core WebAPI', 'SQL Server'],
      gradient: 'from-emerald-500 to-teal-700',
      icon: <Sprout size={36} />,
    },
    {
      id: 'sukkirikun',
      titleKey: 'projects.sukkirikun.title',
      summaryKey: 'projects.sukkirikun.summary',
      descKey: 'projects.sukkirikun.description',
      techs: ['WPF', '.NET Core', 'C#'],
      gradient: 'from-blue-500 to-indigo-700',
      icon: <Monitor size={36} />,
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="projects" className="py-24 px-6 bg-nature-light-bg dark:bg-nature-dark-bg text-nature-light-text dark:text-nature-dark-text relative">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Title */}
        <div className="text-center space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold border-b-2 border-nature-light-green dark:border-nature-dark-green pb-3 inline-block"
          >
            {t('projects.title')}
          </motion.h2>
        </div>

        {/* Project Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 400, damping: 19 }}
              onClick={() => setSelectedProject(project)}
              className="flex flex-col bg-white/40 dark:bg-white/[0.02] backdrop-blur-md rounded-3xl overflow-hidden border border-white/50 dark:border-white/5 shadow-sm hover:shadow-md cursor-pointer group"
            >
              {/* Card Header / Image */}
              {project.image ? (
                <div className="h-48 overflow-hidden relative border-b border-white/30 dark:border-white/5">
                  <img 
                    src={project.image} 
                    alt={t(project.titleKey)} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                </div>
              ) : (
                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex flex-col justify-center items-center relative border-b border-white/30 dark:border-white/5`}>
                  <div className="text-white bg-black/15 p-3 rounded-full backdrop-blur-sm shadow-inner group-hover:scale-110 transition-transform duration-500">
                    {project.icon}
                  </div>
                </div>
              )}

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold group-hover:text-nature-light-green dark:group-hover:text-nature-dark-green transition-colors">
                    {t(project.titleKey)}
                  </h3>
                  <p className="text-sm opacity-85 leading-relaxed text-justify line-clamp-4">
                    {t(project.summaryKey)}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="space-y-4 pt-4 border-t border-white/40 dark:border-white/5">
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.techs.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2.5 py-0.5 bg-white/50 dark:bg-white/5 border border-white/60 dark:border-white/5 rounded-full text-xs font-semibold opacity-95"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="flex items-center gap-1.5 text-sm font-bold text-nature-light-brown dark:text-nature-dark-brown group-hover:translate-x-1.5 transition-transform duration-300">
                    <span>{t('projects.learn_more')}</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Animated Modal overlay */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};