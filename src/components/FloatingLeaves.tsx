import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Leaf {
  id: number;
  x: number; // initial horizontal position (%)
  size: number; // size in pixels
  delay: number; // animation delay (s)
  duration: number; // fall duration (s)
  colorClass: string; // CSS color
  rotation: number; // rotation degree
}

export const FloatingLeaves: React.FC = () => {
  const [leaves, setLeaves] = useState<Leaf[]>([]);

  useEffect(() => {
    // Generate 18 randomized leaves
    const newLeaves = Array.from({ length: 18 }).map((_, i) => {
      const colors = [
        'bg-nature-light-green/20 dark:bg-nature-dark-green/10', // Sage Green
        'bg-amber-600/15 dark:bg-amber-500/10',                  // Ochre/Gold
        'bg-emerald-600/20 dark:bg-emerald-500/10',              // Rich Emerald
        'bg-nature-light-accent/20 dark:bg-nature-dark-accent/15' // Warm Sand
      ];

      return {
        id: i,
        x: Math.random() * 100, // 0% to 100% horizontal
        size: Math.random() * 16 + 12, // 12px to 28px
        delay: Math.random() * 8, // start delays
        duration: Math.random() * 15 + 15, // 15s to 30s falling time
        colorClass: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
      };
    });
    setLeaves(newLeaves);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className={`absolute rounded-tl-full rounded-br-full ${leaf.colorClass}`}
          style={{
            left: `${leaf.x}%`,
            top: `-50px`,
            width: leaf.size,
            height: leaf.size * 0.75, // leaf-like ratio
          }}
          initial={{ y: -100, rotate: leaf.rotation, opacity: 0 }}
          animate={{
            y: '100vh',
            x: [0, Math.random() * 60 - 30, Math.random() * 120 - 60, 0], // drifting leaf wind motion
            rotate: [leaf.rotation, leaf.rotation + 180, leaf.rotation + 360],
            opacity: [0, 0.8, 0.8, 0], // fade-in then fade-out near bottom
          }}
          transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};