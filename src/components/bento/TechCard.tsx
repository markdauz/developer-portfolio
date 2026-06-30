import { useState } from 'react';

import BentoCard from './BentoCard';
import SkillsModal from './SkillsModal';

import { FaReact, FaNodeJs } from 'react-icons/fa';

import { SiJavascript, SiNextdotjs, SiTypescript } from 'react-icons/si';

const techStack = [
  {
    icon: FaReact,
    label: 'React',
  },
  {
    icon: SiNextdotjs,
    label: 'Next.js',
  },
  {
    icon: FaReact,
    label: 'React Native',
  },
  {
    icon: SiTypescript,
    label: 'TypeScript',
  },
  {
    icon: SiJavascript,
    label: 'JavaScript',
  },
  {
    icon: FaNodeJs,
    label: 'Node.js',
  },
];

function TechCard() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <BentoCard className="col-span-12 lg:col-span-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Tech Stack</h2>

            <p className="mt-2 text-sm text-zinc-400">
              Core technologies I use every day.
            </p>
          </div>

          <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-400">
            Core
          </span>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {techStack.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="group flex flex-col items-center justify-center rounded-3xl border border-white/5 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-blue-500/10"
            >
              <Icon
                size={36}
                className="text-zinc-300 transition-colors group-hover:text-blue-400"
              />

              <span className="mt-3 text-center text-sm font-medium text-zinc-400 group-hover:text-white">
                {label}
              </span>
            </div>
          ))}
        </div>

        <button
          onClick={() => setOpen(true)}
          className="mt-8 w-full rounded-2xl border border-white/10 py-3 font-medium transition-all hover:border-blue-500/30 hover:bg-blue-500/10"
        >
          View All Skills →
        </button>
      </BentoCard>

      <SkillsModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}

export default TechCard;
