import BentoCard from './BentoCard';

function GithubCard() {
  return (
    <BentoCard
      className="
        col-span-12
        lg:col-span-4
      "
    >
      <h2 className="text-3xl font-bold">GitHub Stats</h2>

      <div className="mt-8">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-blue-500">
          1,247
        </h1>

        <p className="mt-3 text-zinc-400">Contributions</p>
      </div>
    </BentoCard>
  );
}

export default GithubCard;
