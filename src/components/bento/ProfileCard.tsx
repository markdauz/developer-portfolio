// ProfileCard.tsx

import BentoCard from './BentoCard';

const ProfileCard = () => {
  return (
    <BentoCard className="lg:col-span-2">
      <div className="flex h-full items-center justify-between gap-6">
        <div>
          <span className="text-blue-400">React Developer</span>

          <h1 className="mt-3 text-5xl font-bold">Mark Dauz</h1>

          <p className="mt-4 max-w-md text-slate-400">
            Seasoned React Developer with 5+ years of experience building
            scalable enterprise applications.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button className="rounded-xl bg-blue-600 px-5 py-3">
              Projects
            </button>

            <button className="rounded-xl border border-slate-700 px-5 py-3">
              Resume
            </button>
          </div>
        </div>

        <img
          src="/profile.png"
          alt="Mark Dauz"
          className="h-40 w-40 rounded-full object-cover"
        />
      </div>
    </BentoCard>
  );
};

export default ProfileCard;
