import BentoCard from './BentoCard';

import { FaReact, FaNodeJs } from 'react-icons/fa';

import {
  SiNextdotjs,
  SiTypescript,
  SiGraphql,
  SiTailwindcss,
} from 'react-icons/si';

function TechCard() {
  const icons = [
    FaReact,
    SiNextdotjs,
    SiTypescript,
    FaNodeJs,
    SiGraphql,
    SiTailwindcss,
  ];

  return (
    <BentoCard
      className="
        col-span-12
        lg:col-span-4
      "
    >
      <h2 className="text-3xl font-bold">Tech Stack</h2>

      <div className="mt-8 grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-3 gap-5">
        {icons.map((Icon, i) => (
          <div
            key={i}
            className="
              flex
              h-20
              items-center
              justify-center
              rounded-3xl
              bg-white/5
            "
          >
            <Icon size={36} />
          </div>
        ))}
      </div>
    </BentoCard>
  );
}

export default TechCard;
