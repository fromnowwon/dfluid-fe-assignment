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
    <section aria-label="Heritage Section" className="pt-20 lg:pt-30 pb-20">
      <SectionTitle className="px-10 lg:px-20">
        Duis tincidunt ut ligula vitae mollis.
      </SectionTitle>

      <div className="mt-10 lg:mt-15">
        <div className="flex flex-col lg:flex-row gap-5 items-center px-10 lg:px-20">
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

        <div className="pl-10 lg:pl-20 mt-17 pr-10 overflow-x-auto">
          {filteredData.length === 0 ? (
            <div className="w-full h-103.75 flex items-center justify-center text-gray-dark">
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
