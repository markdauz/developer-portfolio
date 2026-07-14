import BentoCard from './BentoCard';
import { FaDownload } from 'react-icons/fa';
import profile from '../../assets/profile.jpg';

function HeroCard() {
  return (
    <BentoCard
      className="
    col-span-12
    lg:col-span-8
  "
    >
      <div className="flex flex-col-reverse gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl text-center lg:text-left">
          <span
            className="
              rounded-full
              bg-blue-500/20
              px-4
              py-2
              text-sm
              text-blue-400
            "
          >
            React Developer
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
            Mark
            <br />
            Dauz
          </h1>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-zinc-400">
            React, Next.js, and React Native Developer with more than 5 years of
            experience building scalable web and mobile applications. I craft
            fast, accessible, and production-ready solutions with a strong focus
            on performance, clean architecture, and exceptional user
            experiences.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="/Mark_Christopher_Dauz_Resume.pdf"
              download
              className="
    inline-flex
    items-center
    justify-center
    gap-3
    rounded-2xl
    bg-blue-600
    px-6
    py-4
    font-semibold
    transition-all
    duration-300
    hover:-translate-y-1
    hover:bg-blue-500
    hover:shadow-lg
    hover:shadow-blue-500/30
  "
            >
              <FaDownload />

              <span>Download Resume</span>
            </a>
          </div>
        </div>

        <div className="mx-auto flex h-44 w-44 shrink-0 items-center justify-center rounded-full bg-blue-600/20 sm:h-56 sm:w-56 lg:mx-0 lg:h-72 lg:w-72">
          <img
            src={profile}
            alt="Mark Dauz"
            className="h-40 w-40 rounded-full object-cover sm:h-52 sm:w-52 lg:h-64 lg:w-64"
          />
        </div>
      </div>
    </BentoCard>
  );
}

export default HeroCard;
