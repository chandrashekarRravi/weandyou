'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const MissionItem: React.FC<{ title: string; index: number; progress: any; total: number }> = ({ title, index, progress, total }) => {
  const step = 1 / total;
  const rangeStart = index * step;
  const rangeEnd = (index + 1) * step;

  let in1 = rangeStart - 0.05;
  let in2 = rangeStart + 0.05;
  let in3 = rangeEnd - 0.05;
  let in4 = rangeEnd + 0.05;

  if (index === 0) {
    in1 = -0.1;
    in2 = 0;
  }
  if (index === total - 1) {
    in3 = 1;
    in4 = 1.1;
  }

  const inputRange = [in1, in2, in3, in4];

  const activeValue = useTransform(progress, inputRange, [0, 1, 1, 0]);

  const opacity = useTransform(activeValue, [0, 1], [0.3, 1]);
  const x = useTransform(activeValue, [0, 1], [0, 15]);
  const color = useTransform(activeValue, [0, 1], ["rgba(255,255,255,0.3)", "rgba(255,255,255,1)"]);
  const arrowOpacity = useTransform(activeValue, [0, 1], [0, 1]);
  const arrowX = useTransform(activeValue, [0, 1], [-40, 0]);

  const displayIndex = (index + 1).toString().padStart(2, '0');

  return (
    <motion.div className="py-4 md:py-6 lg:py-8 border-b border-white/10 flex items-center justify-between group">
      <div className="flex items-center gap-4 lg:gap-6 relative min-h-[30px] md:min-h-[30px] lg:min-h-[40px]">
        <motion.div
          style={{ opacity: arrowOpacity, x: arrowX }}
          className="text-brand-primary absolute left-0 flex items-center justify-center top-1/2 -translate-y-1/2"
        >
          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 -rotate-45" />
        </motion.div>
        <motion.div style={{ x }} className="pl-8 sm:pl-10 lg:pl-12 flex items-center">
          <motion.span style={{ color }} className="text-base md:text-xl lg:text-2xl xl:text-3xl font-display font-medium whitespace-nowrap">
            {title}
          </motion.span>
        </motion.div>
      </div>
      <motion.sup style={{ opacity }} className="text-xs sm:text-sm font-bold text-white ml-4 shrink-0 mt-[-1em]">
        {displayIndex}
      </motion.sup>
    </motion.div>
  );
};

export const Mission = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const missionItems = [
    "Social Media Marketing",
    "Web Design & Development",
    "Content Creations",
    "Branding & Identity",
    "Photo & Video Shoots"
  ];

  const shiftAmount = ((missionItems.length - 1) / missionItems.length) * 100;
  const listY = useTransform(scrollYProgress, [0, 1], ["0%", `-${shiftAmount}%`]);

  return (
    <section ref={containerRef} id="mission" className="relative h-[400vh] bg-brand-dark/50">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden w-full">
        <div className="max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row gap-8 lg:gap-24 items-center">

          {/* Left Side */}
          <div className="w-full lg:w-5/12 flex flex-col gap-4 lg:gap-6 lg:pr-8 pt-16 lg:pt-0">
            <div className="text-2xl md:text-5xl font-display font-bold text-brand-primary mb-2">Our Mission</div>
            <h2 className="text-sm md:text-2xl font-display font-normal max-w-4xl mx-auto leading-tight">
              Empowering businesses to succeed online through <span className="text-brand-primary font-display font-bold text-sm md:text-2xl align-middle inline-block px-2">strategic marketing</span>, innovative technology, and powerful creative content.
            </h2>
          </div>

          {/* Right Side - Scrolling Text List */}
          <div className="w-full lg:w-9/12 border-t border-white/10 lg:border-t-0 mt-6 md:mt-0 relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden" style={{ WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)' }}>
            <motion.div
              style={{ y: listY }}
              className="w-full absolute top-[30%] lg:top-[35%] flex flex-col"
            >
              {missionItems.map((item, index) => (
                <MissionItem
                  key={index}
                  title={item}
                  index={index}
                  progress={scrollYProgress}
                  total={missionItems.length}
                />
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
