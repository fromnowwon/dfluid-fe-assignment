'use client';

import { useState } from 'react';
import { HERITAGES_DATA, Region } from '@/shared/data/heritages';

import SectionTitle from '../atoms/SectionTitle';
import HeritageCard from '../molecules/HeritageCard';
import RegionFilter from '../molecules/RegionFilter';
import YearFilter from '../molecules/YearFilter';

export default function HeritageSection() {
  const [selectedRegion, setSelectedRegion] = useState<Region | 'All'>('All');
  const [startYear, setStartYear] = useState<number>(1000);
  const [endYear, setEndYear] = useState<number>(2000);

  const filteredData = HERITAGES_DATA.filter((heritage) => {
    const matchesRegion =
      selectedRegion === 'All' || heritage.region === selectedRegion;

    const matchesYear = heritage.year >= startYear && heritage.year <= endYear;

    return matchesRegion && matchesYear;
  });

  return (
    <section className="pl-20 pt-30 pb-20">
      <SectionTitle>Duis tincidunt ut ligula vitae mollis.</SectionTitle>

      <div className="mt-15">
        <div className="flex gap-5 items-center">
          <RegionFilter
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
          />

          <YearFilter
            startYear={startYear}
            setStartYear={setStartYear}
            endYear={endYear}
            setEndYear={setEndYear}
          />
        </div>

        <div className="mt-17 pr-10 overflow-x-auto">
          {filteredData.length === 0 ? (
            <div className="w-full h-[415px] flex items-center justify-center text-gray-dark">
              Sorry, no matches were found.
            </div>
          ) : (
            <div className="flex gap-10 w-max">
              {filteredData.map((heritage) => (
                <HeritageCard key={heritage.id} {...heritage} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
