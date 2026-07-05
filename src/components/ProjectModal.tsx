import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { X, Sparkles, Code2 } from 'lucide-react';

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

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { t } = useTranslation();

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm"
      />

      {/* Glassmorphic Modal Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ type: 'spring', damping: 26, stiffness: 360 }}
        className="relative bg-white/70 dark:bg-nature-dark-card/60 backdrop-blur-xl text-nature-light-text dark:text-nature-dark-text rounded-3xl overflow-hidden shadow-2xl max-w-2xl w-full border border-white/50 dark:border-white/10 z-10 max-h-[85vh] flex flex-col"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-black/40 text-white hover:bg-black/60 p-2 rounded-full transition-colors z-30"
          title={t('modal.close')}
        >
          <X size={18} />
        </button>

        {/* Scrollable Container inside modal */}
        <div className="overflow-y-auto w-full flex-1 scrollbar-thin">
          {/* Header Visual */}
          {project.image ? (
            <div className="h-40 sm:h-56 md:h-64 overflow-hidden relative border-b border-white/30 dark:border-white/5">
              <img
                src={project.image}
                alt={t(project.titleKey)}
                className="w-full h-full object-cover animate-pulse-slow"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                  {t(project.titleKey)}
                </h3>
              </div>
            </div>
          ) : (
            <div className={`h-36 sm:h-48 bg-gradient-to-br ${project.gradient} flex flex-col justify-center items-center relative border-b border-white/30 dark:border-white/5`}>
              <div className="text-white bg-black/20 p-3 rounded-full backdrop-blur-sm shadow-inner mb-1.5">
                {project.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                {t(project.titleKey)}
              </h3>
            </div>
          )}

          {/* Content Body */}
          <div className="p-5 sm:p-8 space-y-6">
            <div className="space-y-4">
              <p className="text-base sm:text-lg leading-relaxed text-justify whitespace-pre-wrap">
                {t(project.descKey)}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="space-y-3">
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-nature-light-brown dark:text-nature-dark-brown flex items-center gap-2">
                <Code2 size={16} />
                <span>{t('modal.tech_stack')}</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/50 dark:bg-white/5 border border-white/60 dark:border-white/5 rounded-full text-xs sm:text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Development Status Notification */}
            <div className="pt-4 border-t border-white/40 dark:border-white/5 flex items-center gap-2 text-xs opacity-75 font-semibold">
              <Sparkles size={14} className="text-nature-light-green dark:text-nature-dark-green" />
              <span>{t('modal.under_construction')}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};