import GithubCard from './GithubCard';
import ProjectsCard from './ProjectsCard';
import ExperienceCard from './ExperienceCard';
import ContactCard from './ContactCard';
import HeroCard from './HeroCard';
import AvailabilityCard from './AvailabilityCard';
import TechCard from './TechCard';

function BentoGrid() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:p-8">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-8">
        <HeroCard />
        <AvailabilityCard />
        <TechCard />
        <GithubCard />
        <ProjectsCard />
        <ExperienceCard />
        <ContactCard />
      </div>
    </main>
  );
}

export default BentoGrid;
