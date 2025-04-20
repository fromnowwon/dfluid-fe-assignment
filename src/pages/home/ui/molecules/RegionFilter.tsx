import { Region } from '@/shared/data/heritages';

const FILTERS: (Region | 'All')[] = [
  'All',
  Region.Asia,
  Region.Europe,
  Region.America,
  Region.Oceania,
];

interface RegionFilterProps {
  selectedFilter: Region | 'All';
  setSelectedFilter: (filter: Region | 'All') => void;
}

export default function RegionFilter({
  selectedFilter,
  setSelectedFilter,
}: RegionFilterProps) {
  return (
    <div className="flex items-center gap-1.25 h-12.5 mt-6 p-1.25 rounded-full border border-black/50">
      {FILTERS.map((region) => (
        <button
          key={region}
          onClick={() => setSelectedFilter(region)}
          className={`h-10 font-exo px-5 rounded-full leading-[100%] cursor-pointer ${
            selectedFilter === region ? 'bg-black text-white' : 'text-gray-700'
          }`}
        >
          {region}
        </button>
      ))}
    </div>
  );
}
