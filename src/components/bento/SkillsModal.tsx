import { useEffect } from 'react';

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from 'react-icons/fa';

import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiGraphql,
  SiExpress,
  SiRedux,
  SiReactquery,
  SiTailwindcss,
  SiMui,
  SiPostman,
  SiFigma,
  SiJira,
  SiOpenai,
} from 'react-icons/si';
import { FaRobot } from 'react-icons/fa';

type Props = {
  open: boolean;
  onClose: () => void;
};

const sections = [
  {
    title: 'Frontend',
    skills: [
      { icon: FaReact, label: 'React' },
      { icon: SiNextdotjs, label: 'Next.js' },
      { icon: FaReact, label: 'React Native' },
      { icon: SiTypescript, label: 'TypeScript' },
      { icon: SiJavascript, label: 'JavaScript' },
      { icon: FaHtml5, label: 'HTML5' },
      { icon: FaCss3Alt, label: 'CSS3' },
      { icon: SiTailwindcss, label: 'Tailwind CSS' },
      { icon: SiMui, label: 'Material UI' },
      { icon: SiRedux, label: 'Redux Toolkit' },
      { icon: SiReactquery, label: 'React Query' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { icon: FaNodeJs, label: 'Node.js' },
      { icon: SiExpress, label: 'Express' },
      { icon: SiGraphql, label: 'GraphQL' },
      { icon: SiPostman, label: 'REST API' },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { icon: FaGitAlt, label: 'Git' },
      { icon: SiPostman, label: 'Postman' },
      { icon: SiFigma, label: 'Figma' },
      { icon: SiJira, label: 'Jira' },
    ],
  },
  {
    title: 'AI Tools',
    skills: [
      {
        icon: SiOpenai,
        label: 'ChatGPT',
      },
      {
        icon: FaRobot,
        label: 'Claude',
      },
    ],
  },
];

function SkillsModal({ open, onClose }: Props) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';

      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      onClick={onClose}
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/70
        p-4
        backdrop-blur-md
      "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          w-full
          max-w-6xl
          overflow-hidden
          rounded-[32px]
          border
          border-white/10
          bg-[#101010]
          shadow-2xl
        "
      >
        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-white/10
            p-6
            sm:p-8
          "
        >
          <div>
            <h2 className="text-2xl font-bold sm:text-4xl">Technical Skills</h2>

            <p className="mt-2 text-sm text-zinc-400 sm:text-base">
              Technologies and tools I use to build modern web and mobile
              applications.
            </p>
          </div>

          <button
            onClick={onClose}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-white/5
              text-2xl
              transition
              hover:bg-white/10
            "
          >
            ×
          </button>
        </div>

        <div
          className="
            hide-scrollbar
    max-h-[75vh]
    overflow-y-auto
    p-6
    sm:p-8
          "
        >
          <div className="grid gap-8 lg:grid-cols-2">
            {sections.map((section) => (
              <div key={section.title}>
                <h3 className="mb-5 text-xl font-semibold text-blue-400">
                  {section.title}
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  {section.skills.map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="
                        group
                        flex
                        items-center
                        gap-3
                        rounded-2xl
                        border
                        border-white/5
                        bg-white/5
                        p-4
                        transition-all
                        duration-300
                        hover:border-blue-500/30
                        hover:bg-blue-500/10
                      "
                    >
                      <Icon
                        className="
                          text-2xl
                          text-zinc-300
                          transition-colors
                          group-hover:text-blue-400
                        "
                      />

                      <span
                        className="
                          text-sm
                          text-zinc-300
                          transition-colors
                          group-hover:text-white
                        "
                      >
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsModal;
