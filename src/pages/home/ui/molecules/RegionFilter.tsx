import { Region } from '@/shared/data/heritages';

const FILTERS: (Region | 'All')[] = [
  'All',
  Region.Asia,
  Region.Europe,
  Region.America,
  Region.Oceania,
];

interface RegionFilterProps {
  selectedRegion: Region | 'All';
  setSelectedRegion: (filter: Region | 'All') => void;
}

export default function RegionFilter({
  selectedRegion,
  setSelectedRegion,
}: RegionFilterProps) {
  return (
    <div className="flex items-center gap-1.25 h-12.5 mt-6 p-1.25 rounded-full border border-black/50">
      {FILTERS.map((region) => (
        <button
          key={region}
          onClick={() => setSelectedRegion(region)}
          className={`h-10 font-exo px-5 rounded-full leading-[100%] cursor-pointer ${
            selectedRegion === region ? 'bg-black text-white' : 'text-black'
          }`}
        >
          {region}
        </button>
      ))}
    </div>
  );
}
