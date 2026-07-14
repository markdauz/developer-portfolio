import BentoCard from './BentoCard';
import {
  FaGlobe,
  FaMobileAlt,
  FaChartBar,
  FaShoppingCart,
  FaTools,
  FaLaptopCode,
} from 'react-icons/fa';

const services = [
  {
    icon: <FaGlobe />,
    title: 'Web Applications',
  },
  {
    icon: <FaMobileAlt />,
    title: 'Mobile Apps',
  },
  {
    icon: <FaChartBar />,
    title: 'Admin Dashboards',
  },
  {
    icon: <FaShoppingCart />,
    title: 'E-commerce',
  },
  {
    icon: <FaTools />,
    title: 'Business Tools',
  },
  {
    icon: <FaLaptopCode />,
    title: 'Responsive UI',
  },
];

function ExperienceCard() {
  return (
    <BentoCard className="col-span-12 lg:col-span-6">
      {/* Header */}
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-md">
          <h2 className="text-2xl font-bold sm:text-3xl">What I Build</h2>

          <p className="mt-2 text-sm leading-6 text-zinc-400 sm:text-base">
            Building modern, scalable, and user-focused solutions for businesses
            and startups.
          </p>
        </div>

        <div className="text-left sm:text-right">
          <h1 className="text-5xl font-extrabold leading-none text-blue-500 sm:text-6xl lg:text-7xl">
            5+
          </h1>

          <p className="mt-1 text-xs font-medium uppercase tracking-[0.3em] text-zinc-500 sm:text-sm">
            Years
          </p>
        </div>
      </div>

      {/* Services */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="
              flex
              items-center
              gap-4
              rounded-2xl
              border
              border-white/10
              bg-white/5
              p-4
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-blue-500/30
              hover:bg-blue-500/5
            "
          >
            <div
              className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-blue-500/10
                text-lg
                text-blue-400
              "
            >
              {service.icon}
            </div>

            <span className="text-sm font-medium sm:text-base">
              {service.title}
            </span>
          </div>
        ))}
      </div>
    </BentoCard>
  );
}

export default ExperienceCard;
