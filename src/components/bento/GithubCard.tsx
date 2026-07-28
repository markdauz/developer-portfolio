import { useMemo, useState } from 'react';
import { FaGithub } from 'react-icons/fa6';
import BentoCard from './BentoCard';

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

const contributionTotals: Record<string, number> = {
  '2021': 161,
  '2022': 629,
  '2023': 612,
  '2024': 513,
  '2025': 623,
  '2026': 15,
};

function generateTiles(year: string) {
  let seed = Number(year);

  const random = () => {
    seed += 1;
    return seededRandom(seed);
  };

  const totalContributions = contributionTotals[year];

  let remaining = totalContributions;

  const tiles = Array.from({ length: 53 * 7 }, () => ({
    count: 0,
    colorIndex: 0,
  }));

  const activeDays = Math.min(remaining, Math.floor(remaining / 2) + 20);

  const usedIndexes = new Set<number>();

  while (usedIndexes.size < activeDays && remaining > 0) {
    const index = Math.floor(random() * tiles.length);

    if (usedIndexes.has(index)) {
      continue;
    }

    usedIndexes.add(index);

    const maxContribution = Math.min(remaining, Math.floor(random() * 10) + 1);

    tiles[index].count = maxContribution;

    remaining -= maxContribution;
  }

  if (remaining > 0) {
    while (remaining > 0) {
      const index = Math.floor(random() * tiles.length);

      const amount = Math.min(remaining, Math.floor(random() * 5) + 1);

      tiles[index].count += amount;

      remaining -= amount;
    }
  }

  tiles.forEach((tile) => {
    const count = tile.count;

    if (count === 0) {
      tile.colorIndex = 0;
    } else if (count <= 3) {
      tile.colorIndex = 1;
    } else if (count <= 7) {
      tile.colorIndex = 2;
    } else if (count <= 12) {
      tile.colorIndex = 3;
    } else if (count <= 20) {
      tile.colorIndex = 4;
    } else {
      tile.colorIndex = 5;
    }
  });

  return { tiles, totalContributions };
}

function GithubCard() {
  const colors = [
    'bg-zinc-800',
    'bg-emerald-950',
    'bg-emerald-900',
    'bg-emerald-700',
    'bg-emerald-500',
    'bg-emerald-400',
  ];

  const years = ['2026', '2025', '2024', '2023', '2022', '2021'];

  const [selectedYear, setSelectedYear] = useState(years[0]);

  const monthPositions = [
    { month: 'Jan', week: 0 },
    { month: 'Feb', week: 4 },
    { month: 'Mar', week: 8 },
    { month: 'Apr', week: 13 },
    { month: 'May', week: 17 },
    { month: 'Jun', week: 21 },
    { month: 'Jul', week: 26 },
    { month: 'Aug', week: 30 },
    { month: 'Sep', week: 35 },
    { month: 'Oct', week: 39 },
    { month: 'Nov', week: 44 },
    { month: 'Dec', week: 48 },
  ];

  const { tiles, totalContributions } = useMemo(
    () => generateTiles(selectedYear),
    [selectedYear],
  );

  return (
    <BentoCard className="col-span-12">
      {/* Header */}

      <div>
        <div className="flex items-center gap-2 sm:gap-3">
          <FaGithub className="text-2xl sm:text-3xl" />

          <h2 className="text-2xl font-bold sm:text-3xl">GitHub Stats</h2>
        </div>

        <h1 className="mt-6 text-4xl font-bold text-blue-500 sm:text-5xl lg:text-6xl">
          {totalContributions.toLocaleString()}
        </h1>

        <p className="mt-1 text-sm text-zinc-400 sm:text-base">
          Contributions in {selectedYear}
        </p>
      </div>

      {/* Mobile Years */}

      <div className="mt-8 flex gap-2 overflow-x-auto pb-2 lg:hidden">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`
              shrink-0
              rounded-xl
              px-4
              py-2
              text-sm
              transition-all
              duration-300

              ${
                selectedYear === year
                  ? 'bg-blue-600 text-white'
                  : 'bg-white/5 text-zinc-500 hover:bg-white/10'
              }
            `}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Graph + Desktop Years */}

      <div className="mt-8 flex gap-8">
        {/* Graph */}

        <div className="flex-1 overflow-x-auto">
          <div className="min-w-[560px] lg:min-w-0">
            {/* Months */}

            <div className="relative ml-8 h-5 sm:ml-10">
              {monthPositions.map(({ month, week }) => (
                <span
                  key={month}
                  className="
                    absolute
                    -translate-x-1/2
                    text-[10px]
                    text-zinc-500
                    sm:text-[11px]
                  "
                  style={{
                    left: `${(week / 53) * 100}%`,
                  }}
                >
                  {month}
                </span>
              ))}
            </div>

            {/* Heatmap */}

            <div className="mt-4 flex gap-2">
              <span className="w-6 shrink-0 text-[10px] text-zinc-500 sm:w-8 sm:text-xs">
                {selectedYear}
              </span>

              <div
                className="grid flex-1 gap-[2px] sm:gap-[3px]"
                style={{
                  gridTemplateColumns: 'repeat(53, minmax(0, 1fr))',
                  gridTemplateRows: 'repeat(7, minmax(0, 1fr))',
                }}
              >
                {tiles.map((tile, index) => (
                  <div
                    key={index}
                    title={`${tile.count} contributions`}
                    className={`
      aspect-square
      w-full
      rounded-[1px]
      sm:rounded-[2px]
      transition-transform
      duration-200
      hover:scale-125
      ${colors[tile.colorIndex]}
    `}
                  />
                ))}
              </div>
            </div>

            {/* Legend */}

            <div
              className="
                mt-5
                flex
                items-center
                justify-end
                gap-2
                text-[10px]
                text-zinc-500
                sm:gap-3
                sm:text-xs
              "
            >
              <span>Less</span>

              <div className="flex gap-1">
                {colors.map((color) => (
                  <div
                    key={color}
                    className={`
                      h-1.5
                      w-1.5
                      rounded-[1px]
                      sm:h-2
                      sm:w-2
                      sm:rounded-[2px]
                      ${color}
                    `}
                  />
                ))}
              </div>

              <span>More</span>
            </div>
          </div>
        </div>

        {/* Desktop Years */}

        <div className="hidden lg:flex lg:flex-col lg:gap-2">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`
                rounded-xl
                px-5
                py-2
                text-sm
                transition-all
                duration-300

                ${
                  selectedYear === year
                    ? 'bg-blue-600 text-white'
                    : 'text-zinc-500 hover:bg-white/5'
                }
              `}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

      <div className="my-6 h-px bg-white/10" />
    </BentoCard>
  );
}

export default GithubCard;
