import BentoCard from './BentoCard';

function ProjectsCard() {
  return (
    <BentoCard
      className="
        col-span-12
      "
    >
      <h2 className="text-4xl font-bold">Featured Projects</h2>

      <div className="mt-8 grid gap-8 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        {[1, 2, 3].map((p) => (
          <div
            key={p}
            className="
              overflow-hidden
              rounded-[32px]
              bg-white/5
            "
          >
            <div
              className="
                aspect-[16/10]
                bg-zinc-800
              "
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold">Project {p}</h3>

              <p className="mt-2 text-zinc-400">
                Enterprise React application.
              </p>
            </div>
          </div>
        ))}
      </div>
    </BentoCard>
  );
}

export default ProjectsCard;
