import BentoCard from './BentoCard';

function AvailabilityCard() {
  return (
    <BentoCard
      className="
        col-span-12
        lg:col-span-4
      "
    >
      <p className="text-green-400">● Available for work</p>

      <p className="mt-6 text-zinc-400">
        Open to exciting opportunities and collaborations.
      </p>
    </BentoCard>
  );
}

export default AvailabilityCard;
