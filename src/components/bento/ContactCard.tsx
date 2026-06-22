import BentoCard from './BentoCard';

function ContactCard() {
  return (
    <BentoCard
      className="
        col-span-12
        lg:col-span-6
      "
    >
      <h2 className="text-4xl font-bold">Let's Work Together</h2>

      <p className="mt-6 text-zinc-400">
        Open to React, Next.js and Frontend opportunities.
      </p>

      <button
        className="
          mt-10
          rounded-2xl
          bg-blue-600
          px-6
          py-4
        "
      >
        Contact Me
      </button>
    </BentoCard>
  );
}

export default ContactCard;
