import BentoCard from './BentoCard';

function ExperienceCard() {
  return (
    <BentoCard
      className="
    col-span-12
    lg:col-span-6
  "
    >
      <h2 className="text-4xl font-bold">Experience</h2>

      <h1 className="mt-6 text-8xl font-bold text-blue-500">5+</h1>

      <p className="mt-4 text-zinc-400">
        Years building enterprise applications.
      </p>
    </BentoCard>
  );
}

export default ExperienceCard;
