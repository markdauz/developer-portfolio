import BentoCard from './BentoCard';

import { FaGithub, FaExternalLinkAlt, FaMobileAlt } from 'react-icons/fa';

import { SiNextdotjs } from 'react-icons/si';

const projects = [
  {
    title: 'BuildWise Estimate',
    category: 'Mobile App',
    description:
      'A React Native application that helps contractors and homeowners estimate construction materials and project costs with a fast and intuitive mobile experience.',
    tech: ['React Native', 'TypeScript'],
    icon: FaMobileAlt,
    gradient: 'from-blue-600 via-sky-500 to-cyan-500',
    github: 'https://github.com/markdauz/footing-rebar-concrete-estimator-app',
    demo: '#',
  },
  {
    title: 'NextShop Commerce',
    category: 'E-commerce',
    description:
      'A modern e-commerce platform built with Next.js featuring secure PayPal payments, shopping cart, checkout flow, and responsive design.',
    tech: ['Next.js', 'TypeScript', 'PayPal'],
    icon: SiNextdotjs,
    gradient: 'from-violet-600 via-purple-500 to-fuchsia-500',
    github: 'https://github.com/markdauz/ecommerce',
    demo: '#',
  },
];

function ProjectsCard() {
  return (
    <BentoCard className="col-span-12">
      <div>
        <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
          Featured Projects
        </h2>

        <p className="mt-2 text-sm text-zinc-400 sm:text-base">
          Personal projects showcasing modern web and mobile development.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-2">
        {projects.map((project) => {
          const Icon = project.icon;

          return (
            <div
              key={project.title}
              className="
                group
                flex
                h-full
                flex-col
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
                bg-white/5
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-500/30
                hover:shadow-xl
                hover:shadow-blue-500/10
              "
            >
              {/* Preview */}

              <div
                className={`
                  relative
                  flex
                  aspect-[16/9]
                  items-center
                  justify-center
                  bg-gradient-to-br
                  ${project.gradient}
                `}
              >
                <Icon className="text-5xl text-white/90 transition-transform duration-300 group-hover:scale-110 sm:text-7xl" />

                <span
                  className="
                    absolute
                    right-3
                    top-3
                    rounded-full
                    bg-black/30
                    px-3
                    py-1
                    text-[10px]
                    font-medium
                    backdrop-blur
                    sm:right-5
                    sm:top-5
                    sm:text-xs
                  "
                >
                  {project.category}
                </span>
              </div>

              {/* Content */}

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-xl font-bold sm:text-2xl">
                  {project.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-zinc-400 sm:text-base sm:leading-7">
                  {project.description}
                </p>

                {/* Tech */}

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-full
                        bg-blue-500/10
                        px-3
                        py-1
                        text-[11px]
                        font-medium
                        text-blue-300
                        sm:text-xs
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      inline-flex
                      flex-1
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      border
                      border-white/10
                      px-4
                      py-3
                      text-sm
                      font-medium
                      transition-all
                      hover:bg-white/10
                    "
                  >
                    <FaGithub />

                    <span>GitHub</span>
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      inline-flex
                      flex-1
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-blue-600
                      px-4
                      py-3
                      text-sm
                      font-medium
                      transition-all
                      hover:bg-blue-500
                    "
                  >
                    <FaExternalLinkAlt />

                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </BentoCard>
  );
}

export default ProjectsCard;
