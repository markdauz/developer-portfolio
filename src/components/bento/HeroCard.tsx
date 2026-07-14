import BentoCard from './BentoCard';
import { FaDownload, FaArrowRight } from 'react-icons/fa';
import profile from '../../assets/profile.jpg';

function HeroCard() {
  return (
    <BentoCard className="col-span-12 lg:col-span-8">
      <div className="flex flex-col-reverse items-center gap-10 lg:flex-row lg:items-center lg:justify-between">
        {/* Left Content */}
        <div className="max-w-2xl text-center lg:text-left">
          <span
            className="
              inline-flex
              rounded-full
              border
              border-blue-500/20
              bg-blue-500/10
              px-4
              py-2
              text-sm
              font-medium
              text-blue-400
            "
          >
            👋 Hello, I'm
          </span>

          <h1 className="mt-5 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            Mark Dauz
          </h1>

          <h2 className="mt-3 text-lg font-medium text-blue-400 sm:text-xl lg:text-2xl">
            React • Next.js • React Native Developer
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            I build modern, scalable web and mobile applications using React,
            Next.js, React Native, and TypeScript. With over 5 years of
            professional experience, I enjoy transforming complex business
            requirements into fast, intuitive, and production-ready digital
            products.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
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
                px-7
                py-4
                font-semibold
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-blue-500
                hover:shadow-xl
                hover:shadow-blue-500/30
              "
            >
              <FaDownload />
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div
          className="
            relative
            mx-auto
            flex
            h-60
            w-60
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-gradient-to-br
            from-blue-500/20
            to-cyan-500/10
            shadow-2xl
            shadow-blue-500/20
            sm:h-72
            sm:w-72
            lg:mx-0
            lg:h-80
            lg:w-80
          "
        >
          <div className="absolute inset-0 rounded-full border border-blue-400/20" />

          <img
            src={profile}
            alt="Mark Dauz"
            className="
              h-56
              w-56
              rounded-full
              object-cover
              ring-4
              ring-white/10
              sm:h-64
              sm:w-64
              lg:h-72
              lg:w-72
            "
          />
        </div>
      </div>
    </BentoCard>
  );
}

export default HeroCard;
