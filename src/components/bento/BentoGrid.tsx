import AvailabilityCard from './AvailabilityCard';
import ContactCard from './ContactCard';
import ExperienceCard from './ExperienceCard';
import GithubCard from './GithubCard';
import HeroCard from './HeroCard';
import ProjectsCard from './ProjectsCard';
import TechCard from './TechCard';

function BentoGrid() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <HeroCard />

        <div className="col-span-12 flex flex-col gap-6 lg:col-span-4">
          <AvailabilityCard />

          <TechCard />
        </div>

        <GithubCard />

        <ProjectsCard />

        <ExperienceCard />

        <ContactCard />
      </div>
    </main>
  );
}

export default BentoGrid;
