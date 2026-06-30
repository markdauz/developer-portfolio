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
  SiClaude,
} from 'react-icons/si';

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
      { icon: SiPostman, label: 'REST APIs' },
      { icon: SiGraphql, label: 'WebSockets' },
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
      { icon: SiOpenai, label: 'ChatGPT' },
      { icon: SiClaude, label: 'Claude' },
    ],
  },
];

function SkillsModal({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/10 bg-[#111] p-8"
      >
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold">Technical Skills</h2>

          <button
            onClick={onClose}
            className="text-3xl text-zinc-400 hover:text-white"
          >
            ×
          </button>
        </div>

        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-5 text-xl font-semibold text-blue-400">
                {section.title}
              </h3>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {section.skills.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-2xl bg-white/5 p-4"
                  >
                    <Icon className="text-2xl text-blue-400" />

                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsModal;
